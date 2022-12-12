import React from 'react'
import './Home_page.css';

import Icon_1 from '../Main/img/icon_1.svg'
import Icon_2 from '../Main/img/icon_2.svg'
import Icon_3 from '../Main/img/icon_3.svg'
import Sale_img from '../Main/img/Sale_img.jpg'
import Headphone_img from '../Main/img/Headphone_img.jpg'

import Paralax_img_first from '../Main/Paralax_img_first'

import { Link } from 'react-router-dom'
import { CartProvider } from "react-use-cart"
import { useState } from 'react';
import ReactiveButton from 'reactive-button';

import Home_Itemcard from '../Main/Home_Itemcard';

function Home_page () {
  const [statebtn, setStatebtn] = useState('idle');
  const [email, setEmail] = useState('');
  const [message , setmessage] = useState('');

    const EmailValidation = () => {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
      if(regEx.test(email)){
        setStatebtn('loading');
        setTimeout(() => {
            setStatebtn('success');
        }, 2000);
      }else if(!regEx.test(email)&& email ==""){
        setmessage("");
      }else{
        setStatebtn('loading');
        setTimeout(() => {
            setStatebtn('error');
        }, 2000);
      }
    }

    const handleChange = (e) =>{
      setEmail(e.target.value);
    };

  return (
    <div>
      <div>
     <Paralax_img_first/>
     
     </div>
     
    <div className='conteiner-box'>
    <Link to="../Main_page"><div className="conteiner-sale" style = {{ backgroundImage: `url(${Sale_img})` }} ></div></Link>
     <div className="conteiner-headphone" style = {{ backgroundImage: `url(${Headphone_img})` }}>
      <p className='conteiner-headphone-text'>
        <h1>We have the best headphones</h1><br/>
        Go to the store and see for yourself
        <Link to="../Main_page"><div className='conteiner-box-btn-lik_to-store'>See more</div></Link>
        </p></div>
     </div>
     
     <CartProvider>
          <div className='conteiner-home-itemcard'>
            <Home_Itemcard/>
          </div>
      </CartProvider>
      <div className='conteiner-subscribe-title'>
    <p className='conteiner-subscribe-title'><h1>Subscribe to our newsletter</h1></p>
    </div>
    <div className='conteiner-subscribe-text'>
    <p className='conteiner-subscribe-text'>Subscribe to receive notifications about discounts</p>
    </div>
    <div className='conteiner-subscribe'>
      
      <input type="email" value={email} onChange={handleChange} className="conteiner-subscribe-input" placeholder='Email'/>
    </div>
    <div className='conteiner-subscribe-btn'>
      <ReactiveButton
              buttonState={statebtn}
              onClick={EmailValidation}
              color={'dark'}
              idleText={'Send'}
              loadingText={'Loading'}
              successText={'Success'}
              errorText={'Error'}
              type={'button'}
              outline={true}
              messageDuration={2000}
              
          />
      </div>
     <div className="conteiner-icon_boxes">
              <div className="conteiner-icon_box">
                  <div className="icon_box">
                    <div className="icon_box_image"><img src={Icon_1} alt=""/></div><br/>
                    <div className="icon_box_title">Free Shipping Worldwide</div>
                  </div>
                  <div className="icon_box">
                    <div className="icon_box_image"><img src={Icon_2} alt=""/></div><br/>
                    <div className="icon_box_title">Free Returns</div>
                  </div>
                  <div className="icon_box">
                    <div className="icon_box_image"><img src={Icon_3} alt=""/></div><br/>
                    <div className="icon_box_title">24h Fast Support</div>
                  </div>
              </div>
        </div>
        <p className='home_page-footer'>Estore © 2022</p>
    </div>
    
  );
};
export default Home_page;
