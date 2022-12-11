import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "react-use-cart";
import './Checkout.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';


import {removetoadress} from './toadressSlice';
import ToAdressList from './ToAdressList';


import { useDispatch } from 'react-redux';

import {removetocard} from './toCardSlice';
import ToCardList from "./ToCardList";


const Chekout = () => {
    const dispatch = useDispatch();
    const id = 1;
    const idcard = 2;
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
    } = useCart();
    if (isEmpty) return <p className="title-checkout">Your Cart is Empty</p>
    return(              
                    <div>
                        <div className="conteiner-checkout-adress">
                            <div className="conteiner-checkout-col-1">
                                <p className="title-checkout">Shipping Address</p>
                                <p className="conteiner-checkout-adress-text">
                                <ToAdressList />                               
                                </p>
                            </div>
                            <div className="conteiner-checkout-col-2">
                                <Link to="../Checkout_adress_page" className="conteiner-checkout-link" onClick={() => dispatch(removetoadress({id}))}>Change</Link>
                            </div>
                        </div>
                        <div className="conteiner-checkout-payment">
                            <div className="conteiner-checkout-col-1">
                                <p className="title-checkout">Payment Method</p>
                                <ToCardList/>
                                
                            </div>
                            <div className="conteiner-checkout-col-2">
                                <Link to="../Checkout_payment_page" className="conteiner-checkout-link" onClick={() => dispatch(removetocard({idcard}))}>Change</Link>
                            </div>
                        </div>
                            <div className="conteiner-checkout">
                                <p className="title-checkout">Review you Bag</p>
                                {items.map((item,index)=>{
                                    return(
                                    <div className="conteiner-checkout-cart" key={index}>
                                        <div className="conteiner-bag-cart-for-img">
                                            <img src={item.img} className="conteiner-bag-cart-img"/>
                                        </div>
                                        <div className="conteiner-bag-cart-text">
                                            <p className="conteiner-bag-cart-title">{item.title} </p>
                                            <p className="conteiner-bag-cart-desc">{item.desc} </p>
                                            <p className="conteiner-bag-cart-desc">{item.short_description} </p>
                                            <p className="conteiner-bag-cart-price">${item.price} x {item.quantity} </p>
                                                <p className="conteiner-bag-cart-item-change">
                                                    <FaMinus onClick={()=> updateItemQuantity(item.id , item.quantity - 1)} className="conteiner-bag-cart-item-change-minus"/>
                                                    <p className="conteiner-bag-cart-quantity">{item.quantity}</p>
                                                    <FaPlus onClick={()=> updateItemQuantity(item.id , item.quantity + 1)} className="conteiner-bag-cart-item-change-plus"/>
                                                </p>
                                            
                                        </div>
                                        
                                    </div>
                                )})}
                            </div>
                            
                    
                            <div className="conteiner-bag-cart-total-after">
                            <p className="conteiner-cart-total">Bag Total: ${cartTotal}</p>
                            <Link to="../Bag_page" className="btn-link"><FaShoppingCart/>Checkout</Link>
                            </div>
                    </div>
        
    );
};
export default Chekout;