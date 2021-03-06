import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Auth from './store/reducer/auth';
import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import './styles/main.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  Auth:Auth
})

const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
