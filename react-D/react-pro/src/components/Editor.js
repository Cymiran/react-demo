import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {Button} from 'antd';
import '../style/react-draft-wysiwyg.css';
import '../style/commen.css'

export default class Editory extends Component {
    
    triggerBack(){
        this.props.trigger(false)
    }
    render(){
        return (
            <div>
                <Editor
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                />
                <Button type="success">发表文章</Button>
            </div>
        )
    }
}
