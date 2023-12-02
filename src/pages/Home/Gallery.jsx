import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";



const Gallery = () => {
    const [gallerys, setGallerys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setGallerys(data))

    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold">Our Gallery</h1>
                <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">

                {
                    gallerys.map(gallery => <GalleryCard
                        key={gallery._id}
                        gallery={gallery}
                    ></GalleryCard>)
                }

            </div>
        </div>
    );
};

export default Gallery;