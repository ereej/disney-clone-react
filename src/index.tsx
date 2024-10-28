import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store'; // Adjust the path to where your store is defined

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Use the Redux store instance here */}
      <App /> {/* Now, App is wrapped in Provider and hence can read from store */}
    </Provider>
  </React.StrictMode>
);
