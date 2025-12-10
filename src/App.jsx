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
}

/*### Q2. トグルボタン (条件分岐)
ボタンをクリックするたびに「ON」「OFF」の文字が切り替わるコンポーネントを作ってください。
*   **Hooks:** `useState`
*   **ヒント:** boolean値 (`true`/`false`) を使います。*/
/*export function App (){
  const [toggle, setToggle] = useState(true);
  return ( //変数として挙動を書かずに、そのまま代入する　ボタンが押されるたび、スイッチの入れ替え（！で反転、有無を判定
    <button onClick={ ()=> setToggle(!toggle) }>{toggle ? "ON" : "OFF"}</button> //実際に表示される文字は、三項演算子で簡単に
  )
}

/*### Q3. 入力ミラーリング (イベント)
テキストボックスに入力した文字が、そのすぐ下にリアルタイムで表示されるようにしてください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [text, setText] = useState("");
  return (
    <> //value={}はuseStateの第1引数と一致させる
      <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="入力してください" /> 
      <p>入力された文字👇</p>
      <p className="text">{text}</p>
    </>
  )
}

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
}

/*### Q5. 偶数・奇数判定 (ロジック)
数字を入力できるフォームを作り、入力された数字が「偶数」か「奇数」かを判定して表示してください。
*   **Hooks:** `useState`*/
/*export function App (){
   const [number, setNumber] = useState("");
   return (
    <>
      <input value={number} name="number" onChange={ (e) => setNumber(e.target.value)} placeholder="数字を入力してください" />
      <p>判定結果👇</p>
      <p>{number === "" ? "" : (number%2===0 ? "偶数" : "奇数")}</p>
    </>
   ) //データを取得する場所と、結果を返す場所で書く場所を分ける　value={}はuseStateの第1引数と一致させる
}

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
}

/*### Q7. 最大値トラッカー (ロジック)
数値入力欄と「更新」ボタンがあります。
これまでに入力された数値の中で、**最大の数値**だけを常に表示し続けるコンポーネントを作ってください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [current, setCurrent] = useState("");  //現在の入力された値を保存
  const [maxNumber, setMaxNumber] = useState(0);  //最大値を保存
  return ( //useState()は状態の管理に応じて複数書いてOK!
    <>
      <input value={current} name="current" onChange={ (e) => setCurrent(e.target.value)} placeholder="数値を入力してください" />
      <button onClick={ () => {(Number(current)) > maxNumber ? setMaxNumber(Number(current)) : setMaxNumber(maxNumber)}}>更新</button>
      <p>最大値を表示: {maxNumber}</p>
    </>
  )
}

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
      <input type="text"　name="score" value={score} onChange={ (e) => setScore(e.target.value)} placeholder="数値を入力してください" />
      <p>評価: {(score === "") ? "" : (score >= 80) ? "A判定" : (score >= 70) ? "B判定" : (score >= 60) ? "C判定" : "D判定"}</p>
    </>
  ) //scoreは文字列なので、Number()で囲むと更に良い
}

/*### Q9. 背景色スイッチャー (Switch文ロジック)
セレクトボックス（ドロップダウン）で「赤」「青」「緑」を選択できるようにします。
選択した色に合わせて、画面（またはボックス）の背景色を変更してください。
*   **Hooks:** `useState`*/
/*export function App (){
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

/*### Q10. シンプルな電卓 (ロジック)
2つの数値入力欄と、「足す」「引く」「掛ける」「割る」の4つのボタンを用意します。
ボタンを押すと、計算結果を表示してください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [leftCalculation, setLeftCalculation] = useState("");
  const [rightCalculation, setRightCalculation] = useState("");
  const [total, setTotal] = useState("");
  return (
    <>
      <input type="text" name="leftCalculation" value={leftCalculation} onChange={ (e) => setLeftCalculation(e.target.value)}/>
      <button onClick={ ()=> setTotal(Number(leftCalculation) + Number(rightCalculation)) }>足す</button>
      <button onClick={ ()=> setTotal(Number(leftCalculation) - Number(rightCalculation)) }>引く</button>
      <button onClick={ ()=> setTotal(Number(leftCalculation) * Number(rightCalculation)) }>掛ける</button>
      <button onClick={ ()=> setTotal(Number(leftCalculation) / Number(rightCalculation)) }>割る</button>
      <input type="text" name="rightCalculation" value={rightCalculation} onChange={ (e) => setRightCalculation(e.target.value )} />
      <p>計算結果: {total}</p>
    </>
  )
}


/*## Part 2: 配列とコールバック (3枚目の内容ベース)
**テーマ: 配列操作 (map/filter/find)、コールバック関数、リストレンダリング**

### Q11. 名簿の表示 (map)
以下の配列データを `map` を使ってリスト表示(`<ul><li>`)してください。
```javascript*/
/*const names = ["田中", "佐藤", "鈴木", "高橋"];
// **Hooks:** なし (Propsまたは定数でOK)
export function App (){
  return( //<ul>タグの<li>タグだけを配列の要素として繰り返したいから、<li>タグを新しい配列を作る時に一緒に作る
    <ul> 
      { names.map( (name) => <li key={name}>{name}</li>)}
    </ul>
  ) //<li>直接{}に書き込むことができる/ li>にkeyを付ける（配列の要素を区別するため
}

/*### Q12. ユーザーカード (コンポーネント分割)
`UserCard` というコンポーネントを作り、親コンポーネントから名前と年齢をPropsで渡して表示してください。
親コンポーネントでは配列データを `map` し、`UserCard` を繰り返し表示してください。*/
/*function UserCard(props){
  return (
    <li>名前: {props.name}（年齢: {props.age}歳）</li> //UserCardは渡された情報をそのまま表示する役割
  )
}
export function App (){
  const users = [
    {name: "大谷", age: 17},
    {name: "小泉", age: 18},
  ]
  return (
    <>
      <ul> //データを持っていて、.map()メソッドを使って全員分表示する
        {users.map((user) => { return <UserCard key={user.name} name={user.name} age={user.age} /> })} 
      </ul>  
      //name={}やage={}の命名は、UserCardコンポーネントを作る時に決めた名前だということ
    </>
  ) 
}*/ /*<li>タグを作る感じで、.map()メソッドで回し、引数を取る（returnでUserCardコンポーネントごと返す/その中に引数として配列のデータを渡せるようにする）*/

