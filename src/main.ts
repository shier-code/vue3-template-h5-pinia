/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2023-02-15 11:30:57
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icon";
import { registerApp } from "./register";
import { setupStore } from "./store";
import uiDesign from "@jf/ui-design";
// import { Button } from "@jf/ui-design";
//全局初始化样式
import "normalize.css";
import "@/assets/css/base.less";
import pinia from "./stores";
const app = createApp(App);
console.log("uiDesign=====", uiDesign);
setupStore();
app.use(store).use(pinia).use(router).use(registerApp).mount("#app");
