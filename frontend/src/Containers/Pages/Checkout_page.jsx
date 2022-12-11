import React from 'react'
import { CartProvider } from "react-use-cart"
import Checkout from '../Main/Checkout';
import Checkout_total from '../Main/Checkout_total';
import './Bag_page.css'
const  Checkout_page = () => {
  return (
    <div className="main">
      <CartProvider>
      <div className="col_1-1">
          <Checkout/>
      </div>
      <div className="col_1-2">
          <Checkout_total/>
      </div>
      </CartProvider>
    </div>
  );
};
export default Checkout_page;
