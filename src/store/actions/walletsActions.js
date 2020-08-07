import { SET_WALLETS_LIST, DELETE_WALLET } from "./actionsTypes";
import apiRequests from "../../api/apiRequests";

export function getListOfWallets(){
    return (dispatch) =>{
        apiRequests.getListOfWallets().then(res=>{
            dispatch(setListOfWallets(res.data))  
        })
    }
}
function setListOfWallets(walletsList){
    return{
        type : SET_WALLETS_LIST,
        walletsList
    }
}

export function deleteWallet(id){
    return (dispatch) =>{
        apiRequests.deleteWallet(id).then(res=>{
            dispatch(getListOfWallets())  
        })
    }
}
export function createWallet(data){
    return (dispatch) =>{
        apiRequests.createWallet(data).then(res=>{
            dispatch(getListOfWallets())  
        })
    }
}

