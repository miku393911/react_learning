/* ### Q51. バリデーション付き本格フォーム
メールアドレス形式チェック、パスワード8文字以上チェックを行い、不備があればリアルタイムでエラー文を出してください。*/

import { useState } from "react"

/* export function Q51_MailAndPassword() {
    const [mailAddress, setMailAddress] = useState("");  // メールアドレスの入力欄の状態
    const [password, setPassword] = useState("");  // パスワードの入力欄の状態
    return (
        <>
            <input value={mailAddress} type="text" onChange={(e) => setMailAddress(e.target.value)} placeholder="メールアドレスを入力してください" />
            {mailAddress === "" ? <p>メールアドレスを入力してください</p> : (mailAddress.includes("@") ? <p>{mailAddress}</p> : <p>正しいメールアドレスを入力してください</p>) }
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
            {password === "" ? <p>パスワードを入力してください</p> : (password.length >= 8 ? <p>{password}</p> : <p>正しいパスワードを入力してください</p>) }
        </>
    )
} */

// 三項演算子はネストになるので、変数でエラーの条件を書きつつ その変数と表示するエラー文を書くことで可読性を上げた
export function Q51_MailAndPassword() {
    const [mail, setMail] = useState("");  // メールアドレスの入力欄の状態
    const [password, setPassword] = useState("");  // パスワードの入力欄の状態
    const isMailError = mail !== "" && !mail.includes("@");  // メールの入力欄において、空白ではないかつ@を含んでいない場合をエラーとする
    const  isPasswordError = password !== "" && password.length < 8;  // パスワードの入力欄において、パスワードが空白ではないかつ文字数が8文字以下の場合をエラーとする
    return (
        <>
            <div>
                <label>メールアドレス</label>
                <input value={mail} type="text" onChange={(e) => setMail(e.target.value)} placeholder="example@mail.com" />
                {isMailError && <p style={{color: "red"}}>正しいメールアドレスを入力してください</p>}
            </div>
            <div>
                <label>パスワード</label>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="8文字以上で入力" />
                {isPasswordError && <p style={{color: "red"}}>正しいパスワードを入力してください</p>}
            </div>
        </>
    )
}