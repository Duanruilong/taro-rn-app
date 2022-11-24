/*
 * @Author: duanruilong
 * @Date: 2022-08-03 11:27:44
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-11-24 16:23:58
 * @Description:工作计划
 */
import {useState, useRef} from 'react';
import Taro, {useDidShow} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {toast} from '@/utils/tools';
import YNoData from '@/components/YNoData';
import YListView from '@/components/YListView';
import YTitle from '@/components/YTitle';
import YButton from '@/components/YButton';
import {getStorageData, isEmpty} from '@/utils/utils';
import {loginOutHandler} from '@/utils/loginHandler';
import UpgradeModal from './components/UpgradeModal';
import {getList, getChange} from './service';
import './index.scss';

const List = () => {
  const listViewRef = useRef(null);
  const {current} = useRef({userInfo: null});

  const getUserInfo = async () => {
    getStorageData('userInfo').then(values => {
      if (isEmpty(values)) {
        loginOutHandler();
      } else {
        current.userInfo = values;
        request(values);
      }
    });
  };

  const request = param => {
    listViewRef.current.load({admin_id: param?.admin_id});
  };

  useDidShow(() => {
    getUserInfo();
  });

  const onRefresh = async () => {
    // console.log("onRefresh :>> ", "onRefresh");
  };

  const onChangePlan = params => {
    getChange({
      admin_id: current.userInfo?.admin_id,
      ...params,
    }).then(() => {
      toast('操作成功！');
      request(current.userInfo);
    });
  };

  const onAddNew = type => {
    Taro.navigateTo({
      url: `/pages/plan/index?type=${type}`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: () => {
          request(current.userInfo);
        },
      },
    });
  };

  const renderList = data => {
    if (data && data.length === 0) {
      return <YNoData desc={'暂无数据'} />;
    }
    if (data && data.length > 0) {
      return data.map(item => {
        return (
          <View key={item?.work_plan_id} className="index-l-i">
            <View className="index-l-i-t">{item?.work_plan_time}</View>
            <View className="index-l-i-n">{item?.content}</View>
            <View className="index-l-i-b">
              {item?.state === 1 && (
                <View className="index-l-i-b-i">
                  <YButton
                    yType="default"
                    onClick={() => {
                      onChangePlan({
                        type: 1,
                        work_plan_id: item?.work_plan_id,
                      });
                    }}>
                    <View className="index-l-i-b-i-t">已完成</View>
                  </YButton>
                </View>
              )}
              {item?.state === 1 && (
                <View className="index-l-i-b-i">
                  <YButton
                    yType="grey"
                    onClick={() => {
                      onChangePlan({
                        type: 2,
                        work_plan_id: item?.work_plan_id,
                      });
                    }}>
                    <View className="index-l-i-b-i-o">取消任务</View>
                  </YButton>
                </View>
              )}
              {item?.state === 1 && (
                <View className="index-l-i-b-i">
                  <YButton
                    yType="grey"
                    onClick={async () => {
                      await Taro.setStorage({
                        key: 'PLAN-DATA',
                        data: item,
                      });
                      onAddNew('edit');
                    }}>
                    <View className="index-l-i-b-i-o">编辑</View>
                  </YButton>
                </View>
              )}
            </View>
          </View>
        );
      });
    }
    return <YNoData desc={'加载中...'} />;
  };

  return (
    <View className="index">
      <YTitle>
        <View className="index-title">
          <View className="index-title-c">秀海生产管理系统</View>
          <View
            className="index-title-add"
            onClick={() => {
              onAddNew();
            }}>
            +
          </View>
        </View>
      </YTitle>
      {/* use-list */}
      <YListView
        classStyle={'index-l'}
        boxHeight={140}
        renderList={renderList}
        request={getList}
        ref={listViewRef}
        onRefresh={onRefresh}
        manual
      />
      {/* UpgradeModal */}
      <UpgradeModal />
    </View>
  );
};

export default List;
