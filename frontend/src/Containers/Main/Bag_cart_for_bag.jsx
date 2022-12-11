import React from "react";
import { useCart } from "react-use-cart"
import './Bag_cart_for_bag.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart} from 'react-icons/fa';
import {  RiDeleteBin7Line} from 'react-icons/ri';
const Cart = () => {
    const {
        items,
        isEmpty,
        cartTotal,
        removeItem
    } = useCart();
    if (isEmpty) return 
    return(
        <section>
                
                    <div className='conteiner-bag-for-main' >
                        <p className='title-bag-for-main'>Bag</p>
                            
                                {items.map((item,index)=>{
                                    return(
                                        <div key={index} className='conteiner-cart-for-main'>     
                                        <div className="conteiner-img-cart-bag-for-main" onClick={()=>removeItem(item.id)} style = {{ backgroundImage: `url(${item.img})` }}>
                                                <RiDeleteBin7Line className="delete-img-cart-for-main"/>
                                        </div>
                                        </div>
                                )})}
                            <p className="conteiner-cart-total">Bag Total: ${cartTotal}</p>
                          <Link to="../Checkout_page" className="btn-link-for-main"><FaShoppingCart/>Checkout</Link>
                    </div>
        </section>
    );
};
export default Cart;