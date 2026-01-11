/* ### Q46. Windowリサイズ監視 (クリーンアップ)
画面の幅をリアルタイムで表示し、コンポーネントが消える時には監視を解除してください。
*   **狙い:** `removeEventListener` による**クリーンアップ**の重要性。*/

import { useEffect, useState } from "react"

export function Q46_WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);  // ウィンドウ幅の状態、初期値はこういう値があることを覚えておく
    useEffect(() => {
        const newWidth = () => setWidth(window.innerWidth);  // 初期値を設定した関数を変数定義
        window.addEventListener("resize", newWidth);  // イベント駆動を使う
        return () => window.removeEventListener("resize", newWidth);  // クリーンアップ関数を書く（イベント駆動にはremove
    }, []);  // 依存配列を空配列にすることで、コンポーネント表示時に1回表示、消える時に解除（[width]だとカウントごとにコンポーネント
    return (
        <>
            現在のウィンドウ幅: {width}
        </>
    )
}
