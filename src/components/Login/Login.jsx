import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Login</h2>
                <form >
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
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
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <p className='underline text-blue-500 mt-3 text-center'><Link to='/signup'>New to Amazon?</Link></p>

                <button
                    // onClick={handleGoogleLogin}
                    className="w-full bg-red-500 mt-5 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;