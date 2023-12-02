import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateCar = () => {
    const products = useLoaderData()
    const { _id, photo, name, brand, price, rating, type } = products
    const handleUpdate = e => {
        e.preventDefault()
        console.log('click')
        const from = e.target;
        const photo = from.photo.value;
        const name = from.name.value;
        const brand = from.brand.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const type = from.type.value;

        // console.log(photo, name, brand, price, rating, description, type);
        const UpdateCar = { photo, name, brand, price, rating, type };
        console.log(UpdateCar)

        // send data to the server -post

        fetch(`http://localhost:5000/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className="my-10">
            <h2>fhughdfuhggh{products.length}</h2>
            <h2 className="text-5xl font-extrabold">Update a Car</h2>
            <form onSubmit={handleUpdate} className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter Car name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Enter Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Enter Car Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Enter rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select className="input input-bordered"
                            id="type"
                            name="type"
                            defaultValue={type}
                        >
                            <option value="">Select Type</option>
                            <option value="phone">Car</option>
                            <option value="phone">Phone</option>
                            <option value="computer">Computer</option>
                            <option value="headphone">Headphone</option>
                        </select>

                    </div>
                </div>

                <button className="btn w-full mt-2">Submit</button>
            </form>
        </div>
    );
};

export default UpdateCar;