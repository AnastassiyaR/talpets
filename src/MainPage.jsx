import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MainPicture from './components/MainPicture.jsx'; // Импортируем MainPicture
import './MainPage.css';
import {Link} from "react-router-dom";
import iaib from '/src/assets/INIT.png';

function MainPage() {
    return (
        <div className="mainpage-container">
            <Navbar/>
            <MainPicture/>
            <div className="mainpage-content">
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="container">
                    <div className="square-container">
                        <Link to="https://taltech.ee/en" target="_blank">
                            <div className="square taltech">
                                <span className="square-text">ABOUT<br/>TALTECH</span>
                            </div>
                        </Link>
                    </div>
                    <div className="square-container">
                        <Link to="https://www.instagram.com/informaatikud/" target="_blank">
                            <div className="square iaib">
                                <span className="square-text">ABOUT<br/>IAIB</span>
                            </div>
                        </Link>
                    </div>
                    <div className="square-container">
                        <a href="https://shop.taltech.ee/" target="_blank">
                            <img src={iaib} className="logo" alt="Vite logo"/>
                        </a>
                    </div>
                </div>
                <div className="cats">
                    <div className="cats-container">
                        <Link to="/">
                            <div className="cat shop"></div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MainPage;
