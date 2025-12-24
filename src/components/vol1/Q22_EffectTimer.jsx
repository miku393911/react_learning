import { useState, useEffect } from "react";

export function Q22_EffectTimer() {
    const [count, setCount] = useState(null);
    useEffect(() => {
        if (count <= 0) return;
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000)
        return () => clearInterval(timer);
    }, [count])
    return (
        <>
            <button onClick={() => setCount(10)}>スタート！</button>
            {count !== null && (count === 0 ? <p>終了！</p> : <p>カウントダウンタイマー: {count}秒</p>)}
        </>
    );
}
