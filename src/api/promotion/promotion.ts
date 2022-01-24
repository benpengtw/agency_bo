import api from "@/api";

import {
  BaseResponse,
  CreateLaunchedParams,
  CreateLaunchedResponse,
  GetLaunchedParams,
  GetLaunchedResponse,
  GetLaunchedListParams,
  GetLaunchedListResponse,
} from "./model/launchedModel";

enum ApiList {
  PromotionList = "/agency/agency/promotion",
}

/**
 * @description: 優惠：新增優惠上架API
 * @method: post
 */
export function getPromotionList(params?) {
  return api.get(ApiList.PromotionList, params);
}
