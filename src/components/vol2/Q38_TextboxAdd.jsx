/*### Q38. 配列への単純追加 (再練習)
テキストボックスで入力した文字をリストに追加してください。
*   **狙い:** `[...prev, newValue]` というスプレッド構文を何も見ずに書けるようにする。*/

import { useState } from "react"

export function Q38_TextboxAdd() {
    const [input, setInput] = useState("");  // 入力欄の状態
    const [list, setList] = useState([]);  // リストの状態
    const newList = () => {
        setList([...list, input]);
        setInput("");
    }
    return(
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="入力してください" />
            <button onClick={newList}>追加</button>
            <ul>
                リスト {list.map((item) => <li>{item}</li>)}
            </ul>
        </> // itemという名の引数で、追加するたびにリストを作る
    )
}
