import { useState } from "react";

/*export function Q01_Count() {
    const [count, setCount] = useState(0);
    const onClick = () => setCount(count + 1);
    return (
        <button onClick={onClick}>{count}</button>
    );
}*/

export function Q01_Count (){
    const [count, setCount] = useState(0);
    const onClickCount = () => setCount( (prev) => prev + 1);
    return <button onClick = {onClickCount}>{count}</button> //アロー関数で書く場合は、引数を取る時
} //最適化された解答