import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { hideLoading, showLoading } from '../../Redux/alertsSlice'
import { Button, Col, DatePicker, Row, TimePicker } from 'antd'

function BookAppointment() {
    const style={
        color: "white",
        background: 'black',
    }
    const params = useParams()
    const dispatch = useDispatch()
    const [providers, setproviders] = useState(null)
    const [selectedtime, setselectedtime] = useState()
    const [date, setdate] = useState()
    const [available, setavailable] = useState(false)
    const { user } = useSelector((state) => state.user);

    const getServiceProviderdata = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.post(
                "/api/serviceprovider/get-serviceprovider-by-id",
                { providerId: params.providerId },
                // { userId: user?._id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(hideLoading());
            if (response.data.success) {
                setproviders(response.data.data)
                console.log(response.data.data)
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("something went wrong")
        }
    };
    useEffect(() => {
        getServiceProviderdata();
    }, []);



    return (
        <Layout>
            {providers && (
                <div>
                    <h1 className='page-title'>
                        {providers.firstname} {providers.lastname}
                    </h1>
                    <hr></hr>
                    <h1 className='normal-text'> Timings: <b>{providers.timings[0]} to {providers.timings[1]}</b></h1>
                    <Row>
                        <Col span={8} xs={24} sm={24} lg={8}>
                            <div className='d-flex flex-column mt-2'>
                                <DatePicker format="DD-MM-YY" />
                                <TimePicker format="HH:mm" className='mt-3'></TimePicker>
                                <Button className='primary-button mt-3 full-width-button' style={style}>Check for Availability</Button>
                            </div>

                        </Col>
                    </Row>

                </div>
            )}

        </Layout>
    )
}

export default BookAppointment
