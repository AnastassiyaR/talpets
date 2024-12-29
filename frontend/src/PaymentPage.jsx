import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PaymentBlank from './components/PaymentBlank.jsx';
import './PaymentPage.css';

const Payment = () => {
    // Состояние для отображения уведомления
    const [notification, setNotification] = useState('');

    // Обработчик нажатия на кнопку
    const handleBuyClick = () => {
        setNotification('Complete');

        // Скрыть уведомление через 2 секунды
        setTimeout(() => {
            setNotification('');
        }, 2000);
    };

    return (
        <div className="payment-container">
            <Navbar />
            <div className="content">
                <PaymentBlank />
                <button className="buy-button" onClick={handleBuyClick}>BUY</button>
            </div>

            {/* Уведомление */}
            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Payment;
