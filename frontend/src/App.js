import React from 'react';

import './App.css'
import './Adaptive.css'
import NavBar from './Containers/NavBar/NavBar';
import {BrowserRouter,Routes,Route } from  'react-router-dom';
import Bag_page from './Containers/Pages/Bag_page';
import Main_page from './Containers/Pages/Main_page';
import Home_page from './Containers/Pages/Home_page';
import {Itemcard_description_page} from './Containers/Pages/Itemcard_description_page';
import Checkout_page from './Containers/Pages/Checkout_page';
import Checkout_adress_page from './Containers/Pages/Checkout_adress_page';
import Checkout_payment_page from './Containers/Pages/Checkout_payment_page';
function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <NavBar>
          <Routes>
              <Route path="/" element={<Home_page/>}/>
              <Route path="Home_page" element={<Home_page/>}/>
              <Route path="Bag_page" element={<Bag_page/>}/>
              <Route path="Main_page" element={<Main_page/>}/>
              <Route path="Main_page/:_id" element={<Itemcard_description_page/>}/>
              <Route path="Checkout_page" element={<Checkout_page/>}/>
              <Route path="Checkout_adress_page" element={<Checkout_adress_page/>}/>
              <Route path="Checkout_payment_page" element={<Checkout_payment_page/>}/>
          </Routes>
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
