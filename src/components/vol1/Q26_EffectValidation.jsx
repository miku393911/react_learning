import { useState, useEffect } from "react";

export function Q26_EffectValidation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    useEffect(() => {
        setErrorEmail(email.length === 0 ? "" : (email.includes("@") ? "" : "メールアドレスが正しくありません"))
        setErrorPassword(password.length === 0 ? "" : (password.length >= 8 ? "" : "パスワードが正しくありません"))
    }, [email, password])
    return (
        <>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="メールアドレスを入力してください" />
            <p style={{ color: email.includes("@") ? "black" : "red" }}>{errorEmail}</p>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
            <p style={{ color: password.length >= 8 ? "black" : "red" }}>{errorPassword}</p>
        </>
    );
}
