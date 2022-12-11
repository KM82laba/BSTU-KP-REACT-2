import React from 'react'

import Checkout_adress from '../Main/Checkout_adress';
import { addtoadress } from '../Main/toadressSlice';

import {  useState   } from 'react';
import { useDispatch } from 'react-redux';




const  Checkout_adress_page = () => {

  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    
      dispatch(addtoadress({name}));
      dispatch(addtoadress({street}));
      dispatch(addtoadress({city}));
      dispatch(addtoadress({country}));
      
  }

  return (
    <div className='App'>
        <Checkout_adress
          valuename={name}
          valuestreet={street}
          valuecity={city}
          valuecountry={country}
          updateName={setName}
          updateStreet={setStreet}
          updateCity={setCity}
          updateCountry={setCountry}
          handleAction={handleAction}
        />
    </div>
  );
};
export default Checkout_adress_page;
