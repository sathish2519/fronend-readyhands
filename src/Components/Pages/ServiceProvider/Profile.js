import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ApplyForm from '../../ApplyForm/ApplyForm'
import { hideLoading, showLoading } from '../../../Redux/alertsSlice'

function Profile() {
    const [providers, setprovider] = useState(null)
    // const params=useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user);
    const onFinish = async (values) => {

        try {
            dispatch(showLoading())
            const response = await axios.post('/api/serviceprovider/update-serviceprovider', { ...values, userId: user?._id },
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
    const getServiceProviderdata = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.post(
                "/api/serviceprovider/get-serviceprovider-info-by-id",
                // {userId:params.userId},
                {userId:user?._id},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(hideLoading());
            if (response.data.success) {
                setprovider(response.data.data)
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
            <h1 className='page-title'>Service Provider Profile Page</h1>
            <hr></hr>
           { providers &&<ApplyForm onFinish={onFinish} initialvalues={providers}></ApplyForm>} 
        </Layout>
    )
}

export default Profile
