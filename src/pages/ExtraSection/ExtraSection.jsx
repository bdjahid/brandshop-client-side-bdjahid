import img from '../../../public/img/ytuyuy.jpeg';
import img2 from '../../../public/img/image.jpeg';
import img3 from '../../../public/img/images.jpeg';
import img4 from '../../../public/img/jyy.jpeg';


const ExtraSection = () => {
    return (
        <div className='text-center my-10'>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={img} alt="car" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="car" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="car" />
                </div>

                <div className="carousel-item">
                    <img src={img4} alt="car" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;