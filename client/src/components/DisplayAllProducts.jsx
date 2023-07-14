import React from 'react';
import {Link} from "react-router-dom";

const DisplayAllProducts = ({allProducts}) => {
    // Display a list of all pets
    console.log(allProducts);

    return(
        <div>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    { allProducts.map((product) => {
                        return (
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p><Link to={"/create/product"}>Add a new product</Link></p>
        </div>
    );
}
export default DisplayAllProducts;