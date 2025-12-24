import { useState } from "react";

export function Q30_Favorite() {
    const [isFavorite, setIsFavorite] = useState(false); //お気に入り状態を管理
    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? "❤️ お気に入り" : "🤍 お気に入り"}</button>
    ); //ボタンをクリックするとお気に入りの状態が切り替わる、お気に入りの場合は「❤️ お気に入り」、そうでない場合は「🤍 お気に入り」を表示
}
