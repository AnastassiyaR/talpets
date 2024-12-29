// ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProfileBar from './components/ProfileBar.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './config/firebase-config.jsx';
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import setDoc to update Firestore
import { db } from './config/firebase-config';
import './ProfilePage.css';
import waitt from './assets/waitt.jpg';

function ProfilePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                    setLoading(false);
                } else {
                    console.log('No such document!');
                    setLoading(false);
                }
            }
        };
        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSaveClick = async () => {
        const user = auth.currentUser;
        if (user) {
            const userRef = doc(db, 'users', user.uid);
            await setDoc(userRef, userData, { merge: true }); // Update Firestore document with new data
            setIsEditing(false); // Exit edit mode
        }
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Signed out successfully');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    if (loading) {
        return (
            <div className="loading-container">
                <img src={waitt} alt="Loading" className="loading" />
                <span>Please wait, thank you!</span>
            </div>
        );
    }

    return (
        <div className="profilepage-container">
            <Navbar />
            <div className="profile-content">
                <ProfileBar className={isMenuOpen ? 'show' : ''}/>

                <div className="profile-button-container">
                    <button
                        type="button"
                        className="profile-button"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? 'Close Profile' : 'Profile'}
                    </button>
                </div>

                <div className="sign-out-container">
                    <button onClick={handleSignOut} className="sign-out">
                        <span>SIGN OUT</span>
                    </button>
                </div>

                <div className='info-container'>
                    <div className="profile-header">
                        <div className="header-text">
                            <div className="information">PROFILE<br/>INFORMATION</div>
                            <div className="quote-image"></div>
                        </div>
                    </div>

                    <div className="profile-value">
                        <div className="profile-picture">
                        </div>
                        <div className="profile-info">
                            {isEditing ? (
                                <div className="profile-form">
                                    <div className="form-group">
                                        <label>First name:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={userData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last name:</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={userData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone:</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={userData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={userData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="button-group">
                                        <button onClick={handleSaveClick} className="save-button">Save</button>
                                        <button onClick={handleEditClick} className="cancel-button">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="profile-text">
                                    <div>First name: {userData.firstName}</div>
                                    <div>Last name: {userData.lastName}</div>
                                    <div>Email: {userData.email}</div>
                                    <div>Phone: {userData.phone}</div>
                                    <div>Address: {userData.address}</div>
                                </div>
                            )}
                        </div>
                        <div className="profile-edit-container">
                            {!isEditing && (
                                <button onClick={handleEditClick} className="edit-button">
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfilePage;
