import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux' ;


const store = createStore(
    combineReducers({
        linkReducer :() => {
            return[{
                id: '1234',
                title:'This is title',
                destination :'https://dest.com',
                shortUrl:'https://st.ss'
            }]
        }   
    })
);

ReactDOM.render(
    <Provider store ={store} >
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
