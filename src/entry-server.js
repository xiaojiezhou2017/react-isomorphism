import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router'; 
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import  message  from './store/reducer';
import App from './App';
const store = createStore(message);
const entry = (url, info, context = { }) => {
    const serverRouter = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter
          location={url}
          context={context}
        >
          <App/>
        </StaticRouter>
        </Provider>
      )
    return serverRouter; 
}
export { store, entry };
