import { useState } from "react";

export function Q17_ArticleList() {
    const [articles, setArticles] = useState([
        { id: 1, data: "記事1", likes: 0 },
        { id: 2, data: "記事2", likes: 0 },
        { id: 3, data: "記事3", likes: 0 }
    ]);
    const onClickLike = (id) =>
        setArticles((prevArticles) => prevArticles.map((article) => article.id === id ? { ...article, likes: article.likes + 1 } : article))
    return (
        <>
            <ul>
                {articles.map((article) => <li key={article.id}>{article.data}<button onClick={() => onClickLike(article.id)}>♡{article.likes}いいね</button></li>)}
            </ul>
        </>
    );
}
