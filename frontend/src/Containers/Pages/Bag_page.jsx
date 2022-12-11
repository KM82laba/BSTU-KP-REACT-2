import React from 'react'
import { CartProvider } from "react-use-cart"
import Cart from '../Main/Cart';
import Bag_cart_for_bag from '../Main/Bag_cart_for_bag';
import './Bag_page.css'
const  Bag_page = () => {
  return (
    <div className="main">
      <CartProvider>
      <div className="col_1-1">
          <Cart/>
      </div>
      <div className="col_1-2">
          <Bag_cart_for_bag/>
      </div>
      </CartProvider>
    </div>
  );
};
export default Bag_page;
