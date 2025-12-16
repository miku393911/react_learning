import { useState } from "react";

export function Q07_MaxNumber() {
    const [current, setCurrent] = useState("");  //現在の入力された値を保存
    const [maxNumber, setMaxNumber] = useState(0);  //最大値を保存
    return ( //useState()は状態の管理に応じて複数書いてOK!
        <>
            <input value={current} name="current" onChange={(e) => setCurrent(e.target.value)} placeholder="数値を入力してください" />
            <button onClick={() => { (Number(current)) > maxNumber ? setMaxNumber(Number(current)) : setMaxNumber(maxNumber) }}>更新</button>
            <p>最大値を表示: {maxNumber}</p>
        </>
    );
}
