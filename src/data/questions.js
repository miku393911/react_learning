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
import { Q18_ShoppingCart } from "../components/vol1/Q18_ShoppingCart";
import { Q19_TabsObject } from "../components/vol1/Q19_TabsObject";
import { Q20_EffectTitle } from "../components/vol1/Q20_EffectTitle";
import { Q21_EffectWidth } from "../components/vol1/Q21_EffectWidth";
import { Q22_EffectTimer } from "../components/vol1/Q22_EffectTimer";
import { Q23_EffectStatus } from "../components/vol1/Q23_EffectStatus";
import { Q24_EffectStorage } from "../components/vol1/Q24_EffectStorage";
import { Q25_EffectClock } from "../components/vol1/Q25_EffectClock";
import { Q26_EffectValidation } from "../components/vol1/Q26_EffectValidation";
import { Q27_Popup } from "../components/vol1/Q27_Popup";
import { Q28_Quiz } from "../components/vol1/Q28_Quiz";
import { Q29_UserRegister } from "../components/vol1/Q29_UserRegister";
import { Q30_Favorite } from "../components/vol1/Q30_Favorite";
// #endregion

// #region Vol2 (Q31-Q60)
import { Q31_EventHandler } from "../components/vol2/Q31_EventHandler";
import { Q32_NumberAdd } from "../components/vol2/Q32_NumberAdd";
import { Q33_Checkbox } from "../components/vol2/Q33_Checkbox";
import { Q34_Color } from "../components/vol2/Q34_Color";
import { Q35_ValueLength } from "../components/vol2/Q35_ValueLength";
import { Q36_MathMax } from "../components/vol2/Q36_MathMax";
import { Q37_ClickButton } from "../components/vol2/Q37_ClickButton";
import { Q38_TextboxAdd } from "../components/vol2/Q38_TextboxAdd";
import { Q39_InputOnKeyDown } from "../components/vol2/Q39_InputOnKeyDown";
import { Q40_AllListRemoved } from "../components/vol2/Q40_AllListRemoved";
import { Q41_TodoDecoration } from "../components/vol2/Q41_TodoDecoration";
import { Q42_DataIncludes} from "../components/vol2/Q42_DataIncludes";
import { Q43_ObjectName } from "../components/vol2/Q43_ObjectName";
import { Q44_InputTransform } from "../components/vol2/Q44_InputTransform";
import { Q45_CountDocumentTitle } from "../components/vol2/Q45_CountDocumentTitle";
import { Q46_WindowSize } from "../components/vol2/Q46_WindowSize";
import { Q47_TimeStatus } from "../components/vol2/Q47_TimeStatus";
import { Q48_LocalStorage } from "../components/vol2/Q48_LocalStorage";
import { Q49_ActiveStatus } from "../components/vol2/Q49_ActiveStatus";
import { Q50_TabSelect } from "../components/vol2/Q50_TabSelect";
import { Q51_MailAndPassword } from "../components/vol2/Q51_MailAndPassword";
import { Q52_Placeholder } from "../components/vol2/Q52_Placeholder";
import { Q53_Placeholder } from "../components/vol2/Q53_Placeholder";
import { Q54_Placeholder } from "../components/vol2/Q54_Placeholder";
import { Q55_Placeholder } from "../components/vol2/Q55_Placeholder";
import { Q56_Placeholder } from "../components/vol2/Q56_Placeholder";
import { Q57_Placeholder } from "../components/vol2/Q57_Placeholder";
import { Q58_Placeholder } from "../components/vol2/Q58_Placeholder";
import { Q59_Placeholder } from "../components/vol2/Q59_Placeholder";
import { Q60_Placeholder } from "../components/vol2/Q60_Placeholder";
// #endregion

