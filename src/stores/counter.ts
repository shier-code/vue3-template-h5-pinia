/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-01-10 16:15:58
 * @LastEditors: went
 * @LastEditTime: 2023-01-11 13:40:12
 */
import { defineStore } from "pinia";
import useUser from "./user";
const useCounter = defineStore("counter", {
  state: () => ({
    count: 0,
    banners: [],
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    //引入另外一个getter
    doubleCountAddOne() {
      //this是store实例
      return this.doubleCount + "222";
    },
    //getters传参
    getParamsId() {
      return function (id: string) {
        return id;
      };
    },
    //获取其他store
    getOtherStore(state) {
      const userStore = useUser();
      return `name:${userStore.name}-count:${state.count}`;
    },
  },
  actions: {
    increament(pms: number) {
      this.count += pms;
    },
    async fetchCounterData() {
      console.log("this===", this);
      const res = await fetch("http://123.207.32.32:8000/home/multidata");
      const data = await res.json();
      this.banners = data.data.banner.list;
      //异步函数中默认等同于 return Promise.resolve(undefine)/return undefine
      return this.banners;
    },
  },
});
export default useCounter;
