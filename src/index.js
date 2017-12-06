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
import CS465Feed from './components/CS465Feed/CS465Feed';
import CS498Feed from './components/CS498Feed/CS498Feed';
import CS357Feed from './components/CS357Feed/CS357Feed';
import CS242Feed from './components/CS242Feed/CS242Feed';
import CS242Statistics from './components/CS242Statistics/CS242Statistics';
import CS357Statistics from './components/CS357Statistics/CS357Statistics';
import CS498Statistics from './components/CS498Statistics/CS498Statistics';

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
            <Route path="/CS465feed" component={CS465Feed}></Route>
            <Route path="/CS498feed" component={CS498Feed}></Route>
            <Route path="/CS357feed" component={CS357Feed}></Route>
            <Route path="/CS242feed" component={CS242Feed}></Route>
			<Route path="/CS242statistics" component={CS242Statistics}></Route>
			<Route path="/CS357statistics" component={CS357Statistics}></Route>
			<Route path="/CS498statistics" component={CS498Statistics}></Route>
        </div>
    </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
