
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'
import app from "../../firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app);
    const { signInUser } = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const emailRef = useRef(null);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm)

        // reset error
        setError('')
        setSuccess('')

        // validation and condition

        if (password !== confirm) {
            Swal.fire({
                title: 'Error!',
                text: 'Your password did not match',
                confirmButtonText: 'ok'
            })
            setError('Your password did not match')
            return;
        }


        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                // navigate after login
                navigate(from, { replace: true })
                // alert
                setSuccess('User logged in Successfully')
                Swal.fire({
                    title: 'Success!',
                    text: 'Wow User logged in Successfully',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('please provide a email', emailRef.current.value);
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email');
            return;
        }

        // send validation email
        sendPasswordResetEmail(auth, email,)
            .then(() => {
                alert('please check your email')
                // toast('please check your email')
                console.log('please check your email')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={show ? "text" : "password"}
                                    name="password" placeholder="password" className="input input-bordered w-full" required />
                                <span className="mt-3 absolute top-1 right-2" onClick={() => setShow(!show)}>
                                    {
                                        show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm</span>
                            </label>
                            <div className="relative">
                                <input type={show ? "text" : "password"} name="confirm" placeholder="Confirm Password" className="input input-bordered w-full" required />
                                <span className="mt-3 absolute top-1 right-2" onClick={() => setShow(!show)}>
                                    {
                                        show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <a href="#"
                                    onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Login</button>
                        </div>
                    </form>

                    <p className="text-center mb-5">New to create account<Link to="/register" className="ms-1 underline text-blue-800">Register</Link></p>
                    <div className="text-center mb-5">
                        {
                            error && <p className="text-red-800">{error}</p>
                        }
                        {
                            success && <p className="text-green-800">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;