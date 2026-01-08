import { useState } from "react"

/* ### Q43. 複数の入力欄を一つのオブジェクトで管理
「姓」と「名」の入力欄を、一つの State `{ firstName: "", lastName: "" }` で管理してください。
*   **狙い:** オブジェクトStateの更新 (`{ ...prev, firstName: newValue }`)。*/
export function Q43_ObjectName() {
    const [name, setName] = useState({firstName: "", lastName: ""});  // useState()の初期値として、オブジェクトで複数設定
    const newFirstName = (e) => {  // useState()の初期値がオブジェクトの場合、新しいオブジェクトを作成してsetする必要がある
        const newValue = e.target.value;
        setName((prev) => ({...prev, firstName: newValue}));  // TODOリストに追加する要領
    }
    const newLastName = (e) => {
        const newValue = e.target.value;
        setName((prev) => ({...prev, lastName: newValue}));
    }
    return ( // value={} をオブジェクト表記で書く/ name属性も書く方が良い
    <>
        <input value={name.firstName} name="firstName" type="text" onChange={newFirstName} placeholder="姓を入力してください" />
        <input value={name.lastName} name="lastName" type="text" onChange={(e) => newLastName(e)} placeholder="名を入力してください" />
    </>
    ) // 上記の onChange={} 内の記述はどちらも可能（関数を呼び出すだけでも、eを引数として書いても良い
}

/* 共通化する方法もある（分割代入やブラケット記法など...1つの関数にで複数の項目を書き分ける記法
const handleChange = (e) => {
    const {name, value} = e.target; // 分割代入で<input>のname属性とvalue属性を取得
    setName((prev) => ({...prev, [name]: value}));
}
<input onChange={onhashchange} /> // この書き方で良い */