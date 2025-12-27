/*### Q31. 引数付きイベントハンドラー
ボタンをクリックした時に、そのボタンに割り当てられた「ID」をコンソールに表示してください。
複数のボタン（例: ID 1, 2, 3）を用意し、それぞれクリック時に異なるIDが表示されるようにしてください。
*   **狙い:** なぜ `onClick={() => handleClick(id)}` と書く必要があるのかを完璧に理解する。*/

export function Q31_EventHandler() {
    const handleClick = (id) => {
        console.log(id);
    }
    return ( //以下に記載されているidは設定値（属性）、変数名ではない + idという引数に値を直接渡す基本
        <>
            <button id="1" onClick={() => handleClick(1)}>ボタン1</button>
            <button id="2" onClick={() => handleClick(2)}>ボタン2</button>
            <button id="3" onClick={() => handleClick(3)}>ボタン3</button>
        </>
    ) // ボタンが押された際、idの値を引数にして、handleClick関数を実行する
}
