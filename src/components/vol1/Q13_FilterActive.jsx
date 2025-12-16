import { useState } from "react";

export function Q13_FilterActive() {
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
}
