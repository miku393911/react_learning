/* ### Q45. タイトルの副作用 (`useEffect`)
カウントアップするたびに、ブラウザのタブ名（`document.title`）を更新してください。
*   **狙い:** `useEffect` の基本的な使い方とタイミングの理解。*/

import { useState, useEffect } from "react"

export function Q45_CountDocumentTitle() {
    const [count, setCount] = useState(0);  // カウントの状態なので、初期値は数字で
    useEffect(() => {
        document.title = `現在のカウント: ${count}`;  // document.titleで、ブラウザのタイトル表示を変更可能
    }, [count]);
    return <button onClick={() => setCount((prev) => prev + 1)}>カウントアップ！</button>  // アロー関数で呼び出す + prevでカウント
}
