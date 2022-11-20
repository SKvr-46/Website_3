import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Link_container from './Link_container';
import Head from './Head';
import Foot from './Foot';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <App />
    <Link_container />
    <Link_container />
    <Foot />
  </React.StrictMode>
);
