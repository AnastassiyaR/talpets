// SignupBlank.jsx
import './SignupBlank.css';
import React from "react";

function SignupBlank({onPageChange}) {
    return (
        <div className="container">
            <form className="form">
                <div className="input-row">
                    <div className="firstname-container">
                        <label className="firstname-label">First name</label>
                        <input type="text" className="input-field1"/>
                    </div>
                    <div className="lastname-container">
                        <label className="lastname-label">Last name</label>
                        <input type="text" className="input-field1"/>
                    </div>
                </div>
                <div className="email-container">
                    <label className="email-label">Email</label>
                    <input type="email" className="input-field2"/>
                </div>

                <div className="password-container">
                    <label className="password-label">Password</label>
                    <input type="password" className="input-field2"/>
                </div>

                <div className="button1-container">
                    <button type="button" className="signup1-button" onClick={() => onPageChange("MainPage")}>
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignupBlank;

