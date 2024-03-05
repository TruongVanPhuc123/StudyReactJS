import React from 'react'
import useLocalStorage from './UseLocalStorage'

function useCounter(key, initalValue = 0) {
    const [count, setCount] = useLocalStorage(key, initalValue)

    const increment = () => {
        setCount(count => count + 1)
    }
    const uncrement = () => {
        setCount(count => count - 1)
    }
    return [increment, uncrement, count]
}

export default useCounter