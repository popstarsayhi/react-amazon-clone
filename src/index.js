import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from './components/checkout/StateProvider';
import { initialState } from './components/checkout/Reducer';
import reducer from './components/checkout/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer} >
    <App />
    </StateProvider>
  </>,
);

reportWebVitals();

