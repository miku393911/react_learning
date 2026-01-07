import { useState } from "react"

/* ### Q41. 配列内の特定項目の編集 (`map` の応用)
TODOリストの各項目に「完了」ボタンを付け、押した項目だけに取り消し線を引いてください。
*   **狙い:** `map` 内での ID 比較によるオブジェクトの特定更新。*/
export function Q41_TodoDecoration() {
    const [input, setInput] = useState("");  // 入力欄の状態
    const [list, setList] = useState([]);  // リストの状態
    const onCLickAdd = () => {
        if (input === "") return;
        const newInput = {
            id: crypto.randomUUID(),
            text: input,
            completed: false,  // ここで、decorationの判定を書く
        }
        setList([...list, newInput]);
        setInput("");
    }
    const onClickDecoration = (targetId) => { // 完了ボタンを押した時の処理（引数を取る
        const newList = list.map((todo) => {
            if(targetId === todo.id){ // .map()メソッドを使ってリストのIDが引数と一致するなら、completedをtrueにする
                return {...todo, completed: !todo.completed};  // リストに追加、オブジェクトの1つだけを変更する書き方
            }
            return todo;  // リストのIDと引数が一致しない場合は、リストをそのまま表示
        })
        setList(newList);  // .map()メソッドで新しく作ったリストをsetする
    }
    return (
        <>
            <input value={input} type="text" onChange={(e => setInput(e.target.value))} placeholder="入力してください" />
            <button onClick={() => onCLickAdd()}>追加</button>
            <ul>
                リスト {list.map((todo) => <li key={todo.id}
                    style = {{textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                            <button onClick={() => onClickDecoration(todo.id)}>完了</button>
                </li>)}
            </ul>
        </>
    )  // styleは<li>などのタグに書くのが主流（インラインとして書く時）
}