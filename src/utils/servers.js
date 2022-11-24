/*
 * @Author: duanruilong
 * @Date: 2022-07-22 17:25:19
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-10-24 09:56:35
 * @Description:
 */
import { ENV } from "../constants";

const hostMap = {
  dev: "http://base.zhsq.work:8076",
  qa: "http://base.zhsq.work:8076",
  prod: "http://base.zhsq.work:8076"
};

const servers = {
  file: `${hostMap[ENV]}/base/file`,
  admin: `${hostMap[ENV]}/base/api/admin`,
  plan: `${hostMap[ENV]}/base/api/plan`,
  seedbed: `${hostMap[ENV]}/base/api/seedbed`,
  notice: `${hostMap[ENV]}/base/api/notice`
};

export default servers;
