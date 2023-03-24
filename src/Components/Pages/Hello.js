import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import { Col, Row } from 'antd'
import ServiceProvider from './ServiceProvider'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../Redux/alertsSlice'



function Hello() {
  const { user } = useSelector((state) => state.user);
  console.log(user, "from hello js")
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
      if (response.data.success) {
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


  const Sphome = (
    <h1 className="page-title">sp menu</h1>
  );
  const Admihome = (
    <h1 className="page-title">Adminmenu</h1>
  );
  const UserHome=(<Row gutter={30}>

    {providers.map(provider => (
      <Col span={8} xs={24} sm={24} lg={8}>
        <ServiceProvider provider={provider}></ServiceProvider>
      </Col>
    ))}

  </Row>)
 const HomeRender = user?.isAdmin ? Admihome : user?.isServiceProvider ? Sphome :   UserHome

  return (

    <Layout>

        {HomeRender}

    </Layout>
  )
}

export default Hello
