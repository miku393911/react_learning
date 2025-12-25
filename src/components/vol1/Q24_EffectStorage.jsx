import { useState, useEffect } from "react";

export function Q24_EffectStorage() {
    const [input, setInput] = useState(localStorage.getItem("input") || ""); // setItemとセットで使われ、データを取得する役割
    useEffect(() => {
        localStorage.setItem("input", input); // getItemとsetで使われ、データを保存する役割 / keyは"input"
    }, [input])
    return (
        <>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="入力してください" />
            <p>{input}</p>
        </>
    );
}
