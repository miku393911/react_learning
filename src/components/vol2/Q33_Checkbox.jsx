import { useState } from "react"

/*### Q33. 論理演算子による条件表示 (`&&`)
チェックボックスにチェックが入っている時だけ「完了しました！」という文字を表示してください。
*   **狙い:** `if` 文を使わずに JSX 内でスマートに条件分岐させる。*/
export function Q33_Checkbox() { 
    const [isChecked, setIsChecked] = useState(false);  // チェックボックスの状態管理
    return(  // e.target.checkedで、チェックボックスを使う際に便利
        <>
            <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} value={isChecked} />
            {isChecked && <p>完了しました！</p>}
        </>
    )  // isChecked がtrueなのであれば、完了しました！を表示 + falseは何もしない
}
// <label>タグで囲むとUIアップ