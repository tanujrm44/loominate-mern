import React, { useEffect, useRef, useState } from 'react'
import { gapi } from 'gapi-script'
import hero from "../../assets/images/sign-in-img.png"
import logo from "../../assets/images/logo.svg"
import styles from "./LoginPage.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { login, register } from '../../actions/userActions'
import Login from '../../components/Login'

const LoginPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const signinRef = useRef()
    const signupRef = useRef()
    const signinHandle = () => {
        signinRef.current.style.display = "block"
        signupRef.current.style.display = "none"
    }
    const signupHandle = () => {
        signinRef.current.style.display = "none"
        signupRef.current.style.display = "block"
    }

    const signInUser = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    const signUpUser = (e) => {
        e.preventDefault()
        dispatch(register({ name, email, password, confirmPassword }))
        toast.success("Registration Successful")
    }

    useEffect(() => {
        function start() {
            gapi.client.init({
                'clientId': "889768102635-9ei4kgfkprhmrhjkme2ll8oeiovtkr6e.apps.googleusercontent.com",
                'scope': 'profile email'
            })
        }
        gapi.load('client:auth2', start)
    }, [])

    if (error) {
        toast.error(error)
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={styles.body}>
            <div className={styles.row}>
                <div className={styles.col_1}>
                    <img src={logo} style={{ marginTop: "150px", height: "48px" }} />
                    <p>Your Workplace Community</p>
                    <img src={hero} />
                </div>
                <div className={styles.col_2}>
                    <div className={styles.form_container}>
                        <div className={styles.sign}>
                            <h3 onClick={signinHandle}>Sign In</h3>
                            <h3 onClick={signupHandle}>Sign Up</h3>
                        </div>
                        {/*sign in*/}
                        <div className={styles.signin_form} ref={signinRef}>
                            <h1 className={styles.form_title}>Sign In to Your Space</h1>
                            <form onSubmit={signInUser}>
                                <label>Email</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Your pseudonym" style={{ Bottom: "1px solid cyan" }} className=' block w-full py-2.5 ' />
                                <br />
                                <label>Password</label>
                                <input type="password" onChange={e => setPassword(e.target.value)} placeholder="****" style={{ borderBottom: "1px solid cyan" }} className=' block w-full py-2.5 ' />
                                <br />
                                <a href="#">Forgot Password?</a>
                                <button style={{ background: "linear-gradient(90deg, #0AB1C5, #226FAF)" }} className={styles.button} type="submit">NEXT</button>
                            </form>
                        </div>
                        {/*sign up*/}
                        <div className={styles.signup_form} ref={signupRef}>
                            <h1 className={styles.form_title}>Join Your Colleagues</h1>
                            <form onSubmit={signUpUser}>
                                <label>Name</label>
                                <input type="text" onChange={e => setName(e.target.value)} style={{ borderBottom: "1px solid cyan" }} className=' block w-full py-2.5 ' />
                                <br />
                                <label>Email</label>
                                <input type="text" onChange={e => setEmail(e.target.value)} placeholder="example: john@theragency.com" style={{ borderBottom: "1px solid cyan" }} className=' block w-full py-2.5 ' />
                                <br />
                                <label>Password</label>
                                <input type="password" onChange={e => setPassword(e.target.value)} placeholder="****" style={{ borderBottom: "1px solid cyan" }} className=' block w-full py-2.5 ' />
                                <br />
                                <label>Confirm Password</label>
                                <input type="password" onChange={e => setConfirmPassword(e.target.value)} placeholder="****" style={{ borderBottom: "1px solid cyan" }} className=' block w-full py-2.5 ' />
                                <br />
                                <button style={{ background: "linear-gradient(90deg, #0AB1C5, #226FAF)" }} className={styles.button} type="submit" >SUBMIT</button>
                            </form>
                        </div>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
