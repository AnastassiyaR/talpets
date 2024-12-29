import React from 'react';
import SignupBlank from './components/SignupBlank.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './Signup.css';
import annemari from "/src/assets/Annemari.svg";

function Signup() {
    return (
        <div className="signup-container">
            <div className="background">
                <Navbar/>
                <h1 className="Signup">Become our MEOWber</h1>
                <SignupBlank/>
                <div className="image-holder1">
                    <img src={annemari} alt="Annemari" className="annemari-image"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Signup;