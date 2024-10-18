import useSuccessMsg from '../../hooks/successMsg';
export default function Success ({message}) {

    const {counter, showMessage} = useSuccessMsg();


    return <>
    { showMessage && (
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mx-20 flex justify-between items-center" role="alert">
            <div className="">
                <p class="font-bold"> Welcome </p>
                <p>{ message }</p>
            </div>
            <p className=" w-8 h-8 bg-green-700 bg-opacity-35 rounded-2xl text-center">{ counter }</p>
        </div>
    )}
    </>
}