import React, {Component } from 'react';
import {Button} from 'antd';
import Editor from './Editor'

import '../style/commen.css'
export default class Community extends Component {
    
    triggerBack(){
        this.props.trigger(false)
    }
    render(){
        return (
            <div className="">
            <Button type="info" icon="edit" onClick={this.triggerBack.bind(this)}>返回社区列表</Button>
                <div className="edit-main">
                    <Editor/>
                </div>
                
            </div>
        )
    }
}