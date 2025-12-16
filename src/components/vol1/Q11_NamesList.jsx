export function Q11_NamesList() {
    const names = ["田中", "佐藤", "鈴木", "高橋"];
    return (
        <ul>
            {names.map((name) => <li key={name}>{name}</li>)}
        </ul>
    );
}
