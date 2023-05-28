import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_test from './App_test';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App_test />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
