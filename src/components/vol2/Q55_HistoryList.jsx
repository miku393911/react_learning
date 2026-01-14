/* ### Q55. 簡易検索履歴
検索ボタンを押すたびに、そのキーワードを履歴リストに追加してください。履歴は最新の5件までとし、重複は許しません。履歴をクリックすると再検索できるようにします。

*   **ヒント:**
    1.  `history` という配列Stateを用意する。
    2.  追加する時、まず `includes` で重複チェック。
    3.  重複していなければ `[newKeyword, ...prevHistory]` のように先頭に追加。
    4.  長さが5を超えたら `slice(0, 5)` で切り取る。*/

import { useState } from "react"

export function Q55_HistoryList() {
    const [inputText, setInputText] = useState("");  // 入力欄の状態
    const [history, setHistory] = useState([]);  // 履歴リストの状態
    const handleSearch = () => {
        if(inputText === "") return;  // 以下のコードで.textが使用できるのは、newInput内で定義し1度useState()に保存されたから
        const findInputText = history.find((item) => item.text === inputText);  // history内にinputTextの重複があるか
        if(!findInputText){ // 重複していないのであれば、履歴リストに追加
            const newInput = { // 一意のidを付与するために新しいオブジェクトとしてinputTextを作り直す
                id: crypto.randomUUID(),
                text: inputText,
            } // .slice()メソッドは、開始インデックス, 狩猟インデックスで区切り、その間の配列の要素だけを区切り新しい配列を作る
            const newHistory = [newInput, ...history].slice(0, 5);  // 先頭から履歴リストに追加したい場合は、先頭に入力欄の変数を書き、後ろにスプレット構文の配列を書く
            setHistory(newHistory);  // 履歴リストに新しい配列をsetする
        }
        setInputText("");
    }
    const handleHistoryClick = (text) => setInputText(text);  // 履歴リストをクリックすると、再検索できるよう入力欄にsetされる
    return (
        <>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}  placeholder="文字を入力"/>
            <button onClick={handleSearch}>検索</button>
            <p>履歴リスト</p>
            <ul>
                {history.map((item) => <li key={item.id} onClick={() => handleHistoryClick(item.text)} style={{cursor: "pointer", color: "blue", textDecoration: "underLine"}}>{item.text}</li>)}
            </ul>
        </>
    ) // <li>タグ内のstyleは、再検索のためクリック可能であることを知らせる工夫
}
