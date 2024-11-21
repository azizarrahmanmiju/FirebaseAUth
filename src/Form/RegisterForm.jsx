import { NavLink, useNavigate } from "react-router-dom";
//==========================
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//==============================
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


const RegisterForm = () => {
    const navigate = useNavigate();

    // const [validate, setvalidate] = useState(false);
    toast("MAR miju")

    const register = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((Userinit) => {
                const user = Userinit.user;
                console.log(user)
                navigate("/login");
            }).catch((error) => {
                toast.error(error.message, "❌")
            })




    }


    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                    <p className="py-6 w-56">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className=" p-2 text-red-500  rounded-lg"><NavLink to={"/login"}>Log In</NavLink></button>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={register} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" onChange={register} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" onChange={register} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RegisterForm;