"use strict";

import React from 'react';
import ReactDom from 'react-dom';


var SubMessage = React.createClass({
  componentWillReceiveProps (nextProps){
    console.log("子组件将要获得props");
  },

  shouldComponentUpdate (nextProps,nextState){
    if(nextProps.count >4){
      return false;
    }
    return true;
  },
  render(){
    return (<h3>{this.props.count}</h3>);
  }
});

export default class blog extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0};
  };

  //更新周期

  shouldComponentUpdate (nextProp,nextState){
    //判断是否需要重新渲染
    console.log("shouldComponentUpdate");
    if(nextState.count >8){
      return false;
    }
    return true;
  };
  componentWillUpdate(nextProps,nextState){
    //做一些数据的处理
      console.log("componentWillUpdate");
  };
  componentDidUpdate(){
    //可以获取更新后的DOM结构
    console.log("update success");
  };
  doUpdate(){
    this.setState({count:this.state.count+1});
  };
  render(){
    console.log("render");
    return (
      <div>hello world!  {this.state.count}
        <button onClick = {this.doUpdate.bind(this)}>update</button>
        <SubMessage count={this.state.count}></SubMessage>
      </div>
    );
  }
}
