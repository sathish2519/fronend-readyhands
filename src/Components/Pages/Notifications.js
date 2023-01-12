import { Tabs } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { Card } from 'antd'
import "../ApplyForm/Applyserviceprovider.css"
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { setUser } from '../../Redux/userSlice'

function Notifications() {
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const MarkAllasSeen = async () => {
        try {
            const response = await axios.post("/api/user/mark-all-as-seen", { userId: user._id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },)
            if (response.data.success) {
                toast.success(response.data.message)
                dispatch(setUser(response.data.data))
            }
            else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error("Something went wrong")

        }

    }
    const deleteall = async () => {
        try {
            const response = await axios.post("/api/user/delete-all", { userId: user._id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },)
            if (response.data.success) {
                toast.success(response.data.message)
                dispatch(setUser(response.data.data))
            }
            else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error("Something went wrong")

        }

    }


    return (
        <Layout>
            <h1 className="page-title">Notifications</h1>
            <Tabs>
                <Tabs.TabPane tab="Unseen" key={0}>
                    <div className="d-flex justify-content-end" >
                        <h1 onClick={MarkAllasSeen} className="anchor">Mark all as seen</h1>
                    </div>
                    {user?.UnseenNotification.map((notification) => (<div className='p-2' onClick={() => navigate(notification.onClickPath)}>
                        <Card className='notification-card'
                            style={{
                                border: '1px solid black',

                            }}
                        >
                            <p>{notification.message}</p>

                        </Card>
                    </div>))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Seen" key={1}>
                    <div className="d-flex justify-content-end">
                        <h1 className="anchor" onClick={deleteall} >Delete all</h1>
                    </div>
                    {user?.SeenNotification.map((notification) => (<div className='p-2' onClick={() => navigate(notification.onClickPath)}>
                        <Card className='notification-card'
                            style={{
                                border: '1px solid black',

                            }}
                        >
                            <p>{notification.message}</p>

                        </Card>
                    </div>))}
                </Tabs.TabPane>

            </Tabs>
        </Layout>
    )
}

export default Notifications
