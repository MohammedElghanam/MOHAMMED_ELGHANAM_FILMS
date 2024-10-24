import React, { useRef } from 'react';
import useLogin from '../../hooks/useLogin';
import api from '../../axios/api'; 
export default function Register () {

    const { goToLogin } = useLogin();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const roleRef= useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
    
        formData.append('name', nameRef.current.value);
        formData.append('email', emailRef.current.value);
        formData.append('password', passwordRef.current.value);
        formData.append('role', roleRef.current.value);          
        // console.log(userData);


        try {
            api.post('/register', formData)
            .then((response) => {
                console.log(response.data); 
                goToLogin();               
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    console.error('Error registering user:', error.response.data.msg); 
                    alert(error.response.data.msg); 
                } else {
                    console.error('Error registering user:', error.response.data);
                }
            })
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Error registering user:', error.response.data.msg); 
                alert(error.response.data.msg); 
           } else {
                console.error('Error registering user:', error.response.data);
           }
        }
    }

    return <>
        <div className=" w-full h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
            <div className=" bg-white px-5 lg:px-10 py-7 rounded-lg shadow-xl">
                <h1 className=" text-center mb-3 lg:mb-6 font-semibold text-gray-900 text-lg lg:text-xl">Create a new account</h1>
                <form onSubmit={ handleSubmit }>
                    <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="name">Username <span className=" text-red-600">*</span></label>
                        <input 
                            ref={nameRef}
                            name='name' 
                            id="name" 
                            type="text" 
                            placeholder=" Enter Username" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                    </div>
                    <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Email Address <span className=" text-red-600">*</span></label>
                        <input 
                            ref={emailRef}
                            name='email' 
                            id="email" 
                            type="email" 
                            placeholder=" Enter Email Address" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                    </div>
                    <div className="  flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="password">Password <span className=" text-red-600">*</span></label>
                        <input 
                            ref={passwordRef}
                            name='password' 
                            id="password" 
                            type="password" 
                            placeholder=" Enter Password" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                    </div>                    

                    <div className="">
                        <button className=" w-full h-8 lg:h-9 bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold text-sm lg:text-base">Register</button>
                    </div>
                    <hr className=" my-2 lg:my-4 border-gray-400 "/>                    
                    <div className=" flex justify-center items-center">
                        <p className=" text-xs lg:text-sm font-medium text-gray-800">Back to 
                        <a onClick={ goToLogin } className=" text-blue-500" href=""> Login.</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>
}