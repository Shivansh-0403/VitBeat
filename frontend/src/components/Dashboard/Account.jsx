import React from 'react'
import { useSelector } from 'react-redux'
useSelector
function Account() {
    const user = useSelector(state => state.user)
    return (
        <div>
            
        </div>
    )
}

export default Account