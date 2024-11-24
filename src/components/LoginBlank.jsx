// src/LoginBlank.jsx
import './LoginBlank.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { auth } from "../config/firebase-config.jsx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginBlank = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch (err) {
            console.error(err);
        }
    };

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container">
            <form className="form">
                <div className="email-container">
                    <label className="email-label">Email</label>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password-container">
                    <label className="password-label">Password</label>
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="button-container">
                    <button type="button" className="signup-button" onClick={signUp}>
                        SIGN UP
                    </button>
                    <button type="button" className="login-button" onClick={signIn}>
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginBlank;
