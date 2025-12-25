import { useState, useEffect } from "react";

export function Q25_EffectClock() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(new Date().toLocaleTimeString()); // new Date() はコンストラクタ！、クラスで使う
        }, 1000)
        return () => clearInterval(timer) // クリーンアップ関数
    }, [])
    return (
        <>
            {count}
        </>
    );
}

/* 最適解 
useState(() => new Date().toLocalTimeString())と書き、関数を渡すことで初回レンダリング時から正しく表示 */