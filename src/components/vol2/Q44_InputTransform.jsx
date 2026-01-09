import { useState } from "react"

/* ### Q44. 連動する入力フォーム (単位変換)
「メートル」を入れると「センチメートル」が自動計算され、逆もまた同様に動くようにしてください。
*   **狙い:** 二つのStateが互いに作用する連動ロジック。*/

export function Q44_InputTransform() {
    const [metre, setMetre] = useState("");  // メートルの入力欄
    const [centiMetre, setCentiMetre] = useState("");  // センチメートルの入力欄
    const handleMetreChange = (e) => {
        const newMetre = e.target.value;  // ここで Number() にすると、下のnewMeter === "" が 0 === "" になるので、それ以降のnewMeter に Numberを書く
        setMetre(newMetre);
        setCentiMetre(newMetre === "" ? "" : Number(newMetre) * 100);  // type=number にしたので、型変換した方が良い
    }
    const handleCentiMetreChange = (e) => {
        const newCentiMetre = e.target.value;
        setCentiMetre(newCentiMetre);
        setMetre(newCentiMetre === "" ? "" : Number(newCentiMetre) / 100);  // センチメートルの値を ÷100した 値がメートルになる
    }
    return ( // <label>タグで囲むとUi向上
        <>
            <label>メートル
                <input value={metre} type="number" name="metre" onChange={handleMetreChange} placeholder="メートルを入力してください" />
            </label>
            <label>センチメートル
                <input value={centiMetre} type="number" name="centiMetre" onChange={handleCentiMetreChange} placeholder="センチメートルを入力してください" />
            </label>
        </>
    )
}
