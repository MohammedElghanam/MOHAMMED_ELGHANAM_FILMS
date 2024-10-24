export default function Test () {

    const longText = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + ' ...';
        }
        return text;
    };

    return <>

        <div className="">
                <div className=" flex justify-center items-center size-full bg-yellow-400 ">

                    {/* sid Bar  */}
                    <div className=" flex flex-col justify-between items-center w-16 h-screen bg-blue-400 px-2 py-4">
                        <div className=" flex flex-col justify-start items-center  gap-10 h-full mt-16">
                            <i class="fa-solid fa-house fa-lg" style={{ colo: '#111827'}}></i>
                            <i class="fa-solid fa-thumbs-up fa-xl"></i>
                        </div>
                        {/* log out  */}
                        <div className=" py-2 px-3 bg-white bg-opacity-20 rounded-lg">
                            {/* <i class="fa-regular fa-arrow-left-from-bracket"></i> */}
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </div>
                    </div>

                    {/* content  */}
                    <div className=" grid grid-cols-12 justify-center items-start gap-2 size-full bg-green-400 h-screen">

                        {/* nav bar  */}
                        <div className=" col-span-12  h-12 bg-pink-600">
                            <div className=" bg-purple-600 flex justify-between items-center px-3 h-14">
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
                                        placeholder="Search, Dashboards..." 
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

                                <div className=" w-10 h-10 rounded-full bg-pink-600">
                                    <img src="../default.jpg" alt=" alt" />
                                </div>
                            </div>
                        </div>
                        
                        {/* categorys  */}
                        <div className="snap-x overflow-x-auto scroll-snap-type-x mandatory px-3 border-b border-gray-700 flex justify-start items-center gap-3 col-span-12 h-12 bg-pink-400" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                            <button className=" snap-start px-3 py-1 rounded-lg border border-gray-800 bg-white text-sm font-medium text-gray-800"> ALL </button>
                        </div>
                        
                        {/* card  */}
                        <div className=" grid grid-cols-12 gap-4 col-span-12 h-full bg-pink-600 p-2 snap-y overflow-y-auto scroll-snap-type-y mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400">
                                <div className=" h-52 w-full bg-purple-600 rounded-xl"></div>
                                {/* <div className=" h-24 "> */}
                                    <div className=" w-full rounded-3xl flex justify-between items-start h-20 bg-green-600">
                                        <div className=" flex gap-2 justify-start items-start">
                                            <div className=" w-10 h-10 bg-blue-600 rounded-full mt-2"></div>
                                            <div className=" mt-1.5">
                                                <h1 className=""> {truncateText(longText, 6)} </h1>
                                                <h1>Cheos333gg</h1>
                                                <div className=" bg-violet-800 flex gap-2">
                                                    <p>70K <span>viewrs</span></p>
                                                    <p className=" font-medium">.</p>
                                                    <p>9 <span> mounth ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-5 h-9 flex justify-center items-center bg-blue-600 mt-2">
                                            <i class="fa-solid fa-ellipsis-vertical fa-lg" style={{color: '#44464b'}}></i>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>

                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>
                            <div className=" col-span-4 rounded-2xl h-72 bg-yellow-400"></div>

                            <div className=" grid grid-cols-5 justify-start items-center w-full px-3 gap-4 col-span-12 bg-pink-300 p-2 ">
                                <div className=" flex justify-between items-center gap-2 col-span-5 h-12 bg-blue-500">
                                    <div className=" flex justify-start items-center gap-2 h-10 bg-red-500">
                                        <svg width="28" height="28" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="100" y="10" width="90" height="90" rx="8" fill="#8600C9"/>
                                            <rect x="190" y="100" width="90" height="90" rx="8" fill="#8600C9"/>
                                            <rect x="10" y="100" width="90" height="90" rx="8" fill="#8600C9"/>
                                            <rect x="100" y="190" width="90" height="90" rx="8" fill="#8600C9"/>
                                        </svg>
                                        <h1 className=" text-2xl font-semibold"> Shotr </h1>
                                    </div>
                                    <div className=" w-10 h-10 bg-red-600"></div>
                                </div>
                                <div className=" col-span-1 h-96 rounded-2xl bg-gray-700"></div>
                                <div className=" col-span-1 h-96 rounded-2xl bg-gray-700"></div>
                                <div className=" col-span-1 h-96 rounded-2xl bg-gray-700"></div>
                                <div className=" col-span-1 h-96 rounded-2xl bg-gray-700"></div>
                                <div className=" col-span-1 h-96 rounded-2xl bg-gray-700"></div>  
                            </div>
                        </div>

                        
                    </div>
                </div>
        </div>
    </>
}