import React from 'react'
import {Navigate} from 'react-router-dom'
import  toast from 'react-hot-toast';

function PublicRoute(props) {
 if(localStorage.getItem('token')){
    return <Navigate to="/hello"></Navigate>
 }else{
    return props.children
 }
}

export default PublicRoute
