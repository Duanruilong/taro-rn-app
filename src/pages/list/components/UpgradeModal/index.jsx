/*
 * @Author: duanruilong
 * @Date: 2022-08-17 11:24:03
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-10-10 14:29:38
 * @Description: 升级弹窗
 */

import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import TMask from "@/components/tinker/TMask";
import closeImg from "@/assets/close.png";
import upload from "@/assets/upload.png";
import tipsImg from "@/assets/tips.png";
import YButton from "@/components/YButton";
import { APP_VERSION, NEW_VERSION } from "@/constants";
import { getNewVersion } from "./service";
import "./index.scss";

const UpgradeModal = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  useDidShow(() => {
    getNewVersion({
      version: NEW_VERSION
    })
      .then(res => {
        if (res?.has_new === 1) {
          setShow(true);
          setData(res);
        }
      })
      .catch(() => {});
  });

  useEffect(() => {}, []);

  return (
    <TMask visible={show}>
      <View className="upgrade">
        <Image
          className="upgrade-clo"
          src={closeImg}
          onClick={() => {
            setShow(false);
          }}
        />
        <Image className="upgrade-img" src={upload} />
        <Text className="upgrade-ver">{APP_VERSION}</Text>
        <View className="upgrade-cent">
          <View className="upgrade-cent-li">
            <View className="upgrade-cent-li-n"></View>
            <Text className="upgrade-cent-li-t">页面优化，更快捷更方便</Text>
          </View>
          <View className="upgrade-cent-li">
            <View className="upgrade-cent-li-n"></View>
            <Text className="upgrade-cent-li-t">修复了旧版本已存BUG</Text>
          </View>
          <View className="upgrade-cent-li">
            <View className="upgrade-cent-li-n"></View>
            <Text className="upgrade-cent-li-t">优化了一部分功能</Text>
          </View>
          <View className="upgrade-cent-but">
            <YButton
              yType="default"
              onClick={() => {
                setShow(false);
                Taro.setClipboardData({
                  data: data?.url || "https://www.pgyer.com/n6OC"
                });
              }}
            >
              <View className="upgrade-cent-but-t">立即更新版本</View>
            </YButton>
          </View>
          <View className="upgrade-cent-tip">
            <Image className="upgrade-cent-tip-img" src={tipsImg} />
            <Text className="upgrade-cent-tip-t">
              点击按钮复制更新版地址，打开浏览器下载安装。
            </Text>
          </View>
        </View>
      </View>
    </TMask>
  );
};
export default UpgradeModal;
