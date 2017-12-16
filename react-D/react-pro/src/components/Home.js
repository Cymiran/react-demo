import React, { component, Component } from 'react';
import { layout } from 'antd';

import Banner from './Banner';
import DataCharts from './DataCharts';
import Commstar from './Commstar';
import '../style/commen.css'
import '../style/Commstar.css'

const { Content } = layout;
const BgElement = Element.BgElement;


export default class Home extends Component {
    render(){
        return (
            <Content style={{ background: '#fff', paddingTop:24,paddingBottom:24, margin: 0, minHeight: 280 }}>
                <Banner/>
                <div className="chart-main">
                    <h2 className="commTitle">社区关注点</h2>
                    <div className="chart">
                        <DataCharts/>
                    </div>
                </div>
                <div>
                    <h2 className="commTitle">社区红人</h2>
                    <Commstar/>
                </div>
            </Content>
        )
    }
}