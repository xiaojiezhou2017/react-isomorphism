import { hydrate } from 'react-dom';
import React from 'react';
import { createStore  } from 'redux';
import { Provider } from 'react-redux';
import message from './store/reducer';
import {
    BrowserRouter,
    Link
  } from 'react-router-dom'

import App from './App';
const store = createStore(message, window.INIT_STORE);
const Entry = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}
if(module.hot){
    module.hot.accept();
}
hydrate(<Entry/>, document.getElementById('root'))
