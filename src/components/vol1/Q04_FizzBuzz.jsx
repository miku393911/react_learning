import { useState } from "react";

/*export function Q04_FizzBuzz() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => { setCount(count + 1) }}>{count} {(count === 0) ? "" : (count % 3 === 0 && count % 5 === 0) ? "FizzBuzz" : ((count % 3 === 0) ? "Fizz" : (count % 5 === 0) ? "Buzz" : "")}</button>
    );
}*/
export function Q04_FizzBuzz(){
    const [count, setCount] = useState(0);
    return( //アロー関数を用いる理由は、クリックされた時に実行される状態を作りたいから
        <button onClick={ () => setCount((prev) => prev + 1)}>{count} {count === 0 ? "" : (count % 3 === 0 && count % 5 === 0) ? "FizzBuzz" : (count % 3 === 0) ? "Fizz" : (count % 5 === 0) ? "Buzz" : ""} </button>
    ) //update関数で書く方が安全
}