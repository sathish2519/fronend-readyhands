import { Tabs } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { Card } from 'antd'
import "./Applyserviceprovider.css"

function Notifications() {
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()
    return (
        <Layout>
            <h1 className="page-title">Notifications</h1>
            <Tabs>
                <Tabs.TabPane tab="Unseen" key={0}>
                    <div className="d-flex justify-content-end">
                        <h1 className="anchor">Mark all as seen</h1>
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
                        <h1 className="anchor">Delete all</h1>
                    </div>
                </Tabs.TabPane>

            </Tabs>
        </Layout>
    )
}

export default Notifications
