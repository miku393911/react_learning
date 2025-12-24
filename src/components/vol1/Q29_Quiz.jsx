import { useState } from "react";

export function Q29_Quiz() {
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);
    const tests = [
        { question: "りんごを英語で何と言う？", choices: ["Apple", "Banana", "Cat"], answer: "Apple" },
        { question: "みかんを英語で何と言う？", choices: ["Dog", "Orange", "Grape"], answer: "Orange" },
        { question: "ももを英語で何と言う？", choices: ["Mascat", "Monkey", "Peach"], answer: "Peach" },
    ]
    if (number >= tests.length) {
        return (
            <div>
                <h2>結果発表！</h2>
                <p>スコア: {score}点</p>
            </div>
        )
    }
    const onClick = (choice) => {
        if (choice === tests[number].answer) {
            setScore(score + 1);
        }
        setNumber(number + 1);
    }
    return (
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
