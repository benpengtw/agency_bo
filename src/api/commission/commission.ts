import api from "@/api";

enum ApiList {
  commissionreport = "/agency/agency/commissionreport",
  childCommissionreport = "/agency/agency/childagencycommissionreport",
  childagencyextrabonuslist = "/agency/agency/childagencyextrabonuslist",
  childagencycommissionlist = "/agency/agency/childagencycommissionlist",
}

/**
 * @description: 佣金報表
 * @method: get
 */
export function getCommissionreport(params?) {
  return api.get(ApiList.commissionreport, params);
}

/**
 * @description: 二級代理福利總計
 * @method: get
 */
export function getChildCommissionreport(params?) {
  return api.get(ApiList.childCommissionreport, params);
}

/**
 * @description: 二級代理尊享福利列表
 * @method: get
 */
export function getChildagencyextrabonuslist(params?) {
  return api.get(ApiList.childagencyextrabonuslist, params);
}

/**
 * @description: 二級代理佣金列表
 * @method: get
 */
export function getChildagencycommissionlist(params?) {
  return api.get(ApiList.childagencycommissionlist, params);
}
