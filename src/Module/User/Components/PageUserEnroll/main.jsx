import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {EhEnroll} from '@/erhu-ui'

import './main.scss';

class Main extends PureComponent {
  render() {
    return (
        <div className="panel-app">
            <EhEnroll />
        </div>
    );
  }
}

export default Main;
