import { useState } from "react";

/*export function Q07_MaxNumber() {
    const [current, setCurrent] = useState("");  //現在の入力された値を保存
    const [maxNumber, setMaxNumber] = useState(0);  //最大値を保存
    return ( //useState()は状態の管理に応じて複数書いてOK!
        <>
            <input value={current} name="current" onChange={(e) => setCurrent(e.target.value)} placeholder="数値を入力してください" />
            <button onClick={() => { (Number(current)) > maxNumber ? setMaxNumber(Number(current)) : setMaxNumber(maxNumber) }}>更新</button>
            <p>最大値を表示: {maxNumber}</p>
        </>
    );
}*/
//正解
/*export function Q07_MaxNumber(){
    const [count, setCount] = useState(""); //現在の値は文字として扱う
    const [maxNumber, setMaxNumber] = useState(0); //最大値
    return ( //<input>タグの値の状態を保持するuseState()の値は初期値を０にしても元が文字列なので型を合わせるためにNumber()を使う
        <>
            <input type="number" value={count} onChange={ (e) => setCount(e.target.value)} placeholder="数値を入力してください" />
            <button onClick={ () => setMaxNumber(prev => Math.max(prev, Number(count)))}>更新</button>
            <p>最大値: {maxNumber}</p>
        </>
    ) //Math.max(前の値, 次の値)で最大値を比較することができる
}*/
// この書き方も初心者向け（条件分岐
export function Q07_MaxNumber(){
    const [number, setNumber] = useState("");
    const [maxNumber, setMaxNumber] = useState(0);
    const onClickUpdate = () => {
        const newNumber = Number(number);
        if(newNumber > maxNumber){
            setMaxNumber(newNumber);
        }
    }
    return (
        <>
            <input value={number} onChange={ (e) => setNumber(e.target.value)} placeholder="数値を入力してください" />
            <button onClick={ () => onClickUpdate()}>更新</button>
            <p>最大値: {maxNumber}</p>
        </>
    )
}