import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import { Col, Row } from 'antd'
import ServiceProvider from './ServiceProvider'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../Redux/alertsSlice'



function Hello() {
  const [providers, setproviders] = useState([])
  const dispatch = useDispatch()
  const getData = async () => {
    dispatch(showLoading())
    try {
      const response = await axios.get('/api/user/get-all-approved-providers',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        dispatch(hideLoading())
        if (response.data.success){
          setproviders(response.data.data)
        }
      console.log(response.data)
    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
    }

  }

  useEffect(() => {
    getData()

  }, [])


  return (
    <Layout>
      <Row gutter={30}>
        {providers.map(provider => (
          <Col span={8} xs={24} sm={24} lg={8}>
          <ServiceProvider provider={provider}></ServiceProvider>
          </Col>
        ))}

      </Row>
    </Layout>
  )
}

export default Hello
