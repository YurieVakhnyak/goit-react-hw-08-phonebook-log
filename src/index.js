import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  store,
  // persistor
} from 'redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<div>loading...</div>} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
    ,
  </React.StrictMode>
);