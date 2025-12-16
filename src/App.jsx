import { useState } from "react";
import "./style.css";
import { Q01_Count } from "./components/Q01_Count";
import { Q02_Toggle } from "./components/Q02_Toggle";
import { Q03_InputMirror } from "./components/Q03_InputMirror";
import { Q04_FizzBuzz } from "./components/Q04_FizzBuzz";
import { Q05_EvenOdd } from "./components/Q05_EvenOdd";
import { Q06_Login } from "./components/Q06_Login";
import { Q07_MaxNumber } from "./components/Q07_MaxNumber";
import { Q08_Grade } from "./components/Q08_Grade";
import { Q09_ColorSelect } from "./components/Q09_ColorSelect";
import { Q10_Calculator } from "./components/Q10_Calculator";
import { Q11_NamesList } from "./components/Q11_NamesList";
import { Q12_UserCardList } from "./components/Q12_UserCardList";
import { Q13_FilterActive } from "./components/Q13_FilterActive";
import { Q14_FilterText } from "./components/Q14_FilterText";
import { Q15_FindUser } from "./components/Q15_FindUser";
import { Q16_TodoList } from "./components/Q16_TodoList";
import { Q17_ArticleList } from "./components/Q17_ArticleList";
import { Q18_ArticleComponent } from "./components/Q18_ArticleComponent";
import { Q19_ShoppingCart } from "./components/Q19_ShoppingCart";
import { Q20_TabsObject } from "./components/Q20_TabsObject";
import { Q21_TabsArray } from "./components/Q21_TabsArray";
import { Q22_EffectTitle } from "./components/Q22_EffectTitle";
import { Q23_EffectWidth } from "./components/Q23_EffectWidth";
import { Q24_EffectTimer } from "./components/Q24_EffectTimer";
import { Q25_EffectStatus } from "./components/Q25_EffectStatus";
import { Q26_EffectStorage } from "./components/Q26_EffectStorage";
import { Q27_EffectClock } from "./components/Q27_EffectClock";
import { Q28_EffectValidation } from "./components/Q28_EffectValidation";
import { Q29_Popup } from "./components/Q29_Popup";
import { Q30_Quiz } from "./components/Q30_Quiz";
import { Q31_UserRegister } from "./components/Q31_UserRegister";

export function App() {
    const [currentQuestion, setCurrentQuestion] = useState("Q01");

    const components = {
        Q01: { component: Q01_Count, label: "Q01: Count" },
        Q02: { component: Q02_Toggle, label: "Q02: Toggle" },
        Q03: { component: Q03_InputMirror, label: "Q03: Input Mirror" },
        Q04: { component: Q04_FizzBuzz, label: "Q04: FizzBuzz" },
        Q05: { component: Q05_EvenOdd, label: "Q05: Even/Odd" },
        Q06: { component: Q06_Login, label: "Q06: Login" },
        Q07: { component: Q07_MaxNumber, label: "Q07: Max Number" },
        Q08: { component: Q08_Grade, label: "Q08: Grade" },
        Q09: { component: Q09_ColorSelect, label: "Q09: Color Select" },
        Q10: { component: Q10_Calculator, label: "Q10: Calculator" },
        Q11: { component: Q11_NamesList, label: "Q11: Names List" },
        Q12: { component: Q12_UserCardList, label: "Q12: User Card List" },
        Q13: { component: Q13_FilterActive, label: "Q13: Filter Active" },
        Q14: { component: Q14_FilterText, label: "Q14: Filter Text" },
        Q15: { component: Q15_FindUser, label: "Q15: Find User" },
        Q16: { component: Q16_TodoList, label: "Q16: Todo List" },
        Q17: { component: Q17_ArticleList, label: "Q17: Article List" },
        Q18: { component: Q18_ArticleComponent, label: "Q18: Article Component" },
        Q19: { component: Q19_ShoppingCart, label: "Q19: Shopping Cart" },
        Q20: { component: Q20_TabsObject, label: "Q20: Tabs (Object)" },
        Q21: { component: Q21_TabsArray, label: "Q21: Tabs (Array)" },
        Q22: { component: Q22_EffectTitle, label: "Q22: Effect Title" },
        Q23: { component: Q23_EffectWidth, label: "Q23: Effect Width" },
        Q24: { component: Q24_EffectTimer, label: "Q24: Effect Timer (Countdown)" },
        Q25: { component: Q25_EffectStatus, label: "Q25: Effect Status" },
        Q26: { component: Q26_EffectStorage, label: "Q26: Effect Storage" },
        Q27: { component: Q27_EffectClock, label: "Q27: Effect Clock" },
        Q28: { component: Q28_EffectValidation, label: "Q28: Effect Validation" },
        Q29: { component: Q29_Popup, label: "Q29: Popup" },
        Q30: { component: Q30_Quiz, label: "Q30: Quiz" },
        Q31: { component: Q31_UserRegister, label: "Q31: User Register (Comprehensive)" },
    };

    const CurrentComponent = components[currentQuestion].component;

    return (
        <div style={{ padding: "20px" }}>
            <h1>React Practice Problems</h1>
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="question-select">Select Question: </label>
                <select
                    id="question-select"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                >
                    {Object.keys(components).map((key) => (
                        <option key={key} value={key}>
                            {components[key].label}
                        </option>
                    ))}
                </select>
            </div>
            <hr />
            <div style={{ marginTop: "20px" }}>
                <CurrentComponent />
            </div>
        </div>
    );
}
