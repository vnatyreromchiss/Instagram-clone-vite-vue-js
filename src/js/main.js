import '../less/style.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '../App.vue'
import router from '../router/router'

import '../js/script';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
