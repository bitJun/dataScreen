import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { createPinia } from 'pinia'

const app = createApp(App)

// 使用antd
app.use(createPinia()).use(router).use(Antd).mount('#app');