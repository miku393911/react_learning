import { useState } from "react";
/*export function Q19_TabsObject() {
    const [activeTab, setActiveTab] = useState(1); // タブの選択状態
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
}*/
export function Q19_TabsObject() {
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
/* 現場向き
useState()の初期値を、tabs[0].id にすることで常時最初のタブが選択される*/