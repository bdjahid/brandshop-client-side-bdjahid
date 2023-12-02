import { createBrowserRouter } from "react-router-dom";
import Root from './../layouts/Root';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Blogs from "../pages/Blogs/Blogs";
import Brand from "../pages/Brand/Brand";
import UpdateCar from './../pages/UpdateCar/UpdateCar';
import Details from './../pages/Details/Details';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/brand",
                element: <Brand></Brand>,
                loader: () => fetch('http://localhost:5000/car')

            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)

            },
            {
                path: "/update/:id",
                element: <UpdateCar></UpdateCar>,
                loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)

            },
            {
                path: "/cart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
]);
export default router;