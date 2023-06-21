import React, { useEffect, useRef, useState } from "react"
import styles from "./Header.module.css"
import logo from "../../assets/images/logo.svg"
import { useDispatch, useSelector } from "react-redux"
import { logout, userSearch } from "../../actions/userActions"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useNavigate } from "react-router-dom"
import UserSearchDropdown from "../UserSearchDropdown"
//import 'react-tooltip/dist/index.css'

const Header = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState("")
  const [userKeyword, setUserKeyword] = useState("")
  const { userInfo } = useSelector(state => state.userLogin)
  const { users } = useSelector(state => state.userSearch)
  const dispatch = useDispatch()
  const debounceTimeoutRef = useRef(null)

  const handleSearchPosts = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    }
  }

  //const handleSearchUsers = (e) => {
  //  e.preventDefault()
  //  if (userKeyword.trim()) {
  //    navigate(`/search/users/${userKeyword}`)
  //  }
  //}
  //console.log(state)

  useEffect(() => {
    // Cleanup function to cancel the previous debounce timeout
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
    }
  }, [])

  const handleSearch = (userKeyword) => {
    if (userKeyword.trim()) {
      dispatch(userSearch(userKeyword))
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    setUserKeyword(value)

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    // Set a new debounce timeout to delay the search action
    debounceTimeoutRef.current = setTimeout(() => {
      handleSearch(value)
    }, 1000)
  }

  return (
    <header>
      <div className={styles.row}>
        <div className={styles.col_1}>
          <img src={logo} onClick={() => navigate("/")} />
          <div className="flex justify-start">
            <form onSubmit={handleSearchPosts} className="-ml-5">
              <input className="text-black" type='text' placeholder='Search anything in feed...' onChange={(e) => setKeyword(e.target.value)} value={keyword} />
            </form>
            <form className="-ml-9 relative" onSubmit={e => e.preventDefault()}>
              <input className="text-black" type='text' placeholder='Search users' onChange={handleChange} value={userKeyword} />
              {/* dropdown */}
              <div className="absolute top-full right-0 w-full bg-white rounded-lg shadow-lg px-4 ">
                {users && userKeyword && users.map(user => (
                  <>
                    <UserSearchDropdown key={user._id} user={user} />
                    <hr />
                  </>
                ))}
              </div>
            </form>
          </div>
        </div>
        <div className={styles.col_2}>
          <i className='fa-solid fa-comment text-white'></i>
          <i className='fa-regular fa-bell text-white'></i>
          <div className="relative">
            <i data-tooltip-content="profile" data-tooltip-id="edit" className='fa-solid fa-user-tie text-white' onClick={() => document.querySelector('.absolute').classList.toggle('hidden')}></i>
            <ReactTooltip id="edit" className="custom-tooltip" />
            {/* profile dropdown */}
            <div className="absolute top-full right-full w-48 bg-white rounded-lg shadow-lg p-4 hidden">
              <div className="flex items-center space-x-4">
                <img className='w-16 mr-6 rounded-full' src={userInfo.image} alt='user' />
                <div className="flex flex-col items-start justify-between">
                  <h1 className='text-lg font-bold text-black'>{userInfo.name}</h1>
                  <p className='text-sm text-black'>Joined May 2023</p>
                </div>
              </div>
            </div>
          </div>
          {/*botton logout*/}
          <div onClick={() => dispatch(logout())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
            Logout
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
