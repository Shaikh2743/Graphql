import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import Carasoul from './carasoul'
import Gallery from './gallery';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Carasoul /> */}
    {/* <Gallery /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
