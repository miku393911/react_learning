# React 実践練習問題集 学習記録

このドキュメントでは、[README.md](./README.md) にある全30問の練習問題に取り組んだ過程、学んだこと、つまづいた点などを記録していきます。

## 目次
- [Part 1: ロジックと条件分岐](#part-1-ロジックと条件分岐)
- [Part 2: 配列とコールバック](#part-2-配列とコールバック)
- [Part 3: 応用・総合問題](#part-3-応用・総合問題)

---　　どんなことが問われていて、何を使ってどう解いたか、自分の言葉で

## Part 1: ロジックと条件分岐

### Q1. カウンター
*   **出題内容**: ボタンをクリックすると数字が1ずつ増えるカウンターを作成
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * Reactは非同期処理で複数の処理をまとめ、最後に最新の状態に更新すること
*   **コードのポイント**:
    ```jsx
    const handleClick = () => {
      setCount(prev => prev + 1);
    };
    ```

### Q2. トグルボタン
*   **出題内容**: ボタンクリックでON/OFFを切り替える
*   **学んだこと**:
    * 真偽値（boolean値）の反転には `!prev` が使えること/ 非同期処理をする
*   **コードのポイント**:
    ```jsx
    setIsActive(prev => !prev);
    ```

### Q3. 入力ミラーリング
*   **出題内容**: 入力欄の文字をリアルタイムで反映させる
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * 引数を取り、set関数に引数 `.target.value` をセットしてリアルタイムでレンダリングされること
*   **コードのポイント**:
    ```jsx
    onChange={(e) => setText(e.target.value)};
    ```

### Q4. FizzBuzzカウンター (ロジック)
*   **出題内容**: Q01のカウンターを改造してFizzBuzzカウンターを作成
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * カウントの値が0の時はどれにも当てはまらないので、空文字で設定する条件を最初に書くこと
*   **コードのポイント**:
    ```jsx
    count === 0 ? "" : (count % 3 === 0 && count % 5 === 0) ? "FizzBuzz" : //以下FizzBuzz関数が続く
     ```

### Q5. 偶数・奇数判定 (ロジック)
**出題内容**: 数字入力欄に入力された値が偶数か奇数か判定
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * Q04同様、入力欄が空文字の場合は空文字を返す条件を三項演算子の最初に記載すること
*   **コードのポイント**:
    ```jsx
    number === "" ? "" : (number % 2 === 0) ? "偶数" : "奇数";
     ```

### Q6. ログインステータス (条件付きレンダリング)
**出題内容**: ログイン状態に応じて、表示するボタンとメッセージを切り替える
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * Q02同様、ボタンクリックで真偽値を反転させるために、`!prev` が使えること
*   **コードのポイント**:
    ```jsx
    onClick={() => setIsLogin(prev => !prev)};
     ```

### Q7. 最大値トラッカー (ロジック)
**出題内容**: 数値入力欄と更新ボタンを設置、最大値を常時表示するコンポーネントを作成
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * 2つの値を比較し、最大値を選択し続けるメソッドがあること/ 使わなくても条件分岐で書ける
*   **コードのポイント**:
    ```jsx
    {() => setMaxNumber( prev => Math.max(prev, Number(count)))};
     ```

### Q8. 成績判定 (条件分岐)
**出題内容**: 点数によって評価をA~Dで判定する
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * 型を合わせてバグを防ぐ必要があるということ/ 三項演算子は可読性が低い
*   **コードのポイント**:
    ```jsx
    const num = Number(score);
     ```

### Q9. 背景色スイッチャー (Switch文ロジック)
**出題内容**: セレクトボックスで選択した色に合わせて、背景色を変える
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * styleの適用可能場所に決まりがあること（HTMLタグや自作コンポーネント）/ switch文の使い時について
*   **コードのポイント**:
    ```jsx
    <div style={{ backGroundColor : bgColor(), width: "155px", height: "25px", borderRadius: "5px"}}> //以下<select>タグや<option>タグが続く
     ```

### Q10. シンプルな電卓 (ロジック)
**出題内容**: 2つの数値入力欄と「足す」「引く」「掛ける」「割る」ボタンで計算結果表示
*   **使用したHooks**: `useState`
*   **学んだこと**:
    * 関数の条件分岐としてswitch文を使うこと/ <input type="number">であっても文字のため、数値としての型合わせが必要
*   **コードのポイント**:
    ```jsx
    switch(operator){
        case "+": result = l + r; break; 
        /*以下switch文のcaseが続く*/ 
    }
     ```

## Part 2: 配列とコールバック

### Q11. 名簿の表示 (map)
**出題内容**: 配列データをリスト表示
*   **学んだこと**:
    * .map()メソッド使う際に限らず、リスト化する際は<li>タグごと生成すれば良いこと
*   **コードのポイント**:
    ```jsx
    {names.map((name) => <li key={name}>{name}</li>)}
     ```

### Q12. ユーザーカード (コンポーネント分割)
**出題内容**: コンポーネントを使い、親のデータを引数を使い、子に渡す
*   **学んだこと**:
    * Reactに限らず、データは親から子へ渡されること + 分割代入の有効な使い時
*   **コードのポイント**:
    ```jsx
    function UserCard( {name, age} ) {/*以下、子コンポーネントが続く*/ }
     ```

### Q13. アクティブユーザーのみ表示 (filter)
**出題内容**: チェックボックスを使い、`isActive: true` のユーザーのみ表示
*   **使用したHooks**: `useState`
*   **学んだこと**: `e.target.checked`という、現在のチェックボックスの状態をそのままStateに保存するプロパティがあること
*   **コードのポイント**:
    ```jsx
    <onChange={(e) => setIsActive(e.target.checked)}
     ```

### Q14. ユーザー検索 (filter/includes)
**出題内容**: 入力した文字が名前に含まれるユーザーをリアルタイムで絞り込み表示
*   **使用したHooks**: `useState`
*   **学んだこと**: 検索対象が空の時の処理と検索結果が0件の処理（メッセージ表記）が必要だということ
*   **コードのポイント**:
    ```jsx
    const newText = text.trim() === "" ? 
        userDate : 
        userDate.filter((user) => user.name.toLowerCase().includes(text.toLowerCase().trim()));
     ```

### Q15. 特定のユーザーを探す (find)
**出題内容**: ID入力後、検索ボタン押す。該当IDのユーザー名表示、見つからない場合は「見つかりません」と表示
*   **使用したHooks**: `useState`
*   **学んだこと**: 条件分岐が3個以上ある場合や関数内に書く場合はif文を用いるということ/ `return`内は三項演算子
*   **コードのポイント**:
    ```jsx
    if(text === ""){setResult("IDを入力してください");} //以下、IDが一致した場合としなかった場合のif文が続く
    ```

### Q16. TODOリスト・追加 (配列のState更新)、TODOリスト・削除 (filterによる削除) 
**出題内容**: テキストボックスと追加ボタン作成、TODOリストに項目追加。各項目に削除ボタン追加、リストから削除可能
*   **使用したHooks**: `useState`
*   **ヒント:** `filter` を使って、削除したいID以外の新しい配列を作ります。
*   **学んだこと**: .filter()メソッドは新しい配列を作るのでコピー不要ということ
*   **コードのポイント**:
    ```jsx
    setTodos(todos.filter((todo) => todo.id !== deletedId));
    ```

### Q17. いいねボタン (配列内のオブジェクト更新)
**出題内容** 記事のリストそれぞれに「いいね！」ボタンがあり、押すと1増える仕組み
*   **使用したHooks**: `useState`
*   **学んだこと**: 配列のオブジェクトのプロパティを条件分岐によって追加する方法があること
*   **コードのポイント**:
    ```jsx
    setArticles((pervArticles) => prevArticles.map((article) => article.id === id ? {...article, likes: article.likes + 1} : article));
    ```

### Q18. ショッピングカート合計 (reduce/計算)
**出題内容**: 商品名と値段が入った配列があり、カートの商品の合計金額を常時計算して表示
*   **使用したHooks**: `useState`
*   **学んだこと**: 引数を複数使う際、_を用いて、使わない引数を表せること
*   **コードのポイント**:
    ```jsx
    setCartItems(cartItems.filter((_, index) => index !== deletedIndex));
    ```

### Q19. タブ切り替え (条件付きレンダリング)
**出題内容**: 複数のタブが押されたごとに表示する内容を変える
*   **使用したHooks**: `useState`
*   **学んだこと**: `useState()`の初期値を`tabs[0].id`のような書き方で常時最初のタブが選択できる
*   **コードのポイント**:
    ```jsx
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    ```

### Q20. タイトル更新 (useEffect)
**出題内容**: ボタンクリックでカウントアップし、そのカウントをブラウザタブに表示
*   **Hooks:** `useState`, `useEffect`
*   **学んだこと**: `document.title`で、ブラウザタブのタイトルが変更可能ということ
*   **コードのポイント**:
    ```jsx
    useEffect(() => {document.title = `現在のカウント: ${count}`;}. [count]);
    ```

### Q21. ウィンドウサイズ監視 (useEffect + Cleanup)
**出題内容**: ウィンドウサイズをリアルタイムで更新
*   **Hooks:** `useState`, `useEffect`
*   **ヒント:** `window.addEventListener` と `removeEventListener`
*   **学んだこと**: `window.InnerWidth`というウィンドウの内側の幅を教えるプロパティがあること
*   **コードのポイント**:
    ```jsx
    useState(window.innerWidth);
    ```

### Q22. カウントダウンタイマー (useEffect + setInterval)
**出題内容**: ボタンを押すと10秒からカウンドダウン、0秒で終了！のメッセージ表示
*   **Hooks:** `useState`, `useEffect`
*   **学んだこと**: `disabled={}`でボタンの無効化条件を書くことができること
*   **コードのポイント**:
    ```jsx
    <button onCLick={() => {setCount(10)} disabled={count !== null $$ count > 0}}> "スタート！" </button>
    ```

### Q23. データフェッチのシミュレーション (useEffect)
**出題内容**: コンポーネント表示後、読み込み中...、2秒後に、データ読み込み完了！と表示
*   **Hooks:** `useState`, `useEffect`
*   **学んだこと**: `setTimeout()`は、一定時間経過後、1度だけ処理を実行する関数ということ
*   **コードのポイント**:
    ```jsx
    useEffect(() => {
        const timer = setTimeout(() => {
             /* 以下、コンポーネントの処理が続く*/
        }}
    ));
    ```

### Q24. 自動保存メモ帳 (useEffect)
**出題内容**: テキスト入力後、画面をリロードしても内容が消えない
*   **Hooks:** `useState`, `useEffect`
*   **学んだこと**: ブラウザにデータを保存できる`localStorage`というプロパティがあること
*   **コードのポイント**:
    ```jsx
    const [input, setInput] = useState(localStorage.getItem("input") || "");
    ```

### Q25. リアルタイム時計
**出題内容**: 現在の時刻（時:分:秒）を1秒ごとに更新する時計作成
*   **Hooks:** `useState`, `useEffect`
*   **学んだこと**: 現在の時刻や月を表すコンストラクタ（`new Date()`）があること
*   **コードのポイント**:
    ```jsx
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(new Date().toLocalTimeString())
        })
    })
    ```

### Q26. フォームバリデーション (総合)
**出題内容**: メールアドレスとパスワードの入力欄。それぞれ「@が含まれていない」「8文字以下」は赤文字でエラーメッセージ
*   **Hooks:** `useState`, `useEffect`
*   **学んだこと**: `<input type="password">`でパスワードを入力した際、伏せ字になること
*   **コードのポイント**:
    ```jsx
    <input type="password" value={} onChange={}> // 以下、エラーメッセージの条件分岐が続く  
    ```

### Q27. モーダルウィンドウ (総合)
**出題内容**: 開くボタンでモーダル（ポップアップ）表示、閉じるボタンで閉じる
*   **Hooks:** `useState`
*   **学んだこと**: `useState()`の初期値に、真偽値を設定することができる
*   **コードのポイント**:
    ```jsx
    const [isOpen, setIsOpen] = useState(false);
    ```

### Q28. 簡易クイズアプリ (総合)
**出題内容**: 問題文と選択肢が配列で用意。回答するたびに次に進み、最後に正解数表示
*   **Hooks:** `useState`
*   **学んだこと**: 配列のオブジェクト内にさらに配列を書くことができること
*   **コードのポイント**:
    ```jsx
    const tests = [
        { question: "りんごを英語で何と言う？"; choices: ["Apple", "Banana", "Cat"]; answer: "Apple" },
    ]
    ```

### Q29. ユーザー登録と一覧 (総合)
**出題内容**: 名前と年齢を入力して登録。一覧表示と削除機能も追加
*   **Hooks:** `useState`
*   **学んだこと**: id名を`Date.now()`にすると、より被りにくい一意のidを作成できること
*   **コードのポイント**:
    ```jsx
    const newUsers = {id: Date.now(), name: name.trim(), age: Number(age)};
    ```

### Q30. お気に入りボタン (状態管理と条件付きレンダリング)
**出題内容**: ボタンクリックのたび、ハートの絵文字を切り替え
*   **Hooks:** `useState`
*   **学んだこと**: 非同期処理を使って、安全に状態更新ができること
*   **コードのポイント**:
    ```jsx
    <button onClick={() => setIsFavorite(Prev) => !prev}> // 以下、ボタンクリックの条件分岐が続く
    ```