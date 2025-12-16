import { useState } from "react";

export function Q03_InputMirror() {
    const [text, setText] = useState("");
    return (
        <>
            <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="入力してください" />
            <p>入力された文字👇</p>
            <p className="text">{text}</p>
        </>
    );
}
