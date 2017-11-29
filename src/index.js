import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import FeedPage from './components/FeedPage/FeedPage';
import StatisticsPage from './components/StatisticsPage/StatisticsPage';
import SurveyForm from './components/SurveyForm/SurveyForm';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import LoginPage from './components/LoginPage/LoginPage';


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
            <Route path="/feedback" component={FeedbackForm}></Route>
            <Route path="/survey" component={SurveyForm}></Route>
            <Route path="/login" component={LoginPage}></Route>
        
        </div>
    </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
