
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";

const Details = () => {
    const products = useLoaderData();
    const { addCart } = useContext(AuthContext)

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
            <figure><img src={products.photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {products.name}</h2>
                <p>Brand : {products.brand}</p>
                <p>Price : {products.price}</p>
                <p>Rating : {products.rating}</p>
                <p>Type : {products.type}</p>
                <p>Description : {products.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => addCart(products)} className="btn btn-primary">addCart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;