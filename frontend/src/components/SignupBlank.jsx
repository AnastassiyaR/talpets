// SignupBlank.jsx
import './SignupBlank.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { auth } from "../config/firebase-config.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignupBlank() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async () => {
        setError(null); // Clear previous error messages
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            navigate('/profile'); // Change this to your desired route
        } catch (err) {
            handleFirebaseError(err);
        }
    };

    const handleFirebaseError = (error) => {
        let errorMessage;
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'This email address is already in use.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'The email address is not valid.';
                break;
            case 'auth/operation-not-allowed':
                errorMessage = 'Operation not allowed. Please contact support.';
                break;
            case 'auth/weak-password':
                errorMessage = 'The password is too weak.';
                break;
            default:
                errorMessage = 'Email or password is not correct.';
        }
        setError(errorMessage);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-row">
                    <div className="firstname-container">
                        <label className="firstname-label">First name</label>
                        <input
                            type="text"
                            className="input-field1"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="lastname-container">
                        <label className="lastname-label">Last name</label>
                        <input
                            type="text"
                            className="input-field1"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="email-container">
                    <label className="email-label">Email</label>
                    <input
                        type="email"
                        className="input-field2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="password-container">
                    <label className="password-label">Password</label>
                    <input
                        type="password"
                        className="input-field2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="button1-container">
                    <button
                        type="button"
                        className="signup1-button"
                        onClick={handleSignup}
                    >
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignupBlank;
