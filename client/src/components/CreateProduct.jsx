import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const CreateProduct = ({allProducts, setAllProducts}) => {
    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState("");
    const navigate = useNavigate();

    const newProductHandler = (event) => {
        event.preventDefault();
        // create new Product
        const newProduct = {
            title: productTitle,
            price: productPrice,
            description: productDescription
        };
        axios.post("http://127.0.0.1:8000/api/products", newProduct)
            .then(
                res => {
                    console.log(res.data);
                    setAllProducts([...allProducts, res.data.products]);
                    console.log(allProducts);
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
                <button>Create</button>
            </form>
            <p className='text-right'>
                <Link to={"/"}>Return Home</Link>
            </p>
        </div>
    );
}
export default CreateProduct;