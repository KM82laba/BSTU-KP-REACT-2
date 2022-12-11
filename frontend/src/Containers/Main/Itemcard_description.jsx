import React from "react";
import { useCart } from "react-use-cart";
import {BsBagPlusFill} from 'react-icons/bs';
import './Itemcard_description.css'
import { useState } from "react";

function Itemcard_description (props) {
const { addItem } = useCart();
const [selectedImg , setselectedImg ] = useState('');

    return(
        <div className="card-style-description">
                
                <div className="conteiner-card-image-description">
                        <div className="conteiner-image-col_1-description">
                                <div className="conteiner-style-image-description" style = {{ backgroundImage: `url(${props.img})` }} onClick={() => setselectedImg(props.img)} ></div>
                                <div className="conteiner-style-image-description" style = {{ backgroundImage: `url(${props.img_second})` }} onClick={() => setselectedImg(props.img_second)} ></div>
                                <div className="conteiner-style-image-description" style = {{ backgroundImage: `url(${props.img_third})` }} onClick={() => setselectedImg(props.img_third)} ></div>
                        </div>
                        <div className="conteiner-image-col_2-description" style = {{ backgroundImage: `url(${selectedImg || props.img})` }}>
                        
                        </div>

                </div>
                <div className="conteiner-card-title-description">
                        <p class="title-style-description">{props.title}</p><br></br>
                        <p class="desc-style-description">{props.desc}</p><br></br>
                        <p class="description-style-short-description">{props.short_description}</p><br></br>
                        <p class="price-style-description">${props.price}</p>
                        <button class="button-style-description" onClick={()=>addItem(props.item)}><BsBagPlusFill/> Add to Bag</button>
                </div>
                
                <div className="conteiner-card-text-description">
                <p className="description-stylep-title-description">Description</p>
                <p className="description-style-description">{props.description}</p>
                </div>

        </div>
);
};
export default Itemcard_description;
