import { useState } from "react";

export function Q28_Quiz() {
    const [number, setNumber] = useState(0); // 現在の問題番号を管理
    const [score, setScore] = useState(0); // スコアを管理
    const tests = [
        { question: "りんごを英語で何と言う？", choices: ["Apple", "Banana", "Cat"], answer: "Apple" },
        { question: "みかんを英語で何と言う？", choices: ["Dog", "Orange", "Grape"], answer: "Orange" },
        { question: "ももを英語で何と言う？", choices: ["Muscat", "Monkey", "Peach"], answer: "Peach" },
    ] // 配列のオブジェクト内のさらに配列を書くこともできる
    if (number >= tests.length) { // 現在の問題番号が3以上になると（最終問題_を解くと）結果発表に進む条件分岐
        return (
            <div>
                <h2>結果発表！</h2>
                <p>スコア: {score}点</p>
            </div>
        )
    }
    const onClick = (choice) => {
        if (choice === tests[number].answer) { //　今の問題番号の答えが、選んだ選択肢と合っていればスコアに1点足す
            setScore(score + 1);
        }
        setNumber(number + 1);  // 無条件に次の問題番号に進む
    }
    return ( // <h1>は問題文、下は選択肢を表現
        <>
            <div>
                <h1>{tests[number].question}</h1>
                <div>
                    {tests[number].choices.map((choice) => <button key={choice} onClick={() => onClick(choice)}>{choice}</button>)}
                </div>
            </div>
        </>
    );
}
