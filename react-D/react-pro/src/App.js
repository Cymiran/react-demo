import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Home from './components/Home'
import Community from './components/Community'
import Navbar from './components/Navbar'

import './style/commen.css';
import './App.css';

import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Navbar/>
            <div>
              <Switch>
                <Redirect exact from="/" to="home"/>
                <Route path="/home" component={ Home }/>
                <Route path="/community" component={ Community }/>
              </Switch>
            </div>
            
          </Layout>
            <div className="footer">biubiu自己玩儿，啾啾啾~~~~</div>
          </div>
        
      </Router>
    );
  }
}

export default App;

/*
* 这里引入BrowserRouter 还有=>hashRouter
* exact 有且仅等于‘/’
* 路由跳转只能等于当前某一路由 用switch 判断 只能匹配一个
*/