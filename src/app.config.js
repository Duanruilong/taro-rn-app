/*
 * @Author: duanruilong
 * @Date: 2022-11-21 17:11:01
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-11-24 16:41:45
 * @Description:
 */
// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: ['pages/index/index', 'pages/list/index', 'pages/user/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#8c8c8c',
    // backgroundColor: "#edecee",
    selectedColor: '#518bff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/index.png',
        selectedIconPath: 'assets/fff.gif',
      },
      {
        pagePath: 'pages/list/index',
        text: '列表',
        iconPath: 'assets/list.png',
        selectedIconPath: 'assets/list_select.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/user.png',
        selectedIconPath: 'assets/user_select.png',
      },
    ],
  },
});
