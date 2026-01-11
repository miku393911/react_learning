/* ### Q50. タブ切り替えUI
「プロフィール」「設定」「通知」の3つのタブで、表示する内容を切り替えてください。
*   **狙い:** 条件付きレンダリングの応用。*/

import { useState } from "react"

/*export function Q50_TabSelect() {
    const [isActiveTab, setIsActiveTab] = useState(null);  //タブの選択状態
    return (
        <>
            <div>
                <button onClick={() => setIsActiveTab(0)}>プロフィール</button>
                {isActiveTab === 0 && <p>名前</p>}
            </div>
            <div>
                <button onClick={() => setIsActiveTab(1)}>設定</button>
                {isActiveTab === 1 && <p>変更内容を選ぶ</p>}
            </div>
            <div>
                <button onClick={() => setIsActiveTab(2)}>通知</button>
                {isActiveTab === 2 && <p>通知を管理する</p>}
            </div>
        </>
    )
}*/

// .map()メソッドを使うと...
export function Q50_TabSelect() {
    const [isActiveTab, setIsActiveTab] = useState(null);
    const items = [
        {id: 1, title: "プロフィール", content: "名前"},
        {id: 2, title: "設定", content: "変更内容を選ぶ"},
        {id: 3, title: "通知", content: "通知を管理する"},
    ]
    return (
        <>
            {items.map((item) => 
                <div key={item.id} >
                    <button onClick={() => setIsActiveTab(item.id)}>{item.title}</button>
                    {isActiveTab === item.id && <p>{item.content}</p>}
                </div>
            )}
        </>
    )
}