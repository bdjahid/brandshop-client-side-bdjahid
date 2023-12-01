import { Navigate, useLocation } from "react-router-dom";



const PrivateRouter = () => {
    const location = useLocation();
    return <Navigate state={{ from: location }} to="/login"></Navigate>
};

export default PrivateRouter;