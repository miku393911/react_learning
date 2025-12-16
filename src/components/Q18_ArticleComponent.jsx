import { useState } from "react";

function ArticleItem({ data }) {
    const [count, setCount] = useState(0);
    const onClick = () => setCount(count + 1);
    return (
        <li>
            {data}
            <button onClick={onClick}>♡{count}いいね</button>
        </li>
    )
}

export function Q18_ArticleComponent() {
    const articles = [
        { id: 1, data: "記事1" },
        { id: 2, data: "記事2" },
        { id: 3, data: "記事3" }
    ];
    return (
        <ul>
            {articles.map((article) =>
                <ArticleItem key={article.id} data={article.data} />
            )}
        </ul>
    );
}
