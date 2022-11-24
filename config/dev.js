/*
 * @Author: duanruilong
 * @Date: 2022-11-21 17:11:01
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-11-24 16:27:48
 * @Description:
 */
module.exports = {
  env: {
    NODE_ENV: '"development"',
    DEPLOY_ENV: '"dev"',
  },
  rn: {
    appName: 'taroDemo',
    output: {
      ios: './ios/main.jsbundle',
      iosAssetsDest: './ios',
      android: './android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: './android/app/src/main/res',
      iosSourcemapOutput: './ios/main.map',
      androidSourcemapOutput: './android/app/src/main/assets/index.android.map',
    },
  },
  defineConstants: {},
  isWatch: true,
  mini: {},
  h5: {},
};
