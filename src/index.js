import React from 'react';
import ReactDOM from 'react-dom/client';
import AudioRecord from './AudioRecord';
// import AudioRecord from './AudioRecord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AudioRecord />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
