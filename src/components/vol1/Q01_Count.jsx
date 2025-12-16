import { useState } from "react";

export function Q01_Count() {
    const [count, setCount] = useState(0);
    const onClick = () => setCount(count + 1);
    return (
        <button onClick={onClick}>{count}</button>
    );
}
