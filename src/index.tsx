import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import { LoginPage } from './pages/login/login-page';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

ReactDOM.render(<LoginPage />, document.getElementById('root'));

reportWebVitals();
