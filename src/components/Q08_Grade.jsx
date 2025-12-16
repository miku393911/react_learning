import { useState } from "react";

export function Q08_Grade() {
    const [score, setScore] = useState("");
    return (
        <>
            <input type="text" name="score" value={score} onChange={(e) => setScore(e.target.value)} placeholder="数値を入力してください" />
            <p>評価: {(score === "") ? "" : (score >= 80) ? "A判定" : (score >= 70) ? "B判定" : (score >= 60) ? "C判定" : "D判定"}</p>
        </>
    );
}
