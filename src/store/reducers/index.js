
import {combineReducers} from 'redux';
import { wallets } from './wallets';
import { currencies } from './currencies';
export const rootReducer = combineReducers({
    wallets,
    currencies
})
