import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../Redux/alertsSlice'
import Layout from '../../Layout/Layout'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Table } from 'antd'

function Users() {


  const [users, setusers] = useState([])
  const dispatch = useDispatch()

  const getallusers = async () => {

    try {
      dispatch(showLoading())
      const response = await axios.get('/api/admin/get-all-users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      dispatch(hideLoading())
      if (response.data.success) {
        toast.success(response.data.message)
        setusers(response.data.data)
        console.log(users)

      }
    } catch (error) {
      toast.error("Something Went Wrong")
      console.log(error)

    }

  }

  useEffect(() => {

    getallusers()

  }, [])

  const columns=[
    {
      title:"Name",
      dataIndex:"name"
    },
    {
      title:"Email",
      dataIndex:"email"
    },
    {
      title:"Created on",
      dataIndex:"createdAt"
    },
    {
      title:"Actions",
      dataIndex:"actions",
      render:(text, record) => (<div className='d-flex'>
        <div className='anchor'>View</div>
      </div>)
    }
  ]


  return (
    <Layout>
      <h1 className="page-title">Users List</h1>
      <Table columns={columns} dataSource={users}>
      </Table>
    </Layout>
  )
}

export default Users
