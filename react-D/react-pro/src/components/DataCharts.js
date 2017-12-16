import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class DataCharts extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '社区属性统计' },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['Canvas','Html5','Javascript','Java','IOS','Android','Vue.js','React.js','其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Canvas',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Javascript',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Java',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'IOS',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Android',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'Vue.js',
                    type:'bar',
                    barWidth : 5,
                    stack: '前端',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'React.js',
                    type:'bar',
                    stack: '前端',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'Html5',
                    type:'bar',
                    stack: '前端',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '前端',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 1200, height: 500 }}></div>
        );
    }
}

export default DataCharts;