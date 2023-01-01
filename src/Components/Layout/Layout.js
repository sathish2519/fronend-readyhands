import React from 'react'
import "./Layout.css"
import {Link, useLocation} from 'react-router-dom'

function Layout({ children }) {

    //active menu
    const location=useLocation
    //user menu array
    const usermenu = [
        {
            name: "Home",
            path: "/hello",
            icon: 'ri-home-3-fill'
        },
        {
            name: "Appointments",
            path: "/appointments",
            icon: 'ri-file-list-2-fill'
        },
        {
            name: "Apply ServiceProvider",
            path: "/apply service-provider",
            icon: 'ri-service-fill'
        },
        {
            name: "Profile",
            path: "/profile",
            icon: 'ri-user-3-fill'
        },
        {
            name: "Logout",
            path: "/logout",
            icon: 'ri-logout-circle-fill'
        },
    ]
    const menuRender = usermenu



    return (
        <div className='rhmain p-20'>
            <div className='d-flex layout'>
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <h1>RH</h1>
                    </div>
                    <div className="menu">
                       {menuRender.map((menu)=>{
                        const isActive=location.pathname === menu.path
                        return <div className={`d-flex menu-item ${isActive && "active-menu-item"}`}>
                            <i className={menu.icon}></i>
                            <Link to ={menu.path}>{menu.name}</Link>
                        </div>

                       })}
                    </div>
                </div>
                <div className='content'>
                    <div className='header'> content header</div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
