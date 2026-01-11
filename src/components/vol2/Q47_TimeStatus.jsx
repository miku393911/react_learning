import { useEffect, useState } from "react"

/* ### Q47. 自動消去メッセージ
ボタンを押すと「追加しました」と表示され、3秒後に自動的に消えるようにしてください。
*   **狙い:** `setTimeout` と `useEffect` の組み合わせ。*/

export function Q47_TimeStatus() {
    const [status, setStatus] = useState("");  // 表示の状態（初期値は空白で
    useEffect(() => {
        if(!status) return;  // 初期値以降（ボタンが押された以降）のメッセージが空なら、何もせずに終了する
        const timer = setTimeout(() => { // 時間を測るメソッド（1回だけ発動されるメソッド
            setStatus("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [status]);  // statusが更新される度（文字の表示状態が変わる度）にstatueを更新する
    return ( // 下記のsetStatus()で最初に表示する状態をsetする
        <>
            <button onClick={() => setStatus("追加しました")}>クリック！</button>
            {status}
        </>
    ) 
}
