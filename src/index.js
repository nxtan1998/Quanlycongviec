import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import AllReducer from './Reducers/index';
import { Provider } from 'react-redux';
const store = createStore(

	AllReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

ReactDOM.render(
  <React.StrictMode>
   <Provider store = {store}>
   	<App />
   </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
