import { useNavigate } from "react-router-dom";
//============================================
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";


const auth = getAuth();


const ForgetPassword = () => {
    const [isSend, setisSend] = useState(false);

    const navigate = useNavigate();
    const onback = () => {
        navigate(-1)
    }

    const passwordforget = e => {
        e.preventDefault();
        const email = e.target.email.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast("Password reset email sent to your email");
                setisSend(true);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });

    }
    return (
        <div className="grid justify-center w-full items-center h-screen space-y-2">
            {
                isSend
                    ? <h1 className="text-2xl text-gray-700">Recovery mail sent Your Email. check it fast</h1>
                    : <div>
                        <form onSubmit={passwordforget} className="grid gap-3">
                            <div>
                                <label htmlFor="emailInput">Email:</label>
                                <input id="emailInput" className="text-black border shadow-md py-1 px-2 ml-5 " type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border rounded-lg" type="submit">Forget</button>
                        </form>
                    </div>
            }
            <button className=" border rounded-xl p-2" onClick={onback}>Ge back</button>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default ForgetPassword;