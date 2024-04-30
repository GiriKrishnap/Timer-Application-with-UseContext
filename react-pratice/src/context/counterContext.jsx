import { createContext, useRef, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    let interval = useRef(null);

    const startCounter = () => {
        if (!isActive) {
            console.log("startCounter.. - ", isActive);
            setIsActive(true);
            interval.current = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
    }

    const stopCounter = () => {
        console.log('stopCounter')
        setIsActive(false);
        clearInterval(interval.current);
    }

    const restartCounter = () => {
        console.log('restartCounter ');
        setIsActive(false);
        clearInterval(interval.current);
        setCount(0);
    }

    return (

        <CounterContext.Provider value={{ count, startCounter, stopCounter, restartCounter }}>
            {children}
        </CounterContext.Provider>

    )

}