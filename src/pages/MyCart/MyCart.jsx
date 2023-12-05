import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";





const MyCart = () => {
    const { cart } = useContext(AuthContext);
    const data = useLoaderData()
    // console.log(data[0]._id)
    const id = data[0]._id
    console.log(id)


    const handleDelete = (id) => {
        console.log('click', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:7000/car/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
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
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default MyCart;