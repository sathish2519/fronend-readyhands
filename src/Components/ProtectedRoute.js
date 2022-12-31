import React from 'react'
import {Navigate} from 'react-router-dom'
import  toast from 'react-hot-toast';


function ProtectedRoute(props) {
    if(localStorage.getItem('token')){
        return props.children
    }else{
        toast.error("Session Expired")
        return <Navigate to="/"></Navigate>
    }
}

export default ProtectedRoute
