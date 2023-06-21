import React, { useEffect, useState } from 'react'
import styles from "./Post.module.css"
import { useDispatch, useSelector } from 'react-redux'
import CommentBox from '../CommentBox/CommentBox'
import { createComment } from '../../actions/commentActions'
import { toast } from "react-toastify"
import axios from 'axios'

const Post = ({ post, token, log }) => {
    const { user, title, body, tags, category, postId, comments, likes, dislikes } = post
    //const { token, name } = userInfo
    console.log(title)
    const dispatch = useDispatch()
    const [liked, setLiked] = useState(true)
    const [disliked, setDisliked] = useState(true)
    const [comment, setComment] = useState("")
    const [viewComments, setViewComments] = useState(false)

    const postComment = (e) => {
        e.preventDefault()
        dispatch(createComment(comment, postId))
    }

    const handleLike = async () => {
        setLiked(!liked)
        try {
            await axios.post(`http://localhost:5000/api/posts/${postId}/like`, { liked }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            !disliked && (await axios.post(`http://localhost:5000/api/posts/${postId}/dislike`, { disliked }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleDislike = async () => {
        setDisliked(!disliked)
        try {
            await axios.post(`http://localhost:5000/api/posts/${postId}/dislike`, { disliked }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            !liked && (await axios.post(`http://localhost:5000/api/posts/${postId}/like`, { liked }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
        }
        catch (error) {
            console.log(error)
        }
    }

    const { success: successCommentCreate } = useSelector(state => state.commentCreate)

    useEffect(() => {
        if (successCommentCreate) {
            toast.success("Comment Created")
            setComment("")
            window.location.reload()
        }
    }, [successCommentCreate])
    return (
        <div className={`${styles.post} w-full`}>
            <div className={styles.flex_bwn}>
                <div className={styles.post_category}>{category}</div>
                <i style={{ color: "#000" }} className="fa-solid fa-ellipsis-vertical text-sm"></i>
            </div>
            <div className={styles.flex}>
                <img src="https://soombo.loominate.app/static/media/avatar14.b79ef3ff.png" alt="" className='w-12' />
                <p>{user?.name}</p>
                {log === user.name && <p className={styles.post_category}>You</p>}
            </div>
            <h3 className='mt-2 text-xl'>{title}</h3>
            <p className='mt-2 text-sm'>{body}</p>
            <p style={{ color: "#ff2692", marginTop: "10px" }}>{tags}</p>
            <div className="flex mt-2">
                {/* like */}
                <div className="flex items-center cursor-pointer" onClick={handleLike} >
                    <i style={!liked ? { color: "blue" } : {}} className="fa-solid fa-thumbs-up text-sm mr-1"></i>
                    <p className='text-sm'>{likes}</p>
                </div>
                {/* dislike */}
                <div className="flex items-center cursor-pointer" onClick={handleDislike} >
                    <i style={!disliked ? { color: "red" } : {}} className="fa-solid fa-thumbs-down text-sm mr-1"></i>
                    <p className='text-sm'>{dislikes}</p>
                </div>
                {/* comment */}
                <div className="flex items-center">
                    <i className="fa-solid fa-comment text-sm mr-1"></i>
                    <p className='text-sm'>0</p>
                </div>
            </div>

            <div className={`flex gap-4 items-center`}>
                <img src="https://soombo.loominate.app/static/media/avatar14.b79ef3ff.png" alt="" className='w-12' />
                <form className='w-full' onSubmit={postComment}>
                    <input
                        className={` border border-black outline-none w-full `}
                        type="text"
                        placeholder="Comment as username"
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                    />
                </form>
            </div>
            <p className='text-sm text-center cursor-pointer' onClick={() => setViewComments(!viewComments)} >{viewComments ? "Hide Comments" : "View Comments"}</p>
            {viewComments && comments && comments.map(comment => (
                <CommentBox key={comment._id} comment={comment} loggedInUser={loggedInUser} />
            ))
            }
        </div>
    )
}

export default Post
