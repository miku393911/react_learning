import { useState } from "react"

/*### Q35. 動的な残り文字数カウンター
50文字制限のテキストエリアを作り、「残りあと〇文字」と表示してください。
*   **狙い:** State (`value`) の長さ (`.length`) を使った計算に慣れる。*/
export function Q35_ValueLength() {
    const [value, setValue] = useState("");  // テキストエリアの文字の状態管理
    const valueLength = 50 - Number(value.length);
    return (
        <>
            <textarea value={value} onChange={(e) => setValue(e.target.value)} />
            <p>残りあと{valueLength}文字</p>
        </>
    )
}
