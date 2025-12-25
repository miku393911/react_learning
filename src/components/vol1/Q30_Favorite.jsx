import { useState } from "react";

export function Q30_Favorite() {
    const [isFavorite, setIsFavorite] = useState(false); //お気に入り状態を管理
    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? "❤️ お気に入り" : "🤍 お気に入り"}</button>
    );
}

/* 現場向き
setIsFavorite((prev) => !prev) にすることで、安全にレンダリングされる*/