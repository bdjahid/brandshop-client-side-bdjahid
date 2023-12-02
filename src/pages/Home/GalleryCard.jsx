import { Link } from "react-router-dom";



const GalleryCard = ({ gallery }) => {
    const { _id, photo, name } = gallery;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <Link to="/brand">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default GalleryCard;