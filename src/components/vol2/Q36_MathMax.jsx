import { useState } from "react"

/* ### Q36. 最大値のリアルタイム追跡
数値を入力するたびに、これまでの入力値の中での「最大値」を更新して表示してください。
*   **狙い:** `Math.max(currentMax, newValue)` を使った値の比較と更新。*/
export function Q36_MathMax() { 
    const [number, setNumber] = useState(0);  // 入力欄の数字
    const [maxNumber, setMaxNumber] = useState(0);  // 最大値の状態
    const onChange = (e) => { // 本来なら<input>タグの属性として書く部分
        const newNumber = Number(e.target.value);  // 型をを揃える
        setNumber(newNumber);  // それをsetする
        const newMax = Math.max(maxNumber, newNumber);  // 最大値を比較（最大値、比較する値）
        setMaxNumber(newMax);  // それをsetする
    }
    return (
        <>
            <input type="number" value={number} onChange={onChange} />
            <p>最大値: {maxNumber}</p>
        </>
    )  
}
