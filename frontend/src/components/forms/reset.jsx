import React, { useRef } from 'react';
import axios from 'axios';

export default function Reset() {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const resetFormSubmit = (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            console.log("Please confirm password correctly.");
            return;
        }

        const reset_token = localStorage.getItem('reset_Token');
        // return console.log(reset_token);        

        const data = {
            resetToken: reset_token,
            newPassword: passwordRef.current.value
        };

        axios.post('http://localhost:5000/api/user/resetPassword', data)
            .then(response => {
                console.log("Password reset successfully.");
                localStorage.removeItem('reset_token');
                window.location.href = '/login';
            })
            .catch(err => {
                console.log(err.response ? err.response.data : err.message);
            });
    };

    return (
        <>
            <div className="absolute top-0 flex justify-center items-center w-full h-screen bg-red-700 z-50">
                <div className="px-10 py-16 bg-white w-96 flex flex-col justify-center items-center rounded-xl">
                    <div className="w-full flex justify-between items-end mb-10">
                        <h1>Reset Password</h1>
                    </div>
                    <form onSubmit={resetFormSubmit}>
                        <input
                            ref={passwordRef}
                            type="password"
                            className="mb-6 bg-blue-700 w-64 h-10"
                            placeholder="Enter password"
                        />
                        <input
                            ref={confirmPasswordRef}
                            type="password"
                            className="mb-6 bg-blue-700 w-64 h-10"
                            placeholder="Confirm password"
                        />
                        <button className="bg-yellow-500 p-2 rounded-lg">Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    );
}