/* ### Q56. 簡易ページネーション
30件のダミーデータ（配列）を用意し、1ページ5件ずつ表示してください。「次へ」「前へ」ボタンでページを切り替えます。

*   **ヒント:**
    1.  `currentPage` (現在のページ番号、初期値1) というStateを持つ。
    2.  「現在のページに表示すべきデータ」は、`slice(start, end)` で切り出す。
        *   `start` = `(currentPage - 1) * 5`
        *   `end` = `start + 5`
    3.  「前へ」は `currentPage > 1` の時だけ有効、「次へ」は `currentPage < 最大ページ数` の時だけ有効にする。*/

import { useState } from "react"

export function Q56_Placeholder() {
    const [currentPage, setCurrentPage] = useState(1);  // ヒント1より
    const handleNextPage = () => {
        
    }
    const handlePrevPage = () => {

    }
    return (
        <>
            <button onClick={handleNextPage}>次へ</button>
            <button onClick={handlePrevPage}>前へ</button>
        </>
    )
}
