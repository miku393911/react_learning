import { useState } from "react";

export function Q29v_UserRegister() {
    const [name, setName] = useState("");  // 名前の状態管理
    const [age, setAge] = useState(0);  // 年齢の状態管理
    const [users, setUsers] = useState([]);  // リストの状態管理
    const onClickAdd = () => {
        if (name === "" || age === "") return;  // 名前か年齢が空白の時は何もしない
        const newUsers = { id: Math.random(), name: name, age: age };  // idを付与して新しい配列として変数定義
        setUsers([...users, newUsers]);  // 登録後リストに追加 
        setName("");  // 登録後に入力欄を空白に
        setAge("");
    }
    const onClickDelete = (deletedId) => {
        const newUsers = [...users];  // .filter()メソッドは新しい配列を作るので、この1行のコピー不要
        setUsers(newUsers.filter((user) => user.id !== deletedId));  // 入力されたidが消したいidと一致しないものだけ残る
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

/* 現場向き
id: Date.now(), ame: name.trim(), age: Number(age) にするとより良し */