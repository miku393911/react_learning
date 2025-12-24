import { useState, useEffect } from "react";

export function Q26_EffectClock() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(new Date().toLocaleTimeString());
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <>
            {count}
        </>
    );
}
