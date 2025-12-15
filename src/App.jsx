import { useEffect, useState } from "react";
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

/*export function App (){
  const [toggle, setToggle] = useState(true);
  return ( //変数として挙動を書かずに、そのまま代入する　ボタンが押されるたび、スイッチの入れ替え（！で反転、有無を判定
    <button onClick={ ()=> setToggle(!toggle) }>{toggle ? "ON" : "OFF"}</button> //実際に表示される文字は、三項演算子で簡単に
  )
}

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

/*export function App (){
  const [count, setCount] = useState(0);
  return ( //FizzBuzz関数は通常1から始まることが多い、今回はカウントを元にしているので0から始まる
    <button onClick={ () => {setCount(count + 1)} }>{count} {(count===0)? "" : (count%3===0 && count%5===0)? "FizzBuzz" : ((count%3===0)? "Fizz" : (count%5===0)? "Buzz" : "")}</button>
  )
}

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

/*export function App (){
  const [score, setScore] = useState("");
  return (
    <>
      <input type="text"　name="score" value={score} onChange={ (e) => setScore(e.target.value)} placeholder="数値を入力してください" />
      <p>評価: {(score === "") ? "" : (score >= 80) ? "A判定" : (score >= 70) ? "B判定" : (score >= 60) ? "C判定" : "D判定"}</p>
    </>
  ) //scoreは文字列なので、Number()で囲むと更に良い
}

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
      <select name="color"　value={color} onChange={ (e) => setColor(e.target.value)}> //Reactとブラウザの表示を一致させる
        <option value="">-- 選択してください --</option>
        <option value="赤">赤</option>
        <option value="青">青</option>
        <option value="緑">緑</option>
      </select>
    </div>
    )
}*/

/*export function App (){
  const [leftCalculation, setLeftCalculation] = useState("");  //numbreにしても""は0と同義
  const [rightCalculation, setRightCalculation] = useState("");
  const [total, setTotal] = useState("");
  return (
    <>
      <input type="number" name="leftCalculation" value={leftCalculation} onChange={ (e) => setLeftCalculation(e.target.value)}/>
      <button onClick={ ()=> setTotal(Number(leftCalculation) + Number(rightCalculation)) }>足す</button>
      <button onClick={ ()=> setTotal(Number(leftCalculation) - Number(rightCalculation)) }>引く</button>
      <button onClick={ ()=> setTotal(Number(leftCalculation) * Number(rightCalculation)) }>掛ける</button>
      <button onClick={ ()=> setTotal(Number(leftCalculation) / Number(rightCalculation)) }>割る</button>
      <input type="number" name="rightCalculation" value={rightCalculation} onChange={ (e) => setRightCalculation(e.target.value )} />
      <p>計算結果: {total}</p>
    </>
  )
}*/

/*const names = ["田中", "佐藤", "鈴木", "高橋"];
export function App (){
  return( //<ul>タグの<li>タグだけを配列の要素として繰り返したいから、<li>タグを新しい配列を作る時に一緒に作る
    <ul> 
      { names.map( (name) => <li key={name}>{name}</li>)}
    </ul>
  ) //<li>直接{}に書き込むことができる/ li>にkeyを付ける（配列の要素を区別するため
}*/

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
      </ul>  //name={}やage={}の命名は、UserCardコンポーネントを作る時に決めた名前だということ
    </>
  ) 
}*/ /*<li>タグを作る感じで、.map()メソッドで回し、引数を取る（returnでUserCardコンポーネントごと返す/その中に引数として配列のデータを渡せるようにする）*/

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
    } 
  });
  return ( //checked属性を書き、isActiveが権限を握るように書いてあげる、！でボタンのオンオフが挙動するように
    <> 
      <input type="checkbox" checked={isActive} onChange={ () => setIsActive(!isActive) } /> checkbox
      <ul>
        { filterUsers.map( (user) => <li key={user.name}>{user.name}</li> )}
      </ul>
    </>
  )
}*/

