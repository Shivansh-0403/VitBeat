import React from 'react'
import { useSelector } from 'react-redux'
useSelector
function Account( {handleLogout} ) {
    const user = useSelector(state => state.user)
    return (
        <div>
            <img src={user.avatar} alt="" className='m-auto rounded-lg mt-10' />
            <h2 className='m-auto text-black text-center text-2xl dark:text-white mt-5'>{user.fullname}</h2>
            <h3 className='m-auto text-black text-center text-lg dark:text-white mt-5'>{user.email}</h3>
            <h3 className='m-auto text-black text-center text-lg dark:text-white mt-5'>{user.username}</h3>

            <button onClick={handleLogout} className='dark:text-white block m-auto mt-5 bg-emerald-600 p-2 rounded-md text-lg px-4'>Logout</button>
        </div>
    )
}

export default Account