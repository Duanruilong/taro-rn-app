/*
 * @Author: duanruilong
 * @Date: 2022-10-09 10:19:09
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-10-09 10:30:38
 * @Description:
 */
import http from "@/utils/http";

const admin = new http("admin");

// 检测新版本
export function getNewVersion(params, options) {
  return admin.get("/new_version", params, {
    loading: false,
    ...options
  });
}
// 计划编辑
export function getChange(params, options) {
  return admin.get("/change", params, {
    loading: false,
    // ignoreErrorTips: true,
    ...options
  });
}
