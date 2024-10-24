export default function Detail () {

    const longText = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + ' ...';
        }
        return text;
    };

    return <>
        <div className=" grid grid-cols-12 grid-rows-12 gap-2 p-2 w-full h-screen bg-[#12101f]"> 
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

            <div className=" grid grid-cols-12 col-span-12 p-2 row-span-11 gap-4">
                <div className=" grid grid-cols-12 grid-rows-12 gap-2 col-span-8 h-full ">
                    <div className=" col-span-12 row-span-10 bg-gray-800 rounded-lg"></div>
                    {/* desc of creators  */}
                    <div className=" col-span-12 row-span-2">
                        <div className=" w-full mb-2">
                            <h1 className=" text-xl font-medium text-white"> Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        </div>
                        <div className=" flex justify-between items-center">
                            <div className=" flex gap-4">
                                <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                <div className="">
                                    <h1 className=" font-medium text-white">Cheos333g</h1>
                                    <p className=" text-sm text-gray-500">173K <span>Subscribers</span></p>
                                </div>
                                <div className=" flex justify-center items-end">
                                    <button className=" text-sm font-medium px-6 py-1.5 rounded-2xl text-black bg-white">Subscribe</button>
                                </div>
                            </div>
                            <div className=" flex justify-center items-center gap-3">
                                <div className=" rounded-2xl flex gap-2 bg-white bg-opacity-15 px-4 py-2">
                                    {/* like  */}
                                    <div className=" flex justify-center items-center gap-2">
                                        <i className="fa-solid fa-thumbs-up fa-lg" style={{color: '#8600C9'}}></i>
                                        <p className=" font-bold text-sm text-[#8600C9]">13K</p>
                                    </div>
                                    {/* unlike  */}
                                    <div className=" flex justify-center items-center gap-2">
                                        <i className="fa-solid fa-thumbs-up fa-lg rotate-180" style={{color: '#8600C9'}}></i>
                                        <p className=" font-bold text-sm text-[#8600C9]">13K</p>
                                    </div>
                                </div>

                                <div className=" flex justify-center items-center gap-2 bg-white bg-opacity-15 px-4 py-1 rounded-3xl">
                                    <i class="fa-solid fa-share fa-lg" style={{color: '#ffffff'}}></i>
                                    <h1 className=" font-semibold text-lg text-white">Share</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* container of comments  */}
                <div className=" grid grid-cols-12 col-span-4 h-full">
                    <div className=" col-span-12 h-full border border-gray-500 rounded-xl flex flex-col justify-between">
                        <div className=" flex justify-between items-center border-b border-gray-500 p-4">
                            <div className=" flex justify-center items-center gap-2 ">
                                <p className=" text-2xl font-medium text-white">1234</p>
                                <p className=" text-2xl font-semibold text-white">Comments</p>
                            </div>
                            <div className=" flex justify-center items-center gap-2 ">
                                <svg width="24" height="24" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1H2C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H12C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1Z" stroke="#8600C9"/>
                                    <path d="M10.5 5H3.5C2.94772 5 2.5 5.44772 2.5 6C2.5 6.55228 2.94772 7 3.5 7H10.5C11.0523 7 11.5 6.55228 11.5 6C11.5 5.44772 11.0523 5 10.5 5Z" stroke="#8600C9"/>
                                    <path d="M5.5 9H8.5C9.05229 9 9.5 9.44771 9.5 10C9.5 10.5523 9.05229 11 8.5 11H5.5C4.94772 11 4.5 10.5523 4.5 10C4.5 9.44771 4.94772 9 5.5 9Z" stroke="#8600C9"/>
                                </svg>
                                <p className=" text-sm text-white font-medium">Sort By</p>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-4 h-96 w-full p-2 overflow-y-auto snap-y snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
                            <div className=" flex justify-start items-start gap-2 snap-center">
                                <div className=" w-14">
                                    <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                </div>
                                <div className=" flex justify-between items-center bg-[#8600C9] bg-opacity-5 border border-[#8600C9] hover:bg-opacity-10 hover:duration-700 rounded-lg w-full p-3">
                                    <div className="">
                                        <h1 className=" font-medium text-base text-white">@Mohammed <span className=" text-xs font-normal text-gray-600">13:00</span></h1>
                                        <p className=" text-sm text-white">{ truncateText(longText, 8) }</p>
                                    </div>
                                    <div className="">
                                        <i class="fa-regular fa-heart fa-lg" style={{ color: '#1f2937'}}></i>
                                    </div>
                                </div>
                                
                            </div>

                            <div className=" flex justify-start items-start gap-2 snap-center">
                                <div className=" w-14">
                                    <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                </div>
                                <div className=" flex justify-between items-center bg-[#8600C9] bg-opacity-5 border border-[#8600C9] hover:bg-opacity-10 hover:duration-700 rounded-lg w-full p-3">
                                    <div className="">
                                        <h1 className=" font-medium text-base text-white">@Mohammed <span className=" text-xs font-normal text-gray-600">13:00</span></h1>
                                        <p className=" text-sm text-white">{ truncateText(longText, 8) }</p>
                                    </div>
                                    <div className="">
                                        <i class="fa-regular fa-heart fa-lg" style={{ color: '#1f2937'}}></i>
                                    </div>
                                </div>
                                
                            </div>

                            <div className=" flex justify-start items-start gap-2 snap-center">
                                <div className=" w-14">
                                    <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                </div>
                                <div className=" flex justify-between items-center bg-[#8600C9] bg-opacity-5 border border-[#8600C9] hover:bg-opacity-10 hover:duration-700 rounded-lg w-full p-3">
                                    <div className="">
                                        <h1 className=" font-medium text-base text-white">@Mohammed <span className=" text-xs font-normal text-gray-600">13:00</span></h1>
                                        <p className=" text-sm text-white">{ truncateText(longText, 8) }</p>
                                    </div>
                                    <div className="">
                                        <i class="fa-regular fa-heart fa-lg" style={{ color: '#1f2937'}}></i>
                                    </div>
                                </div>
                                
                            </div>

                            <div className=" flex justify-start items-start gap-2 snap-center">
                                <div className=" w-14">
                                    <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                </div>
                                <div className=" flex justify-between items-center bg-[#8600C9] bg-opacity-5 border border-[#8600C9] hover:bg-opacity-10 hover:duration-700 rounded-lg w-full p-3">
                                    <div className="">
                                        <h1 className=" font-medium text-base text-white">@Mohammed <span className=" text-xs font-normal text-gray-600">13:00</span></h1>
                                        <p className=" text-sm text-white">{ truncateText(longText, 8) }</p>
                                    </div>
                                    <div className="">
                                        <i class="fa-regular fa-heart fa-lg" style={{ color: '#1f2937'}}></i>
                                    </div>
                                </div>
                                
                            </div>

                            <div className=" flex justify-start items-start gap-2 snap-center">
                                <div className=" w-14">
                                    <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                </div>
                                <div className=" flex justify-between items-center bg-[#8600C9] bg-opacity-5 border border-[#8600C9] hover:bg-opacity-10 hover:duration-700 rounded-lg w-full p-3">
                                    <div className="">
                                        <h1 className=" font-medium text-base text-white">@Mohammed <span className=" text-xs font-normal text-gray-600">13:00</span></h1>
                                        <p className=" text-sm text-white">{ truncateText(longText, 8) }</p>
                                    </div>
                                    <div className="">
                                        <i class="fa-regular fa-heart fa-lg" style={{ color: '#1f2937'}}></i>
                                    </div>
                                </div>
                                
                            </div>

                            <div className=" flex justify-start items-start gap-2 snap-center">
                                <div className=" w-14">
                                    <div className=" w-10 h-10 rounded-full bg-gray-800"></div>
                                </div>
                                <div className=" flex justify-between items-center bg-[#8600C9] bg-opacity-5 border border-[#8600C9] hover:bg-opacity-10 hover:duration-700 rounded-lg w-full p-3">
                                    <div className="">
                                        <h1 className=" font-medium text-base text-white">@Mohammed <span className=" text-xs font-normal text-gray-600">13:00</span></h1>
                                        <p className=" text-sm text-white">{ truncateText(longText, 8) }</p>
                                    </div>
                                    <div className="">
                                        <i class="fa-regular fa-heart fa-lg" style={{ color: '#1f2937'}}></i>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        {/* input add comments  */}
                        <div className=" flex justify-between items-center gap-4 px-2 border-t border-gray-800 h-16 rounded-b-xl">
                            <i class="fa-regular fa-face-smile fa-xl" style={{color: '#8600C9'}}></i>
                            <input type="text" name="" id="" className=" h-9 w-full bg-[#12101f] border border-[#8600C9] rounded-md px-2 placeholder:text-sm" placeholder=" Add new comment" />
                            <svg width="32" height="32" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2111 5.10557L2.44721 0.723607C1.78231 0.391156 1 0.874652 1 1.61803V3.6802C1 4.15688 1.33646 4.56729 1.80388 4.66078L3.5971 5.01942C4.66894 5.23379 4.66894 6.76621 3.5971 6.98058L1.80388 7.33922C1.33646 7.43271 1 7.84312 1 8.3198V10.382C1 11.1253 1.78231 11.6088 2.44721 11.2764L11.2111 6.89443C11.9482 6.5259 11.9482 5.4741 11.2111 5.10557Z" stroke="#8600C9"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}