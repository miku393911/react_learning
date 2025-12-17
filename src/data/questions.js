// #region Vol1 (Q01-Q31)
import { Q01_Count } from "../components/vol1/Q01_Count";
import { Q02_Toggle } from "../components/vol1/Q02_Toggle";
import { Q03_InputMirror } from "../components/vol1/Q03_InputMirror";
import { Q04_FizzBuzz } from "../components/vol1/Q04_FizzBuzz";
import { Q05_EvenOdd } from "../components/vol1/Q05_EvenOdd";
import { Q06_Login } from "../components/vol1/Q06_Login";
import { Q07_MaxNumber } from "../components/vol1/Q07_MaxNumber";
import { Q08_Grade } from "../components/vol1/Q08_Grade";
import { Q09_ColorSelect } from "../components/vol1/Q09_ColorSelect";
import { Q10_Calculator } from "../components/vol1/Q10_Calculator";
import { Q11_NamesList } from "../components/vol1/Q11_NamesList";
import { Q12_UserCardList } from "../components/vol1/Q12_UserCardList";
import { Q13_FilterActive } from "../components/vol1/Q13_FilterActive";
import { Q14_FilterText } from "../components/vol1/Q14_FilterText";
import { Q15_FindUser } from "../components/vol1/Q15_FindUser";
import { Q16_TodoList } from "../components/vol1/Q16_TodoList";
import { Q17_ArticleList } from "../components/vol1/Q17_ArticleList";
import { Q18_ArticleComponent } from "../components/vol1/Q18_ArticleComponent";
import { Q19_ShoppingCart } from "../components/vol1/Q19_ShoppingCart";
import { Q20_TabsObject } from "../components/vol1/Q20_TabsObject";
import { Q21_TabsArray } from "../components/vol1/Q21_TabsArray";
import { Q22_EffectTitle } from "../components/vol1/Q22_EffectTitle";
import { Q23_EffectWidth } from "../components/vol1/Q23_EffectWidth";
import { Q24_EffectTimer } from "../components/vol1/Q24_EffectTimer";
import { Q25_EffectStatus } from "../components/vol1/Q25_EffectStatus";
import { Q26_EffectStorage } from "../components/vol1/Q26_EffectStorage";
import { Q27_EffectClock } from "../components/vol1/Q27_EffectClock";
import { Q28_EffectValidation } from "../components/vol1/Q28_EffectValidation";
import { Q29_Popup } from "../components/vol1/Q29_Popup";
import { Q30_Quiz } from "../components/vol1/Q30_Quiz";
import { Q31_UserRegister } from "../components/vol1/Q31_UserRegister";
// #endregion

// #region Vol2 (Q32+)
import { Q32_Favorite } from "../components/vol2/Q32_Favorite.jsx";

/**
 * 問題リスト
 * - id: 問題の識別子 (セレクトボックスのvalue)
 * - component: 表示するReactコンポーネント
 * - label: セレクトボックスに表示するラベル
 * - volume: 巻番号 (将来的なフィルタリング用)
 */
export const questionList = [
    // Vol1
    { id: "Q01", component: Q01_Count, label: "Q01: Count", volume: 1 },
    { id: "Q02", component: Q02_Toggle, label: "Q02: Toggle", volume: 1 },
    { id: "Q03", component: Q03_InputMirror, label: "Q03: Input Mirror", volume: 1 },
    { id: "Q04", component: Q04_FizzBuzz, label: "Q04: FizzBuzz", volume: 1 },
    { id: "Q05", component: Q05_EvenOdd, label: "Q05: Even/Odd", volume: 1 },
    { id: "Q06", component: Q06_Login, label: "Q06: Login", volume: 1 },
    { id: "Q07", component: Q07_MaxNumber, label: "Q07: Max Number", volume: 1 },
    { id: "Q08", component: Q08_Grade, label: "Q08: Grade", volume: 1 },
    { id: "Q09", component: Q09_ColorSelect, label: "Q09: Color Select", volume: 1 },
    { id: "Q10", component: Q10_Calculator, label: "Q10: Calculator", volume: 1 },
    { id: "Q11", component: Q11_NamesList, label: "Q11: Names List", volume: 1 },
    { id: "Q12", component: Q12_UserCardList, label: "Q12: User Card List", volume: 1 },
    { id: "Q13", component: Q13_FilterActive, label: "Q13: Filter Active", volume: 1 },
    { id: "Q14", component: Q14_FilterText, label: "Q14: Filter Text", volume: 1 },
    { id: "Q15", component: Q15_FindUser, label: "Q15: Find User", volume: 1 },
    { id: "Q16", component: Q16_TodoList, label: "Q16: Todo List", volume: 1 },
    { id: "Q17", component: Q17_ArticleList, label: "Q17: Article List", volume: 1 },
    { id: "Q18", component: Q18_ArticleComponent, label: "Q18: Article Component", volume: 1 },
    { id: "Q19", component: Q19_ShoppingCart, label: "Q19: Shopping Cart", volume: 1 },
    { id: "Q20", component: Q20_TabsObject, label: "Q20: Tabs (Object)", volume: 1 },
    { id: "Q21", component: Q21_TabsArray, label: "Q21: Tabs (Array)", volume: 1 },
    { id: "Q22", component: Q22_EffectTitle, label: "Q22: Effect Title", volume: 1 },
    { id: "Q23", component: Q23_EffectWidth, label: "Q23: Effect Width", volume: 1 },
    { id: "Q24", component: Q24_EffectTimer, label: "Q24: Effect Timer (Countdown)", volume: 1 },
    { id: "Q25", component: Q25_EffectStatus, label: "Q25: Effect Status", volume: 1 },
    { id: "Q26", component: Q26_EffectStorage, label: "Q26: Effect Storage", volume: 1 },
    { id: "Q27", component: Q27_EffectClock, label: "Q27: Effect Clock", volume: 1 },
    { id: "Q28", component: Q28_EffectValidation, label: "Q28: Effect Validation", volume: 1 },
    { id: "Q29", component: Q29_Popup, label: "Q29: Popup", volume: 1 },
    { id: "Q30", component: Q30_Quiz, label: "Q30: Quiz", volume: 1 },
    { id: "Q31", component: Q31_UserRegister, label: "Q31: User Register (Comprehensive)", volume: 1 },
    // Vol2
    { id: "Q32", component: Q32_Favorite, label: "Q32: Favorite", volume: 2 },
];
