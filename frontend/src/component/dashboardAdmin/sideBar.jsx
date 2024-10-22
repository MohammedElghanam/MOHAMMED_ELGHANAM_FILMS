import Logout from "../UI/logout";

export default function ({ didUmount, didMount }) {
    return <>
        <div className=" flex justify-center items-center gap-3">
            <svg width="30" height="30" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="10" width="90" height="90" rx="8" fill="white"/>
                <rect x="190" y="100" width="90" height="90" rx="8" fill="white"/>
                <rect x="10" y="100" width="90" height="90" rx="8" fill="white"/>
                <rect x="100" y="190" width="90" height="90" rx="8" fill="white"/>
            </svg>
            <h1 className=" italic font-bold text-2xl text-white">PlayNest</h1>
        </div>
        <div className=" flex flex-col justify-start items-center gap-3 h-96">
            <div className=" flex flex-col justify-center items-center gap-3 mb-3">
                {/* <img src="" alt="" /> */}
                <div className=" w-24 h-24 rounded-full border-4"></div>
                <h1 className=" font-medium text-xs text-white">Mohammed elghanam</h1>
            </div>
            <button onClick={ didMount } className=" flex justify-center items-center gap-2 mt-2">
                <i class="fa-solid fa-video fa-lg" style={{color: '#ffffff'}}></i>
                <h1 className=" rounded-lg font-medium text-white "> Film management</h1>
            </button>
            <button onClick={ didUmount } className=" flex justify-center items-center gap-2 mt-2">
                <i className="fa-solid fa-user-plus fa-lg" style={{color: '#ffffff'}}></i>
                <h1 className=" rounded-lg font-medium text-white "> User management</h1>
            </button>
        </div>
        <div >
            <Logout />    
        </div>
    </>
}