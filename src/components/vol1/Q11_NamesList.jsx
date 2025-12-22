/*export function Q11_NamesList() {
    const names = ["田中", "佐藤", "鈴木", "高橋"];
    return (
        <ul>
            {names.map((name) => <li key={name}>{name}</li>)}
        </ul>
    );
}*/
//keyを考慮した最適解、上記のコードだと名前が被った時に見分けが付かない
export function Q11_NamesList() {
    const usersList = [
        {id: 1, name: "田中"},
        {id: 2, name: "佐藤"},
        {id: 3, name: "藤木"},
        {id: 4, name: "高橋"},
    ];
    return(
        <ul>
            {usersList.map( (user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}