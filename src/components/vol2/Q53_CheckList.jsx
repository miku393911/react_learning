/* ### Q53. チェックリストの一括選択
「すべて選択」チェックボックスと、個別のアイテムのチェックボックスがあります。「すべて選択」を操作すると全アイテムがON/OFFになり、個別アイテムをすべてONにすると自動的に「すべて選択」もONになる連動を作ってください。

*   **ヒント:**
    1.  各アイテムは `{ id: 1, label: "...", checked: false }` のようなオブジェクトの配列で作る。
    2.  「すべて選択」が押されたら、`map` を使って**全員の `checked` を書き換える**。
    3.  個別が押されたら、そのIDだけ書き換える。その後、「すべての `checked` が `true` か？」を `every` メソッドなどでチェックする。*/

import { useState } from "react"

export function Q53_CheckList() {
    const [items, setItems] = useState([  // チェックボックスの状態
        {id: 1, label: "項目1", checked: false},  // 通常の変数定義では、静的データしか処理できず、ブラウザ表示が動かない
        {id: 2, label: "項目2", checked: true},  // 初期値として設定することで、レンダリングされても（動的処理にも）対応
        {id: 3, label: "項目3", checked: false},
    ]);
    const isAllChecked = items.every((item) => item.checked);  // .every()メソッドで、全て〜であるという意味を持つ
    const EventHandle = (e) => { // 全選択、全解除の変数
        const newValue = e.target.checked;  // クリックされた結果がtrueなのかfalseなのか変数定義
        const newArr = items.map((item) => { // 新しい配列を作る（itemのcheckedが全選択された状態の配列を返す
            return {...item, checked: newValue};
        })
        setItems(newArr);  // 新しい配列をsetする
    }
    const handleToggle = (id) => { // 各アイテムの切り替え変数
        const newItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(newItems);  // 配列のid（item.id）とチェックされたid（id）が一致していれば（クリックされたら）チェックされたidのcheckedを反対にして切り替える（falseをtrueに、逆も然り）　他はそのまま返す（何も変える必要はない
    }
    return ( // EventHandleは引数eだけなので、書かなくても良い（onChange={(e) => EventHandle(e)}
        <>
            <label> <input type="checkbox" checked={isAllChecked} onChange={EventHandle} />すべて選択</label>
            <div>
                {items.map((item) => 
                    <label key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleToggle(item.id)} />
                            {item.label}
                    </label>
                )}
            </div>
        </>
    ) // checkedは選択する種類を選べる + HandleToggleの引数にitem.idを取ることで、上記の変数定義内で、item.idを使用してもエラーなく書ける
}
