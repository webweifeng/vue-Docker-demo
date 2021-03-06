//引入基础请求服务  
import BaseService from '../base/baseService'

let uri = {
  debug: '../../../static/mock/banner.json',
  online: 'activity/getBanners'
}

const INFO = BaseService.debug ? uri.debug : uri.online

export default {
  //请求数据
  getBanners(callback, params) {
    BaseService.getData(INFO, params).then((response) => {
      callback(response.data || response);
    }).catch((error) => {
      console.log('数据请求失败啦');
      throw new Error(error);
    })
  }

}
