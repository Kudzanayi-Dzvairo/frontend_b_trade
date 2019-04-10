import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import user from "./reducers/userReducer";

import reducer from './Redux'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    userReducer: user
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(

    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));


