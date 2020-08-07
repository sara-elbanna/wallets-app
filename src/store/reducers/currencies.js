import { SET_CURRENCIES_LIST } from "../actions/actionsTypes";

let INITIAL_STATE= {
    currenciesList:[]
}
export function currencies(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_CURRENCIES_LIST:
            return {...state, currenciesList: action.currenciesList}
        default:
            return state
    }
}