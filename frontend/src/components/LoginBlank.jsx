// src/LoginBlank.jsx
import './LoginBlank.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { auth } from "../config/firebase-config.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginBlank = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signIn = async () => {
        setError(null); // Clear previous error messages
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile"); // Change this to your desired route
        } catch (err) {
            handleFirebaseError(err);
        }
    };

    const handleFirebaseError = (error) => {
        let errorMessage;
        switch (error.code) {
            case 'auth/invalid-email':
                errorMessage = 'The email address is not valid.';
                break;
            case 'auth/user-disabled':
                errorMessage = 'The user account has been disabled.';
                break;
            case 'auth/user-not-found':
                errorMessage = 'No user found with this email address.';
                break;
            case 'auth/wrong-password':
                errorMessage = 'Incorrect password.';
                break;
            default:
                errorMessage = 'Email or password is not correct.';
        }
        setError(errorMessage);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
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
                {error && <div className="error-message">{error}</div>}
                <div className="button-container">
                    <button
                        type="button"
                        className="login-button"
                        onClick={signIn}
                    >
                        LOGIN
                    </button>
                    <Link className="signup-button" to="/signup">
                        SIGN UP
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginBlank;
