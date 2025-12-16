import { useState, useEffect } from "react";

export function Q23_EffectWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <p>現在のウィンドウ幅: {width}</p>
        </>
    );
}
