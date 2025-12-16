import { useState } from "react";

export function Q14_FilterText() {
    const [text, setText] = useState("");
    const userDate = [
        { name: "miku", age: 24 },
        { name: "yuka", age: 30 },
        { name: "yuuta", age: 27 }
    ];
    const filterUsers = userDate.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="入力してください" />
            <ul>
                {filterUsers.map((user) => <li key={user.name}>{user.name}</li>)}
            </ul>
        </>
    );
}
