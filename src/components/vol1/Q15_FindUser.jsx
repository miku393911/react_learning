import { useState } from "react";

export function Q15_FindUser() {
    const [text, setText] = useState("");  //入力の状態管理
    const [result, setResult] = useState("");  //結果表示の状態管理
    const userDate = [
        { id: 1, name: "miku", age: 24 },
        { id: 2, name: "yuka", age: 30 },
        { id: 3, name: "yuuta", age: 27 },
    ];
    const foundUsers = userDate.find((user) => user.id == Number(text));
    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="IDを入力してください" />
            <button onClick={() => setResult(foundUsers ? foundUsers.name : "見つかりませんでした")}>検索</button>
            <p>検索結果： {result}</p>
        </>
    );
}

// 現場向き
// Q14同様、静的データは関数外に配置
// 入力欄が空白の場合の結果テキストの表示も必要、if文を関数内に書き、onClick={handleSearch}として呼び出すのもOK
const handleSearch = () => {
    const searchId = Number(text);
    const foundUsers = userDate.find((user) => user.id === searchId);
    if(text === ""){
        setResult("IDを入力してください");
    }else if(foundUsers){
        setResult(foundUsers.name );
    }else {
        setResult("見つかりませんでした");
    }
}