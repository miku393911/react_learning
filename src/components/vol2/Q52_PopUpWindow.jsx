/* ### Q52. モーダルウィンドウ
ボタンを押すと背景が暗くなり、中央に白いポップアップ・ウィンドウが出現するようにしてください。背景の暗い部分をクリックしても閉じる必要があります。

*   **ヒント:**
    1.  `isOpen` という `true/false` のStateを用意する。
    2.  `isOpen` が `true` の時だけ、全画面を覆う `div` (オーバーレイ) を表示する。
    3.  CSSで `position: fixed; top: 0; left: 0; width: 100%; height: 100%;` のような指定が必要。
    4.  イベントのバブリング（泡のように親要素と子要素の両者間にイベントが伝わること）に注意（モーダルの中をクリックしても閉じてしまわないように、`e.stopPropagation()` を使う必要があるかも）。*/

import { useState } from "react"

export function Q52_PopUpWindow() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);  // クリックしたら閉じる処理をする関数を変数定義
    const overLayStyle = { // ポップアップ・ウィンドウの背景（オーバーレイ）のstyle
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",  // 左記含めた5行で、ページ全体の背景選択が可能
        backgroundColor: "rgba(0, 0, 0, 0.5)",  // 黒は全部0、半透明は当然0.5
        display: "flex",
        alignItems: "center",
        justifyContent: "center",  // 左記含めた3行で、中央に配置する
    }
    return ( // 上（外側）の <div>タグは背景で、中の <div>タグは中身（ポップアップ・ウィンドウ）において、e.stopPropagation()は親要素と子要素で違う動きをさせたい時だけ使う
        <>
            {isOpen && 
                <div onClick={handleClose} style={overLayStyle}>
                    <div onClick={(e) => e.stopPropagation()} style={{backgroundColor: "white"}}>
                        <p style={{textAlign: "center"}}>中身</p>
                        <button onClick={handleClose}>閉じる</button>
                    </div>
                </div>
            }
            <button onClick={() => setIsOpen(true)}>開く</button>
        </>
    )  // 上記の{}はsetIsOpenがtrueになった時の表示で、下の<button>タグのみの行はデフォルトで最初に表示させたい内容
}
