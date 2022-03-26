import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import awsExports from './aws-exports';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from './router';
import { RootStore, StoreProvider } from './store';
import './assets/index.scss';

Amplify.configure(awsExports);

ReactDOM.render(
  <StoreProvider store={new RootStore()}>
    <RouterProvider />
    <ToastContainer />
  </StoreProvider>,
  document.getElementById('root')
);

reportWebVitals();
