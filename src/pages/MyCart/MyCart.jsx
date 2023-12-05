import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";





const MyCart = () => {
    const { cart } = useContext(AuthContext);
    const data = useLoaderData()
    const { _id } = data[0]._id
    console.log(_id)

    const handleDelete = (_id) => {
        console.log('click', _id)
    }

    return (
        <div>
            <h2>My Cart {data.length}</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img src={cart.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {cart.name}</h2>
                    <p>Brand : {cart.brand}</p>
                    <p>Price : {cart.price}</p>
                    <p>Rating : {cart.rating}</p>
                    <p>Type : {cart.type}</p>
                    <p>Description : {cart.description}</p>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default MyCart;