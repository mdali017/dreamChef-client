import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const [error, setError] = useState('');
    const {user, createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user)

    const handleRegister = (event) =>{
        event.preventDefault()
        
        const form = event.target;
        const fullname = form.fullName.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6) {
            setError('Password must be min 6 Character')
            return;
        }else if(user){
            setError('user already exited')
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/');
        })
        .then(error => {
            console.log(error.message)
        })

        // console.log(fullname, photo, email, password);

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='fullName' placeholder="Enter Your Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <small><p className='text-red-500'>{error}</p></small>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary">Register Now</button>
                                <h3><small>Already Have An Account?? Please <Link to='/login' className="text-blue-600 underline font-semibold">Login</Link></small></h3>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;