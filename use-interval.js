import {useEffect, useRef, useState} from 'react'

function useInterval(callback, delay, limit) {
    const [count, setCount] = useState(1)
    const intervalRef = useRef()
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback]);

    useEffect(() => {
        console.log(delay, count, limit)
        if ((typeof delay === 'number' && count <= limit) || (typeof delay === 'number' && !limit)) {
            intervalRef.current = window.setInterval(() => {
                setCount(c => c + 1)
                callbackRef.current(count, setCount)
            }, delay)
            return () => {
                window.clearInterval(intervalRef.current)
            }
        }
    }, [delay, count]);

    return intervalRef;
}

export default useInterval