/*export function App (){
  const [text, setText] = useState("");
  const userDate = [
    {name: "miku", age: 24},
    {name: "yuka", age: 30},
    {name: "yuuta", age: 27}
  ] //.toLowerCase()は関数、引数userとオブジェクトのnameを調べるからuser.name、inputのtextに含まれているかどうかを調べる
  const filterUsers = userDate.filter( (user) => user.name.toLowerCase().includes(text.toLowerCase()));
  return ( //text（input欄）が大文字でもしっかり対応できるようにtextにもtoLowerCase()を付けるよ尚良し
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="入力してください"  />
      <ul>
        {filterUsers.map( (user) => <li key={user.name}>{user.name}</li>)}
      </ul>
    </>
  )
}*/

/*export function App (){
  const [text, setText] = useState("");  //入力の状態管理
  const [result, setResult] = useState("");  //結果表示の状態管理
  const userDate = [
    {id: 1, name: "miku", age: 24},
    {id: 2, name: "yuka", age: 30},
    {id: 3, name: "yuuta", age: 27},
  ]
  const foundUsers = userDate.find( (user) => user.id == Number(text));  //===（厳密等価演算子）にしてNumber()で型を合わせるか、==（等価演算子）にして型を気にしないで済むようにするか
  return ( //findは条件に合う1つを連れてくるだけ、1つのオブジェクトごと連れてくるので.mapで配列全体を把握する必要がない
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="IDを入力してください" />
      <button onClick={() => setResult(foundUsers ? foundUsers.name : "見つかりませんでした")}>検索</button>
      <p>検索結果： {result}</p>
    </>
  )  //foundUsersで絞り込んだデータの中から表示するという限定的な使い方ができる
}*/

/*export function App (){
  const [newItem, setNewItem] = useState("");  //入力された文字を保存するため
  const [todos, setTodos] = useState([]);  //追加した後の状態（リスト全体の状態）、初期値が配列じゃないと.map()メソッドが適用されない
  const onClickAdd = () => {
    if(newItem === ""){
      return; //空白で追加ボタンを押しても動かないように
    }
    const newObject = { //idもセットしたオブジェクトをを作る
      id: Date.now(),
      text: newItem
    }
    setTodos([...todos, newObject]); //本来はnewItemが追加される予定だった
    setNewItem("");  //入力欄を空白に戻す
  }
  const onClickDeleted = (deletedId) => {//deletedIndexはリストの中の何番めを消すかを判定するために必要
    const newTodos = [...todos];  //新しい配列を自動で作るので事前のコピー（この行）は本来なら不要
    setTodos(newTodos.filter( (todo) => todo.id !== deletedId));  //残したい人だけ選ぶ、todoは使わないので、_で表せる！
  } //indexを第二引数に取ることで、同じ文字を追加した際もきちんと判別ができる
  return (
    <>
      <input type="text" value={newItem} onChange={ (e) => setNewItem(e.target.value)} placeholder="入力してください" />
      <button onClick={ () => onClickAdd()}>追加</button>
      <ul>
        リスト👇 {todos.map( (todo) => <li key={todo.id}> {todo.text} <button onClick={ () => onClickDeleted(todo.id)}>削除</button> </li> )}
      </ul>
    </>
  ) //アロー関数でindexを削除することを実行できるようにする
}*/

/*export function App (){
  const [articles, setArticles] = useState([ //初期値に配列やオブジェクトを挿入することもできた！
    {id:1, data: "記事1", likes: 0},
    {id:2, data: "記事2", likes: 0},
    {id:3, data: "記事3", likes: 0}
  ]) //いいね数であるlikesというプロパティを作るところから！（初期値は0
  const onClickLike = (id) => //配列のオブジェクトのidがonClickLikeしたボタンのidと一致するかどうか調べる
    setArticles((prevArticles) => prevArticles.map( (article) => article.id === id ? {...article, likes: article.likes +1 } : article))
  return ( //関数型アップデートで書く場合が多い（連続してボタンが押された時とか、　onClickLikeの引数にarticle.idが使われているのは、それでボタンを見分けているから
    <>
    <ul>
      {articles.map( (article) => <li key={article.id}>{article.data}<button onClick={ () => onClickLike(article.id)}>♡{article.likes}いいね</button></li>)}
    </ul>
    </>
  )
}*/
/*export function App (){ 
  const articles = [
    {id:1, data: "記事1"},
    {id:2, data: "記事2"},
    {id:3, data: "記事3"}
  ];
  return ( //コンポーネントは関数のようなもので、使い回さないのであれば新しいファイルを作る必要はない
    <ul>
      {articles.map((article) => 
        <ArticleItem key={article.id} data={article.data} />
      )}
    </ul>
  ) //dataという識別子（props）を渡す！
}
function ArticleItem( {data} ){ ///分割代入でdataを識別子（props）として受け取っている
    const [count, setCount] = useState(0);  //useStateも分割代入を使っている！
    const onClick = () => setCount(count + 1);  //クリックされた時にカウントを1増やすという行為を処理するから、アロー関数を用いて表す
    return ( //こっちも(prev) => setCount(prev + 1)と書いた方がより強固なコードになる
        <li>
            {data}
            <button onClick={onClick}>♡{count}いいね</button>
        </li>
    )
}*/

