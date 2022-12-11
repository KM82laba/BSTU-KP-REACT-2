import React from "react";
import { useCart } from "react-use-cart"
import './Checkout_total.css'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io';
const Checkout_total = () => {
    const {
        items,
        isEmpty,
        cartTotal,
        removeItem
    } = useCart();
    if (isEmpty) return 
    return(
        <section>
                    <div>
                        <div className='conteiner-checkout-total' >
                                <p className='title-checkout-total'>Order Summary</p>
                                <p className="conteiner-checkout-total-text">Items: <span className="checkout-total-price">${cartTotal}</span></p>
                                <p className="conteiner-checkout-total-text">Shipping: <span className="checkout-total-price">$6.99</span></p>
                                <p className="conteiner-checkout-total-text">Sale: <span className="checkout-total-price">-20%</span></p>
                                <p className="conteiner-checkout-total-order">Order Total: <span className="checkout-total-order-price">${0.8*cartTotal + 6.99 }</span></p>
                                <Link to="/" className="btn-link-for-checkout-total">Place your order</Link>
                        </div>
                            <Link to="../Bag_page">
                            <div className="conteiner-link-back-checkout-total">
                            <IoIosArrowBack/>Back
                            </div>
                        </Link>
                    
                    </div>
        </section>
    );
};
export default Checkout_total;