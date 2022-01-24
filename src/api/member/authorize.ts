import api from "@/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  // BACKENDAJAX
  AGENCYAJAX_CheckPasswordRequest,
  AGENCYAJAX_ResetPasswordRequest,
  AGENCYAJAX_AgencyLoginRequest,
  AGENCYAJAX_AgencyLoginResponse,
} from "../model";
const mock = new MockAdapter(axios);
/**
 * Api urls
 */
enum Urls {
  LOGIN = "/agency/agency/login",
  USER = "/agency/agency",
  CHECK_PASSWORD = "/agency/agency/check_password",
  RESET_PASSWORD = "/agency/agency/reset_password",
}

export const fakeLogin = (data: AGENCYAJAX_AgencyLoginRequest) => {
  mock.onGet("/users").reply(200, {
    data: [
      { id: 1, account: "account48", name: "John Smith", token: "asdadsasd" },
    ],
  });

  axios.get("/users").then((response) => {
    console.log(response.data);
  });
  // api.post<AGENCYAJAX_AgencyLoginResponse>(Urls.LOGIN, data);
  return {
    data: {
      data: {
        id: 1,
        account: "account48",
        name: "John Smith",
        token: "asdadsasd",
      },
    },
  };
};
/**
 * 登入
 * @param data Post data
 * @returns Axios request promise
 */
export const postLogin = (data: AGENCYAJAX_AgencyLoginRequest) => {
  api.post<AGENCYAJAX_AgencyLoginResponse>(Urls.LOGIN, data);
};
export const getUser = () => api.get(Urls.USER);

/**
 * @description: 代理確認密碼
 * @method: post
 */
export const checkPassword = (data: AGENCYAJAX_CheckPasswordRequest) =>
  api.post(Urls.CHECK_PASSWORD, data);

/**
 * @description: 代理修改密碼
 * @method: put
 */
export const reserPassword = (data: AGENCYAJAX_ResetPasswordRequest) =>
  api.put(Urls.RESET_PASSWORD, data);
