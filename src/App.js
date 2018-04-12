import React, { Component } from 'react';
import * as firebase from 'firebase'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
    Link
} from 'react-router-dom';
import {PageUserLogin} from './Module/User/Components/PageUserLogin'
import {PageUserEnroll} from './Module/User/Components/PageUserEnroll'
import {PageIndexHome} from "./Module/Index/Components/PageIndexHome";

import logo from './logo.svg';
import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        const config = {
            apiKey: "AIzaSyBkoFLUCNWomuJfqUS3UWd9onYTPkdgdJQ",
            authDomain: "react-starter-3ff4f.firebaseapp.com",
            databaseURL: "https://react-starter-3ff4f.firebaseio.com",
            projectId: "react-starter-3ff4f",
            storageBucket: "react-starter-3ff4f.appspot.com",
            messagingSenderId: "1052700176560"
        };
        firebase.initializeApp(config);

    }
  render() {
      return (
      <div className="App">
        <header className="panel-header df jcsb">
            <div className="lt">
                左边
            </div>
            <div className="ct">
            </div>
            <div className="rt">
            </div>
        </header>
        <main>
            <Router>
                <div>
                    <Route exact path="/" component={PageIndexHome} />
                    <Route exact path="/page-index-home" component={PageIndexHome} />
                    <Route path="/page-user-login" component={PageUserLogin} />
                    <Route path="/page-user-enroll" component={PageUserEnroll} />
                </div>
            </Router>
        </main>
        <footer>我是页脚</footer>
      </div>
    );
  }
}

export default App;
