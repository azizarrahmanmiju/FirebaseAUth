import { NavLink, Outlet } from "react-router-dom";
import "./root.css"

const Root = () => {
    return (
        <div >
            <div className="root">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/login"}>LogIn</NavLink>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;