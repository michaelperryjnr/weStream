import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const root = document.getElementById('root');

const render = () => {
  return(
    <>
        <App/>
    </>
  )
  }

ReactDOM.render(render(), root);
