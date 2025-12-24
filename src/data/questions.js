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
import { Q20_TabsArray } from "../components/vol1/Q20_TabsArray";
import { Q21_EffectTitle } from "../components/vol1/Q21_EffectTitle";
import { Q22_EffectWidth } from "../components/vol1/Q22_EffectWidth";
import { Q23_EffectTimer } from "../components/vol1/Q23_EffectTimer";
import { Q24_EffectStatus } from "../components/vol1/Q24_EffectStatus";
import { Q25_EffectStorage } from "../components/vol1/Q25_EffectStorage";
import { Q26_EffectClock } from "../components/vol1/Q26_EffectClock";
import { Q27_EffectValidation } from "../components/vol1/Q27_EffectValidation";
import { Q28_Popup } from "../components/vol1/Q28_Popup";
import { Q29_Quiz } from "../components/vol1/Q29_Quiz";
import { Q30_UserRegister } from "../components/vol1/Q30_UserRegister";
// #endregion

// #region Vol2 (Q31-Q60)
import { Q31_Favorite } from "../components/vol2/Q31_Favorite.jsx";
import { Q32_Placeholder } from "../components/vol2/Q32_Placeholder.jsx";
import { Q33_Placeholder } from "../components/vol2/Q33_Placeholder.jsx";
import { Q34_Placeholder } from "../components/vol2/Q34_Placeholder.jsx";
import { Q35_Placeholder } from "../components/vol2/Q35_Placeholder.jsx";
import { Q36_Placeholder } from "../components/vol2/Q36_Placeholder.jsx";
import { Q37_Placeholder } from "../components/vol2/Q37_Placeholder.jsx";
import { Q38_Placeholder } from "../components/vol2/Q38_Placeholder.jsx";
import { Q39_Placeholder } from "../components/vol2/Q39_Placeholder.jsx";
import { Q40_Placeholder } from "../components/vol2/Q40_Placeholder.jsx";
import { Q41_Placeholder } from "../components/vol2/Q41_Placeholder.jsx";
import { Q42_Placeholder } from "../components/vol2/Q42_Placeholder.jsx";
import { Q43_Placeholder } from "../components/vol2/Q43_Placeholder.jsx";
import { Q44_Placeholder } from "../components/vol2/Q44_Placeholder.jsx";
import { Q45_Placeholder } from "../components/vol2/Q45_Placeholder.jsx";
import { Q46_Placeholder } from "../components/vol2/Q46_Placeholder.jsx";
import { Q47_Placeholder } from "../components/vol2/Q47_Placeholder.jsx";
import { Q48_Placeholder } from "../components/vol2/Q48_Placeholder.jsx";
import { Q49_Placeholder } from "../components/vol2/Q49_Placeholder.jsx";
import { Q50_Placeholder } from "../components/vol2/Q50_Placeholder.jsx";
import { Q51_Placeholder } from "../components/vol2/Q51_Placeholder.jsx";
import { Q52_Placeholder } from "../components/vol2/Q52_Placeholder.jsx";
import { Q53_Placeholder } from "../components/vol2/Q53_Placeholder.jsx";
import { Q54_Placeholder } from "../components/vol2/Q54_Placeholder.jsx";
import { Q55_Placeholder } from "../components/vol2/Q55_Placeholder.jsx";
import { Q56_Placeholder } from "../components/vol2/Q56_Placeholder.jsx";
import { Q57_Placeholder } from "../components/vol2/Q57_Placeholder.jsx";
import { Q58_Placeholder } from "../components/vol2/Q58_Placeholder.jsx";
import { Q59_Placeholder } from "../components/vol2/Q59_Placeholder.jsx";
import { Q60_Placeholder } from "../components/vol2/Q60_Placeholder.jsx";
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
    { id: "Q19", component: Q19_TabsObject, label: "Q19: Tabs (Object)", volume: 1 },
    { id: "Q20", component: Q20_TabsArray, label: "Q20: Tabs (Array)", volume: 1 },
    { id: "Q21", component: Q21_EffectTitle, label: "Q21: Effect Title", volume: 1 },
    { id: "Q22", component: Q22_EffectWidth, label: "Q22: Effect Width", volume: 1 },
    { id: "Q23", component: Q23_EffectTimer, label: "Q23: Effect Timer (Countdown)", volume: 1 },
    { id: "Q24", component: Q24_EffectStatus, label: "Q24: Effect Status", volume: 1 },
    { id: "Q25", component: Q25_EffectStorage, label: "Q25: Effect Storage", volume: 1 },
    { id: "Q26", component: Q26_EffectClock, label: "Q26: Effect Clock", volume: 1 },
    { id: "Q27", component: Q27_EffectValidation, label: "Q27: Effect Validation", volume: 1 },
    { id: "Q28", component: Q28_Popup, label: "Q28: Popup", volume: 1 },
    { id: "Q29", component: Q29_Quiz, label: "Q29: Quiz", volume: 1 },
    { id: "Q30", component: Q30_UserRegister, label: "Q30: User Register (Comprehensive)", volume: 1 },

    // Vol2 - Stage 1
    { id: "Q31", component: Q31_Favorite, label: "Q31: 引数付きイベント(アロー関数)", volume: 2 },
    { id: "Q32", component: Q32_Placeholder, label: "Q32: 安全な数値計算(型変換)", volume: 2 },
    { id: "Q33", component: Q33_Placeholder, label: "Q33: 論理演算子による条件表示", volume: 2 },
    { id: "Q34", component: Q34_Placeholder, label: "Q34: 三項演算子スタイル切替", volume: 2 },
    { id: "Q35", component: Q35_Placeholder, label: "Q35: 動的文字数カウンター", volume: 2 },
    { id: "Q36", component: Q36_Placeholder, label: "Q36: 最大値のリアルタイム追跡", volume: 2 },
    { id: "Q37", component: Q37_Placeholder, label: "Q37: 特定要素のみ色変更", volume: 2 },
    { id: "Q38", component: Q38_Placeholder, label: "Q38: 配列へのスプレッド追加", volume: 2 },
    { id: "Q39", component: Q39_Placeholder, label: "Q39: Enterキー操作(KeyDown)", volume: 2 },
    { id: "Q40", component: Q40_Placeholder, label: "Q40: 配列Stateの全クリア", volume: 2 },

    // Vol2 - Stage 2
    { id: "Q41", component: Q41_Placeholder, label: "Q41: 配列内項目の特定更新(map)", volume: 2 },
    { id: "Q42", component: Q42_Placeholder, label: "Q42: キーワードフィルタリング", volume: 2 },
    { id: "Q43", component: Q43_Placeholder, label: "Q43: オブジェクトState管理", volume: 2 },
    { id: "Q44", component: Q44_Placeholder, label: "Q44: 連動フォーム(単位変換)", volume: 2 },
    { id: "Q45", component: Q45_Placeholder, label: "Q45: タブ名連動(useEffect)", volume: 2 },
    { id: "Q46", component: Q46_Placeholder, label: "Q46: リサイズ監視(クリーンアップ)", volume: 2 },
    { id: "Q47", component: Q47_Placeholder, label: "Q47: 自動消去メッセージ(タイマー)", volume: 2 },
    { id: "Q48", component: Q48_Placeholder, label: "Q48: LocalStorageへの保存", volume: 2 },
    { id: "Q49", component: Q49_Placeholder, label: "Q49: 排他的アコーディオン", volume: 2 },
    { id: "Q50", component: Q50_Placeholder, label: "Q50: タブ切り替えUI本体", volume: 2 },

    // Vol2 - Stage 3
    { id: "Q51", component: Q51_Placeholder, label: "Q51: 本格バリデーションフォーム", volume: 2 },
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
