import { useState } from "react";

export function Q05_EvenOdd() {
    const [number, setNumber] = useState("");
    return (
        <>
            <input value={number} name="number" onChange={(e) => setNumber(e.target.value)} placeholder="数字を入力してください" />
            <p>判定結果👇</p>
            <p>{number === "" ? "" : (number % 2 === 0 ? "偶数" : "奇数")}</p>
        </>
    );
}
