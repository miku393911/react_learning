import { useState } from "react";

/*export function Q08_Grade() {
    const [score, setScore] = useState("");
    return (
        <>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="数値を入力してください" />
            <p>評価: {(score === "") ? "" : (score >= 80) ? "A判定" : (score >= 70) ? "B判定" : (score >= 60) ? "C判定" : "D判定"}</p>
        </>
    );
}*/
// 条件分岐の書き方
export function Q08_Grade(){
    const [score, setScore] = useState("");
    const getScore = () => {
        if(score === "") return ""; //初期値は文字列なので、これはscore
        const num = Number(score); //以下は成績判定のため、数字として判断するNumberで型合わせ型合わせが必要
        if(num >= 80) return "A判定"; 
        if(num >= 70) return "B判定";
        if(num >= 60) return "C判定";
        return "D判定";
    }
    return(
        <>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value) } placeholder="数値を入力してください" />
            <p>評価: {getScore()}</p>
        </>
    )
} //type="number"にすると、スマホでの操作やキーボードの制限可能