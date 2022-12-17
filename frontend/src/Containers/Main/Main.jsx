import React from "react";
import Itemcard from "./Itemcard"
//import Data from "./Data"
import './Main.css'
import {useEffect, useState} from "react";
import axios from 'axios';



function Main ()  {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/products');
        setProducts(result.data);
      };
      fetchData();
    }, []);
    console.log(products)
    const [value, setvalue] = useState('')
    const filtereditems = products.filter(item =>{
        
        return item.title.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div>
            
            <input autoFocus type="text" autoComplete="off" placeholder="Search" className="input-search" onChange={(event)=>setvalue(event.target.value)}/>
            <div className="container-form_radio_btn">
                <div className="form_radio_btn">
                    <input id="All"type="radio" name="filter" value="All"  onClick={(event)=>{setvalue(event.target.value = '')}}/>
                    <label for="All">All</label>
                </div>
                <div className="form_radio_btn">
                    <input id="Headphones" type="radio" name="filter" value="Headphones"  onClick={(event)=>{setvalue(event.target.value = 'Headphones')}} />
                    <label for="Headphones">Headphones</label>
                </div>
                <div className="form_radio_btn">
                    <input id="Laptop" type="radio" name="filter" value="Laptop"  onClick={(event)=>{setvalue(event.target.value = 'Laptop')}} />
                    <label for="Laptop">Laptop</label>
                </div>
                <div className="form_radio_btn">
                    <input id="Watch" type="radio" name="filter" value="Watch"  onClick={(event)=>{setvalue(event.target.value = 'Watch')}} />
                    <label for="Watch">Watch</label>
                </div>
            </div>
           
            <div className="conteiner-main-card">
            {filtereditems.map((item , index)=>{
                return (
                    <Itemcard 
                        categories={item.categories}
                        img={item.img}
                        _id={item._id}
                        title={item.title} 
                        desc={item.desc} 
                        short_description={item.short_description}
                        price={item.price}
                        id={item.id}
                        item={item}
                        key={index}
                    />
                   
                )
            })}
            </div>

        </div>
);
};
export default Main;