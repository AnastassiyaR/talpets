import './PaymentBlank.css';
import {Link} from "react-router-dom";
import Bitcoin from '/src/assets/Bitcoin.svg';
import PayPal from '/src/assets/PayPal.svg';
import Stripe from "/src/assets/StripePay.svg";
import Apple from "/src/assets/ApplePay.svg";

function PaymentBlank() {
    return (
        <div className="payment-form">
            <h2 className="store-name">TalPets Store</h2>
            <span className="order-number">Order №070490</span>
            <div className="amount">
                <span>10.00</span>
                <span className="currency">€</span>
            </div>
            <span className="card-number">Pay by bank card</span>
            <div className="card-container">
                <div className="input-wrapper">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Card number"
                    />
                </div>
            </div>
            <hr />
            <div className="other-methods-label">Other payment methods</div>
            <div className="payment-image-holder">
                <Link to="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
                    <img src={Apple} alt="ApplePay" className="payment1" />
                </Link>
                <Link to="https://stripe.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Stripe} alt="StripePay" className="payment2" />
                </Link>
                <Link to="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                    <img src={PayPal} alt="PayPal" className="payment3" />
                </Link>
                <Link to="https://www.bitcoin.com" target="_blank" rel="noopener noreferrer">
                    <img src={Bitcoin} alt="Bitcoin" className="payment4" />
                </Link>
            </div>
        </div>
    );
}

export default PaymentBlank;
