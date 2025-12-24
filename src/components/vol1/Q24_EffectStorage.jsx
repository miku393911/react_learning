import { useState, useEffect } from "react";

export function Q24_EffectStorage() {
    const [input, setInput] = useState(localStorage.getItem("input") || "");
    useEffect(() => {
        localStorage.setItem("input", input);
    }, [input])
    return (
        <>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="入力してください" />
            <p>{input}</p>
        </>
    );
}
