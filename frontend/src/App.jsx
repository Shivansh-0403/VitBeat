import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ForgotPass from './components/Auth/ForgotPass';
import ResetPassword from './components/Auth/ResetPassword';
import PodcastList from './components/Podcasts/PodcastList';
import Podcasts from './components/Podcasts/Podcasts';
import Dashboard from './components/Dashboard/Dashboard';
import ViewPodcasts from './components/Podcasts/ViewPodcasts';

// import { useSelector } from 'react-redux';

function App() {
    // const token = useSelector(state => state.userLoggedIn);
    const token = false

    return (
        <Routes>
            {/* {token && <Route path="/" element={<Home />} />} */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
            <Route path='/podcasts' element={<Podcasts />} />
            <Route path='/all-podcasts' element={<PodcastList />} />
            {token && <Route path='/dashboard' element={<Dashboard />} />}
            <Route path="/dashboard" element={<Navigate replace to="/login" />} />
            <Route path='/podcast/:id' element={<ViewPodcasts />} />
        </Routes>
    );
}

export default App;