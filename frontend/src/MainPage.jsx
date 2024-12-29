import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MainPicture from './components/MainPicture.jsx'; // Импортируем MainPicture
import './MainPage.css';
import {Link} from "react-router-dom";
import iaib from '/src/assets/INIT.png';
import cats from "./assets/catsshopping.png";
import shop from '/src/assets/e-pood.png';
import taltech from '/src/assets/racket.png';

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
                        <Link to="https://taltech.ee/en" target="_blank" className="square taltech">
                            <img src={taltech} className="square-picture-container"/>
                        </Link>
                    </div>

                    <div className="square-container">
                        <Link to="https://www.instagram.com/informaatikud/" target="_blank" className="square iaib">
                            <img src={iaib} className="square-picture-container"/>
                        </Link>
                    </div>
                    <div className="square-container">
                        <Link to="https://shop.taltech.ee/" target="_blank" className="square e-pood">
                            <img src={shop} className="square-picture-container"/>
                        </Link>
                    </div>
                </div>


                <div className="cats">
                    <Link to="/login" className="cats-container">
                        <img src={cats} className="cat shop"/>
                    </Link>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default MainPage;
