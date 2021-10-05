import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import globalstore from '@/globalstore'

createApp(App).provide('store',globalstore).use(store).mount('#app')
