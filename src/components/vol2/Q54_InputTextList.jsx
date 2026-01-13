/* ### Q54. 検索結果のハイライト
リスト検索機能に加え、検索ヒットした文字列の部分だけを `<span style={{fontWeight: 'bold'}}>` などで囲って太字で表示してください。

*   **ヒント:**
    1.  通常の検索フィルタリング (`filter`) を行う。
    2.  表示する際、文字列を `split(keyword)` で分割し、間に `keyword` を挟んで表示するなどの工夫が必要。
    3.  `map` を使って、テキストパーツの配列を表示するイメージ。*/

import { useState } from "react"

export function Q54_InputTextList() {
    const [inputText, setInputText] = useState("");  // 入力欄の状態
    const lists = ["JavaScript", "TypeScript", "React"];  // 配列（リスト）を準備
    const filterText = lists.filter((list) => list.includes(inputText));  // 配列の要素に入力欄の文字が含まれているか
    return (   //  配列の要素（.split()メソッドは、文字列に使う）を、入力欄の文字ごとに分割する
        <>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="文字を入力" />
            {filterText.map((word, index) => 
                <div key={index}>
                    {(word.split(inputText)).map((part, i, arr) => <span key={i}>
                        {part}
                        {i !== arr.length -1 && <b>{inputText}</b>}
                    </span>)}
                </div>
            )} 
        </>
    ) // 引数名は何でも良い。配列の要素とする引数であるpartを置いて、その後に配列の最後の要素でなければ入力欄の文字を太くする
}
