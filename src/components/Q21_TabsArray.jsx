import { useState } from "react";

export function Q21_TabsArray() {
    const [activeTab, setActiveTab] = useState(0);
    const contents = ["タブ1の内容です", "タブ2の内容です", "タブ3の内容です"];
    return (
        <>
            <button onClick={() => setActiveTab(0)}>タブ1</button>
            <button onClick={() => setActiveTab(1)}>タブ2</button>
            <button onClick={() => setActiveTab(2)}>タブ3</button>
            <div>
                {contents[activeTab]}
            </div>
        </>
    );
}
