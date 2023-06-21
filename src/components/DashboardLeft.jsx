import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DashboardLeft = () => {
    const [selectedCategory, setSelectedCategory] = useState("false")
    const navigate = useNavigate()
    let style = { background: "linear-gradient(90deg, #0AB1C5, #226FAF)", color: "white" }

    const categories = ['Advice Needed', 'Asking For A Colleague..', 'Ask Me Anything', 'Bluecollar Community', 'Burning Issues', 'Career Advice', 'Changemaking', 'Communities', 'Company News', 'Confessions', 'Crazy Ideas', 'Culture', 'Customer Experience', 'Dear CEO...', 'Dept to Dept...', 'Diversity & Inclusion', 'Ethics & Misconduct', 'Exit Interview', 'Fairness & Equity', 'Feels', 'Frustrations', 'Funny', 'General', 'Getting Started', 'Goals & Objectives', 'Good News', 'Gossip', 'Health & Wellness', 'Help', 'Hiring', 'HR', 'Ideas', 'Innovation', 'Interviews', 'Job Search', 'Leadership', 'Learning & Development', 'Life', 'Management', 'Mental Health', 'Mentorship', 'Office Politics', 'Onboarding', 'Opportunities', 'Performance', 'Personal', 'Personal Finance', 'Personal Growth', 'Policies & Procedures', 'Productivity', 'Promotions', 'Recognition', 'Remote Work', 'Resources', 'Sales', 'Self-Promotion', 'Social Impact', 'Social Media', 'Sports', 'Teamwork', 'Tech', 'Trends', 'Venting', 'Work From Home', 'Work-Life Balance', 'Workplace', 'Workplace Culture', 'Workplace Relationships']

    const selectCategory = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div style={{ width: "23%" }}>
            <div
                className='bg-white rounded-xl px-6 py-3 shadow-sm flex flex-col mt-3'>

                <div id='feed-text' style={window.location.pathname === '/' ? style : {}} onClick={() => navigate("/")} className='flex space-x-3 my-2 rounded-xl py-2 px-5 font-medium '>
                    <img className='w-4 mr-3 cursor-pointer' src='https://www.svgrepo.com/show/483341/home.svg' alt='' />
                    <h1 id='feed-text' className='text-xl uppercase cursor-pointer'>My Feed</h1>
                </div>

                <div id='lead-text' style={window.location.pathname === '/leaderboard' ? style : {}} className='flex space-x-3 my-2  rounded-xl py-2 px-5 font-medium ' onClick={() => navigate("/leaderboard")}>
                    <img className='w-4 mr-3 cursor-pointer' src='https://www.svgrepo.com/show/488260/leaderboard.svg' alt='' />
                    <h1 id='leader-text' className='text-xl uppercase cursor-pointer'>Leaderboard</h1>
                </div>
                <div id='profile-text' style={window.location.pathname === '/profile' ? style : {}} className='flex space-x-3 my-2 rounded-xl py-2 px-5 font-medium ' onClick={() => navigate("/profile")}>
                    <img className='w-4 mr-3 cursor-pointer' src='https://www.svgrepo.com/show/512729/profile-round-1342.svg' alt='' />
                    <h1 id='profile-text' className='text-xl uppercase cursor-pointer'>My Profile</h1>
                </div>
            </div>
            <div className='bg-white rounded-xl px-6 py-3 shadow-sm flex flex-col my-3 space-y-3'>
                <h1 className='text-xl uppercase'>Categories</h1>
                <div className='flex flex-wrap'>
                    {categories.map((category, index) => (
                        <Link to={`/category/${category.split(" ").join("").toLowerCase()}`} key={index}>
                            <div
                                key={index}
                                onClick={() => selectCategory(category)}
                                className={`rounded-full px-3 py-1 text-sm font-semibold cursor-pointer text-gray-700 mr-2 mt-2 ${selectedCategory === category ? 'bg-cyan-500 hover:bg-cyan-600 text-white' : 'bg-gray-200 hover:bg-cyan-500 hover:text-white'
                                    }`}
                            >
                                {category}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashboardLeft
