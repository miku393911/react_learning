import { useState } from "react";

/*export function Q02_Toggle() {
    const [toggle, setToggle] = useState(true);
    return (
        <button onClick={() => setToggle(!toggle)}>{toggle ? "ON" : "OFF"}</button>
    ); //引数を取るので、アロー関数で表記する、しかし今回のコードだと、レンダリングされるたびに新しい関数を作ってしまう
}*/
export function Q02_Toggle (){
    const [isActive, setIsActive] = useState(false);
    const onClickActive = () => {
        setIsActive( (prev) => !prev); //前の値を使って更新したい時はupdate関数をう
    }
    return <button onClick={onClickActive}>{isActive ? "ON" : "OFF"}</button>
} //関数を入れる方がコンパクトで良い、今回のように短ければインラインで直接代入しても良い