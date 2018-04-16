import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import utils from '@/utils'
import './main.scss';
import {inject,observer} from 'mobx-react'
// import api from '@/api'111
@inject("store") @observer
class Main extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props,111111111111)
    this.state = {
        username:'',
        password:""
    };
  }
  doEnroll = () =>{
      if (utils.isEmpty(this.state.username)) {
          alert('用户名不能为空');
          return;
      }
      if (!utils.isEmail(this.state.username)) {
          alert('邮箱格式不正确');
          return;
      }
      if (utils.isEmpty(this.state.password)) {
          alert('密码不能为空');
          return;
      }
      if (!utils.isPassword(this.state.password)) {
          alert('密码至少包含一个小写字母和大写字母及数字');
          return;
      }
      // const user = await
  }
  validate = (data) => {

  }
  onChange = (e) => {
    const target = e.target,
        name = target && target.name,
        val = target && target.value;
    let data = {};
    data[name] = val;
    this.setState(data);
  }
  render() {
    return (
        <div className="panel-app">
          <div>username: <span></span>password: <span>f</span></div>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange}/>
          <input type="text" name="password" value={this.state.password} onChange={this.onChange}/>
          <button type="button" onClick={this.doEnroll}>注册</button>
        </div>
    );
  }
}

export default Main;
