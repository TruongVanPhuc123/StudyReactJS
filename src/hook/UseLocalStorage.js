import { useState, useEffect } from 'react'

function useLocalStorage(key, valueDefault = '') {
    const [state, setState] = useState(
        () => {
            const value = window.localStorage.getItem(key || valueDefault)
            if (value) {
                try {
                    return JSON.parse(value)
                } catch (error) {
                    window.localStorage.removeItem(key)
                }
            }
            return valueDefault;
        }
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState]
}

export default useLocalStorage