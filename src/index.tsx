import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import React from 'react';

import {setUpStore} from "./redux";
import './utils/i18next';
import App from './App';

const store = setUpStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);


