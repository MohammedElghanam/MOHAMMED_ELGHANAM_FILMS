import React, {useRef} from 'react';
import axios from 'axios';

export default function Forgot({closePopup}) {

    const emailRef = useRef();

    const fromSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: emailRef.current.value
        }
        // console.log(emailRef.current.value);

        try {
            axios.post('http://localhost:5000/api/user/forgotPassword', data)
            .then((response) => {
                localStorage.setItem('reset_Token', response.data.reset_Token);
                console.log(response.data);                
            })
            .catch((err) => {
                console.log(err);                
            })
        } catch (error) {
            console.log(error);            
        }
        
    }

    return <>
        <div className=' absolute top-0 flex justify-center items-center w-full h-screen bg-red-700 z-50'>
            <div className=" px-10 py-16 bg-white w-96 flex flex-col justify-center items-center rounded-xl">
                <div className=" w-full flex justify-between items-end mb-10">
                    <h1>forgot password </h1>
                    <button onClick={ closePopup }>close</button>
                </div>
                <form onSubmit={ fromSubmit } action="">
                    <input 
                        ref={emailRef} 
                        type="email" 
                        className=' mb-6 bg-blue-700 w-64 h-10' 
                        placeholder='enter email' 
                    />
                    <button className=' bg-yellow-500 p-2 rounded-lg'>Send Email</button>
                </form>
            </div>
        </div>
    </>
}
