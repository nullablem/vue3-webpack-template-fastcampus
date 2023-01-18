import { createApp } from 'vue'
import App from './App.vue'

// == import router from './routes'
import router from './routes/index.js'
import store from './store/index.js'
import loadImage from '~/plugins/loadImage'

// 이거 없으면 버튼 드롭다운 안됨
//import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
  .use(router)
  .use(store)
  .use(loadImage)
  .mount('#app')