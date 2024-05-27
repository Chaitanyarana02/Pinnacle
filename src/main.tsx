import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "./App.css"
import './global.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
