/*
 * @Author: duanruilong
 * @Date: 2022-07-22 17:25:19
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-10-31 10:01:56
 * @Description:
 */
// import { getStorageData } from "@/utils/utils";

// const useName = getStorageData("use-name");

export const APP_VERSION = "v1.0.5";
export const NEW_VERSION = "105"; //后端接口请求参数  例如：100--> V1.0.0

export const ENV = process.env.DEPLOY_ENV;

// export const NAME = useName?.data;

export const VERSION = process.env.VERSION;

export const LOGIN_CHANNEL = "login-channel"; // 登录频道

// export const USERS_KEY = `${NAME}-userid`;

export const LOGIN_PAGE = "/pages/login/index";

export const HOME_PAGE = "/pages/index/index";

export const SYSTEM = "REPRESENT";

// 性别
export const MAP_SEX = [
  {
    code: 1,
    value: "男"
  },
  {
    code: 2,
    value: "女"
  }
];

// 工作计划状态 1 待完成 2 已完成 3 已超时 4 已取消
export const WORK_PLAN_TYPE = {
  1: {
    value: 1,
    text: "待完成"
  },
  2: {
    value: 2,
    text: "已完成 "
  },
  3: {
    value: 3,
    text: "已超时"
  },
  4: {
    value: 4,
    text: "已取消"
  }
};

// 报损状态 1待审批 2已通过 3不通过
export const PLAN_TYPE = {
  1: {
    value: 1,
    text: "待审批"
  },
  2: {
    value: 2,
    text: "已通过 "
  },
  3: {
    value: 3,
    text: "不通过"
  },
  4: {
    value: 4,
    text: "留观"
  }
};
