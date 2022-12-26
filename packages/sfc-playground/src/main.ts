import { createApp } from 'vue'

import Test from './Test.vue'
import i18nPlugin from './plugins/i18n'
// import App from './App.vue'
// import '@vue/repl/style.css'

// @ts-expect-error Custom window property
// window.VUE_DEVTOOLS_CONFIG = {
//   defaultSelectedAppId: 'repl'
// }
const app = createApp(Test)
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})

app.mount('#app')
