/*
 * @Author: duanruilong
 * @Date: 2022-11-24 16:18:03
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-11-24 16:18:04
 * @Description:
 */
import {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';

import './app.scss';

class App extends Component {
  componentDidMount() {
    SplashScreen && SplashScreen.hide();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
        {this.props.children}
      </>
    );
  }
}
export default App;
