import { useState } from "react";

export function Q16_TodoList() {
    const [newItem, setNewItem] = useState(""); //入力中の文字
    const [todos, setTodos] = useState([]);  //保存されたリスト
    const onClickAdd = () => {
        if (newItem === "") {
            return;
        }
        const newObject = {
            id: Date.now(),
            text: newItem
        }
        setTodos([...todos, newObject]);
        setNewItem("");
    }
    const onClickDeleted = (deletedId) => {
        const newTodos = [...todos]; //.filter()メソッドは元の配列を勝手にコピーするので、この行は不要
        setTodos(newTodos.filter((todo) => todo.id !== deletedId)); //残したい項目だけを残すようにする
    }
    return (
        <>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="入力してください" />
            <button onClick={onClickAdd}>追加</button>
            <ul>
                リスト👇 {todos.map((todo) => <li key={todo.id}> {todo.text} <button onClick={() => onClickDeleted(todo.id)}>削除</button> </li>)}
            </ul>
        </>
    );
}

/*可読性重視（変数名の分かりやすさやif文を使う
Q15同様、.trim()を使って入力欄の空白エラーを無くす
追加ボタンは何か引数を取るわけではないので、関数を呼び出すだけで良い*/
{id: crypto.randomUUID()};の方が安全なIDが作れられる