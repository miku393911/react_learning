/*### Q37. 特定の要素だけ色を変える
5つのボタンがあり、クリックしたボタンだけが赤くなるようにしてください（他は元の色）。
*   **狙い:** 「どのIDが選択されているか」をStateで持つ重要性を知る。*/

import { useState } from "react"

export function Q37_ClickButton() {
    const [isClick, setIsClick] = useState(null);
    const isClickButton =  (id) => {
        setIsClick(id);
    }
    return (
        <div>
            <button onClick={() => {isClickButton(1)}} style={{backgroundColor: isClick === 1 ? "red" : "white"}}>ボタン1</button>
            <button onClick={() => {isClickButton(2)}} style={{backgroundColor: isClick === 2 ? "red" : "white"}}>ボタン2</button>
            <button onClick={() => {isClickButton(3)}} style={{backgroundColor: isClick === 3 ? "red" : "white"}}>ボタン3</button>
            <button onClick={() => {isClickButton(4)}} style={{backgroundColor: isClick === 4 ? "red" : "white"}}>ボタン4</button>
            <button onClick={() => {isClickButton(5)}} style={{backgroundColor: isClick === 5 ? "red" : "white"}}>ボタン5</button>
        </div>
    )
}
 //　現場向き  .map()メソッドを使ってボタンが何個必要でも1行で表すことができる