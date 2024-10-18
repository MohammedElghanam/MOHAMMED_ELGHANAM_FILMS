export default function Reset () {
    return <>
        <div className=" w-full h-screen flex justify-center items-center absolute top-0 bg-gray-100 overflow-hidden">
            <div className="">
                <div className=" bg-white p-4 lg:p-10 rounded-lg">
                    <div className=" flex flex-col justify-center items-center mb-4">
                        <h1 className=" text-center font-semibold text-gray-800 text-lg lg:text-xl mb-1">Reset Password</h1>
                        <hr className=" w-full border-gray-300"/>
                    </div>
                    <form action="">
                        <div className=" flex flex-col justify-center items-start mb-3">                            
                            <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="Password">Password <span className=" text-red-600">*</span></label>
                            <input className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="Password" type="Password" placeholder=" Enter Password" />
                        </div>
                        <div className=" flex flex-col justify-center items-start mb-5">                            
                            <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="Confirme-Password"> Confirme Password <span className=" text-red-600">*</span></label>
                            <input className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="Confirme-Password" type="Confirme-Password" placeholder=" Confirme-Password " />
                        </div>
                        <div className="">
                            <button className=" w-full h-8 lg:h-9 bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold text-xs lg:text-sm"> Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}