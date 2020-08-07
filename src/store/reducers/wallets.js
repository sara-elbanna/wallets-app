import { SET_WALLETS_LIST } from "../actions/actionsTypes";

let INITIAL_STATE= {
    walletsList:[]
}
export function wallets(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_WALLETS_LIST:
            return {...state, walletsList: action.walletsList}
            
        default:
            return state
    }
}