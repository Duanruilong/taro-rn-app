import http from "@/utils/http";

const plan = new http("plan");

// 计划列表
export function getList(params, options) {
  return plan.get("/list", params, {
    loading: false,
    // ignoreErrorTips: true,
    ...options
  });
}
// 计划编辑
export function getChange(params, options) {
  return plan.get("/change", params, {
    loading: false,
    // ignoreErrorTips: true,
    ...options
  });
}
