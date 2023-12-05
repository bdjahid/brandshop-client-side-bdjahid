import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddCar = e => {
        e.preventDefault()
        console.log('click')
        const from = e.target;
        const photo = from.photo.value;
        const name = from.name.value;
        const brand = from.brand.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const description = from.description.value;
        const type = from.type.value;

        // console.log(photo, name, brand, price, rating, description, type);
        const newCar = { photo, name, brand, price, rating, description, type };
        console.log(newCar)

        // send data to the server -post

        fetch('http://localhost:7000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className="my-10">
            <h2 className="text-5xl font-extrabold">Add a Car</h2>
            <form onSubmit={handleAddCar} className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Car name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brand" placeholder="Enter Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter Car Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Enter Car description" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <select className="input input-bordered"
                        id="type"
                        name="type"
                    >
                        <option value="">Select Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="computer">Computer</option>
                        <option value="headphone">Headphone</option>
                    </select>

                </div>
                <button className="btn w-full mt-2">ADD A CAR</button>
            </form>
        </div>
    );
};

export default AddProduct;