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

//現場向き
//Q13同様、静的データは関数外に配置し配列をコピーして新しい変数を作りidを付与する + .trim()も追加し入力欄に空白が入った際の処理もする
// 検索対象が空の場合の処理
const newText = text.trim() === "" ? userDate : userDate.filter((user) => user.name.toLowerCase().includes(text.toLowerCase().trim()))
//検索結果が0の時の処理
newText.length > 0 ? (<ul>{filterUsers.map((user) => <li key={user.name}>{user.name}</li>)}</ul>) : (<p>"該当するユーザーは見つかりませんでした"</p>)