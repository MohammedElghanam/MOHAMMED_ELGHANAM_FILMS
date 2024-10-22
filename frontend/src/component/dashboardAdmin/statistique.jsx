export default function Statistique () {
    return <> 
        <div className=" col-span-3 h-32 rounded-xl p-4 bg-white transform translate-x-1 duration-300 hover:scale-105 shadow-2xl shadow-gray-300">
            <div className=" flex justify-between items-center">
                <i className="fa-solid fa-users fa-xl" style={{ color: '#42b883'}}></i>
                <div className=" w-11 h-7 rounded-xl bg-[#42b883] bg-opacity-20 flex justify-center items-center text-sm font-bold text-[#42b883]"> 30% </div>
            </div>
            <div className=" mt-2">
                <h1 className=" text-3xl text-gray-900 font-medium">1256 <span className=" font-extrabold">+</span></h1>
                <h1 className=" text-sm text-gray-800">Nomber des client</h1>
            </div>
        </div>
        <div className=" col-span-3 h-32 rounded-xl p-4 bg-white transform translate-x-1 duration-300 hover:scale-105 shadow-2xl shadow-gray-300">
            <div className=" flex justify-between items-center">
                <i className="fa-solid fa-video fa-lg" style={{ color: '#f67280'}}></i>
                <div className=" w-11 h-7 rounded-xl bg-[#f67280] bg-opacity-20 flex justify-center items-center text-sm font-bold text-[#f67280]"> 68% </div>
            </div>
            <div className=" mt-2">
                <h1 className=" text-3xl text-gray-900 font-medium">570</h1>
                <h1 className=" text-sm text-gray-800">Nomber des film</h1>
            </div>
        </div>
        <div className=" col-span-3 h-32 rounded-xl p-4 bg-white transform translate-x-1 duration-300 hover:scale-105 shadow-2xl shadow-gray-300">
            <div className=" flex justify-between items-center">
                <i className="fa-sharp fa-regular fa-eye fa-lg" style={{ color: '#e8630a'}}></i>
                <div className=" w-11 h-7 rounded-xl bg-[#e8630a] bg-opacity-20 flex justify-center items-center text-sm font-bold text-[#e8630a]"> 57% </div>
            </div>
            <div className=" mt-2">
                <h1 className=" text-3xl text-gray-900 font-medium">1758</h1>
                <h1 className=" text-sm text-gray-800">Nomber des visiteur</h1>
            </div>
        </div>
        <div className=" col-span-3 h-32 rounded-xl p-4 bg-white transform translate-x-1 duration-300 hover:scale-105 shadow-2xl shadow-gray-300">
            <div className=" flex justify-between items-center">
                <i className="fa-solid fa-hourglass-end fa-lg" style={{ color: '#00bbf0'}}></i>
                <div className=" w-11 h-7 rounded-xl bg-[#00bbf0] bg-opacity-20 flex justify-center items-center text-sm font-bold text-[#00bbf0]"> 57% </div>
            </div>
            <div className=" mt-2">
                <h1 className=" text-3xl text-gray-900 font-medium"> 99 <span className=" font-medium">H</span></h1>
                <h1 className=" text-sm text-gray-800">Nomber des temps passé</h1>
            </div>
        </div>
    </>
}