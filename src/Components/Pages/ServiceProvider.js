import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function ServiceProvider({ provider }) {
    const navigate=useNavigate()
    return (
        <div>
            <Card className='service-provider-card p-1 cursor-pointer' onClick={()=>navigate(`/book-appointment/${provider._id}`)}
                style={{
                    border: '1px solid black',

                }}
            >
                <h1 className='card-title'>{provider.firstname} {provider.lastname}</h1>
                <hr></hr>
                <p>Specialization:<b>{provider.specialization}</b></p>
                <p>Contact Number: <b> {provider.phonenumber}</b></p>
                <p>Location:<b>Coimbatore</b></p>
                <p>Experience:<b>{provider.experience} years</b></p>
                <p>Timings:<b>{provider.timings[0]} to {provider.timings[1]}</b></p>

            </Card>
        </div>
    )
}

export default ServiceProvider
