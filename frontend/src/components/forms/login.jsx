import React, { useState, useRef} from 'react';
import axios from 'axios';
import Forgot from './forgot';

export default function Login() {

    const [popup, setPopup] = useState(false);
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try {
            axios.post('http://localhost:5000/api/user/login', data)
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    console.log('user connected successfly');
                    window.location.href = '/client';
                })
                .catch((error) => {
                    console.error(error.response ? error.response.data : error.message); 
                });
        } catch (error) {
            console.error('Unexpected error:', error); 
        }
        
    }

    const showPopup = (e) => {
        e.preventDefault();
        setPopup(true);
    }

    const closePopup = (e) => {
        e.preventDefault();
        setPopup(false);
    }


    return <>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={ handleSubmit } className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input ref={emailRef} autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input ref={passwordRef} autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                <div className="relative flex justify-end items-center">
                                    <button className="text-blue-500" onClick={ showPopup } >forgot password</button>
                                </div>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white w-full rounded-md px-2 py-1">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        { popup ? <Forgot closePopup={ closePopup } /> : ''}
    </>
}