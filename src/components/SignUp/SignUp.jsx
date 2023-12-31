import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');
        if (password !== confirm) {
            setError('Password did not match')
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300"
                            placeholder="you@example.com"
                            // value={email}
                            // onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300"
                            placeholder="********"
                            // value={password}
                            // onChange={handlePasswordChange}
                            required
                        />
                        <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm"
                            name='confirm'
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-300"
                            placeholder="********"
                            // value={password}
                            // onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <p className='text-red-700 mb-3'> {error}</p>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className='underline text-blue-500 mt-3 text-center'><Link to='/login'>Already Have an account?</Link></p>
                <button
                    // onClick={handleGoogleLogin}
                    className="w-full bg-red-400 mt-5 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;