/*export function App (){  //合計金額のように自動的に計算で出されるためuseStateで管理する必要がない
  const products = [ //削除ボタンを作る際に必要なデータ（定数でOK/ 賞品一覧のデータは固定
    {name: "シャツ", price: 3000},
    {name: "ニット", price: 6500},
    {name: "スカート", price: 4000},
]
  const [cartItems, setCartItems] = useState([]); //カート自体を管理（商品の増減のたびに再レンダリング
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0); //（今の合計、次の商品） => 次の合計, totalの最初の値（reduceにおいて、何から始めるかを決めるための初期値
  const onClickAdd = (addItem) => {  //基本.reduce()は引数を2つ持つ（合計と今の値の2つで足していって1つにするイメージ
    setCartItems([...cartItems, addItem]);  //カートに商品一覧から追加した商品を追加する
  }
  const onClickDeleted = (deletedIndex) => {
    const newTodos = [...cartItems];  //削除したいのはカートの商品なので、カートの商品をコピーする（削除したいものを削除するためのfilter
    setCartItems(newTodos.filter((_, index) => index !== deletedIndex)) //商品のindexと削除したいindexが一致しないものを残す
  }
  return (
    <>
    <h1>商品一覧</h1>
    <ul>
      {products.map ((product) => <li key={product.name}>
      {product.name} : {product.price}円 
      <button onClick={() => onClickAdd(product)}>追加</button></li>)}
    </ul>
    <h1>現在のカート</h1>
    <ul>
      {cartItems.map ((cartItem, index) => <li key={index}>
      {cartItem.name} : {cartItem.price}円 
      <button onClick={ () => onClickDeleted(index)}>削除</button></li>)}
    </ul>
    <p>合計: {totalPrice} 円</p>
    </>
  )
}*/

/*export function App (){
  const [activeTab, setActiveTab] = useState(1);  //最初はタブ1を選択
  const tabs = [
    {id: 1, label: "タブ1", content: "タブ1の内容です"},
    {id: 2, label: "タブ2", content: "タブ2の内容です"},
    {id: 3, label: "タブ3", content: "タブ3の内容です"}
  ]
  return ( //ボタンを自動生成（.map()メソッド、内容は.find()メソッドや.find()メソッドで探して表示（これで、ボタンの数が増えても楽に対応可能
  <>
    {tabs.map( (tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>))}
    <div>
      {tabs.find((tab) => tab.id === activeTab).content}
    </div>
  </>
  ) //三項演算子 ? : を使って見やすく分かりやすく書く方法（論理演算子 && を使うのも良き
}*/
/*export function App (){
  const [activeTab, setActiveTab] = useState(0);  //配列だから0番目スタート
  const contents = ["タブ1の内容です", "タブ2の内容です", "タブ3の内容です"];
  return( //配列から選ぶバージョン👆
    <>
      <button onClick={ () => setActiveTab(0)}>タブ1</button>
      <button onClick={ () => setActiveTab(1)}>タブ2</button>
      <button onClick={ () => setActiveTab(2)}>タブ3</button>
      <div>
        {contents[activeTab]}
      </div>
    </>
  ) //contents[activeTab]でタブの切り替えによって、内容を変えるということ！
}*/

/*export function App (){
  const [count, setCount] = useState(0); 
  const totalCount = () => setCount(count + 1);
  useEffect ( () => { //useEffect()の中にreturnを書くなら片付け処理（クリーンアップ関数としてじゃないとダメ！
    document.title = `現在のカウント: ${count}`; //document.titleでHTMLの<title>を上書きできるということ
  }, [count]) //依存関係配列を書こう！
return (<button onClick={totalCount}>カウントアップ！</button>) //これは画面に表示するのでreturnが必要、今回はカウントを増やすだけで良くてカウンター自体も1つしかないので関数を代入するだけでOK
}*/

