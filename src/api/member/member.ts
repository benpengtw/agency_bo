import api from "@/api";

import {
  // BACKENDAJAX
  AGENCYAJAX_GetMembersResponse,
  AGENCYAJAX_GetMemberFinanceResponse,
  AGENCYAJAX_GetMemberProductFinanceResponse,
} from "../model";
enum ApiList {
  MemberList = "/agency/agency/members",
  MemberProduct = "/agency/agency/member/product",
  Member = "/agency/agency/member",
}

/**
 * @description: 代理會員列表
 * @method: get
 */
export function getMemberList(params) {
  return api.get<AGENCYAJAX_GetMembersResponse>(ApiList.MemberList, { params });
}

/**
 * @description: 會員流水與存款記錄
 * @method: get
 */
export function getMember(params) {
  return api.get<AGENCYAJAX_GetMemberFinanceResponse>(ApiList.Member, {
    params,
  });
}
/**
 * @description: 代理會員單一廠商流水與輸贏
 * @method: get
 */
export function getMemberProduct(params) {
  return api.get<AGENCYAJAX_GetMemberProductFinanceResponse>(
    ApiList.MemberProduct,
    { params }
  );
}
