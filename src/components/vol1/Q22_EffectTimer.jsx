import { useState, useEffect } from "react";

export function Q22_EffectTimer() {
    const [count, setCount] = useState(null);
    useEffect(() => {
        if (count <= 0) return;
        const timer = setInterval(() => {  // setInterval()内の処理を繰り返す
            setCount((prevCount) => prevCount - 1);
        }, 1000)
        return () => clearInterval(timer);  // クリーンアップ関数
    }, [count])
    return (
        <>
            <button onClick={() => setCount(10)}>スタート！</button>
            {count !== null && (count === 0 ? <p>終了！</p> : <p>カウントダウンタイマー: {count}秒</p>)}
        </>
    );
}

/* 現場向き
if(count === null || count <= 0)で、nullも0以下も除外できるように 
スタートの<button>タグに。disabled={count !== null $$ count > 0}でボタンの無効化条件を書くことができる */