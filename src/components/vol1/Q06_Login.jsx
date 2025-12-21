import { useState } from "react";

export function Q06_Login() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            {isLogin ? (<> <p>ようこそ！ユーザーさん</p>
                <button onClick={() => setIsLogin(prev => !prev)}>ログアウトボタン</button> </>) :
                (<> <p>ログインしてください</p>
                    <button onClick={() => setIsLogin(prev => !prev)}>ログインボタン</button> </>)
            }
        </>
    ); //非同期処理を行い、最新の状態をレンダリングするためのprev
}
