import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';

const Element = BannerAnim.Element;

let dataArray = [
  {
    pic: 'http://n1.itc.cn/img8/wb/recom/2016/04/07/145999548520455936.JPEG',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#ffa39e',
    background: '#ffccc7',
    content: '尤雨溪毕业于上海复旦附中，在美国完成大学学业，本科毕业于Colgate University，后在Parsons设计学院获得Design & Technology艺术硕士学位，现任职于纽约Google Creative Lab。尤雨溪是Vue.js框架的作者，HTML5版Clear的打造人。他认为，未来App的趋势是轻量化和细化，能解决问题的应用就是好应用。而在移动互联网时代大的背景下，个人开发者的机遇在门槛低，成本低，跨设备和多平台四个方面。',
    title: '尤雨溪',
  },
  {
    pic: 'http://img0.imgtn.bdimg.com/it/u=1994767750,708466530&fm=214&gp=0.jpg',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#fffb8f',
    background: '#ffffb8',
    content:'有关程序设计的书的作者，在京东商城、亚马孙、当当网都销售特别乐观，写了很多博客，共很多人参考，汤姆大叔 - 博客园 应该很多搞前端的人都看过汤姆大叔的书,他的博客园里面东西很多很多,值得常去看看。 JavaScript 秘密花园 超级推荐这个,JavaScript秘密花园是一个...',
    title: '汤姆大叔'
  },
  {
    pic: 'http://www.china-pub.com/main/sale/renwu/images/12601.gif',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#87e8de',
    background: '#b5f5ec',
    content:'阮一峰，70后，英文名Frank。他原是上海财经大学世界经济博士研究生。主要研究宏观金融、货币政策与美国经济。于2008年6月获得博士学位。目前在上海一所当地大学（上海金融学院 国际经贸学院）任教。他本人也是一名IT技术人员，主要关注网站制作，并且对自由软件有着坚定不移的信念。除了写博客以外，他还有三个网站：微趣、Italo Calvino in China和读书公园。',
    title:'阮一峰'
  },
];
dataArray = dataArray.map(item => ({ ...item }));

class Commstar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };

  render() {
    const imgChildren = dataArray.map((item, i) => (
      <Element key={i} style={{ background: item.color }} leaveChildHide>
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${this.props.className}-map map${i}`} key="map">
            <img src={item.map} width="100%" />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <img src={item.pic} width="100%" />
          </div>
        </QueueAnim>
      </Element>));
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      return (<Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <p key="p">{content}</p>
        </QueueAnim>
      </Element>);
    });
    return (<div
      className={`${this.props.className}-wrapper`}
      style={{ background: dataArray[this.state.showInt].background }}
    >
      <div className={this.props.className}>
        <BannerAnim
          prefixCls={`${this.props.className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          ref={(c) => { this.bannerImg = c; }}
          onChange={this.onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${this.props.className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          ref={(c) => { this.bannerText = c; }}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
          {this.state.showInt < dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
        </TweenOneGroup>
      </div>
    </div>);
  }
}

export default Commstar;