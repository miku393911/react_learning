import { useState, useEffect } from "react";

export function Q24_EffectStatus() {
    const [status, setStatus] = useState("読み込み中...");
    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus("データ読み込み完了！");
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <p style={{ color: status === "データ読み込み完了！" ? "blue" : "black" }}>{status}</p>
        </>
    );
}
