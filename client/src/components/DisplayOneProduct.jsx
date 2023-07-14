import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

const DisplayOneProduct = ({allProducts, setAllProducts}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(allProducts);
        setProduct(allProducts.find(obj => obj._id === id));
    }, [])

    const DeleteHandler = (event) => {
        event.preventDefault();
        console.log(product);
        axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => {
                console.log(res);
                const updatedAllProducts = [...allProducts];
                const idIndex = updatedAllProducts.findIndex(product => product._id === id)
                updatedAllProducts.splice(idIndex, 1);
                setAllProducts(updatedAllProducts);
                navigate("/");
                }
            )
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Item: {product.title}</h3>
            <h5>Price: {product.price}</h5>
            <p>Description: {product.description}</p>
            <p><Link to={`/edit/${id}`}>Edit</Link></p>
            <p><Link onClick={DeleteHandler} >Delete</Link></p>
            <p><Link to={"/"}>Return Home</Link></p>

        </div>
    );
}
export default DisplayOneProduct;