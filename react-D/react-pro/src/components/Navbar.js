import React, { component, Component } from 'react';
import {Link} from 'react-router-dom';

import { Layout, Menu, Switch, Avatar } from 'antd';
const { Header } = Layout;

export default class Navbar extends Component {
    state = {
        theme: 'light',
        current: '1',
        user: 'alice',
        color:'#87e8de'
    }
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'light' : 'dark',
          });
    }
    render(){
        return (
            <Header className={this.state.theme == 'dark'? "header-dark" : "header-light"}>
                <div className="logo" >
                    <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                        {this.state.user}
                    </Avatar>
                </div>
              <Menu
                theme={this.state.theme}
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/community">社区</Link>
                </Menu.Item>
              </Menu>
              <Switch
                    className="switch-div"
                    checked={this.state.theme === 'light'}
                    onChange={this.changeTheme}
                    checkedChildren="亮白"
                    unCheckedChildren="曜黑"
                />
            </Header>
        )
    }
}