import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {EhLogin} from "@/erhu-ui"
import './main.scss';

class Main extends PureComponent {
  render() {
    return (
        <div className="panel-app">

            <Link to='/page-user-enroll'>注册</Link>
          <EhLogin />
        </div>
    );
  }
}

export default Main;
