import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../actions/userActions'

const DashboardRight = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)

    const { userInfo } = useSelector((state) => state.userLogin)
    const { posts } = useSelector((state) => state.postGet)

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('http://localhost:5000/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    useEffect(() => {
        dispatch(update({ image }))
    }, [image, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        // Handle form submission and update the `image` state
    }

    //update component when image is updated


    return (
        <div style={{ width: "25%" }}>
            <div className='bg-white rounded-xl px-6 py-3 shadow-sm flex flex-col mt-3'>
                <h1 className='text-md uppercase'>MY COWORKER COMMUNITY</h1>
                <div className='flex items-center mt-2'>
                    <img className='w-16 mr-6 rounded-full' src='https://soombo.loominate.app/static/media/avatar-company.bf9e77bc.png' alt='' />
                    <h1 className='text-lg font-bold'>soombo</h1>
                </div>
            </div>
            <div className='bg-white rounded-xl px-6 py-3 shadow-sm flex flex-col mt-3'>
                <h1 className='text-md uppercase'>MY Profile</h1>
                <div className='flex items-center mt-2 '>
                    <div className='relative'>
                        <form onSubmit={submitHandler} encType='multipart/form-data' method='post'>
                            <input type='file' id='image-file' label='Choose File' onChange={uploadFileHandler}></input>
                            {uploading && <h1>Uploading...</h1>}
                            <button type='submit' className='bg-blue-500 text-white rounded-md p-1'>Upload</button>
                        </form>
                        <img className='w-16 mr-6 rounded-full' src={`http://localhost:5000${userInfo.image}`} alt='user' />
                        <div className='absolute top-0 right-1/3 w-4 h-4  rounded-full'><i className="fa-regular fa-pen-to-square text-black bg-gray-200 p-1 text-xs rounded-lg"></i></div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <h1 className='text-lg font-bold'>{userInfo.name}</h1>
                        <p className='text-sm'>Joined May 2023</p>
                    </div>
                </div>
                <p className='mt-2 text-sm'>Hello! This is me</p>
                <div className="flex items-center justify-between mt-3 rounded-md p-3 bg-white">
                    <div className="flex flex-col items-center justify-between">
                        <h1 className='text-lg font-bold'>{userInfo.numPosts}</h1>
                        <p className='text-sm'>{userInfo.numPosts === 1 ? "Post" : "Posts"}</p>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <h1 className='text-lg font-bold'>1</h1>
                        <p className='text-sm'>Polls</p>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <h1 className='text-lg font-bold'>1</h1>
                        <p className='text-sm'>Initiatives</p>
                    </div>
                </div>
            </div>
            <div style={{ background: "linear-gradient(90deg, #0AB1C5, #226FAF)" }} className=' rounded-xl px-6 py-3 shadow-sm flex flex-col mt-3'>
                <h1 className='text-md capitalize text-white font-bold'>About</h1>
                <p className='mt-2 text-sm text-white'>Loominate is a place to be your magical self. Ask those silly questions, seek support for your struggles, join moonshot ideas and be the changemaker!
                </p>
            </div>
        </div>
    )
}

export default DashboardRight
