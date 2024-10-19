import React, { useRef } from 'react';
import useLogin from '../../hooks/useLogin';
// import useFormHandler from '../../forms/formHandler';
import api from '../../axios/api'; 
export default function Register () {

    const { goToLogin } = useLogin();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const imageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            image: imageRef.current.value,
          };
          
        console.log(userData);
        try {
            api.post('/register', userData)
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
                            id="email" type="email" 
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
                    
                    <div className="flex flex-col items-start justify-center w-full">
                    <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="dropzone-file">Image <span className=" text-red-600">*</span></label>
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-60 lg:w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 mb-4">
                            <div className="flex items-center justify-center gap-4">
                                <svg className=" w-5 h-5 lg:w-6 lg:h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                               <div className=" ">
                                    <p className=" mb-0.5 text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 hidden lg:block">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                               </div>
                            </div>
                            <input 
                                ref={imageRef}
                                name='image' 
                                id="dropzone-file" 
                                type="file" 
                                className="hidden" />
                        </label>
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














// import React, { useRef } from 'react';
// import axios from 'axios';

// export default function Register() {

   
    
//     const nameRef = useRef();
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const imageRef = useRef();
    
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const userData = {
//           name: nameRef.current.value,
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//           image: imageRef.current.value,
//         //   role: 'admin', // أو أي قيمة أخرى مطلوبة
//         };
      
//         console.log(userData);
        
//         try {
//           const response = await axios.post('http://localhost:5000/api/user/register', userData);

//           console.log('User registered:', response.data);
//         } catch (error) {
//             if (error.response && error.response.status === 400) {
//                 console.error('Error registering user:', error.response.data.msg); 
//                 alert(error.response.data.msg); 
//               } else {
//                 console.error('Error registering user:', error.response.data);
//               }
//         }
//       };
      





//     return <>
//         <section className="bg-gray-50 dark:bg-gray-900">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//                     <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
//                     Flowbite    
//                 </a> */}
//                 <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                             Create an account
//                         </h1>
//                         <form onSubmit={ handleSubmit } className="space-y-4 md:space-y-6" action="#">
                            
//                             <div>
//                                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
//                                 <input ref={nameRef} type="name" name="name" id="name" placeholder="Enter name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                                 <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                                 <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                             </div>
//                             <div>
//                                 <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your image</label>
//                                 <input ref={imageRef} type="file" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//                             </div>

//                             <div className="flex items-start">
//                                 <div className="flex items-center h-5">
//                                     <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
//                                 </div>
//                                 <div className="ml-3 text-sm">
//                                     <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
//                                 </div>
//                             </div>

//                             <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
//                             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                                 Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
// }