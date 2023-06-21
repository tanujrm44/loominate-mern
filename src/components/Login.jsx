import { GoogleLogin } from 'react-google-login'


const onSuccess = (res) => {
    console.log("Login Success: ", res.profileObj)
}

const onFailure = (res) => {
    console.log("Login Failed: ", res)
}

const Login = () => {
    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId="889768102635-9ei4kgfkprhmrhjkme2ll8oeiovtkr6e.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login
