import React, { useState } from 'react';
import './Paymentform.css'; 

const PaymentForm = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name:', fullName);
        console.log('Phone Number:', phoneNumber);
        // Add your payment logic here
    };

    return (
        <div className="payment-form-container">
            <span
                style={{ marginBottom: "20px", color: "blue", fontSize: "25px", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => window.history.back()}
            >
                &larr; Back
            </span>
            <br />
            <br />
            <div className="payment-header">
                <div>
                    <p className="paying-to">Paying to:</p>
                    <h2 className="organization-name">Siloam Chief Ministries</h2>
                </div>
            </div>
            <form
                className="payment-form"
                onSubmit={handleSubmit}
            >
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <div className="phone-input">
                        <span className="country-code">+91</span>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    Proceed to Pay
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;