/*export function App (){
  const [width, setWidth] = useState(window.innerWidth); //初期値は全世界共通の書き方！（width.outerWidth（外枠）やwindow.innerHeight（高さ）も<!DOCTYPE html>
  useEffect( () => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize); //resizeというイベント駆動 + 関数を実行する
    return () => { //クリーンアップ関数（画面から消える時に実行される処理
      window.removeEventListener("resize", handleResize); //JavaScriptでもクリーンアップの処理を書いてあげる方が丁寧
    }; //Reacはコンポーネントの部分だけでレンダリングができるので、コンポーネントが消えてもブラウザ上にはイベントが残る
  }, []); //空配列を入れると、最初の1回の変更だけ適用される（addとremove
  return ( //画面に表示するためのreturn
    <>
      <p>現在のウィンドウ幅: {width}</p> 
    </>
  )
}*/

/*export function App (){
  const [count, setCount] = useState(null); //数字のため、空白はnullで表現する！
  useEffect( () => {
    if(count <= 0) return; //カウントが0以下ならカウントダウンタイマー停止
    const timer = setInterval( () => { //setInterval()は指定した時間ごとに、決まった処理を繰り返し実行する
      setCount( (prevCount) => prevCount -1);
    }, 1000) //1000は秒数でタイマーの時の依存関係配列は1000であることが多い！
    return () => clearInterval(timer); // クリーンアップ関数
  }, [count]) //countが変わるたびに再レンダリングしたいから！
  return( //ボタンがクリックされたらcountが10にsetされる（という処理が実行されるということ/ コールバック関数らしい
    <>
      <button onClick={() => setCount(10)}>スタート！</button>
      {count !== null && (count === 0 ? <p>終了！</p> : <p>カウントダウンタイマー: {count}秒</p>)}
    </>
  ) //countがnullじゃないのであれば、右側を見に行く
}*/

/*export function App (){
  const [status, setStatus] = useState("調理中...");  //状態の管理（初期値は調整中...
  useEffect( () => {
    const timer = setTimeout( () => {
      setStatus("完成！");
    }, 3000) //3秒後という規定があるから！
    return () => clearTimeout(timer) //クリーンアップ関数
  }, []) //依存関係配列は今回は[]で、最初の1回のみ適用される
  return (
    <>
      <p style={{color: status === "完成！" ? "blue" : "black"}}>{status}</p>
    </>
  ) //styleを付けるならこんな感じ（三項演算子で条件分岐を
}*/
/*export function App(){ //変える前の問題
  const [status, setStatus] = useState("読み込み中...");
  useEffect( () => {
    const timer = setTimeout( () => {
      setStatus("データ読み込み完了！");
    }, 2000)
    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      <p>{status}</p>
    </>
  )
}*/

/*export function App(){ //localStorage()はwindow.localStorageというウィンドウ全体をを管理していりもののプロパティ（windowは省略して書けるので、localStorageが最初に来る！
  const [input, setInput] = useState(localStorage.getItem("input") || ""); //読み込み時の状態管理（論理演算子は予防のために使う！最初にinputに何も書いていない時、nullが返るとエラーになる可能性があるから
  useEffect( () => { //保存するための処理
    localStorage.setItem("input", input); //getItem("")とキーで繋がっている
  }, [input])  //今回クリーンアップ関数が不要だったのは、保存するだけだったから
  return ( //<textarea>タグにtype属性はない！
    <>
      <textarea value={input} onChange={ (e) => setInput(e.target.value)} placeholder="入力してください" />
      <p>{input}</p>
    </>
  ) //HTMLにおいて、<textarea>というタグがある！
}*/

