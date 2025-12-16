import { useState } from "react";

export function Q10_Calculator() {
    const [leftCalculation, setLeftCalculation] = useState("");  //numbreにしても""は0と同義
    const [rightCalculation, setRightCalculation] = useState("");
    const [total, setTotal] = useState("");
    return (
        <>
            <input type="number" name="leftCalculation" value={leftCalculation} onChange={(e) => setLeftCalculation(e.target.value)} />
            <button onClick={() => setTotal(Number(leftCalculation) + Number(rightCalculation))}>足す</button>
            <button onClick={() => setTotal(Number(leftCalculation) - Number(rightCalculation))}>引く</button>
            <button onClick={() => setTotal(Number(leftCalculation) * Number(rightCalculation))}>掛ける</button>
            <button onClick={() => setTotal(Number(leftCalculation) / Number(rightCalculation))}>割る</button>
            <input type="number" name="rightCalculation" value={rightCalculation} onChange={(e) => setRightCalculation(e.target.value)} />
            <p>計算結果: {total}</p>
        </>
    );
}
