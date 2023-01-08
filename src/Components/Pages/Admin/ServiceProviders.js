import { Table } from 'antd'
import Card from 'antd/es/card/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../Redux/alertsSlice'
import Layout from '../../Layout/Layout'

function ServiceProviders() {


    const [users, setusers] = useState([])
    const dispatch = useDispatch()

    const getallusers = async () => {

        try {
            dispatch(showLoading())
            const response = await axios.get('/api/admin/get-all-serviceproviders', {
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

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => <Card
            style={{
                border: 'none',

            }}
            >
                <p>{record.firstname} {record.lastname}</p>

            </Card>
        },
        {
            title: "Phone",
            dataIndex: "phonenumber"
            
        },
        {
            title: "Experience",
            dataIndex: "experience",
            render: (text, record) => <p>{record.experience} years</p>
        },

        {
            title: "Specialization",
            dataIndex: "specialization",
        }

        , {
            title: "Status",
            dataIndex: "status",

        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => (<div className='d-flex'>
                {record.status==="pending" && (<p className='anchor justify-content-evenly'>Approve</p>) }
                {record.status==="approved" && (<p className='anchor justify-content-evenly'>Block</p>) }
            </div>)
        }
    ]

    return (
        <Layout>
            <h1 className="page-title">
                Service Provider List
            </h1>
            <Table columns={columns} dataSource={users}></Table>
        </Layout>
    )
}

export default ServiceProviders
