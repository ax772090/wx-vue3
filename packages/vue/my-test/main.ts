// import {createApp, ref, reactive,onMounted,onBeforeMount} from '../dist/vue.esm-browser.js'
// import { createApp } from 'vue'

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')
import {createApp, ref, reactive,onMounted,onBeforeMount} from '../dist/vue.esm-browser.js'
const One = {
    template: `one`,
    setup(){
        onBeforeMount(()=>{

        })
        onMounted(()=>{
            console.log('One-mounted');
        })
    },
}
const App = {
    template:`
    <div>
        App
        <One/>
    </div>
    `,
    setup(){
        onMounted(()=>{
            console.log('App-mounted');
        })
    },
    components:{
        One
    }
}
createApp(App).mount('#app')
