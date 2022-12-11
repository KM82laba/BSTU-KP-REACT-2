import React from 'react'
import { CartProvider } from "react-use-cart"
import Bag_cart_for_main from '../Main/Bag_cart_for_main';
import Main from '../Main/Main';
import './Main_page.css';
function Main_page () {
  return (
    <div className="main">
      <div className="conteiner">
        <CartProvider>
          <div className="col_1-1">
            <Main/>
          </div>
          <div className="col_1-2">
            <Bag_cart_for_main/>
          </div>
        </CartProvider>
      </div>
    </div>
  );
};
export default Main_page;

