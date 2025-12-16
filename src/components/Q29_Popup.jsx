import { useState } from "react";

export function Q29_Popup() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)}>開く</button>
            {isOpen && (
                <div style={{ backgroundColor: "lightblue" }}>
                    <p>ポップアップです</p>
                    <button onClick={() => setIsOpen(false)}>閉じる</button>
                </div>
            )}
        </>
    );
}
