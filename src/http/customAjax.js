/**
 * @Description: 封装 ajax 请求
 * @Author:      TigerChain
 */
import Vue from "vue";
import axios from "axios";

const _axios = axios.create({
  baseURL: "https://test-ssc.mohrss.gov.cn",
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Cache-Control": "no-cache"
  }
});
function ajax(options) {
  let opt = {
    url: options.url,
    method: options.methods || "POST",
    data: options.data || {}
  };
  console.log(opt);

  return new Promise((resolve, reject) => {
    _axios(opt)
      .then(res => {
        console.log("成功");
        resolve(res);
      })
      .catch(err => {
        console.log("失败");
        reject(err);
      });
  });
}
// Vue.prototype.ajax = ajax
export default {
  install(Vue, options) {
    // 在 vue 中全局注册
    Vue.prototype.ajax = ajax;
  }
};

