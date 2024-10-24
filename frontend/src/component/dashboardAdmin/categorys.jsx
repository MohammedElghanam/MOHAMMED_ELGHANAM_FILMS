export default function Categorys ({ mountCategoryPopup }) {
    return <>
        <div className=" col-span-4 h-fit bg-white shadow-2xl rounded-xl py-4">
            <div className=" flex justify-between items-center px-4 border-b pb-2">
                <h1 className=" text-2xl text-gray-900 font-medium"> Categorys </h1>
                <button onClick={ mountCategoryPopup } className=" py-1.5 px-3 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-500"> 
                    <i className="fa-solid fa-layer-group fa-sm" style={{color: '#ffffff'}}></i>
                </button>                            
            </div>
            <div className=" flex gap-2 w-full mt-2 px-4">
                <div className=" flex justify-center items-center gap-3 w-fit px-2 py-2 border border-blue-500 bg-white rounded-lg">
                    <h1 className=" text-xs font-medium text-blue-500">Comedy</h1>
                    <div className=" flex justify-center items-center gap-2 w-fit">
                        <i className="fa-regular fa-pen-to-square f-2xs" style={{color: '#3b82f6'}}></i>
                        <i className="fa-solid fa-trash-can f-2xs" style={{ color: '#ff0000' }}></i>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-3 w-fit px-2 py-2 border border-blue-500 bg-white rounded-lg">
                    <h1 className=" text-xs font-medium text-blue-500">Comedy</h1>
                    <div className=" flex justify-center items-center gap-2 w-fit">
                        <i className="fa-regular fa-pen-to-square" style={{color: '#3b82f6'}}></i>
                        <i className="fa-solid fa-trash-can" style={{ color: '#ff0000' }}></i>
                    </div>
                </div> 
            </div>
        </div>
    </>
}