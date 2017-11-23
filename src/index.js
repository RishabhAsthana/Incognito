import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import FeedPage from './components/FeedPage/FeedPage';
import StatisticsPage from './components/StatisticsPage/StatisticsPage';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return(
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/feed" component={FeedPage}></Route>
            <Route path="/statistics" component={StatisticsPage}></Route>
        </div>
    </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
