import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";



function ProductDetails()
{

    const {id}= useParams()
    const product= products.find((item)=>(item.id) === Number(id))

    if(!product)
    {
        return <h2>product not found</h2>
    }

    return(<div>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <h3>{product.description} </h3>
    </div>)
};

export default ProductDetails;