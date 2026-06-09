import request from '@/utils/request'
import type {loginForm, loginResponseData, userInfoResponseData} from './type.ts'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}

export const reqLogin = (data:loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL) 