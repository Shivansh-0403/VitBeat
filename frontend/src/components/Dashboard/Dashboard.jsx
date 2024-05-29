import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../Structural/Navbar'
import axios from 'axios'
import { setUser, setLoginStatus } from '../../features/userSlice'
import Sidebar from './Sidebar'

function Dashboard(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

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

    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-4 h-screen'>
                <div className='col-span-1'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-3'>
                    <img src={user.avatar} alt="" className='m-auto rounded-lg mt-10' />
                    <h2 className='m-auto text-black text-center text-2xl dark:text-white mt-5'>{user.fullname}</h2>
                    <h3 className='m-auto text-black text-center text-lg dark:text-white mt-5'>{user.email}</h3>
                    <h3 className='m-auto text-black text-center text-lg dark:text-white mt-5'>{user.username}</h3>
                </div>
            </div>
        </div>
    )
}

export default Dashboard