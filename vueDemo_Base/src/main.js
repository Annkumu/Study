// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js：创建Vue实例
import Vue from 'vue'
import App from './App' /* 先引入*/

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'  /* 使用组件标签*/
})
