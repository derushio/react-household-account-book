import HsaTableModel from "../models/HsaTableModel"

/**
 * IndexReducerAction
 */
class IndexReducerAction {

    /**
     * @deprecated
     * このコンストラクタは禁止です
     */
    constructor() {
        throw new Error("このコンストラクタは禁止されてます");
    }

    /**
     * reducer
     * @param {object} state - ステート
     * @param {object} action - アクション
     */
    static reducer(state = IndexReducerAction.getInitialState(), action) {
        let actions = IndexReducerAction.getActions();

        switch (action.type) {
            case actions.action().type:
                alert("action");
                break;
            default:
        }

        return state;
    }

    /**
     * 初期ステートを取得
     * @return {object} 初期ステート
     */
    static getInitialState() {
        return {
            hsaTableModels: [new HsaTableModel([], "aiueo")]
        };
    }

    /**
     * アクションを取得
     * @return {object} actions
     */
    static getActions() {
        return {
            action: () => {
                return { type: "ACTION" };
            },
            addTableAction: () => {
                return {type: "ADD_TABLE_ACTION"};
            }
        };
    }
}

export default IndexReducerAction;