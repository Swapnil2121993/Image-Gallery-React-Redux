import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

 const store1 = store();
 ReactDOM.render(
   <Provider store={store1}>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
   </Provider>,
  document.getElementById('root'));
  registerServiceWorker();
