import { defineComponent } from 'vue'

// named exports w/ variable declaration: ok
const Foo = defineComponent({
  name: 'foo',
  setup() {
    return () => <div class="jsx">from JSX</div>
  }
})
export default Foo