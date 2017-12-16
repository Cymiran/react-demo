import React, { Component } from 'react';
import { layout } from 'antd';

import ComList from './ComList'
import Editing from './Editing'
const { Content } = layout

export default class Community extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasEdit:false
        }
    }
    trigger(isflag){
        this.setState({
            hasEdit: isflag
        })
    }
    render(){
        return (
            <Content style={{ background: '#fff', paddingTop:24,paddingBottom:24, margin: 0, minHeight: 280 }}>
                
                <div>
                    {
                        this.state.hasEdit === false ? <ComList trigger={this.trigger.bind(this)}/> : <Editing trigger={this.trigger.bind(this)}/>
                    }
                </div>
            </Content>
        )
    }
}