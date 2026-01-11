/* ### Q49. 排他的アコーディオン
3つのアコーディオンがあり、一つを開くと、今まで開いていたものが自動で閉じるようにしてください。
*   **狙い:** 「ただ一つのアクティブID」を管理するロジック。*/

import { useState } from "react"

/* export function Q49_ActiveStatus() {
    const [activeId, setActiveId] = useState(null);  // useState()の初期値は""でも良いが。nulの方が数字も文字も扱えるため便利
    return (
        <>
            <h3 onClick={() => setActiveId(1)}>項目1</h3>
            {activeId === 1 && <p>項目1です</p>}
            <h3 onClick={() => setActiveId(2)}>項目2</h3>
            {activeId === 2 && <p>項目2です</p>}
            <h3 onClick={() => setActiveId(3)}>項目3</h3>
            {activeId === 3 && <p>項目3です</p>}
        </>
    )
} */

// .map()メソッドで書くと...
export function Q49_ActiveStatus () {
    const [activeId, setActiveId] = useState(null);
    const items = [
        {id: 1, title: "項目1", content: "項目1です"},
        {id: 2, title: "項目2", content: "項目2です"},
        {id: 3, title: "項目3", content: "項目3です"},
    ]
    return (
        <>
            {items.map((item) => 
                <div key={item.id}>
                    <h3 onClick={() => setActiveId(item.id)}>{item.title}</h3>
                    {activeId === item.id && <p>{item.content}</p> }
                </div>
            )}
        </>
    )
}