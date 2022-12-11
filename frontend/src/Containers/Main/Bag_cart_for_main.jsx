import React from "react";
import { useCart } from "react-use-cart"
import './Bag_cart_for_main.css'
import { Link } from 'react-router-dom'
import {  FaShoppingBag } from 'react-icons/fa';
import {  RiDeleteBin7Line} from 'react-icons/ri';
const Bag_cart_for_main = () => {
    const {
        items,
        isEmpty,
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
                                
                          <Link to="../Bag_page" className="btn-link-for-main"><FaShoppingBag/>View Bag</Link>
                    </div>
        </section>
    );
};
export default Bag_cart_for_main;