import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";

const DisplayOneProduct = ({allProducts}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        // console.log(allProducts);
        setProduct(allProducts.find(obj => obj._id === id));
    }, [])

    return(
        <div>
            <h3>Item: {product.title}</h3>
            <h5>Price: {product.price}</h5>
            <p>Description: {product.description}</p>
            <p><Link to={"/"}>Return Home</Link></p>
        </div>
    );
}
export default DisplayOneProduct;