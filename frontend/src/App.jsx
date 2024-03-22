import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ForgotPass from './components/Auth/ForgotPass';
import ResetPassword from './components/Auth/ResetPassword';
import PodcastList from './components/Podcasts/PodcastList';

// import { useSelector } from 'react-redux';

function App() {
    // const token = useSelector(state => state.userLoggedIn);
    const token = true

    return (
        <Routes>
            {/* {token && <Route path="/" element={<Home />} />} */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
            <Route path='/all-podcasts' element={<PodcastList />} />
        </Routes>
    );
}

export default App;