import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header.jsx'
import { useDispatch, useSelector } from 'react-redux'
import DashboardLeft from '../components/DashboardLeft.jsx'
import DashboardRight from '../components/DashboardRight.jsx'
import MyFeed from '../components/MyFeed.jsx'
import { toast } from 'react-toastify'
import { getPosts } from '../actions/postActions.js'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
    const { keyword, pageNumber } = useParams()
    const dispatch = useDispatch()
    const { success: successLogin } = useSelector(state => state.userLogin)
    const { success: successPost } = useSelector(state => state.postCreate)

    useEffect(() => {
        if (successLogin) {
            toast.success("Logged In Successfully")
        }
    }, [successLogin])

    useEffect(() => {
        dispatch(getPosts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    useEffect(() => {
        if (successPost) {
            toast.success("Post Created Successfully")
            window.location.reload()
        }
    }, [successPost])

    return (
        <>
            <Header />
            <div className="px-12 bg-gray-300 min-h-screen ">
                <div className='mx-12 flex justify-between gap-4'>
                    <DashboardLeft />
                    <MyFeed keyword={keyword} />
                    <DashboardRight />
                </div>
            </div>
        </>
    )
}

export default Dashboard
