import React, { useContext } from 'react'
import './Dashboard.css'
import  { UserContext } from '../context_api/user'

function Dashboard() {
    const [user , setUser] = useContext(UserContext)
    console.log(user)
    return (
        <div className="dashboard">
            <div className="dashboard_container">
                <h1>Hello {user.name}</h1>
            </div>
        </div>
    )
}

export default Dashboard
