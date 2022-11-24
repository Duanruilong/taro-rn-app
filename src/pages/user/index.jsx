import { useState, useEffect, useRef } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Image, ScrollView } from "@tarojs/components";
import user from "@/assets/use_img1.png";
import useBack from "@/assets/use_back.png";
import history from "@/assets/history.png";
import logout from "@/assets/logout.png";
import YTitleTask from "@/components/YTitleTask";
import { APP_VERSION } from "@/constants";
import { getStorageData } from "@/utils/utils";
import { loginOutHandler } from "@/utils/loginHandler";
import "./index.scss";

const User = () => {
  const { windowHeight } = Taro.getSystemInfoSync();

  const { current } = useRef({ userInfo: null });
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = async () => {
    const data = await getStorageData("userInfo");
    current.userInfo = data;
    setUserInfo(data);
  };

  useEffect(() => {}, []);

  useDidShow(() => {
    // setLocalData(data);
    getUserInfo();
    // 缓存搜索页面返回url
    Taro.setStorage({
      key: "search-from-url",
      data: "/pages/user/index"
    });
  });

  return (
    <View className="user">
      <View className="user-info">
        <Image className={"user-info-back"} src={useBack} mode="aspectFit" />
        <View
          className="user-info-center"
          onClick={() => {
            // Taro.navigateTo({ url: "/pagesUser/profile/index" });
          }}
        >
          <View className="user-info-center-top">
            <Image
              className={"user-info-center-top-image"}
              src={user}
              mode="aspectFit"
            />
            <View className="user-info-center-top-item">
              <View
                className="user-info-center-top-item-name"
                numberOfLines={1}
              >
                {userInfo?.admin_name || "user"}
              </View>
              <View
                className="user-info-center-top-item-info"
                numberOfLines={1}
              >
                职务: {userInfo?.position || "无"}
              </View>
              <View
                className="user-info-center-top-item-info"
                numberOfLines={1}
              >
                手机号: {userInfo?.phone || "无"}
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* use-list */}
      <ScrollView
        style={{ height: windowHeight - 245 }}
        className="user-list"
        scrollY
        // lowerThreshold={100}
        scrollWithAnimation
        refresherBackground={"#F3F5F8"}
      >
        <YTitleTask
          className="user-list-item"
          title={
            <View className="user-list-item-in">
              <Image
                className="user-list-item-in-img"
                src={history}
                mode="aspectFit"
              />
              历史工作记录
            </View>
          }
          onClick={() => {
            Taro.navigateTo({ url: "/pages/historical/index" });
          }}
        />
        <YTitleTask
          className="user-list-item"
          title={
            <View className="user-list-item-in">
              <Image
                className="user-list-item-in-img"
                src={logout}
                mode="aspectFit"
              />
              退出登录
            </View>
          }
          onClick={() => {
            loginOutHandler();
          }}
        />
      </ScrollView>
      <View className="user-ver">{APP_VERSION}</View>
    </View>
  );
};

export default User;
