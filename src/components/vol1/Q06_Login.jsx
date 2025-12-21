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
    ); //より安全なコードにするために、同期的に処理をするためのprev
}
