import { useState } from "react";

export function Q19_ShoppingCart() {
    const products = [
        { name: "シャツ", price: 3000 },
        { name: "ニット", price: 6500 },
        { name: "スカート", price: 4000 },
    ]
    const [cartItems, setCartItems] = useState([]);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const onClickAdd = (addItem) => {
        setCartItems([...cartItems, addItem]);
    }
    const onClickDeleted = (deletedIndex) => {
        const newTodos = [...cartItems];
        setCartItems(newTodos.filter((_, index) => index !== deletedIndex))
    }
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
