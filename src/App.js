import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import { rootReducer } from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Wallets from './components/Wallets';
import ShowWallet from './components/ShowWallet';
import Header from './components/Header';
import Currencies from './components/Currencies';

const store = createStore(rootReducer,applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/showWallet/:id' component={ShowWallet}/>
          <Route exact path='/currencies' component={Currencies}/>
          <Route exact path='/' component={Wallets}/>
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
