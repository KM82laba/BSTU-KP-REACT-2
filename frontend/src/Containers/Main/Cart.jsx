import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "react-use-cart"
import './Cart.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart} from 'react-icons/fa';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <p className="title-cart">Your Cart is Empty</p>
    return(
                        <div>
                        
                                <p className="title-cart">Check your Bag Items</p>
                            
                                {items.map((item,index)=>{
                                    return(
                                    <div className="conteiner-bag-cart" key={index}>
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
                            
                    
                            <div className="conteiner-bag-cart-total-after">
                            <p className="conteiner-bag-cart-total">Bag Total: ${cartTotal}</p>
                            <Link to="../Checkout_page" className="btn-bag-link"><FaShoppingCart/>Checkout</Link>
                            </div>
                        </div>
        
    );
};
export default Cart;