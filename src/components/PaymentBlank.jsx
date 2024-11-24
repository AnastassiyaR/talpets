import './PaymentBlank.css';

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
                <a href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/ApplePay.svg" alt="ApplePay" className="payment1" />
                </a>
                <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/StripePay.svg" alt="StripePay" className="payment2" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/PayPal.svg" alt="PayPal" className="payment3" />
                </a>
                <a href="https://www.bitcoin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/Bitcoin.svg" alt="Bitcoin" className="payment4" />
                </a>
            </div>
        </div>
    );
}

export default PaymentBlank;
