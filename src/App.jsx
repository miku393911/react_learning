/* # React 実践練習問題集 (全30問)
学習した「1枚目の画像（ロジック・条件分岐）」と「3枚目の画像（配列・コールバック）」の内容をベースに、Reactの `useState` と `useEffect` を使って実装する練習問題です。
難易度は徐々に上がっていきます。
## Part 1: ロジックと条件分岐 (1枚目の内容ベース)
**テーマ: 条件分岐 (if/switch)、ループロジック、基本的なState管理**

### Q1. カウンター (基本)
ボタンをクリックすると数字が1ずつ増えるカウンターを作ってください。
*   **Hooks:** `useState`*/

import { useState } from "react"
import "./style.css";
/*export function App (){
  const [count, setCount] = useState(0);
  const onClick = ( () =>  //先に変数として挙動を書いて、のちにその変数を呼び出すみたいな
    setCount(count+1)
  )
  return(
    <button onClick={onClick}>Click! {count}</button>
  )
}*/

/*### Q2. トグルボタン (条件分岐)
ボタンをクリックするたびに「ON」「OFF」の文字が切り替わるコンポーネントを作ってください。
*   **Hooks:** `useState`
*   **ヒント:** boolean値 (`true`/`false`) を使います。*/
/*export function App (){
  const [toggle, setToggle] = useState(true);
  return ( //変数として挙動を書かずに、そのまま代入する　ボタンが押されるたび、スイッチの入れ替え（！で反転も可能）
    <button onClick={ ()=> setToggle(!toggle) }>{toggle ? "ON" : "OFF"}</button> //実際に表示される文字は、三項演算子で簡単に
  )
}*/

/*### Q3. 入力ミラーリング (イベント)
テキストボックスに入力した文字が、そのすぐ下にリアルタイムで表示されるようにしてください。
*   **Hooks:** `useState`*/
export function App (){
  const [text, setText] = useState("");
  return (
    <> 
      <input type="text" value={text} /*valueと書くことでtextとの関係を密接にできる*/ onChange={(e)=> setText(e.target.value)} placeholder="入力してください" /> 
      <p>入力された文字👇</p>
      <p className="text">{text}</p>
    </>
  )
}