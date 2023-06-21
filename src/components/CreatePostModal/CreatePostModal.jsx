import React, { useState } from 'react'
import styles from "./CreatePostModal.module.css"
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/postActions'

const CreatePostModal = ({ setShowCreatePostModal }) => {
    const [postInfo, setPostInfo] = useState({
        title: "",
        body: "",
        tags: "",
        category: ""
    })

    const dispatch = useDispatch()

    const { title, body, tags, category } = postInfo

    const [isOpen, setIsOpen] = useState(false)

    const options = ['Advice Needed', 'Asking For A Colleague..', 'Ask Me Anything', 'Bluecollar Community', 'Burning Issues', 'Career Advice', 'Changemaking', 'Communities', 'Company News', 'Confessions', 'Crazy Ideas', 'Culture', 'Customer Experience', 'Dear CEO...', 'Dept to Dept...', 'Diversity & Inclusion', 'Ethics & Misconduct', 'Exit Interview', 'Fairness & Equity', 'Feels']

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleForm = (e) => {
        setPostInfo({ ...postInfo, [e.target.id]: e.target.value })
    }

    const handleOptionSelect = (option) => {
        setPostInfo({ ...postInfo, category: option })
        setIsOpen(false)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postInfo))
        setShowCreatePostModal(false)
    }

    return (
        <div className={`${styles.container} shadow-2xl`}>
            <div className="flex items-center justify-between">
                <h1 className='text-3xl'>Create Post</h1>
                <svg viewport="0 0 12 12" onClick={() => setShowCreatePostModal(false)} className="h-6 w-6 cursor-pointer" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="11"
                        x2="11" y2="1"
                        stroke="black"
                        strokeWidth="2" />
                    <line x1="1" y1="1"
                        x2="11" y2="11"
                        stroke="black"
                        strokeWidth="2" />
                </svg>
                {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer bg-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setShowCreatePostModal(false)}>
                </svg>*/}
            </div>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder="Add your post title here..." onChange={handleForm} id='title' value={title} />
                <textarea
                    cols="30"
                    rows="10"
                    placeholder="Whats on your mind?"
                    onChange={handleForm}
                    id='body'
                    value={body}
                ></textarea>
                <input type="text" placeholder="Your hashtags go here" onChange={handleForm} id='tags' value={tags} />
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id="dropdown-menu"
                            aria-haspopup="true"
                            aria-expanded={isOpen ? 'true' : 'false'}
                            onClick={toggleDropdown}
                        >
                            {category ? category : 'category'}
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
                            </svg>
                        </button>
                    </div>
                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="dropdown-menu"
                        >
                            <div className="py-1" role="none">
                                {options.map((option, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                        role="menuitem"
                                        onClick={() => handleOptionSelect(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <button className="bg-black text-white px-3 py-1 rounded-lg" onClick={HandleSubmit}>Post</button>
            </form>
        </div>
    )
}

export default CreatePostModal
