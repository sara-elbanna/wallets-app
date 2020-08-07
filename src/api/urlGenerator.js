
const url = 'https://waleed.threefold.io/wallets_example/api';

export default class URLGenerator {
    static wallets(){
      return `${url}/wallets`
    }
    static wallet_actions(id){
        return `${url}/wallets/${id}`
    }
    static currency(id){
        return `${url}/currency`
    }
    static transferFunds(){
        return `${url}/transfer`
    }
}