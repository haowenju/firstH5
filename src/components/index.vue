<template>
  <div class="get-sigin">
    <p>签名串页面</p>

    <div class="get-sigin_content">
      <m-input placeholder="渠道号" :value.sync="channelNo"></m-input>
      <m-input placeholder="accessKey" :value.sync="accessKey"></m-input>
      <m-input placeholder="姓名" :value.sync="aac003"></m-input>
      <m-input placeholder="身份证" :value.sync="aac002"></m-input>
    </div>
    <a href="https://www.baidu.com">百度</a>

    <div @click="handleBtn">获取签名串</div>
  </div>
</template> 

<script>
import * as API from "@/http/api";
import MInput from "@/components/m-input";

export default {
  name: "getSign",
  components: { MInput },
  data() {
    return {
      channelNo: "2000000000",
      accessKey: "3e3cbf23be4c4c7baf01436f370099f2",
      aac003: "",
      aac002: ""
    };
  },

  created() {
    alert(document.cookie);
  },

  methods: {
    async handleBtn() {
      // console.log(this.a);
      // // window.webkit.messageHandlers.esscJSCallNativeDevicID.postMessage("123");
      // let param = {
      //   accessKey: this.accessKey,
      //   channelNo: this.channelNo,
      //   aac002: this.aac002,
      //   aac003: this.aac003
      // };
      // // 全局注册可以添加一个 this
      // let res = await this.ajax({ url: API.GET_SIGN_KEY, data: param });
      // console.log(res, "请求结束");
    }
  }
};
</script>
