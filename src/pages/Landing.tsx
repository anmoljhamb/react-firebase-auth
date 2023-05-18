import { NavLink } from "react-router-dom";

export const Landing = () => {
    return (
        <div>
            <h1>Landing Page </h1>
            <hr />
            <NavLink to={"/login"}>Login Page</NavLink>
            <NavLink to={"/signup"}>Sign Up Page</NavLink>
        </div>
    );
};
