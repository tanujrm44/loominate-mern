import { useSelector } from 'react-redux'
import Post from './Post/Post'
const Profile = () => {
    const { posts, success } = useSelector(state => state.postGet)
    const { userInfo } = useSelector((state) => state.userLogin)
    const filteredPosts = success && posts.filter(post => post.user._id === userInfo._id)
    return (
        <div className='flex flex-1 flex-col items-center space-y-4'>
            <div className='bg-white w-full rounded-xl px-6 py-3 shadow-sm flex flex-col mt-3'>
                <h1 className='text-xl font-bold text-center'>My Profile</h1>
                <div className='flex items-center mt-2 '>
                    <div className='relative'>
                        <img className='w-16 mr-6 rounded-full' src={`http://localhost:5000${userInfo.image}`} alt='user' />
                        <div className='absolute top-0 right-1/3 w-4 h-4  rounded-full'><i className="fa-regular fa-pen-to-square text-black bg-gray-200 p-1 text-xs rounded-lg"></i></div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <h1 className='text-lg font-bold'>Jane Doe</h1>
                        <p className='text-sm'>Joined May 2023</p>
                    </div>
                </div>
                <p className='mt-2 text-sm'>Hello! This is me</p>
                <div className="flex items-center justify-center space-x-8 mt-3 rounded-md p-3 bg-white">
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
            <h3 className='text-xl font-bold'>My Posts</h3>
            {
                filteredPosts.map(post => (
                    <Post
                        key={post._id}
                        userInfo={userInfo}
                        post={post}
                    />
                ))
            }
        </div>
    )
}

export default Profile
