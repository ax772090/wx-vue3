<script>
import { h, ref } from "./packages/vue/dist/vue.esm-browser.js";

export default {
    name: 'App',
    setup() {
        const count = ref(0);

        return {
            count
        };
    },
    render() {
        return h('div', { pId: '"helloWorld"' }, [
            h('p', {}, 'hello world'),
            h('p', {}, `count的值是： ${this.count}`),
        ])
    }
}
</script>