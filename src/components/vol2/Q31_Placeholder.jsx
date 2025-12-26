/*### Q31. 引数付きイベントハンドラー
ボタンをクリックした時に、そのボタンに割り当てられた「ID」をコンソールに表示してください。
複数のボタン（例: ID 1, 2, 3）を用意し、それぞれクリック時に異なるIDが表示されるようにしてください。
*   **狙い:** なぜ `onClick={() => handleClick(id)}` と書く必要があるのかを完璧に理解する。*/

export function Q31_Placeholder() { 
    const handleClick = () => {
        console.log(id);
    }
    return (
        <>
            <button id="1" onClick={() => handleClick(id)}>ボタン{id}</button>
            <button id="2" onClick={() => handleClick(id)}>ボタン{id}</button>
            <button id="3" onClick={() => handleClick(id)}>ボタン{id}</button>
        </> 
    )
}
