import { SET_WALLETS_LIST } from "../actions/actionsTypes";

let INITIAL_STATE= {
    walletsList:[{id:'sara',balance:4, address:444332, currency:'xdt', tags:['saraaa','bannaa']}]
}
export function wallets(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_WALLETS_LIST:
            {
                // console.log('rr',action.walletsList)
                // let newt = [...state.walletsList]
                // newt.push(action.walletsList)
                // console.log('newt',newt)
                // return {...state, walletsList: newt}
                return {...state, walletsList: action.walletsList}
            }
            
        default:
            return state
    }
}