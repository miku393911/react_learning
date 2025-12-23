import { useState } from "react";

/*export function Q10_Calculator() {
    const [leftCalculation, setLeftCalculation] = useState(0);  //type="number"にして初期値も数字で表現した型を合わせる
    const [rightCalculation, setRightCalculation] = useState(0);
    const [total, setTotal] = useState(0);
    return (
        <>
            <input type="number" name="leftCalculation" value={leftCalculation} onChange={(e) => setLeftCalculation(e.target.value)} />
            <button onClick={() => setTotal(Number(leftCalculation) + Number(rightCalculation))}>足す</button>
            <button onClick={() => setTotal(Number(leftCalculation) - Number(rightCalculation))}>引く</button>
            <button onClick={() => setTotal(Number(leftCalculation) * Number(rightCalculation))}>掛ける</button>
            <button onClick={() => {
                const isZero = Number(rightCalculation) === 0;
                setTotal(isZero ? "エラー... 0で割れません" : Number(leftCalculation) / Number(rightCalculation))}}>
            割る</button>
            <input type="number" name="rightCalculation" value={rightCalculation} onChange={(e) => setRightCalculation(e.target.value)} />
            <p>計算結果: {total}</p>
        </>
    ); //0で割れないので、エラーを三項演算子で書いた
}*/

// 最適解（実際に使われる書き方
export function Q10_Calculator() {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [total, setTotal] = useState(0);
    const calculation = (operator) => {
        const l = Number(left);
        const r = Number(right);
        let result = 0;
        switch(operator){
            case "+": result = l + r; break;
            case "-": result = l - r; break;
            case "*": result = l * r; break;
            case "/": 
                result = r === 0 ? "Error（0除算）": l / r;
                break;
            default: break;
        }
        setTotal(result);
    }
    return (
        <>
            <input type="number" value={left} onChange={(e) => setLeft(e.target.value)} />
            <button onClick={ () => calculation("+")}>足す</button>
            <button onClick={ () => calculation("-")}>引く</button>
            <button onClick={ () => calculation("*")}>掛ける</button>
            <button onClick={ () => calculation("/")}>割る</button>
            <input type="number" value={right} onChange={ (e) => setRight(e.target.value)} />
            <p>計算結果: {total}</p>
        </>
    );
}