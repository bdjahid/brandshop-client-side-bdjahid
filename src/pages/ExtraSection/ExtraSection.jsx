import img from '../../../public/img/ytuyuy.jpeg';
import img2 from '../../../public/img/image.jpeg';
import img3 from '../../../public/img/images.jpeg';
import img4 from '../../../public/img/download.jpeg';
import img5 from '../../../public/img/ecosport.webp';
import img6 from '../../../public/img/USD30MBS761A021001 (1).webp';
import img7 from '../../../public/img/x7-exterior-right-front-three-quarter-8.webp';
import img8 from '../../../public/img/Maruti-Suzuki-Swift-feature-image.jpg';



const ExtraSection = () => {
    return (
        <div>
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
            {/*  */}
            <div className='text-center my-10'>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img className='w-48' src={img5} alt="car" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-48' src={img6} alt="car" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-48' src={img7} alt="car" />
                    </div>

                    <div className="carousel-item">
                        <img className='w-48' src={img8} alt="car" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;