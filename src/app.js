/*
 * @Author: duanruilong
 * @Date: 2022-11-21 17:11:01
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-11-24 16:18:51
 * @Description:
 */
import {Component} from 'react';
import './app.scss';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}
export default App;
