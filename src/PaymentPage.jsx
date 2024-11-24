import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PaymentBlank from './components/PaymentBlank.jsx';
import './PaymentPage.css';

const Payment = () => {
    return (
        <div className="login-container">
             <Navbar/>
            <div className="content">
                <PaymentBlank/>
                <button className="buy-button">BUY</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Payment;