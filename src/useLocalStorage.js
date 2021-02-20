import { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(()=> {
        const value = localStorage.getItem(prefixedKey)
        if (value != null) return value
        if(typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, value)
    }, [prefixedKey, value])

    return [value, setValue]

}
