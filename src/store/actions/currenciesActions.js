import apiRequests from "../../api/apiRequests"
import { SET_CURRENCIES_LIST } from "./actionsTypes";
import { getListOfWallets } from "./walletsActions";

export function getCurrenciesList(){
    return (dispatch) =>{
        apiRequests.getCurrenciesList().then(res=>{
            dispatch(setListOfCurrencies(res.data))  
        })
    }
}
function setListOfCurrencies(currenciesList){
    return{
        type : SET_CURRENCIES_LIST,
        currenciesList
    }
}

export function transferFunds(data){
    return (dispatch) =>{
        apiRequests.transferFunds(data).then(res=>{
            dispatch(getListOfWallets())  
        })
    }
}