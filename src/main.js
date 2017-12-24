// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Locales from '@/locale/locale';
import { Button, Input, Upload, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

Vue.use(Button)
Vue.use(Input)
Vue.use(Upload)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

const locales = Locales;
const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages: {
      'zh': locales['zh-CN'],
      'tw': locales['zh-TW'],
      'en': locales['en-US']
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  template: '<App/>',
  components: { App }
})
