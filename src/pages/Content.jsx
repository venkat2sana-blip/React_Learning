import React from "react";
import products from "../data/data";
import { Link } from "react-router-dom";


function Content()
{

   
    return(
    <div className="container">
        <h2>Products link</h2>
        <div className='grid'>
            {
                products.map((product)=>(
                    <div className='card' key={product.id}>
                        <h3>{product.title}</h3>
                         <Link to={`/content/${product.id}`}>view</Link>  
                    </div>

                ))
            }
        </div>
        
    </div>
)
};

export default Content;