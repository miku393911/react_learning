import { useState } from "react";

export function Q06_Login() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            {isLogin ? (<> <p>ようこそ！ユーザーさん</p>
                <button onClick={() => { setIsLogin(!isLogin) }}>ログアウトボタン</button> </>) :
                (<> <p>ログインしてください</p>
                    <button onClick={() => { setIsLogin(!isLogin) }}>ログインボタン</button> </>)
            }
        </>
    );
}
