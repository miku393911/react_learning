import { useState } from "react";

export function Q09_ColorSelect() {
    const [color, setColor] = useState("");
    const bgcolor = () => {
        switch (color) {
            case "赤": return "pink";  //値を返してあげる
            case "青": return "lightblue";
            case "緑": return "lightgreen";
            default: return "white";  //デフォルトの状態も書いてあげる
        }
    }
    return ( //全体にstyleを定義する（最初のreturn内の<div>タグに適用させる/ 定義したかたまりごと呼び出してもOK/ Reactとブラウザの表示を一致させるω
        <div style={{ backgroundColor: bgcolor(), width: "155px", height: "25px", borderRadius: "5px" }}>
            <select name="color" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">-- 選択してください --</option>
                <option value="赤">赤</option>
                <option value="青">青</option>
                <option value="緑">緑</option>
            </select>
        </div>
    );
}
