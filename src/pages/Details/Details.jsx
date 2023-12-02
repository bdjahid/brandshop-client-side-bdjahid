
import { useLoaderData } from "react-router-dom";




const Details = () => {
    const product = useLoaderData();
    // console.log(product)
    const { _id, name } = product;
    // console.log(typeof (_id))
    // const product = products.find(product => product._id == _id)
    // console.log(product)


    return (
        <div>
            ppppppppppp
        </div>
    );
};

export default Details;