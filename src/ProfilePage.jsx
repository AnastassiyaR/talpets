import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProfileBar from './components/ProfileBar.jsx';
import './ProfilePage.css';
import userIcon from "./assets/account.svg";
import {Link} from "react-router-dom";
import editIcon from "./assets/edit_icon.svg";

function ProfilePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="profilepage-container">
            <Navbar />
            <div className="profile-content">
                {/* Боковая панель ProfileBar */}
                <ProfileBar className={isMenuOpen ? 'show' : ''}/>

                {/* Кнопка для открытия и закрытия меню на мобильных устройствах */}
                <div className="profile-button-container">
                    <button
                        type="button"
                        className="profile-button"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? 'Close Profile' : 'Profile'}
                    </button>
                </div>

                <div className='info-container'>
                    <div className="profile-text">
                        <div className="name-text">
                            <div className="information">PROFILE<br/>INFORMATION</div>
                            <div className="quote-image"></div>
                            {/* Левая лапка или изображение */}
                        </div>
                    </div>
                    <div className="sign-out-container">
                        <Link to="/login" className="icon-link">
                            <div className="sign-out">SIGN OUT</div>
                        </Link>
                    </div>
                    <div className="profile-value">
                        <div className="profile picture">
                        </div>
                        <div className="profile info">
                            <div className="profile-text">
                                First name:<br/>
                                Last name:<br/>
                                Email: <br/>
                                Phone:<br/>
                                Address:
                            </div>
                        </div>
                        <div className="profile-edit-container">
                            <Link to="/edit-profile">
                                <div className="edit">
                                    <span className="edit-text">Edit profile</span>
                                    <img src={editIcon} alt="Edit Icon" className="edit_icon"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfilePage;
