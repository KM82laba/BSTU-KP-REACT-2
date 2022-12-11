import React from 'react'

import Checkout_payment from '../Main/Checkout_payment';
import { addtocard } from '../Main/toCardSlice';

import {  useState   } from 'react';
import { useDispatch } from 'react-redux';




const  Checkout_payment_page = () => {

  const [cardholder, setcardholder] = useState('');
  const [cardnumber, setcardnumber] = useState('');
  const [date, setdate] = useState('');
  const [cvc, setcvc] = useState('');
  const dispatch = useDispatch();


  const handleAction = () => {
    
      dispatch(addtocard({cardholder}));
      dispatch(addtocard({cardnumber}));
      dispatch(addtocard({date}));
      dispatch(addtocard({cvc}));
      
  }

  return (
    <div className='App'>
        <Checkout_payment
          valuecardholder={cardholder}
          valuecardnumber={cardnumber}
          valuedate={date}
          valuecvc={cvc}
          updateCardholder={setcardholder}
          updateCardnumber={setcardnumber}
          updateDate={setdate}
          updateCvc={setcvc}
          handleAction={handleAction}
        />
    </div>
  );
};
export default Checkout_payment_page;
