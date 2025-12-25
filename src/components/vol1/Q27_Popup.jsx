import { useState } from "react";

export function Q27_Popup() {
    const [isOpen, setIsOpen] = useState(false);  // 画面のポップアップの状態
    return (
        <>
            <button onClick={() => setIsOpen(true)}>開く</button>
            {isOpen && (  // isOpenがtrueだったら、ポップアップを開く + 閉じるボタンを表示
                <div style={{ backgroundColor: "lightblue" }}>
                    <p>ポップアップです</p>
                    <button onClick={() => setIsOpen(false)}>閉じる</button>
                </div>
            )}
        </>
    );
}