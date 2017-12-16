import React, { Component } from 'react';
import { Button } from 'antd';
export default class Community extends Component {
    
    triggerEdit(){
        this.props.trigger(true)
    }
    render(){
        return (
            <div className="">
                <div className="btn-grounp">
                    <Button type="info" icon="edit" onClick={this.triggerEdit.bind(this)}>写文章</Button>
                    <div>啦啦啦啦啦</div>
                </div>
            </div>
        )
    }
}