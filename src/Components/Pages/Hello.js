import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import { Col, Row } from 'antd'
import ServiceProvider from './ServiceProvider'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../Redux/alertsSlice'
import "./Hello.css"



function Hello() {
  const { user } = useSelector((state) => state.user);
  console.log(user, "from hello js")
  // const [providers, setproviders] = useState([])
  const [service, setService] = useState(''); // State to store the selected service
  const [providers, setProviders] = useState([]);
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the backend API endpoint to get the list of service providers based on the selected service
    dispatch(showLoading())
    try {
      const response = await axios.get(`/api/user/get-all-approved-providers/${service}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
      dispatch(hideLoading())
      if (response.data.success) {
        setProviders(response.data.data)
      }
      console.log(response.data)
    } catch (error) {
      dispatch(hideLoading())

    }
    // fetch(`/providers/${service}`)
    //   .then(res => res.json())
    //   .then(data => setProviders(data))
    //   .catch(err => console.log(err));
  };
  // const getData = async () => {
  //   dispatch(showLoading())
  //   try {
  //     const response = await axios.get('/api/user/get-all-approved-providers',
  //       {
  //         headers: {
  //           Authorization: 'Bearer ' + localStorage.getItem('token')
  //         }
  //       })
  //     dispatch(hideLoading())
  //     if (response.data.success) {
  //       setproviders(response.data.data)
  //     }
  //     console.log(response.data)
  //   } catch (error) {
  //     dispatch(hideLoading())
  //     console.log(error)
  //   }

  // }

  // useEffect(() => {
  //   getData()

  // }, [])

  const handleChange = (event) => {
    setService(event.target.value); // Update the selected service state based on the user selection
  };
  const Sphome = (
    <h1 className="page-title">sp menu</h1>
  );
  const Admihome = (
    <h1 className="page-title">Adminmenu</h1>
  );

  const UserHome = (
    <div className='one'>
    {/* <h2>search for the service you want here</h2> */}
      <form className='sform' onSubmit={handleSubmit}>
        <select value={service} onChange={handleChange}>
          <option value="">Select a service</option>
          <option value="Plumbing">Plumbing</option>
          <option value="AC Services">AC Services</option>
          <option value="Electrician">Electrician</option>
        </select>
        <button className='sbutton' type="submit">Search</button>
      </form>
      <div className="providerdiv">
        <Row gutter={30}>

          {providers.map(provider => (
            <Col span={8} xs={24} sm={24} lg={8}>
              <ServiceProvider provider={provider}></ServiceProvider>
            </Col>
          ))}

        </Row>
      </div>

    </div>
  )
  //   const UserHome=(<Row gutter={30}>

  //   {providers.map(provider => (
  //  <Col span={8} xs={24} sm={24} lg={8}>
  //      <ServiceProvider provider={provider}></ServiceProvider>
  //     </Col>
  //     ))}

  //   </Row>) 
  const HomeRender = user?.isAdmin ? Admihome : user?.isServiceProvider ? Sphome : UserHome

  return (

    <Layout>

      {HomeRender}

    </Layout>
  )
}

export default Hello
