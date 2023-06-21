import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import LeaderboardPage from './pages/LeaderboardPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import Category from './pages/Category.jsx'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { userInfo } = useSelector(state => state.userLogin)
  const element = userInfo ? <Dashboard /> : <LoginPage />
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={element} />
          <Route path="/search/:keyword" element={element} />
          <Route path="/page/:pageNumber" element={element} exact />
          <Route path="/search/:keyword/page/:pageNumber" element={element} exact />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/category/:category' element={<Category />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  )
}

export default App
