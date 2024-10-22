import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';  
export default function CreateFilm ({ umountFilmPopup }) {


    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const imageRef = useRef();
    const videoRef = useRef();
    const categoryRef = useRef();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dislayCategorys();
    }, []);

    const dislayCategorys = () => {
        try {
            axios.get('http://localhost:5000/api/categories/read', {})
            .then((response) => {
                console.log(response.data);    
                setCategories(response.data);            
            })
            .catch((error) => {

            })
        } catch (error) {
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
    
        formData.append('title', titleRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('releaseYear', dateRef.current.value);
        formData.append('image', imageRef.current.files[0]);
        formData.append('video', videoRef.current.files[0]);
        formData.append('categoryId', categoryRef.current.value);
          
        // return console.log(formData);

        try {
            axios.post('http://localhost:5000/api/films/create', formData)
            .then((response) => {
                console.log(response.data);

                titleRef.current.value = '';
                descriptionRef.current.value = '';
                dateRef.current.value = '';
                imageRef.current.value = ''; 
                videoRef.current.value = ''; 
                categoryRef.current.value = '';

                if (response.status == 200 ) {
                    alert(response.data.message);
                }

            })
            .catch((error) => {
                if (error.response && error.response.status === 500) {
                    console.error('Error creation film:', error.response.data.msg); 
                    alert(`Error creation film: ${error.response.data.msg}`); 
                } else {
                    console.error('Error creation film:', error.response.data);
                }
            })
        } catch (error) {
            if (error.response && error.response.status === 500) {
                console.error('Error creation film:', error.response.data.msg); 
                alert(`Error creation film: ${error.response.data.msg}`); 
           } else {
                console.error('Error creation film:', error.response.data);
           }
        }
    }

    return <>
        <div className=" absolute top-0 w-full h-screen flex justify-center items-center bg-gray-500 bg-opacity-50 overflow-hidden">
            <div className=" bg-white px-5 lg:px-10 py-4 rounded-lg shadow-xl">
                <div className=" flex justify-between items-center">
                    <h1 className=" text-center mb-1 font-semibold text-gray-900 text-lg lg:text-xl">Create a new film</h1>
                    <i onClick={ umountFilmPopup } className="fa-solid fa-xmark "></i>
                </div>
                <form onSubmit={ handleSubmit }>
                    <div className=" flex flex-col justify-center items-start mb-1">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="title">Title: <span className=" text-red-600">*</span></label>
                        <input
                            ref={ titleRef }
                            name="title" 
                            type="text" 
                            placeholder=" Enter title" 
                            required 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                    </div>
                    <div className=" flex flex-col justify-center items-start mb-1">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Description: <span className=" text-red-600">*</span></label>
                        <textarea 
                            ref={ descriptionRef }
                            name="description"
                            placeholder=" Enter Description" 
                            required 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                    </div>
                    <div className="  flex flex-col justify-center items-start mb-1">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="password">Release Year: <span className=" text-red-600">*</span></label>
                        <input
                            ref={ dateRef } 
                            type="date" 
                            name="date"
                            placeholder=" Enter releaseYear" 
                            required 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                    </div>                    
                    
                    <div className="flex flex-col items-start justify-center w-full">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="dropzone-file">Image: <span className=" text-red-600">*</span></label>
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-60 lg:w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 mb-1">
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
                                className="hidden" 
                            />
                        </label>
                    </div> 

                    <div className="flex flex-col items-start justify-center w-full">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="dropvidio-file">Video: <span className=" text-red-600">*</span></label>
                        <label htmlFor="dropvidio-file" className="flex flex-col items-center justify-center w-60 lg:w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 mb-1">
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
                                ref={videoRef}
                                name='video' 
                                accept="video/*"
                                id="dropvidio-file" 
                                type="file" 
                                className="hidden" 
                            />
                        </label>
                    </div> 

                    <div className="  flex flex-col justify-center items-start mb-1">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="password">Category: <span className=" text-red-600">*</span></label>
                        <select ref={ categoryRef } name="" id="" className=' w-full h-8 lg:h-9 border-[1px] border-gray-500 rounded-md mb-1'>
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.title} 
                          </option>
                        ))}
                        </select>
                    </div> 

                    <div className="">
                        <button className=" w-full h-8 lg:h-9 bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold text-sm lg:text-base">create film</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