/*### Q13. アクティブユーザーのみ表示 (filter)
ユーザーの配列（`{name: "...", isActive: true/false}`）があります。
チェックボックス「アクティブのみ表示」を用意し、チェックが入っている時は `isActive: true` のユーザーだけを表示してください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [isActive, setIsActive] = useState(true);
  const users = [
    {name: "miku", isActive: true},
    {name: "yuka", isActive: true},
    {name: "yuuta", isActive: false}
  ]  //まず.filter()メソッドで条件を絞り込む
  const filterUsers = users.filter( (user) => { //return trueで通す、return falseで通さないみたいなイメージ
    if(isActive){ //まずisActiveを見て、trueの人を残す / if(isActive === true)と書いてもOK
      return user.isActive === true;  //trueだけを返す
    }else{
      return true;  //全部返す
    } //checked属性を書き、isActiveが権限を握るように書いてあげる！
  });
  return (
    <> 
      <input type="checkbox" checked={isActive} onChange={ () => setIsActive(!isActive) } /> 
      <ul>
        { filterUsers.map( (user) => <li key={user.name}>{user.name}</li> )}
      </ul>
    </>
  )
}*/

/*### Q14. ユーザー検索 (filter/includes)
検索ボックスに入力した文字が名前に含まれるユーザーだけをリアルタイムで絞り込んで表示してください。
*   **Hooks:** `useState`*/
/*export function App (){
  const [text, setText] = useState("");
  const userDate = [
    {name: "miku", age: 24},
    {name: "yuka", age: 30},
    {name: "yuuta", age: 27}
  ] //.toLowerCase()は関数、引数userとオブジェクトのnameを調べるからuser.name、inputのtextに含まれているかどうかを調べる
  const filterUsers = userDate.filter( (user) => { return user.name.toLocaleLowerCase().includes(text) });
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="入力してください"  />
      <ul>
        {filterUsers.map( (user) => <li key={user.name}>{user.name}</li>)}
      </ul>
    </>
  )
}*/

/*### Q15. 特定のユーザーを探す (find)
IDを入力して「検索」ボタンを押すと、該当するIDのユーザーの名前を表示してください。見つからない場合は「見つかりません」と表示します。
*   **Hooks:** `useState`*/
/*export function App (){
  const [text, setText] = useState("");  //入力の状態管理
  const [result, setResult] = useState("");  //結果表示の状態管理
  const userDate = [
    {id: 1, name: "miku", age: 24},
    {id: 2, name: "yuka", age: 30},
    {id: 3, name: "yuuta", age: 27},
  ]
  const foundUsers = userDate.find( (user) => user.id == Number(text));  //===（厳密等価演算子）にして型を合わせるか、==（等価演算子）にして型を気にしないで済むようにするか
  return ( //findは条件に合う1つを連れてくるだけ、1つのオブジェクトごと連れてくるので.mapで配列全体を把握する必要がない
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="IDを入力してください" />
      <button onClick={() => setResult(foundUsers ? foundUsers.name : "見つかりませんでした")}>検索</button>
      <ul> 
        検索結果： {result}
      </ul>
    </>
  )  //foundUsersで絞り込んだデータの中から表示するという限定的な使い方ができる
}*/

/*### Q16. TODOリスト・追加 (配列のState更新)
テキストボックスと「追加」ボタンを作り、TODOリストに新しい項目を追加できるようにしてください。
*   **Hooks:** `useState` (配列)
*   **ヒント:** `setTodos([...todos, newItem])`*/
/*export function App (){
  const [newItem, setNewItem] = useState("");  //入力された文字を保存するため
  const [todos, setTodos] = useState([]);  //追加した後の状態（リスト全体の状態）、初期値が配列じゃないと.map()メソッドが適用されない
  const onClickAdd = () => {
    if(newItem === ""){
      return; //空白で追加ボタンを押しても動かないように
    }
    setTodos([...todos, newItem]);
    setNewItem("");  //入力欄を空白に戻す
  }
  return (
    <>
      <input type="text" value={newItem} onChange={ (e) => setNewItem(e.target.value)} placeholder="入力してください" />
      <button onClick={onClickAdd}>追加</button>
      <ul>
        追加リスト👇 {todos.map( (todo) => <li key={todo}>{todo}</li>)}
      </ul>
    </>
  )
}*/

/*### Q17. TODOリスト・削除 (filterによる削除)
Q16のリストの各項目に「削除」ボタンを追加し、押された項目をリストから削除してください。
*   **Hooks:** `useState`
*   **ヒント:** `filter` を使って、削除したいID以外の新しい配列を作ります。*/
export function App (){
  
}