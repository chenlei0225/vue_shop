/**
 * Created by Administrator on 2019/3/18 0018.
 */
import sendAjax from './ajax'
const base = 'api'

export const reqAddress = (longitude,latitude) => sendAjax(base + `/position/${latitude},${longitude}`)
export const reqShops = ({longitude,latitude}) => sendAjax(base + '/shops',{longitude,latitude})
export const reqCategorys = () => sendAjax(base+'/index_category')
export const reqCode = phone => sendAjax(base+'/sendcode',{phone})
export const reqLoginSms = ({phone,code}) => sendAjax(base+'/login_sms',{phone,code},'POST')
export const reqLoginPwd = ({name,pwd,captcha}) => sendAjax(base+'/login_pwd',{name,pwd,captcha},'POST')
export const reqLogout = () => sendAjax(base+'/logout')
export const reqUser = () => sendAjax(base+'/userinfo')
export const reqRatings = () => sendAjax('/ratings')
export const reqGoods = () => sendAjax('/goods')
export const reqInfo = () => sendAjax('/info')
