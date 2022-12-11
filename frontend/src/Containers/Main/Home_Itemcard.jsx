import React from "react";

import Itemcard from "./Itemcard";

import {useEffect, useState} from "react";
import axios from 'axios';

function Home_Itemcard ()  {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/products');
        setProducts(result.data);
      };
      fetchData();
    }, []);
    return(
        <div>
                    {products.map((item , index)=>{
                    for(const i = 3 ; index <= i ; index++){
                    return (
                        <Itemcard
                            categories={item.categories}
                            img={item.img}
                            img_second={item.img_second}
                            img_third={item.img_third}
                            title={item.title} 
                            short_description={item.short_description}
                            description={item.description}
                            desc={item.desc} 
                            price={item.price}
                            id={item.id}
                            item={item}
                            key={index}
                        />
                    
                    )
                    }
                })}
        </div>
)
} 
export default Home_Itemcard