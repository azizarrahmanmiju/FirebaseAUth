
import { useState } from "react";
import app from "../Firebaseinit";
import Button from "../Utiles/Button.Jsx";
import "./Login.css"
//===============================================================

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const googleprovider = new GoogleAuthProvider(app);
const auth = getAuth();
//==============================================



const LogIn = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [isloged, setisLoged] = useState(false);


    const GoogleLogIn = () => {
        signInWithPopup(auth, googleprovider)
            .then(
                (result) => {
                    const user = result.user;
                    setCurrentUser(user);
                    setisLoged(true);
                }

            )
            .catch((error) => alert(error.message));

    }
    const logedUser = () => {
        console.log("I love You")
        signOut(auth).then(() => {
            setCurrentUser({})
            setisLoged(false)
            console.log("LogedOut");
        }).catch((error) => {
            console.log("Error", error);

        });
    }
    console.log(currentUser)
    return (
        <div className="login">
            <img src={currentUser.photoURL} alt={"img of " + currentUser.displayName}></img>
            <h1>Name: {currentUser.displayName}</h1>
            <h1>Email:{currentUser.email}</h1>
            <h1>Tocken:{currentUser.accessToken}</h1>

            {
                isloged
                    ? <Button onClick={logedUser} >LogOut</Button>
                    : <>
                        <Button onClick={GoogleLogIn}  >Log In With Google</Button>
                        <Button   >Log In With GitHub</Button>
                    </>

            }
        </div>
    );
};

export default LogIn;