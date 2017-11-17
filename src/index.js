import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
