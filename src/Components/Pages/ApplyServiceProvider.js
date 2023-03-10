// import { Form, Row, Col, Input, TimePicker, Button } from 'antd'
import React from 'react'
import Layout from '../Layout/Layout'
// import "./Applyserviceprovider.css"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../../Redux/alertsSlice'
// import TextArea from 'antd/es/input/TextArea'
// import { Select } from 'antd';
import ApplyForm from '../ApplyForm/ApplyForm'
import moment from 'moment';
import dayjs from 'dayjs'



function ApplyServiceProvider() {
  // const Option = Select.Option;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user);

  const onFinish = async (values) => {
    console.log(values)

    // const starttimings =
    // const endtimings = 
    // console.log(starttime, endtime)

    // const formattedtime = []
    // formattedtime.push(starttime, endtime)
    // console.log(formattedtime)
    // starttimings:[dayjs(values.starttimings).format("HH:mm")],endtimings:[dayjs(values.endtimings).format("HH:mm")]

    try {
      dispatch(showLoading())
      const response = await axios.post('/api/user/apply-service-provider', { ...values,timings:[dayjs(values.timings[0]).format("HH:mm"),dayjs(values.timings[1]).format("HH:mm")], userId: user._id, },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      if (response.data.success) {
        // setLoading(false)
        dispatch(hideLoading())
        toast.success(response.data.message)
        // toast("Redirecting to login page")
        navigate("/hello")

      } else {
        dispatch(hideLoading())
        toast.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      toast.error("something went wrong")
    }
  }
  return (
    <Layout>
      <h1 className='page-title'>Apply Service provider</h1>
      <hr></hr>
      <ApplyForm onFinish={onFinish}></ApplyForm>
    </Layout>
  )
}

export default ApplyServiceProvider
