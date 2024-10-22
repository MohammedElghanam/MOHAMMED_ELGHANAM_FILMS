
export default function Users () {
    return <>
    <div className=" col-span-8 h-fit bg-white rounded-xl py-4 shadow-2xl">
        <div className=" flex justify-between items-center px-4">
            <h1 className=" text-2xl text-gray-900 font-medium"> Users </h1>
            <button className=" px-6 py-1.5 rounded-lg font-medium text-sm text-white bg-purple-600 hover:bg-purple-500"> Create User </button>
        </div>
        <div className=" w-full mt-2">
            <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-white  ">
                        <tr className=" border-b">
                            <th scope="col" className="px-6 py-3">
                                image 
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th className="px-6 py-4 text-gray-900">
                                Microsoft
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                <h1 className=" bg-blue-600 bg-opacity-20 text-blue-600 px-3 py-1 rounded-md border border-blue-600">$1999</h1>
                            </td>
                            <td className="px-6 py-6 flex justify-center items-center gap-2">
                                <i className="fa-regular fa-pen-to-square" style={{color: '#0011ff'}}></i>
                                <i className="fa-solid fa-trash-can" style={{ color: '#ff0000' }}></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
}