/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-01-10 16:15:58
 * @LastEditors: went
 * @LastEditTime: 2023-01-10 17:01:33
 */
import { defineStore } from "pinia";
const useUser = defineStore("user", {
  state: () => ({
    name: "shier",
    age: 18,
  }),
});
export default useUser;
