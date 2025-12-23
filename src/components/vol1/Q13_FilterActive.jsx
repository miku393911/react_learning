import { useState } from "react";

/*export function Q13_FilterActive() {
    const [isActive, setIsActive] = useState(true);
    const users = [
        { name: "miku", isActive: true },
        { name: "yuka", isActive: true },
        { name: "yuuta", isActive: false }
    ];
    const filterUsers = users.filter((user) => {
        if (isActive) {
            return user.isActive === true;
        } else {
            return true;
        }
    });
    return (
        <>
            <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} /> checkbox
            <ul>
                {filterUsers.map((user) => <li key={user.name}>{user.name}</li>)}
            </ul>
        </>
    );
}*/

// 現場向き
const users = [ // 動的データは、関数外に書くのが定石
    {id: 1, name: "miku", isActive: true},
    {id: 2, name: "yuka", isActive: true},
    {id: 3, name: "yuuta", isActive: false},
]
export function Q13_FilterActive() {
    const [isActive, setIsActive] = useState(false);
    const newActive = isActive ? users.filter( (user) => user.isActive) : users; //isActiveがtrueかfalseかの判定
    return ( //e.target.checkedで、現在のチェックボックスの状態をそのままStateに反映する意味になる
        <>
            <label>
                <input type="checkbox" checked={isActive} onChange={ (e) => setIsActive(e.target.checked)} />
            </label>
            <ul>
                {newActive.map( (user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    ) //isActiveを判定した変数をmapでもう1度配置するイメージ
}