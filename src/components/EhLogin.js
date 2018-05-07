import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

const Wrapper = styled.div`
  p {
    color: red;
  }
`;

@inject("store")
@observer
class EhLogin extends Component {
  render() {
    let { store } = this.props;
    return <div>i am ehlogin</div>;
  }
}

export default EhLogin;
