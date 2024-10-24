import { useRef } from "react";
import axios from 'axios'; 

export default function CreateCategory ({ umountCategoryPopup }) {

    const titleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(titleRef.current.value);
        const title = titleRef.current.value;

        try {
            axios.post('http://localhost:5000/api/categories/create', { title })
            .then((response) => {
                console.log(response.data);                
                titleRef.current.value = '';               
                alert(response.data.msg); 
            })
            .catch((error) => {
                if (error.response && error.response.status === 404 || error.response.status === 500) {
                    console.error('Error :', error.response.data.error); 
                    alert(error.response.data.error); 
                } else {
                    console.error('Error :', error.response.data);
                }
            })
        } catch (error) {
            if (error.response && error.response.status === 404 || error.response.status === 500) {
                console.error('Error :', error.response.data.error); 
                alert(error.response.data.error); 
            } else {
                console.error('Error :', error.response.data);
            }
        }
    }

    return <>
        <div className=" w-full h-screen flex justify-center items-center absolute top-0 bg-gray-400 bg-opacity-50 overflow-hidden">
            <div className="">
                <div className=" bg-white p-5 lg:p-10 rounded-lg">
                    <div className=" flex justify-between items-center  mb-6">
                        <h1 className=" text-center font-semibold text-gray-800 text-lg lg:text-xl">Create Category</h1>
                        <i onClick={ umountCategoryPopup } className="fa-solid fa-xmark text-lg text-gray-800"></i>
                    </div>
                    <form onSubmit={ handleSubmit }>
                        <div className=" flex flex-col justify-center items-start mb-3">                            
                            <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="category">Title: <span className=" text-red-600">*</span></label>
                            <input ref={titleRef} className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="category" type="text" placeholder=" Enter category" />
                        </div>
                        <div className="">
                            <button className=" w-full h-8 lg:h-9 text-sm lg:text-base bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold"> Create category</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}