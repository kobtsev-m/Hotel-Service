import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import './assets/index.scss';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/login/login-page';

Amplify.configure(awsExports);

ReactDOM.render(
  <Layout>
    <LoginPage />
  </Layout>,
  document.getElementById('root')
);

reportWebVitals();
