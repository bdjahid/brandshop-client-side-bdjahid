import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";


const ErrorPage = () => {
    return (
        <div className="text-center text-5xl mt-10">
            <h2 className="text-warning">Oops!!!</h2>

            <span className="flex justify-center mt-3 items-center">
                <Link to="/"> <MdKeyboardBackspace className="text-lime-500"></MdKeyboardBackspace></Link>
                <Link className="text-lime-500" to="/">Back to home</Link>
            </span>
        </div>
    );
};

export default ErrorPage;