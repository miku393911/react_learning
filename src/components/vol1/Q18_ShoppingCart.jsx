import { useState } from "react";

export function Q18_ShoppingCart() {
    const products = [
        { name: "シャツ", price: 3000 },
        { name: "ニット", price: 6500 },
        { name: "スカート", price: 4000 },
    ]
    const [cartItems, setCartItems] = useState([]);  // カート商品の状態保存
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0); // 複数の要素を1つに合わせる、初期値0
    const onClickAdd = (addItem) => {
        setCartItems([...cartItems, addItem]);
    }
    const onClickDeleted = (deletedIndex) => {
        const newTodos = [...cartItems];  // この1行は不要で、cartItems.filter()で良い 
        setCartItems(newTodos.filter((_, index) => index !== deletedIndex))  // 第一引数のcartItemは今回は不要のため、_で表現
    } // 下記で引数を2つ取ったので、ここでも引数を2つ取った
    return (
        <>
            <h1>商品一覧</h1>
            <ul>
                {products.map((product) => <li key={product.name}>
                    {product.name} : {product.price}円
                    <button onClick={() => onClickAdd(product)}>追加</button></li>)}
            </ul>
            <h1>現在のカート</h1>
            <ul>
                {cartItems.map((cartItem, index) => <li key={index}>
                    {cartItem.name} : {cartItem.price}円
                    <button onClick={() => onClickDeleted(index)}>削除</button></li>)}
            </ul>
            <p>合計: {totalPrice} 円</p>
        </>
    );
}

/* 現場向き
配列の要素にid付与、key={products.id}にする*/