import './LoginBlank.css';
import React from "react";

function LoginBlank({onPageChange}) {
    return (
        <div className="container">
            <form className="form">
                <div className="email-container">
                    <label className="email-label">Email</label>
                    <input type="email" className="input-field" />
                </div>

                <div className="password-container">
                    <label className="password-label">Password</label>
                    <input type="password" className="input-field" />
                </div>

                <div className="button-container">
                        <button className="signup-button" onClick={() => onPageChange("Signup")}>
                            SIGN UP
                        </button>
                        <button className="login-button" onClick={() => onPageChange("MainPage")}>
                            LOGIN
                        </button>
                </div>
            </form>
        </div>
    );
}

export default LoginBlank;




