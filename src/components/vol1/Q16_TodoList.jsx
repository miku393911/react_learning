import { useState } from "react";

export function Q16_TodoList() {
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);
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
        const newTodos = [...todos];
        setTodos(newTodos.filter((todo) => todo.id !== deletedId));
    }
    return (
        <>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="入力してください" />
            <button onClick={() => onClickAdd()}>追加</button>
            <ul>
                リスト👇 {todos.map((todo) => <li key={todo.id}> {todo.text} <button onClick={() => onClickDeleted(todo.id)}>削除</button> </li>)}
            </ul>
        </>
    );
}
