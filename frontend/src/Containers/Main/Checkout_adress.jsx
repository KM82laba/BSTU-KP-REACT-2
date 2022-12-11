import React, { useState } from 'react';
import './Checkout_adress.css'
import { Link } from 'react-router-dom'
import {FaLock} from 'react-icons/fa';





const Checkout_adress = ({ valuename, valuestreet, valuecity, valuecountry , updateName, updateStreet,updateCountry,updateCity, handleAction }) => {
    return(
    <div className="conteiner-component-checkout-adress">
        <p className="text-for-checkout">Shipping Name</p>
        <input className="input-text-for-checkout"
            placeholer='Shipping Name'
            value={valuename}
            onChange={(e) => updateName(e.target.value)}
        />
        
        <p className="text-for-checkout">Street Name</p>
        
        <input className="input-text-for-checkout"
            placeholer='Street Name'
            value={valuestreet}
            onChange={(e) => updateStreet(e.target.value)}
        />
        <p className="text-for-checkout">City</p>
        <input className="input-text-for-checkout"
            placeholer='City'
            value={valuecity}
            onChange={(e) => updateCity(e.target.value)}
        />
        <p className="text-for-checkout">Country</p>
        <input className="input-text-for-checkout"
            placeholer='Country'
            value={valuecountry}
            onChange={(e) => updateCountry(e.target.value)}
        />
        <Link to="../Checkout_page" className="btn-link-for-checkout" onClick={handleAction}>
                Add Address
        </Link>
        <p className="checkout-secure-connection"><FaLock/>Secure Connection</p>
    </div>
    );
};
export default Checkout_adress;