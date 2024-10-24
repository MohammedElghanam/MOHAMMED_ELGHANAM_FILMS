export default function Detail () {
    return <>
        <div className=" grid grid-cols-12 grid-rows-12 gap-2 p-2 w-full h-screen bg-blue-500"> 
            {/* nav bar  */}
            <div className=" col-span-12 row-span-1">
                <div className=" bg-[#12101f] flex justify-between items-center px-3 h-14">
                    <div className=" flex justify-center items-center gap-2">
                        <svg width="30" height="30" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="100" y="10" width="90" height="90" rx="8" fill="#8600C9"/>
                            <rect x="190" y="100" width="90" height="90" rx="8" fill="#8600C9"/>
                            <rect x="10" y="100" width="90" height="90" rx="8" fill="#8600C9"/>
                            <rect x="100" y="190" width="90" height="90" rx="8" fill="#8600C9"/>
                        </svg>
                        <h1 className=" italic font-bold text-2xl text-[#8600C9]">PlayNest</h1>
                    </div>
                    <div className="">
                        <div className="relative">
                            <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Search ..." 
                            />
                            <button
                            className="absolute top-1 right-1 flex items-center rounded bg-[#8600C9] py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                            Search
                            </button> 
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-3 ">
                        <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-gray-800">
                            <i className="fa-regular fa-bell fa-lg" style={{color: '#8600C9'}}></i>
                        </div>
                        <div className=" w-10 h-10 rounded-full bg-[#8600C9]">
                            {/* <img src="../default.jpg" alt=" alt" /> */}
                            <img
                                src={`https://ui-avatars.com/api/?name=${'Mohemmd'}&background=8600C9&color=fff&size=128`}
                                alt={'Mohemmd'}
                                className=" rounded-full"
                            />                       
                        </div>
                    </div>
                </div>
            </div>

            <div className=" grid grid-cols-12 col-span-12 p-2 row-span-11 bg-red-600 snap-y overflow-y-auto    ">
                <div className=" grid grid-cols-12 grid-rows-12 gap-2 col-span-8 p-3 h-full bg-blue-700">
                    <div className=" col-span-12 row-span-10 bg-yellow-400"></div>
                    <div className=" col-span-12 row-span-2 bg-yellow-700">
                        <div className=" w-full ">
                            <h1> Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        </div>
                        <div className=" flex ">
                            <div className=" flex">
                                <div className=" w-10 h-10 rounded-full bg-red-500"></div>
                                <div className="">
                                    <h1>Cheos333g</h1>
                                    <p>173K <span>Subscribers</span></p>
                                </div>
                                <div className="">
                                    <button className=" px-14 py-4 rounded-lg text-black bg-white">Subscribe</button>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    {/* like  */}
                                    <div className="">
                                        <p></p>
                                    </div>
                                    {/* unlike  */}
                                    <div className="">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-4 h-full bg-green-500"></div>
            </div>
        </div>
    </>
}