/**
 * 問題リスト
 * - id: 問題の識別子 (セレクトボックスのvalue)
 * - component: 表示するReactコンポーネント
 * - label: セレクトボックスに表示するラベル
 * - volume: 巻番号 (フィルタリング用)
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
    { id: "Q18", component: Q18_ShoppingCart, label: "Q18: Shopping Cart", volume: 1 },
    { id: "Q19", component: Q19_TabsObject, label: "Q19: TabsObject", volume: 1 },
    { id: "Q20", component: Q20_EffectTitle, label: "Q20: Effect Title", volume: 1 },
    { id: "Q21", component: Q21_EffectWidth, label: "Q21: Effect Width", volume: 1 },
    { id: "Q22", component: Q22_EffectTimer, label: "Q22: Effect Timer", volume: 1 },
    { id: "Q23", component: Q23_EffectStatus, label: "Q23: Effect Status", volume: 1 },
    { id: "Q24", component: Q24_EffectStorage, label: "Q24: Effect Storage", volume: 1 },
    { id: "Q25", component: Q25_EffectClock, label: "Q25: Effect Clock", volume: 1 },
    { id: "Q26", component: Q26_EffectValidation, label: "Q26: Effect Validation", volume: 1 },
    { id: "Q27", component: Q27_Popup, label: "Q27: Popup", volume: 1 },
    { id: "Q28", component: Q28_Quiz, label: "Q28: Quiz", volume: 1 },
    { id: "Q29", component: Q29_UserRegister, label: "Q29: User Register", volume: 1 },
    { id: "Q30", component: Q30_Favorite, label: "Q30: Favorite", volume: 1 },

    // Vol2 - Stage 1
    { id: "Q31", component: Q31_EventHandler, label: "Q31: Event Handler", volume: 2 },
    { id: "Q32", component: Q32_NumberAdd, label: "Q32: Number Add", volume: 2 },
    { id: "Q33", component: Q33_Checkbox, label: "Q33: Checkbox", volume: 2 },
    { id: "Q34", component: Q34_Color, label: "Q34: Color", volume: 2 },
    { id: "Q35", component: Q35_ValueLength, label: "Q35: Value Length", volume: 2 },
    { id: "Q36", component: Q36_MathMax, label: "Q36: Math Max", volume: 2 },
    { id: "Q37", component: Q37_ClickButton, label: "Q37: Click Button", volume: 2 },
    { id: "Q38", component: Q38_TextboxAdd, label: "Q38: Textbox Add", volume: 2 },
    { id: "Q39", component: Q39_InputOnKeyDown, label: "Q39: Input OnKeyDown", volume: 2 },
    { id: "Q40", component: Q40_AllListRemoved, label: "Q40: All List Removed", volume: 2 },

    // Vol2 - Stage 2
    { id: "Q41", component: Q41_TodoDecoration, label: "Q41: Todo Decoration", volume: 2 },
    { id: "Q42", component: Q42_DataIncludes, label: "Q42: Data Includes", volume: 2 },
    { id: "Q43", component: Q43_ObjectName, label: "Q43: Object Name", volume: 2 },
    { id: "Q44", component: Q44_InputTransform, label: "Q44:Input Transform", volume: 2 },
    { id: "Q45", component: Q45_CountDocumentTitle, label: "Q45: Count Document Title", volume: 2 },
    { id: "Q46", component: Q46_WindowSize, label: "Q46: Window Size", volume: 2 },
    { id: "Q47", component: Q47_TimeStatus, label: "Q47: Time Status", volume: 2 },
    { id: "Q48", component: Q48_LocalStorage, label: "Q48: LocalStorage", volume: 2 },
    { id: "Q49", component: Q49_ActiveStatus, label: "Q49: Active Status", volume: 2 },
    { id: "Q50", component: Q50_TabSelect, label: "Q50: Tab Select", volume: 2 },

    // Vol2 - Stage 3
    { id: "Q51", component: Q51_MailAndPassword, label: "Q51: Mail and Password", volume: 2 },
    { id: "Q52", component: Q52_Placeholder, label: "Q52: データのページネーション", volume: 2 },
    { id: "Q53", component: Q53_Placeholder, label: "Q53: カート内の金額動的計算", volume: 2 },
    { id: "Q54", component: Q54_Placeholder, label: "Q54: 検索ワードのハイライト", volume: 2 },
    { id: "Q55", component: Q55_Placeholder, label: "Q55: チェックリストの一括選択", volume: 2 },
    { id: "Q56", component: Q56_Placeholder, label: "Q56: Z軸を意識したモーダル", volume: 2 },
    { id: "Q57", component: Q57_Placeholder, label: "Q57: 無限ループスライドショー", volume: 2 },
    { id: "Q58", component: Q58_Placeholder, label: "Q58: 直近5件の検索履歴", volume: 2 },
    { id: "Q59", component: Q59_Placeholder, label: "Q59: 外部APIからのfetch取得", volume: 2 },
    { id: "Q60", component: Q60_Placeholder, label: "Q60: 総まとめタスクボード", volume: 2 },
];
