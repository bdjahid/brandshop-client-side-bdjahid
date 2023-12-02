
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';



const Register = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [show, setShow] = useState(false);
    const { githubSignIn, googleSignIn, createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        console.log(name, photo, email, password, terms)


        // reset error
        setError('')
        setSuccess('')

        // validation and condition
        if (password < 6) {
            setError('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()])/.test(password)) {
            setError('Password should have at least one uppercase characters');
            return;
        }

        else if (!terms) {
            setError('Please accept our terms and conditions');
            return;
        }

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully')
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Wow User Created Successfully',
                    confirmButtonText: 'ok'
                })
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate(from, { replace: true })
                        console.log('profile update')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    // google
    const handleGoogleSign = () => {
        googleSignIn().then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            // setUser(loggedUser)
            // navigate(location?.state ? location.state : '/')
            navigate(from, { replace: true })
        })
            .catch(error => {
                console.log(error)
            })
    }
    // github
    const handleGithubSign = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
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
                            <div className="mt-2">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Register</button>
                        </div>
                    </form>
                    <div className="text-center mb-8">
                        <button onClick={handleGoogleSign} className="btn btn-outline mr-8 w-36">Google</button>
                        <button onClick={handleGithubSign} className="btn btn-outline w-36">Github</button>
                    </div>
                    <p className="text-center mb-5">Already have an account<Link to="/login" className="ms-1 underline text-blue-800">Login</Link></p>
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

export default Register;