import { React, useState } from 'react'
import "./Layout.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { setUser } from '../../Redux/userSlice'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { Badge } from 'antd';

function Layout({ children }) {

    //navigate
    const navigate = useNavigate()

    //collapsed menu
    const [collapsed, setCollapsed] = useState(false)

    //active menu
    const location = useLocation()

    // Fetchin loged-in user using redux and reducers
    const { user } = useSelector((state) => state.user)
    console.log(user)

    //user usermenu array
    const usermenu = [
        {
            name: "Home",
            path: "/hello",
            icon: 'ri-home-3-fill'
        },
        {
            name: "Appointments",
            path: "/book-appointment/:providerId",
            icon: 'ri-file-list-2-fill'
        },
        {
            name: "Apply ServiceProvider",
            path: "/apply-serviceprovider",
            icon: 'ri-service-fill'
        },
        {
            name: "Profile",
            path: "/profile",
            icon: 'ri-user-3-fill'
        },

    ]
    //user adminmenu array
    const adminmenu = [
        {
            name: "Home",
            path: "/hello",
            icon: 'ri-home-3-fill'
        },
        {
            name: "Users",
            path: "/admin/users",
            icon: 'ri-file-list-2-fill'
        },
        {
            name: "ServiceProviders",
            path: "/admin/service-providers",
            icon: 'ri-service-fill'
        },
        {
            name: "Profile",
            path: "/profile",
            icon: 'ri-user-3-fill'
        },
    ]

    const spmenu = [
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
            name: "Profile",
            path: `/serviceprovider/profile/${user?._id}`,
            icon: 'ri-user-3-fill'
        },

    ]
    





    const menuRender = user?.isAdmin ? adminmenu : user?.isServiceProvider ? spmenu :   usermenu //rendering based on iasadmin,isServiceProvider boolean value from db
    const role=user?.isAdmin ?"Admin":user?.isServiceProvider?"Service Provider":"User"



    return (
        <div className='rhmain p-20'>
            <div className='d-flex layout'>
                <div className={`${collapsed ? 'collapsed-sidebar' : 'sidebar'}`}>
                    <div className='sidebar-header'>
                        <h1 className='logo'>RH</h1>
                        <h1 className='role'>{role}</h1>
                    </div>
                    <div className="menu">
                        {menuRender.map((menu) => {
                            const isActive = location.pathname === menu.path

                            return <div onClick={() => navigate(menu.path)} className={`d-flex menu-item ${isActive && "active-menu-item"}`}>
                                <i className={menu.icon}></i>

                                {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                            </div>
                        })}
                        <div className="d-flex menu-item" onClick={() => {
                            localStorage.clear()
                            navigate("/sigin")
                            toast.success("Logged out.Come back soon!")
                        }}>
                            <i className="ri-logout-circle-fill"></i>
                            {!collapsed && <Link to="/sigin">Logout</Link>}

                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='header'>
                        {!collapsed ? <i className="ri-close-fill header-action-icon" onClick={() => setCollapsed(true)}></i> : <i class="ri-menu-line header-action-icon" onClick={() => setCollapsed(false)}></i>}
                        <div className='d-flex align-items-center px-4'>
                        <div className='mx-3'>
                        <Badge count={user?.UnseenNotification.length}  onClick={()=>navigate("/notifications")} >
                                <i className="ri-notification-2-line header-action-icon mr-2 px-4"></i>
                            </Badge>
                        </div>
                            

                            <Link className='anchor mx-3' to="/profile">{user?.name}</Link>
                        </div>
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
