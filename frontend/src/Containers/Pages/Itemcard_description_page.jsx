import React from "react";

import { CartProvider } from "react-use-cart";
import Bag_cart_for_main from '../Main/Bag_cart_for_main';
import "./Itemcard_description_page.css"
import {Main_for_item_card_description} from '../Main/Main_for_item_card_description'
function Itemcard_description_page ()  {
        
    return(
        <div className="conteiner">
            <CartProvider>
            <div className="col_1-1">
                <Main_for_item_card_description/>
            </div>
            <div className="col_1-2" >
                <Bag_cart_for_main/>
            </div>
            </CartProvider>
        </div>
)
} 
export {Itemcard_description_page}