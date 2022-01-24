import api from "@/api";

enum ApiList {
  MonthFinance = "/agency/agency/finance",
  ProductsFinance = "/agency/agency/finance/products",
  ProductFinance = "/agency/agency/finance/product",
  FinanceBonus = "/agency/agency/finance/bonus",
  FinancePlatform = "/agency/agency/finance/platform",
  FinanceActivemember = "/agency/agency/finance/activemember",
}
import {
  // BACKENDAJAX
  AGENCYAJAX_AgencyFinanceIndexResponse,
  AGENCYAJAX_AgencyFinanceProductResponse,
  AGENCYAJAX_AgencyFinanceGetPlatformResponse,
  AGENCYAJAX_AgencyFinanceGetBonusResponse,
  AGENCYAJAX_AgencyFinanceGetActivememberResponse,
} from "../model";

/**
 * @description: 代理財物報表
 * @method: get
 */
export function getMonthFinance(params) {
  return api.get<AGENCYAJAX_AgencyFinanceIndexResponse>(ApiList.MonthFinance, {
    params,
  });
}
/**
 * @description: 代理產品分項報表
 * @method: get
 */
export function getProductsFinance() {
  return api.get(ApiList.ProductsFinance);
}
/**
 * @description: 單一產品分項報表
 * @method: get
 */
export function getProductFinance(params?) {
  return api.get<AGENCYAJAX_AgencyFinanceProductResponse>(
    ApiList.ProductFinance,
    { params }
  );
}
/**
 * @description: 財務報表平台費
 * @method: get
 */
export function getFinancePlatform() {
  return api.get<AGENCYAJAX_AgencyFinanceGetPlatformResponse>(
    ApiList.FinancePlatform
  );
}

/**
 * @description: 財務報表紅利
 * @method: get
 */
export function getFinanceBonus() {
  return api.get<AGENCYAJAX_AgencyFinanceGetBonusResponse>(
    ApiList.FinanceBonus
  );
}
/**
 * @description: 財務報表活躍用戶
 * @method: get
 */
export function getFinanceActivemember(params) {
  return api.get<AGENCYAJAX_AgencyFinanceGetActivememberResponse>(
    ApiList.FinanceActivemember,
    { params }
  );
}
