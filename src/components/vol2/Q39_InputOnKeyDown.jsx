import { useState } from "react"

/*### Q39. Enterキーによる操作
Q38を改造し、Enterキーを押した時にもリストに追加されるようにしてください。
*   **狙い:** キーイベント (`onKeyDown`) の扱いを覚える。*/
export function Q39_InputOnKeyDown() {
    const [inputText, setInputText] = useState("");  // input欄の状態
    const [addList, setAddList] = useState([]);  // リストの状態
    const newList = () => {
        if(inputText === "") return;  //.trim()を付けて、空白が含まれても動作するように
        const newItem = {
            id: crypto.randomUUID(),
            text: inputText,
        }
        setAddList([...addList, newItem]);
        setInputText("");
    } 
        return( // イベントは複数書くことが可能
        <>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => {
                if (e.nativeEvent.isComposing) return;  // 日本語入力の確定（変換）のEnterは無視する
                if(e.key === "Enter") newList()
                }} placeholder="入力してください"/>
            <ul>
                リスト {addList.map((item) => <li key={item.id}>{item.text}</li>)}
            </ul>
        </>
    ) 
}
