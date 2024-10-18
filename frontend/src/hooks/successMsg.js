import {useState, useEffect} from 'react';
const useSuccessMsg = () => {
    const [counter, setCounter] = useState(3);
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => {
                setCounter(prevCounter => prevCounter - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setShowMessage(false);
        }
    }, [counter]);

    return {
        counter,
        showMessage,
    };
}

export default useSuccessMsg;