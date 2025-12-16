import { useState } from "react";

export function Q31_UserRegister() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [users, setUsers] = useState([]);
    const onClickAdd = () => {
        if (name === "" || age === "") return;
        const newUsers = { id: Math.random(), name: name, age: age };
        setUsers([...users, newUsers]);
        setName("");
        setAge("");
    }
    const onClickDelete = (deletedId) => {
        const newUsers = [...users];
        setUsers(newUsers.filter((user) => user.id !== deletedId));
    }
    return (
        <>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="名前を入力してください" />
                <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="年齢を入力してください" />
                <button onClick={() => onClickAdd()} >登録</button>
            </div>
            <div>
                <p>登録リスト👇</p>
                <ul>
                    {users.map((user) =>
                        <li key={user.id}>{user.name}({user.age}歳)
                            <button onClick={() => onClickDelete(user.id)}>削除</button>
                        </li>)}
                </ul>
            </div>
        </>
    );
}
