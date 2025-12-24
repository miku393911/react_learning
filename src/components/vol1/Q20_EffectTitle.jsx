import { useState, useEffect } from "react";

export function Q20_EffectTitle() {
    const [count, setCount] = useState(0);
    const totalCount = () => setCount(count + 1);
    useEffect(() => {
        document.title = `現在のカウント: ${count}`; //document.titleでブラウザタブのタイトルが変更可能
    }, [count]);
    return (<button onClick={totalCount}>カウントアップ！</button>);
}

// const totalCount = ((prevCount) => setCount(prevCount + 1)); で関数型更新を使う