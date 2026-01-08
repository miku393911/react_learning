/*### Q42. 検索キーワードでのフィルタリング
名前のリストがあり、検索窓に入力した文字が含まれる人だけを抽出して表示してください。
*   **狙い:** `filter` と `includes` の組み合わせ。*/

import { useState } from "react"

const data = [ // 静的データなので、export外に書くのが定石
    {id: 1, name: "miku"},
    {id: 2, name: "ayano"},
    {id: 3, name: "asuka"},
]
export function Q42_DataIncludes() {
    const [input, setInput] = useState("");  // 入力欄の状態
    const filterData = data.filter((todo) => todo.name.toLowerCase().includes(input.toLowerCase()));  // dataの中の名前を全部見る + 大文字小文字を問わない の中に含まれている 入力欄の大文字小文字を問わないもの
    return ( // toLowerCase() は、大文字と小文字の区別を付けないためのメソッド
        <>
            <input value={input} type="text" onChange={(e) => setInput(e.target.value)} placeholder="入力してください"/>
            <ul>
                {filterData.length > 0 ? (filterData.map((item) => <li key={item.id}>{item.name}</li>)) : (<li>該当ユーザーが見つかりません</li>)}
            </ul>
        </>
    ) // 三項演算子で、検索結果が0件だった場合（当てはまる文字がない場合）の処理を書くとより丁寧
}
