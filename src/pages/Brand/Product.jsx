import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, photo, name, brand, price, rating, description, type } = product;



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 ms-8">
                <div className='space-y-3'>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Brand : {brand}</p>
                    <p>type : {type}</p>
                    <p>Price : {price}</p>
                    <p>Rating : {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-accent join-item">View</button>
                        <button className="btn  btn-accent join-item">Details </button>
                        <Link to={`/update/${_id}`}>
                            <button className="btn  btn-accent join-item">Update </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;