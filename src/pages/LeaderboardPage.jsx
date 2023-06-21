import React from 'react'
import styles from "./Dashboard.module.css"
import Header from '../components/Header/Header.jsx'
import { useSelector } from 'react-redux'
import DashboardLeft from '../components/DashboardLeft'
import DashboardRight from '../components/DashboardRight'
import Leaderboard from '../components/Leaderboard'

const Dashboard = () => {
    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin
    return (
        <>
            <Header />
            <div className="px-12 bg-gray-300 min-h-screen ">
                <div className='mx-12 flex justify-between gap-4'>
                    <DashboardLeft />
                    <Leaderboard />
                    <DashboardRight />
                </div>
            </div>
        </>
    )
}

export default Dashboard
