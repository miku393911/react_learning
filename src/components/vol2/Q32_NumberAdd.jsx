import { useState } from "react"

/*### Q32. 安全な数値計算
テキストボックスに入力した2つの数値を足し算して表示してください。
*   **狙い:** `Number()` を使った**型変換**を忘れずに行い、計算ミス（文字列結合）を防ぐ。*/
export function Q32_NumberAdd() { 
    const [left, setLeft] = useState("");  // 左のinputの初期値は""の文字列
    const [right, setRight] = useState("");  // 右のinput
    const [total, setTotal] = useState("");  // 合計の状態
    const onclickAdd = () => {
        const numberLeft = Number(left);  // Number()とすることで文字列を数字に型変換
        const numberRight = Number(right);
        setTotal(numberLeft + numberRight);
    }
    return (
        <>
            <input type="number" onChange={(e) => setLeft(e.target.value)} placeholder="数値を入力してください" />
            <span> + </span>
            <input type="number" onChange={(e) => setRight(e.target.value)} placeholder="数値を入力してください" />
            <button onClick={onclickAdd}>足す！</button>
            <p>合計: {total}</p>
        </> 
    )    
}

/* 現場向け
<input value={left}>のように指定することで、ReactとReactと入力欄の状態を同期させる
今回は引数が不必要なので、onCLickAddをそのまま関数として渡す方が良い*/