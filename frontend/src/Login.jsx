import React from 'react';
import LoginBlank from './components/LoginBlank.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './Login.css';
import tuhkur from '/src/assets/Keili tuhkur.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className="background">
                <Navbar/>
                <h1 className="Login">Log into the account</h1>
                <LoginBlank/>
                <div className="image-holder">
                    <img src={tuhkur} alt="" className="tuhkur-image1"/>
                    <img src={tuhkur} alt="Тухкур" className="tuhkur-image2"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;