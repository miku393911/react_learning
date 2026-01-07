import { useState } from "react"

/* ### Q40. リスト項目の一括削除
ボタン一つで、追加したリストをすべて空にしてください。
*   **狙い:** 配列Stateをリセット（空配列にする）操作 */
export function Q40_AllListRemoved() { 
    const [input, setInput] = useState("");  // input欄の状態
    const [list, setList] = useState([]);  // リストの状態
    const onClickAdd = () => {
        if(input === "") return;
        const  newInput = {
            id: crypto.randomUUID(),
            text: input,
        }
        setList([...list, newInput]);
        setInput("");
    }
    const onClickRemove = (removedId) => {  // 引数も必要ない
        setList(list.filter(() => list !== removedId));  // 今回はリストごと空にするので、setList([]);だけで良い
    }
    return(
        <>
            <input value={input} type="text" onChange={(e) => setInput(e.target.value)} placeholder="入力してください" />
            <button onClick={() => onClickAdd()}>追加！</button>
            <ul>
                リスト {list.map((data) => <li key={data.id}>{data.text}</li>)}
            </ul>
            <button onClick={() => onClickRemove(list)}>空にする！</button>
        </>
    )  // 空にするボタンのイベントは、onCLick={onClickRemove} だけ(空配列をsetする関数)で良い
}
