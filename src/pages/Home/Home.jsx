import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraTwo from "../ExtraTwo/ExtraTwo";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ExtraTwo></ExtraTwo>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;