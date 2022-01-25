import { useState } from "react";
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ImTrello } from "react-icons/im";

import { userService } from "../services/user.service.js";
import { login, signup } from '../store/user/user.actions'



export function LoginSignup(props) {
    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    // const [isLogin, setIsLogin] = useState(true);
    const isLogin = props.location.pathname.includes("login");



    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (username.trim() && password.trim()) {
            if (!isLogin) {
                await dispatch(signup({ username, password, fullname, imgUrl: "" }))
                props.history.push("/workspace");
            } else {
                await dispatch(login({ username, password }))
                props.history.push("/workspace");
            }
        }
    }


    return (
        <div className="login-signup">
            <div className='login-header'>
                <ImTrello className="trello-icon" />
                <h1 className="logo">Skello</h1>
            </div>
            <div className="login-signup-inner-section">
                <div className="main-content-modal">

                    <h1>
                        {isLogin ? "Login to Skello" : "Sign up for your account"}
                    </h1>
                    <form className="login-signup-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                            placeholder="Enter Username"
                        />
                        {!isLogin && (
                            <input
                                type="txt"
                                value={fullname}
                                onChange={(ev) => setFullname(ev.target.value)}
                                placeholder="Enter Full Name"
                            />
                        )}
                        <input
                            type="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            placeholder="Enter Password"
                            autoComplete="off"
                        />
                        <button type="submit" className={`login-signup-submit-btn ${(isLogin) ? 'login' : 'signup'}`}>
                            {isLogin ? "Log in" : "Sign up"}
                        </button>
                    </form>

                    <Link to={isLogin ? '/signup' : '/login'}>
                        {isLogin ? "Sign up for an account" : "Already have an account? Log In"}
                    </Link>

                </div>

            </div>

        </div >
    )

}
