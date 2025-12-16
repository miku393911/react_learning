import { useState } from "react";

export function Q06_Login() {
    const [login, setLogin] = useState(false);
    return (
        <>
            {login ? (<> <p>ようこそ！ユーザーさん</p>
                <button onClick={() => { setLogin(!login) }}>ログアウトボタン</button> </>) :
                (<> <p>ログインしてください</p>
                    <button onClick={() => { setLogin(!login) }}>ログインボタン</button> </>)
            }
        </>
    );
}
