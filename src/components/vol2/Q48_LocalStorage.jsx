/* ### Q48. LocalStorageへの永続化
入力したメモの内容が、リロードしても残るようにしてください。
*   **狙い:** 外部ストレージとの同期。*/

import { useEffect, useState } from "react"

export function Q48_LocalStorage() {
    const [input, setInput] = useState(() => localStorage.getItem("input") || "");  // アロー関数で書くと、最初の1度だけ初期値が設定される
    useEffect(() => {
        localStorage.setItem("input", input);
    }, [input]);
    return (
        <>
            <input value={input} type="text" placeholder="入力してください" onChange={(e) => setInput(e.target.value)} />
            <p>入力内容: {input}</p>
        </>
    )
}
