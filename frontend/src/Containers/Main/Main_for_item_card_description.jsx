import React from "react";
//import Data from "../Main/Data"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io';
import Itemcard_description from "../Main/Itemcard_description";
import "./Main_for_item_card_description.css"

import {useEffect, useState} from "react";
import axios from 'axios';

function Main_for_item_card_description ()  {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/products');
        setProducts(result.data);
      };
      fetchData();
    }, []);

        const {_id} = useParams();
        

        const filtereditems = products.filter(item =>{
                 return (item._id == _id)
        });
    return(
        <div>
                    <Link to="/Main_page" className="link-back"><IoIosArrowBack/>Back</Link><br></br>
                    
                    {filtereditems.map((item , index)=>{
                    return (
                        <Itemcard_description
                            categories={item.categories}
                            img={item.img}
                            img_second={item.img_second}
                            img_third={item.img_third}
                            title={item.title} 
                            short_description={item.short_description}
                            description={item.description}
                            desc={item.desc} 
                            price={item.price}
                            _id={item._id}
                            item={item}
                            key={index}
                        />
                    
                    )
                })}
        </div>
)
} 
export {Main_for_item_card_description}