import { useState } from "react"

/*### Q34. 三項演算子によるスタイル切り替え
ボタンを押すたびに、「有効（青色）」「無効（灰色）」のスタイルと文字が切り替わるようにしてください。
*   **狙い:** 2つの状態の切り替えロジックをマスターする。*/
export function Q34_Color() { 
    const [isColor, setIsColor] = useState(false);
    return(
        <>
            <button onClick={() => setIsColor(!isColor)}>
                {isColor ? <p style={{backgroundColor: "lightblue"}}>有効</p> : <p style={{backgroundColor: "lightgray"}}>無効</p>}
            </button>
        </> 
    )
}

/* 現場向き
<button>タグ内に<p>タグを書くのは推奨しない、原則としてテキストのみ
styleは<button>タグ全体に書くようにして、別で関数として定義する
const buttonStyle = {
    backgroundColor: isColor ? "blue" : "gray",
    color: isColor ? "black" : "white",
}
<button style={buttonStyle} onClick={() => setIsColor(!isColor)}> </button> */