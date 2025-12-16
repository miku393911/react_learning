import { useState } from "react";
import "./style.css";
import { questionList } from "./data/questions.js";

export function App() {
    const [currentId, setCurrentId] = useState(questionList[0].id);

    const currentQuestion = questionList.find((q) => q.id === currentId);
    const CurrentComponent = currentQuestion ? currentQuestion.component : null;

    return (
        <div style={{ padding: "20px" }}>
            <h1>React Practice Problems</h1>
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="question-select">Select Question: </label>
                <select
                    id="question-select"
                    value={currentId}
                    onChange={(e) => setCurrentId(e.target.value)}
                >
                    {questionList.map((q) => (
                        <option key={q.id} value={q.id}>
                            {q.label}
                        </option>
                    ))}
                </select>
            </div>
            <hr />
            <div style={{ marginTop: "20px" }}>
                {CurrentComponent && <CurrentComponent />}
            </div>
        </div>
    );
}
