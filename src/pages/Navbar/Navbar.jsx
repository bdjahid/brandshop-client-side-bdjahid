import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/product">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="logo.jpeg" />
                </div>
                <a className="btn btn-ghost text-xl">Cars House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <p title={user?.email}>{user?.displayName}</p>
                <p>{user?.email}</p>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ms-2">
                    <div className="w-10 rounded-full">
                        {user &&
                            <img title={user?.email} src={user?.photoURL} alt="" />
                        }
                    </div>
                </label>
                {user ?
                    <button onClick={handleSignOut} className="btn btn-active btn-ghost ms-2">Log Out</button>
                    :
                    <Link to="/login">
                        <button className="btn btn-active btn-ghost ms-2">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;