import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const Store = configureStore();
ReactDOM.render(<Provider store = {Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
