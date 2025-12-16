import { useState } from "react";

export function Q20_TabsObject() {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 1, label: "タブ1", content: "タブ1の内容です" },
        { id: 2, label: "タブ2", content: "タブ2の内容です" },
        { id: 3, label: "タブ3", content: "タブ3の内容です" }
    ]
    return (
        <>
            {tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>))}
            <div>
                {tabs.find((tab) => tab.id === activeTab).content}
            </div>
        </>
    );
}
