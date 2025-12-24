import { useState, useEffect } from "react";

export function Q21_EffectTitle() {
    const [count, setCount] = useState(0);
    const totalCount = () => setCount(count + 1);
    useEffect(() => {
        document.title = `現在のカウント: ${count}`;
    }, [count])
    return (<button onClick={totalCount}>カウントアップ！</button>);
}
