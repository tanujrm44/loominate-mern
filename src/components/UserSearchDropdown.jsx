import React from 'react'

const UserSearchDropdown = ({ user }) => {
    const baseUrl = "http://localhost:5000"
    return (
        <div className="flex items-center space-x-4 my-2 h-12 cursor-pointer">
            <div className="flex items-center justify-center rounded-full">
                <img className='mr-6' src={baseUrl + user.image} alt='user' />
                <div className="flex flex-col items-start justify-between">
                    <h1 className='text-lg font-bold text-black'>{user.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserSearchDropdown
