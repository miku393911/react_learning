/*function UserCard(props) {
    return (
        <li>名前: {props.name}（年齢: {props.age}歳）</li>
    );
}

export function Q12_UserCardList() {
    const users = [
        { name: "大谷", age: 17 },
        { name: "小泉", age: 18 },
    ];
    return (
        <>
            <ul>
                {users.map((user) => { return <UserCard key={user.name} name={user.name} age={user.age} /> })}
            </ul>
        </>
    );
}*/

// 現場向き
function UserCard( {name, age} ) { //引数を分割代入で短く
    return <li>名前: {name}（年齢: {age} 歳） </li>; //return内が1行の場合は()不要
}
export function Q12_UserCardList() {
    const users = [
        {id: 1, name: "大谷", age: 17},
        {id: 2, name: "小泉", age: 18},
    ];
    return (
        <ul>
            {users.map( (user) => (<UserCard key={user.id} {...user} />))} 
        </ul>
    ) // 分割代入 + props名と引数名が同じだから省略可能
}
