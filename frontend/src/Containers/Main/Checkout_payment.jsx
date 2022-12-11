import React from "react";
import './Checkout_payment.css'
import { Link } from 'react-router-dom'
import {FaLock} from 'react-icons/fa';
import { BsFillCreditCardFill} from 'react-icons/bs';
const Checkout_payment = ({valuecardholder,updateCardholder,valuecardnumber,updateCardnumber,valuedate,updateDate,valuecvc,updateCvc,handleAction}) => {
    return(
    
        
        <div className="conteiner-component-checkout-add-new-cart">
        <p className="title-checkout-cart">Add a Card</p>
            <p className="text-for-checkout">Cardholder Name</p>
            <input type='text' className="input-text-for-checkout" 
            placeholder="Name"
            value={valuecardholder}
            onChange={(e) => updateCardholder(e.target.value)}
            />
            <p className="text-for-checkout">Card Number</p>
            <input type='text' className="input-text-for-checkout" 
            placeholder="Number"
            value={valuecardnumber}
            onChange={(e) => updateCardnumber(e.target.value)}
            />
            <div className="conteiner-component-checkout-add-new-cart-col-1">
            <p className="text-for-checkout-cart">Expiry Date</p>
            <input type='text' className="input-text-for-checkout-cart" 
            placeholder="MM/YY"
            value={valuedate}
            onChange={(e) => updateDate(e.target.value)}
            />
            </div>
            <div className="conteiner-component-checkout-add-new-cart-col-2">
            <p className="text-for-checkout-cart">CVC</p>
            <input type='text' className="input-text-for-checkout-cart" 
            placeholder="123"
            value={valuecvc}
            onChange={(e) => updateCvc(e.target.value)}
            />
            </div>
            <Link to="../Checkout_page" className="btn-link-for-checkout" onClick={handleAction} ><BsFillCreditCardFill className="creditcardfill-icon"/>Add Payment Method</Link>
            <p className="checkout-secure-connection"><FaLock/>Secure Connection</p>
        </div>
    
    );
};
export default Checkout_payment;
