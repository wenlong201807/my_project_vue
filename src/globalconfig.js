import Vue from 'vue'

import axios from 'axios'

// 完整引入 Element
// import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.prototype.$http = axios.create({
  // 全局配置根路径
  baseURL: 'http://192.168.0.124:3799/'
})

Vue.use(ElementUI, { locale })
