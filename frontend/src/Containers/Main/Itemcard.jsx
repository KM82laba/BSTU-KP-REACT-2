import React from "react";
import { useCart } from "react-use-cart";
import {BsBagPlusFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Itemcard.css'

function Itemcard (props) {
const { addItem } = useCart();
    return(
        <div className="card-style">
                {/*<button onClick={()=>console.log(4) } ><img src={props.img} class="card-img-style" /></button>*/}
                <div className="conteiner-card-image"><Link to ={`/Main_page/${props._id}`} key={props._id} className="link-to-itemcard-discription"><img src={props.img} class="card-img-style"/></Link></div><br></br>
                <p class="title-style">{props.title}</p><br></br>
                <p class="desc-style">{props.desc}</p><br></br>
                <p class="price-style">${props.price}</p><button class="button-style" onClick={()=>addItem(props.item)}><BsBagPlusFill/></button>
        </div>
);
};
export default Itemcard;
