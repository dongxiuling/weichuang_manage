import React, { Component } from 'react';
import  {HashRouter as Router, Route,Redirect} from 'react-router-dom';
import App from './App.js';
import Home from './pages/Home'
import Student from './pages/Student'
import Course from './pages/CourseAdd'
class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/student" component={Student}></Route>
                        <Route path="/course" component={Course}></Route>
                    </App>
                </Router>
            </div>
        );
    }
}

export default IRouter;
