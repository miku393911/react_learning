import { useState, useEffect } from "react";

export function Q21_EffectWidth() {
    const [width, setWidth] = useState(window.innerWidth); //window.innerWidthはウィンドウの内側の幅をを教える
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize); // resizeというイベントがある（イベント駆動
        return () => { // クリーンアップ関数はイベントリスナーにも使える
            window.removeEventListener("resize", handleResize); 
        };  // イベント削除も必要な作業
    }, []);
    return (
        <>
            <p>現在のウィンドウ幅: {width}</p>
        </>
    );
}
