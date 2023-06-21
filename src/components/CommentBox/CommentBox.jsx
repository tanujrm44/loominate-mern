import React from 'react'
import styles from "./CommentBox.module.css"

const CommentBox = ({ comment, loggedInUser }) => {
    return (
        <div className='my-2 p-3 bg-slate-200 rounded-md'>
            <div className={styles.flex}>
                <img src={comment.user.image} alt="" className='w-12' />
                <p>{comment.user.name}</p>
                {comment.user.name === loggedInUser && <p className={styles.post_category}>You</p>}
            </div>
            <p className='mt-2 text-sm'>{comment.comment}</p>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <i className="fa-solid fa-thumbs-up text-sm text-black mr-1"></i>
                    <p className='text-sm'>0</p>
                </div>
                <div className="flex items-center">
                    <i className="fa-solid fa-thumbs-down text-sm text-black mr-1"></i>
                    <p className='text-sm'>0</p>
                </div>
                <div className="flex items-center">
                    <i className="fa-solid fa-comment text-sm text-black mr-1"></i>
                    <p className='text-sm'>0</p>
                </div>
                <p className='text-sm ml-5'>reply</p>
            </div>
        </div>
    )
}

export default CommentBox
