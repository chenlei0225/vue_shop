/**
 * Created by Administrator on 2019/3/18 0018.
 */
import sendAjax from './ajax'
const base = 'api'

export const reqAddress = (longitude,latitude) => sendAjax(base + `/position/${latitude},${longitude}`)
