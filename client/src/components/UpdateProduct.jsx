import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateProduct = ({allProducts, setAllProducts}) => {
    const {id} = useParams();
    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        // console.log(allProducts);
        const product = allProducts.find(obj => obj._id === id);
        setProductTitle(product.title);
        setProductPrice(product.price);
        setProductDescription(product.description);
    }, [])

    const newProductHandler = (event) => {
        event.preventDefault();
        // create new Product
        const updateProduct = {
            title: productTitle,
            price: productPrice,
            description: productDescription
        };
        axios.put(`http://127.0.0.1:8000/api/products/${id}`, updateProduct)
            .then(
                res => {
                    console.log(res.data);
                    const updatedAllProducts = [...allProducts];
                    const idIndex = updatedAllProducts.findIndex(product => product._id === id)
                    updatedAllProducts[idIndex].title = productTitle;
                    updatedAllProducts[idIndex].price = productPrice;
                    updatedAllProducts[idIndex].description = productDescription;
                    setAllProducts(updatedAllProducts);
                    navigate("/");
                }
            )
            .catch(err => console.log(err));

    }
    return(
        <div>
            <form onSubmit={newProductHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={productTitle} onChange={event => setProductTitle(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" value={productPrice} onChange={event => setProductPrice(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" value={productDescription} onChange={event => setProductDescription(event.target.value)}/>
                </div>
                <button>Update</button>
            </form>
            <p className='text-right'>
                <Link to={"/"}>Return Home</Link>
            </p>
        </div>
    );
}
export default UpdateProduct;