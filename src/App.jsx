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
    <button onClick={onClick}>{count}</button>
  )
}*/

/*### Q2. トグルボタン (条件分岐)
ボタンをクリックするたびに「ON」「OFF」の文字が切り替わるコンポーネントを作ってください。
*   **Hooks:** `useState`
*   **ヒント:** boolean値 (`true`/`false`) を使います。*/
/*export function App (){
  const [toggle, setToggle] = useState(true);
  return ( //変数として挙動を書かずに、そのまま代入する　ボタンが押されるたび、スイッチの入れ替え（！で反転、有無を判定
    <button onClick={ ()=> setToggle(!toggle) }>{toggle ? "ON" : "OFF"}</button> //実際に表示される文字は、三項演算子で簡単に
  )
}*/

/*### Q3. 入力ミラーリング (イベント)
テキストボックスに入力した文字が、そのすぐ下にリアルタイムで表示されるようにしてください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [text, setText] = useState("");
  return (
    <> //value={}はuseStateの第1引数と一致させる
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="入力してください" /> 
      <p>入力された文字👇</p>
      <p className="text">{text}</p>
    </>
  )
}*/

/*### Q4. FizzBuzzカウンター (ロジック)
Q1のカウンターを改造し、数字の横に以下のルールで文字を表示してください。
*   3の倍数: "Fizz"
*   5の倍数: "Buzz"
*   15の倍数: "FizzBuzz"
*   それ以外: 表示なし
*   **Hooks:** `useState`*/
/*export function App (){
  const [count, setCount] = useState(0);
  return ( //FizzBuzz関数は通常1から始まることが多い、今回はカウントを元にしているので0から始まる
    <button onClick={ () => {setCount(count + 1)} }>{count} {(count===0)? "" : (count%3===0 && count%5===0)? "FizzBuzz" : ((count%3===0)? "Fizz" : (count%5===0)? "Buzz" : "")}</button>
  )
}*/

/*### Q5. 偶数・奇数判定 (ロジック)
数字を入力できるフォームを作り、入力された数字が「偶数」か「奇数」かを判定して表示してください。
*   **Hooks:** `useState`*/
/*export function App (){
   const [number, setNumber] = useState("");
   return (
    <>
      <input value={number} onChange={ (e) => setNumber(e.target.value)} placeholder="数字を入力してください" />
      <p>判定結果👇</p>
      <p>{number === "" ? "" : (number%2===0 ? "偶数" : "奇数")}</p>
    </>
   ) //データを取得する場所と、結果を返す場所で書く場所を分ける　value={}はuseStateの第1引数と一致させる
}*/

/*### Q6. ログインステータス (条件付きレンダリング)
「ログイン」ボタンと「ログアウト」ボタンを用意します。
*   ログイン中: 「ようこそ！ユーザーさん」と表示し、「ログアウト」ボタンだけ表示。
*   ログアウト中: 「ログインしてください」と表示し、「ログイン」ボタンだけ表示。
*   **Hooks:** `useState`*/
/*export function App (){
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? (<> <p>ようこそ！ユーザーさん</p>
      <button onClick={ ()=>{ setLogin(!login) }}>ログアウトボタン</button> </>) :
      (<> <p>ログインしてください</p>
      <button onClick={ ()=>{ setLogin(!login) }}>ログインボタン</button> </>)
      }
    </>
  )
}*/

/*### Q7. 最大値トラッカー (ロジック)
数値入力欄と「更新」ボタンがあります。
これまでに入力された数値の中で、**最大の数値**だけを常に表示し続けるコンポーネントを作ってください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [current, setCurrent] = useState("");  //現在の入力された値を保存
  const [maxNumber, setMaxNumber] = useState(0);  //最大値を保存
  return ( //useState()は状態の管理に応じて複数書いてOK!
    <>
      <input value={current} onChange={ (e) => setCurrent(e.target.value)} placeholder="数値を入力してください" />
      <button onClick={ () => {(Number(current)) > maxNumber ? setMaxNumber(Number(current)) : setMaxNumber(maxNumber)}}>更新</button>
      <p>最大値を表示: {maxNumber}</p>
    </>
  )
}*/

/*### Q8. 成績判定 (条件分岐)
点数（0~100）を入力すると、以下の評価を表示してください。
*   80以上: "A判定"
*   70以上: "B判定"
*   60以上: "C判定"
*   それ以外: "D判定"
*   **Hooks:** `useState`*/
/*export function App (){
  const [score, setScore] = useState("");
  return (
    <>
      <input type="text" value={score} onChange={ (e) => setScore(e.target.value)} placeholder="数値を入力してください" />
      <p>評価: {(score === "") ? "" : (score >= 80) ? "A判定" : (score >= 70) ? "B判定" : (score >= 60) ? "C判定" : "D判定"}</p>
    </>
  ) //scoreは文字列なので、Number()で囲むと更に良い
}*/

/*### Q9. 背景色スイッチャー (Switch文ロジック)
セレクトボックス（ドロップダウン）で「赤」「青」「緑」を選択できるようにします。
選択した色に合わせて、画面（またはボックス）の背景色を変更してください。
*   **Hooks:** `useState`*/
export function App (){
  const [color, setColor] = useState("");
  const bgcolor = () => {
     switch(color){
      case "赤" : return "pink";  //値を返してあげる
      case "青" : return "lightblue";
      case "緑" : return "lightgreen";
      default : return "white";  //デフォルトの状態も書いてあげる
  }}
  return ( //全体にstyleを定義する（最初のreturn内の<div>タグに適用させる / 定義したかたまりごと呼び出してもOK
    <div style={{backgroundColor: bgcolor(), width: "155px", height: "25px", borderRadius: "5px"}}>
      <select name="color" onChange={ (e) => setColor(e.target.value)}>
        <option value="">-- 選択してください --</option>
        <option value="赤">赤</option>
        <option value="青">青</option>
        <option value="緑">緑</option>
      </select>
    </div>
    )
}

