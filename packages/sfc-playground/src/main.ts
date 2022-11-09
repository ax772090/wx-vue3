import { createApp } from 'vue'

import Test from './Test.vue'
// import App from './App.vue'
// import '@vue/repl/style.css'

// @ts-expect-error Custom window property
// window.VUE_DEVTOOLS_CONFIG = {
//   defaultSelectedAppId: 'repl'
// }

createApp(Test).mount('#app')
