/* eslint-disable comma-dangle */
import Vue from 'vue';
import App from './App';
import Home from './components/Home.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 注册两个插件
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

// 路由
router.map({
  '/Home': {
    component: Home
  }
});

router.redirect({
  '*': '/Home'
});

router.start(App, '#app');
