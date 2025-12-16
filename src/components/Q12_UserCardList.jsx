function UserCard(props) {
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
}
