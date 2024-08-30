
// Styles
import './styles/styles.css';

import { createApp } from 'vue'
import router from './router'

// Components
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')