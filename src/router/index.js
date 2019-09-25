import Vue from "vue";
import Router from "vue-router";
import SignStr from "@/components/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "SignStr",
      component: SignStr
    }
  ]
});