/*export function App (){
  const  [count, setCount] = useState(0);
  useEffect( () => { //setInterval()は()の中を繰り返し処理するためのメソッド
    const timer = setInterval( () => { //new Date()...時計ロボットであり、作られた瞬間の時間を記憶してくれる
      setCount(new Date().toLocaleTimeString()); //toLocalTimeString()...その国によって読みやすい形に数字を表示してくれるメソッド
    }, 1000) //これはnew Date()のデータの引き出し方であり、他にも年や月のみを呼び出すことができる
    return () => clearInterval(timer) //クリーンアップ関数はuseEffect()内で何かをスタートさせた時にセットでストップする！
  }, [])
  return (
    <>
      {count}
    </>
  )
}*/

/*export function App (){
  const [email, setEmail] = useState(""); //メールアドレス入力欄の状態管理
  const [password, setPassword] = useState(""); //パスワード入力欄の状態管理
  const [errorEmail, setErrorEmail] = useState("") //メールアドレスのエラーメッセージを保存する用のuseState()
  const [errorPassword, setErrorPassword] = useState("") //パスワードのエラーメッセージを保存する用のuseState()
  useEffect( () => {
    setErrorEmail(email.length === 0 ? "" : (email.includes("@") ? "" : "メールアドレスが正しくありません"))
    setErrorPassword(password.length === 0 ? "" : (password.length >= 8 ? "" : "パスワードが正しくありません"))
  }, [email, password]) //依存関係配列は複数OK!
  return (
    <>
      <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} placeholder="メールアドレスを入力してください" />
      <p style={{color: email.includes("@") ? "black" : "red"}}>{errorEmail}</p>
      <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
      <p style={{color: password.length >= 8 ? "black" : "red"}}>{errorPassword}</p>
    </>
  ) //今回のコードでは、@や8文字以上になるまでエラーメッセージが出続けるが、本来のアプリではこれ対策のコードもある！
}*/

/*export function App(){
  const [isOpen, setIsOpen] = useState(false); //ポップアップの表示を管理する
  return ( //デフォルトはfailseで閉じている状態なので、最初に開くボタンを表示する
    <>
      <button onClick={ () => setIsOpen(true)}>開く</button>
      {isOpen && ( //開くボタンが押された時の処理を書く（論理演算子で書く
        <div style={{backgroundColor: "lightblue"}}>
          <p>ポップアップです</p>
          <button onClick={ () => setIsOpen(false)}>閉じる</button>
        </div>
      )}
    </> //開くボタンを押すと、ポップアップの内容と閉じるボタンが出現！
  ) //背景クリックでも閉じるようにできるが、CSSを駆使する（position: fixedを使って浮かせる感じ）ので今はしない笑
}*/

/*export function App(){
  const [number, setNumber] = useState(0); //現在の問題番号の状態を管理
  const [score, setScore] = useState(0); //現在のスコアを管理
  const tests = [ //解答欄の状態管理は不要（問題番号で、回答するたびに次の問題に進むから保存する必要がない
    {question: "りんごを英語で何と言う？", choices: ["Apple", "Banana", "Cat"], answer: "Apple"},
    {question: "みかんを英語で何と言う？", choices: ["Dog", "Orange", "Grape"], answer: "Orange"},
    {question: "ももを英語で何と言う？", choices: ["Mascat", "Monkey", "Peach"], answer: "Peach"},
  ] //配列をオブジェクトに書くこともできる！
  if(number >= tests.length){ //結果発表画面を作る（現在の問題数が配列の問題数を超えてしまった場合に終了する
    return ( //最初にこの条件分岐を書くことで、エラーが消える
      <div>
        <h2>結果発表！</h2>
        <p>スコア: {score}点</p>
      </div>
    )
  }
  const onClick = (choice) => { //ボタンが押されたら自動で次の問題並行するように
    if(choice === tests[number].answer){ //もし正解なら、現在のスコアを+1する（選んだ答えとtests配列の現在の問題番号の答えが一致していたら
      setScore(score + 1);
    }
    setNumber(number + 1); //問題の番号も+1するのは正解不正解にかかわらずデフォルトで絶対に行われる処理
  }
  return ( //<h1>タグは問題文を表示するコード（tests配列の現在の問題番号の問題文を表示
    <>
      <div>
        <h1>{tests[number].question}</h1>
        <div>
          {tests[number].choices.map( (choice) => <button key={choice} onClick={ () => onClick(choice)}>{choice}</button> )}
        </div>
      </div>
    </>
  ) //<div>タグはtests配列の現在の問題番号の選択肢を.map()メソッドで<button>タグとして並べる
}*/

