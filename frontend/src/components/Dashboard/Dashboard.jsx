import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../Structural/Navbar'
import axios from 'axios'
import { setUser, setLoginStatus } from '../../features/userSlice'

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
            <h2>{user.fullname}</h2>
            <h3>{user.username}</h3>
            <img src={user.avatar} alt="" />

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard