import { useState } from "react";

function ArticleItem( {data} ){
    const [count, setCount] = useState(0);
    const onClick = () => setCount(count+1);
    return (
        <li>
            {data}
            <button onClick={onClick}>♡{count}いいね</button>
        </li>
    )
}