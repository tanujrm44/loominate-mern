import { GoogleLogout } from "react-google-login"


const Logout = () => {
    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId="889768102635-9ei4kgfkprhmrhjkme2ll8oeiovtkr6e.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={() => console.log("Logged Out Successfully")}
            />
        </div>
    )
}

export default Logout
