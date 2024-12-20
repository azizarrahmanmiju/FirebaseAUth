
import { useState } from "react";
import app from "../Firebaseinit";
import Button from "../Utiles/Button.Jsx";
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';


//===============================================================

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import LogInform from "../Form/LogInform";

const auth = getAuth();

const googleprovider = new GoogleAuthProvider(app);
//==============================================

const githubprovider = new GithubAuthProvider(app);


//==============================================



const LogIn = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [isloged, setisLoged] = useState(false);
    const [verified, setverified] = useState(false);



    // setverified(user.emailVerified);



    const GoogleLogIn = () => {
        signInWithPopup(auth, googleprovider)
            .then(async (result) => {
                const user = result.user;
                await user.reload(); // Reload user to get updated state
                setCurrentUser(user);
                setverified(user.emailVerified); // Check after reloading
                setisLoged(true);
            })
            .catch((error) => alert(error.message));
    };

    const githubLogIn = () => {
        signInWithPopup(auth, githubprovider)
            .then(async (result) => {
                const user = result.user;
                await user.reload(); // Reload user to get updated state
                setCurrentUser(user);
                setverified(true); // Check after reloading
                setisLoged(true);
            })
            .catch((error) => alert(error.message));
    };

    const logedUser = () => {
        console.log("I love You")
        signOut(auth).then(() => {
            setCurrentUser({});
            setisLoged(false);
            console.log("LogedOut");
        }).catch((error) => {
            setisLoged(true);
            console.log("Error", error);

        });
    }
    console.log(currentUser)//===============

    const onsubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.error("Invalid Password");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                const user = result.user;
                await user.reload(); // Reload user to update email verification status
                setCurrentUser(user);
                setisLoged(true);
                setverified(user.emailVerified);
            })
            .catch((error) => {
                setisLoged(false);
                toast.error(error.message);
            });
    };


    return (
        <div className="login">
            {
                isloged && <div className="usercard">

                    {
                        verified
                            ? <div>
                                <img
                                    className="h-20 w-20 rounded-full border-2"
                                    src={currentUser.photoURL || "https://i.ibb.co.com/fn3zcPN/pngwing-com-1.png"}
                                    alt={"img of " + (currentUser.displayName || "Anonymous")}
                                ></img>
                                <h1>Name: {currentUser.displayName}</h1>
                                <h1>Email:{currentUser.email ?? "No Email"}</h1>
                            </div>
                            : <div className="verify-email">Please Check Your Email and verified now{ }</div>
                    }

                </div>
            }

            {
                (isloged)
                    ? <Button onClick={logedUser} >LogOut</Button>
                    : <div className="gap-3 grid">
                        <LogInform onsubmit={onsubmit}></LogInform>
                        <Button onClick={GoogleLogIn}  >Log In With Google</Button>
                        <Button onClick={githubLogIn} >Log In With GitHub</Button>
                    </div>

            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LogIn;