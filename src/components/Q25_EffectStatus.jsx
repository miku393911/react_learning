import { useState, useEffect } from "react";

export function Q25_EffectStatus() {
    const [status, setStatus] = useState("調理中...");
    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus("完成！");
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <p style={{ color: status === "完成！" ? "blue" : "black" }}>{status}</p>
        </>
    );
}
