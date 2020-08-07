import URLGenerator from "./urlGenerator";
import Axios from "axios";

export default class apiRequests{
    static getListOfWallets(){
        const url = URLGenerator.wallets()
        return Axios.get(url)
    }
    static deleteWallet(id){
        const url = URLGenerator.wallet_actions(id)
        return Axios.delete(url)
    }
    static createWallet(data){
        const url = URLGenerator.wallets()
        return Axios.post(url, data, {headers:{'content-type':'application/json'}})
    }
    static showWalletDetails(id){
        const url = URLGenerator.wallet_actions(id)
        return Axios.get(url)
    }
    static getCurrenciesList(){
        const url = URLGenerator.currency()
        return Axios.get(url)
    }
    static transferFunds(data){
        const url = URLGenerator.transferFunds(data)
        return Axios.post(url, data, {headers:{'content-type':'application/json'}})
    }
}