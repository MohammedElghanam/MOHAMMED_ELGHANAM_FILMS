import useLogin from '../../hooks/useLogin';
export default function Register () {

    const { goToLogin } = useLogin();

    return <>
        <div className=" w-full h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
            <div className=" bg-white px-5 lg:px-10 py-7 rounded-lg shadow-xl">
                <h1 className=" text-center mb-3 lg:mb-6 font-semibold text-gray-900 text-lg lg:text-xl">Create a new account</h1>
                <form action="">
                    <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="name">Username <span className=" text-red-600">*</span></label>
                        <input className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="name" type="text" placeholder=" Enter Username" />
                    </div>
                    <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Email Address <span className=" text-red-600">*</span></label>
                        <input className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="email" type="email" placeholder=" Enter Email Address" />
                    </div>
                    <div className="  flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="password">Password <span className=" text-red-600">*</span></label>
                        <input className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="password" type="password" placeholder=" Enter Password" />
                    </div>                    
                    
                    <div class="flex flex-col items-start justify-center w-full">
                    <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="dropzone-file">Image <span className=" text-red-600">*</span></label>
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-60 lg:w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 mb-4">
                            <div class="flex items-center justify-center gap-4">
                                <svg class=" w-5 h-5 lg:w-6 lg:h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                               <div className=" ">
                                    <p class=" mb-0.5 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 hidden lg:block">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                               </div>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
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