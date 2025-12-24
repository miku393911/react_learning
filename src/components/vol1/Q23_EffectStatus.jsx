import { useState, useEffect } from "react";

export function Q23_EffectStatus() {
    const [status, setStatus] = useState("読み込み中...");
    useEffect(() => {
        const timer = setTimeout(() => {  //setTimeout()メソッドは、一定時間が経過後、1度だけ処理を実行する関数
            setStatus("データ読み込み完了！");
        }, 3000)
        return () => clearTimeout(timer)  // クリーンアップ関数
    }, []);
    return (
        <>
            <p style={{ color: status === "データ読み込み完了！" ? "blue" : "black" }}>{status}</p>
        </>
    ); //試しに色を変えてみた
}