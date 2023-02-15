<!--
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-07-12 11:31:50
 * @LastEditors: went
 * @LastEditTime: 2023-02-15 11:15:46
-->
<template>
  <div class="container">
    state: {{ counterStore.count }}
    <div>解构： {{ count }}</div>
    <div>
      getters:{{ counterStore.doubleCount }}--{{
        counterStore.doubleCountAddOne
      }}
      <p>getters传参：{{ counterStore.getParamsId("thisisid") }}</p>
      <p>getters使用其他store：{{ counterStore.getOtherStore }}</p>
    </div>
    <div>
      <van-button type="default" @click="changeCount">修改count</van-button>
      <van-button type="default" @click="resetCount">重置count</van-button>
    </div>
    <div>name:{{ name }}</div>
    <div>age:{{ age }}</div>
    <van-button type="default" @click="patchStore">批量修改</van-button>

    <div>
      使用action：
      <van-button type="default" @click="counterStore.increament(2)"
        >使用action</van-button
      >
      <van-button type="default" @click="asyncAction"
        >使用action异步</van-button
      >
      <p>action异步获取的数据：{{ counterStore.banners }}</p>
      <y-button type="primary"> Basic </y-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from "vue";
import { storeToRefs } from "pinia";
import useCounter from "@/stores/counter";
import useUser from "@/stores/user";
const counterStore = useCounter();
const userStore = useUser();
const { count } = toRefs(counterStore);
const { name, age } = storeToRefs(userStore);
//修改store
function changeCount() {
  counterStore.count++;
}
//重置store
function resetCount() {
  counterStore.$reset();
}
//批量修改
function patchStore() {
  userStore.$patch({
    name: "lx",
    age: 20,
  });
}

function asyncAction() {
  counterStore.fetchCounterData().then((res) => {
    console.log(res);
  });
}
</script>
<style lang="less">
.container {
  margin: 10%;
}

.add {
  color: @font-color-gray;
}
</style>
