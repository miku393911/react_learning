import { useState } from "react";

export function Q02_Toggle() {
    const [toggle, setToggle] = useState(true);
    return (
        <button onClick={() => setToggle(!toggle)}>{toggle ? "ON" : "OFF"}</button>
    );
}
