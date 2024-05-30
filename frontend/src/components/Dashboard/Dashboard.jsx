import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../Structural/Navbar'
import axios from 'axios'
import { setUser, setLoginStatus } from '../../features/userSlice'
import Sidebar from './Sidebar'
import Footer from '../Structural/Footer'
import React, { useState } from 'react'
import Create from './Create'
import Account from './Account'
import Content from './Content'

function Dashboard(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [message, setMessage] = useState("")
    const handleLogout = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/user/logout');
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser({ username: "", email: "", fullname: "", avatar: "" }));
        dispatch(setLoginStatus(false));
        console.log(response.data.message);
        window.location.reload();
    };

    const handleSidebarOption = (message) => {
        setMessage(message)
        console.log(message);
    }
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-4 h-screen bg-slate-900'>
                <div className='col-span-1'>
                    <Sidebar handleClick={handleSidebarOption}></Sidebar>
                </div>
                <div className='col-span-3'>
                    { message == "dashboard" ? <Account handleLogout={handleLogout} /> : message == "create" ? <Create /> : message == "content" ? <Content /> : <Dashboard /> }
                    {/* Hello */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Dashboard