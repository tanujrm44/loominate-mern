import React, { useState } from 'react'
import Post from './Post/Post'
import CreatePostModal from './CreatePostModal/CreatePostModal'
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import { PaginationItem } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CustomPagination from './CustomPagination'

const MyFeed = ({ category, keyword }) => {
    const { posts, success, pages, page } = useSelector(state => state.postGet)
    const { userInfo, loading } = useSelector(state => state.userLogin)
    const [showCreatePostModal, setShowCreatePostModal] = useState(false)
    const openCreatePostModal = () => {
        setShowCreatePostModal(true)
    }
    const filteredPosts = success && posts.filter(post => post.category.split(" ").join("").toLowerCase() === category)
    return (
        <>
            {showCreatePostModal && <CreatePostModal setShowCreatePostModal={setShowCreatePostModal} />}
            <div className="flex-1">
                <form>
                    <input type="text" placeholder="Post Something..." className='p-3 ' onClick={openCreatePostModal} />
                </form>
                <div className="flex items-center justify-between mt-3" onClick={() => setShowCreatePostModal(false)}>
                    <div className="flex gap-3">
                        <span className="bg-white rounded-lg px-3 py-1 text-sm font-semibold text-gray-700">All</span>
                        <span className="bg-white rounded-lg px-3 py-1 text-sm font-semibold text-gray-700">Polls</span>
                        <span className="bg-white rounded-lg px-3 py-1 text-sm font-semibold text-gray-700">Initiatives</span>
                    </div>
                </div>
                {success && filteredPosts.length !== 0 ? (
                    filteredPosts.map(post => (
                        <Post
                            //key={post._id}
                            //title={post.title}
                            //body={post.body}
                            //tags={post.tags}
                            //category={post.category}
                            //username={post.user.name}
                            //loggedInUser={userInfo.name}
                            key={post._id}
                            name={userInfo.name}
                            token={userInfo.token}
                            post={post}
                        />
                    ))
                ) : (
                    success && posts.map(post => (
                        <Post
                            key={post._id}
                            log={userInfo.name}
                            token={userInfo.token}
                            post={post}
                        />
                    ))
                )}
                <div className="flex justify-center mt-3 w-full ">
                    <CustomPagination pageCount={pages} currentPage={page} keyword={keyword} />
                </div>
            </div>
        </>
    )
}

export default MyFeed
