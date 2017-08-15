import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import	{ Provider } from 'react-redux';
import { createStore } from 'redux';
import { mainReducer } from "./redux/mainreducer";


const store = createStore(mainReducer);
export default store;

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ), document.getElementById('root'));
registerServiceWorker();
