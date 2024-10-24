import React, { useState } from 'react';
export default function Test () {

    const [selectedButton, setSelectedButton] = useState(0);
    const handleClick = (button) => {
        setSelectedButton(button);
    };

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
                <div className=" flex justify-center items-center size-full ">

                    {/* sid Bar  */}
                    <div className=" flex flex-col justify-between items-center w-16 h-screen bg-[#12101f] px-2 py-4">
                        <div className=" flex flex-col justify-start items-center  gap-20 h-full mt-16">
                            <div className=" flex flex-col justify-center items-center gap-3">
                                <i class="fa-solid fa-house fa-lg" style={{ color: '#eaf6f6'}}></i>
                                <h1 className=' text-white font-normal text-sm'>Home</h1>
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-3">
                                <i class="fa-solid fa-arrow-up-short-wide fa-lg" style={{ color: '#eaf6f6'}}></i>
                                <h1 className=' text-white font-normal text-sm'>Shorts</h1>
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-3">
                                <i class="fa-solid fa-thumbs-up fa-xl" style={{ color: '#eaf6f6'}}></i>
                                <h1 className=' text-white font-normal text-sm'>Likes</h1>
                            </div>
                            <div className=" flex flex-col justify-center items-center gap-4">
                                <i class="fa-solid fa-download fa-lg" style={{ color: '#eaf6f6'}}></i>
                                <h1 className=' text-white font-normal text-xs'>Downloads</h1>
                            </div>
                        </div>
                        {/* log out  */}
                        <div className=" py-2 px-3 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-lg">
                            <i class="fa-solid fa-right-from-bracket" style={{ color: '#eaf6f6'}}></i>
                        </div>
                    </div>

                    {/* content  */}
                    <div className=" grid grid-cols-12 justify-center items-start size-full h-screen">

                        {/* nav bar  */}
                        <div className=" col-span-12  h-12">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* categorys  */}
                        <div className="snap-x overflow-x-auto scroll-snap-type-x mandatory px-3 border-b border-gray-700 flex justify-start items-center gap-3 col-span-12 h-12 bg-[#12101f]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {Array.from({ length: 10 }, (_, index) => (
                                <button key={index} className={`snap-start px-3 py-1 rounded-lg text-sm font-medium ${selectedButton === index ? 'bg-white text-gray-800' : 'bg-gray-800 bg-opacity-60 text-white border-[0.5px] border-[#8600C9]'}`} onClick={() => handleClick(index)} > ALL {index + 1} </button>
                            ))}
                        </div>
                        
                        {/* cards  */}
                        <div className=" grid grid-cols-12 gap-4 col-span-12 h-full p-2 snap-y overflow-y-auto scroll-snap-type-y mandatory bg-[#12101f]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className=" col-span-4 h-72">
                                <div className=" relative h-52 w-full bg-purple-600 rounded-lg">
                                    <div className=" absolute bottom-2 right-2 w-10 h-5 rounded-md bg-black bg-opacity-15 text-xs font-bold flex justify-center items-center text-white"> 5:18</div>
                                </div>

                                    <div className=" w-full flex justify-between items-start h-20">
                                        <div className=" flex gap-2 justify-start items-start">
                                            {/* img  */}
                                            <div className=" w-10 h-10 bg-gray-800 rounded-full mt-2"></div>
                                            <div className=" mt-1.5">
                                                <h1 className=" text-base text-white font-medium"> {truncateText(longText, 6)} </h1>
                                                <h1 className=" text-gray-500">Cheos333gg</h1>
                                                <div className=" flex gap-2">
                                                    <p className=" text-gray-600 text-sm">70K <span>viewrs</span></p>
                                                    <p className=" font-bold text-sm text-gray-700">.</p>
                                                    <p className=" text-gray-600 text-sm">9 <span> mounth ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-5 h-9 flex justify-center items-center mt-2">
                                            <i class="fa-solid fa-ellipsis-vertical fa-lg" style={{color: '#ffffff'}}></i>
                                        </div>
                                    </div>
                            </div>

                            <div className=" col-span-4 h-72">
                                <div className=" relative h-52 w-full bg-purple-600 rounded-lg">
                                    <div className=" absolute bottom-2 right-2 w-10 h-5 rounded-md bg-black bg-opacity-15 text-xs font-bold flex justify-center items-center text-white"> 5:18</div>
                                </div>

                                    <div className=" w-full flex justify-between items-start h-20">
                                        <div className=" flex gap-2 justify-start items-start">

                                            {/* img  */}
                                            <div className=" w-10 h-10 bg-gray-800 rounded-full mt-2"></div>

                                            <div className=" mt-1.5">
                                                <h1 className=" text-base text-white font-medium"> {truncateText(longText, 6)} </h1>
                                                <h1 className=" text-gray-500">Cheos333gg</h1>
                                                <div className=" flex gap-2">
                                                    <p className=" text-gray-600 text-sm">70K <span>viewrs</span></p>
                                                    <p className=" font-medium text-sm text-gray-700">.</p>
                                                    <p className=" text-gray-600 text-sm">9 <span> mounth ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-5 h-9 flex justify-center items-center mt-2">
                                            <i class="fa-solid fa-ellipsis-vertical fa-lg" style={{color: '#ffffff'}}></i>
                                        </div>
                                    </div>
                            </div>

                            <div className=" col-span-4 h-72">
                                <div className=" relative h-52 w-full bg-purple-600 rounded-lg">
                                    <div className=" absolute bottom-2 right-2 w-10 h-5 rounded-md bg-black bg-opacity-15 text-xs font-bold flex justify-center items-center text-white"> 5:18</div>
                                </div>

                                    <div className=" w-full flex justify-between items-start h-20">
                                        <div className=" flex gap-2 justify-start items-start">

                                            {/* img  */}
                                            <div className=" w-10 h-10 bg-gray-800 rounded-full mt-2"></div>

                                            <div className=" mt-1.5">
                                                <h1 className=" text-base text-white font-medium"> {truncateText(longText, 6)} </h1>
                                                <h1 className=" text-gray-500">Cheos333gg</h1>
                                                <div className=" flex gap-2">
                                                    <p className=" text-gray-600 text-sm">70K <span>viewrs</span></p>
                                                    <p className=" font-medium text-sm text-gray-700">.</p>
                                                    <p className=" text-gray-600 text-sm">9 <span> mounth ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-5 h-9 flex justify-center items-center mt-2">
                                            <i class="fa-solid fa-ellipsis-vertical fa-lg" style={{color: '#ffffff'}}></i>
                                        </div>
                                    </div>
                            </div>

                            {/* Shorts  */}
                            <div className=" grid grid-cols-5 justify-start items-center w-full px-3 gap-4 col-span-12 p-2 border-t border-gray-800">
                                <div className=" flex justify-between items-center gap-2 col-span-5 h-12">
                                    <div className=" flex justify-start items-center gap-3 h-10">
                                        <i class="fa-solid fa-arrow-up-short-wide fa-lg" style={{ color: '#8600C9'}}></i>
                                        <h1 className=" text-2xl font-semibold text-white"> Shotrs </h1>
                                    </div>
                                    <div className=" flex justify-center items-center w-9 h-9 hover:bg-white hover:bg-opacity-10 hover:duration-700 rounded-lg">
                                        <i class="fa-solid fa-xmark fa-xl" style={{color: '#8600C9'}}></i>
                                    </div>
                                </div>


                                <div className=" col-span-1 h-96">
                                    <div className=" h-80 w-full bg-gradient-to-br from-purple-600 to-[#570082] rounded-xl"></div>
                                    <div className=" h-16 w-full">
                                        <div className=" flex justify-center items-start gap-3">
                                            <h1 className=" text-sm text-white font-medium"> {truncateText(longText, 7)} </h1>
                                            <div className=" w-5 h-5 flex justify-center items-center mt-2">
                                                <i class="fa-solid fa-ellipsis-vertical fa-sm" style={{color: '#ffffff'}}></i>
                                            </div>
                                        </div>
                                        <p className=' text-xs text-gray-500 font-medium mt-1'> 700K <span>viewrs</span></p>
                                    </div>
                                </div>
                                <div className=" col-span-1 h-96">
                                    <div className=" h-80 w-full bg-gradient-to-br from-purple-600 to-[#570082] rounded-xl"></div>
                                    <div className=" h-16 w-full">
                                        <div className=" flex justify-center items-start gap-3">
                                            <h1 className=" text-sm text-white font-medium"> {truncateText(longText, 7)} </h1>
                                            <div className=" w-5 h-5 flex justify-center items-center mt-2">
                                                <i class="fa-solid fa-ellipsis-vertical fa-sm" style={{color: '#ffffff'}}></i>
                                            </div>
                                        </div>
                                        <p className=' text-xs text-gray-500 font-medium mt-1'> 700K <span>viewrs</span></p>
                                    </div>
                                </div> 
                                <div className=" col-span-1 h-96">
                                    <div className=" h-80 w-full bg-gradient-to-br from-purple-600 to-[#570082] rounded-xl"></div>
                                    <div className=" h-16 w-full">
                                        <div className=" flex justify-center items-start gap-3">
                                            <h1 className=" text-sm text-white font-medium"> {truncateText(longText, 7)} </h1>
                                            <div className=" w-5 h-5 flex justify-center items-center mt-2">
                                                <i class="fa-solid fa-ellipsis-vertical fa-sm" style={{color: '#ffffff'}}></i>
                                            </div>
                                        </div>
                                        <p className=' text-xs text-gray-500 font-medium mt-1'> 700K <span>viewrs</span></p>
                                    </div>
                                </div>
                                <div className=" col-span-1 h-96">
                                    <div className=" h-80 w-full bg-gradient-to-br from-purple-600 to-[#570082] rounded-xl"></div>
                                    <div className=" h-16 w-full">
                                        <div className=" flex justify-center items-start gap-3">
                                            <h1 className=" text-sm text-white font-medium"> {truncateText(longText, 7)} </h1>
                                            <div className=" w-5 h-5 flex justify-center items-center mt-2">
                                                <i class="fa-solid fa-ellipsis-vertical fa-sm" style={{color: '#ffffff'}}></i>
                                            </div>
                                        </div>
                                        <p className=' text-xs text-gray-500 font-medium mt-1'> 700K <span>viewrs</span></p>
                                    </div>
                                </div>
                                <div className=" col-span-1 h-96">
                                    <div className=" h-80 w-full bg-gradient-to-br from-purple-600 to-[#570082] rounded-xl"></div>
                                    <div className=" h-16 w-full">
                                        <div className=" flex justify-center items-start gap-3">
                                            <h1 className=" text-sm text-white font-medium"> {truncateText(longText, 7)} </h1>
                                            <div className=" w-5 h-5 flex justify-center items-center mt-2">
                                                <i class="fa-solid fa-ellipsis-vertical fa-sm" style={{color: '#ffffff'}}></i>
                                            </div>
                                        </div>
                                        <p className=' text-xs text-gray-500 font-medium mt-1'> 700K <span>viewrs</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
        </div>
    </>
}