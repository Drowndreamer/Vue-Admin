export interface loginForm{
  username: string,
  password: string
}
export interface loginResponseData {
  code: number,
  data: {token: string}
  
}

export interface userData {
  userId: number,
  avatar: string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string
}

export interface userInfoResponseData {
  code: number,
  data: {checkUser: userData}
}