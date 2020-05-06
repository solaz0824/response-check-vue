import Vue from "vue"
//packcage 에서 가져온 vue
import ResponseCheck from "./ResponseCheck.vue";
//.vue 제거 가능. webpack.config.js에서 extenstions에 포함시켰기 때문.

new Vue(ResponseCheck).$mount("#root");