
<script setup lang="ts">
import { shuffle } from 'lodash-es'
import { computed, h, inject, onMounted, onUnmounted, provide, reactive, ref, Fragment } from 'vue'
import { useMouse } from './hooks/mouse'
import BaseLayout from './slots/baseLayout.vue'
import List from './slots/list.vue'
import TodoList from './demo/TodoList.vue'
import CustomInput from './demo/CustomInput.vue'
import MyButton from './demo/button/MyButton.vue'
import ProvideInject from './demo/provide-inject/Child.vue'
import { i18nKey } from './constants/keys'
import Modal from './demo/Modal.vue'
import SimpleRouter from './demo/SimpleRouter/index.vue'
// import Foo from './foo.jsx'


const [x, y] = useMouse()
let dynamicSlotName = ref<string>('default')

const switchBtn = (e: MouseEvent) => {
    dynamicSlotName.value = dynamicSlotName.value ? '' : 'default'
}

const url = ref<string>('')

const obj = {
    foo: ref(1)
}
const { foo } = obj

const firstName = ref('Jon')
const lastName = ref('hi')
const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
// setTimeout(() => {
//     fullName.value = 'Job kb'
// }, 2000);

const isActive = ref<boolean>(true)
const error = ref(null)
const classObj = computed(() => ({
    'active': isActive.value && !error.value,
    'text-danger': error.value
}))
const fontSize = ref<number>(13)
const styleObj = computed(() => ({
    color: 'red',
    fontSize: `${fontSize.value}px`
}))
let timer: any = null
timer = setInterval(() => {
    if (fontSize.value === 16) {
        clearInterval(timer)
    } else {
        fontSize.value++
    }
}, 1000)

const show = ref(true)

const myObj = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})


function warn(message: string, event: MouseEvent) {
    alert(message)
}

const selected = ref()

// watch vs watchEffect
const url2 = ref('https://...')
const data = ref(null)

async function fetchData() {
    const res = await fetch(url2.value)
    data.value = await res.json()
}
// fetchData()
// watch(url2, fetchData)

// watchEffect 上面的可以通过下面简化成下面的
// watchEffect(async () => {
//     const res = await fetch(url2.value)
//     data.value = await res.json()
// })

function btnClick(e) {
    console.log(e);
}

const vFocus = {
    mounted: (el: HTMLElement) => el.focus()
}

const customInput = ref()

const message = ref()
provide('message', message)

const i18n = inject(i18nKey)

const inputRef = ref<HTMLInputElement | null>(null)
onMounted(() => {
    inputRef.value?.focus()
})
onUnmounted(() => {
    clearInterval(undefined)
    clearTimeout(undefined)
})

const getInitialItems = () => [1, 2, 3, 4]
const items = ref(getInitialItems())
let id = items.value.length + 1


function add() {
    const index = Math.floor(Math.random() * items.value.length)
    items.value.splice(index, 0, id++)
}
function del() {
    const index = Math.floor(Math.random() * items.value.length)
    items.value.splice(index, 1)
}
function shuffleFn() {
    items.value = shuffle(items.value)
}

const showModal = ref(false)

const count = ref(0)

function MyComponent(props, { slots, emit, attrs }) {
    const { count } = props
    return (
        h('div', null, 'ab')
    )
}

</script>
<template>
    <!-- <Foo /> -->
    <!-- 函数式组件 -->
    <div>
        <MyComponent :count="count"></MyComponent>
    </div>
    <div>
        <SimpleRouter></SimpleRouter>
    </div>
    <button @click="showModal = true"> open Modal</button>
    <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false"></Modal>
    </Teleport>
    <div class="wrap">
        <div>
            <button @click="add">随机添加</button>
            <button @click="del">删除</button>
            <button @click="shuffleFn">洗牌</button>
        </div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </TransitionGroup>
    </div>
    <div>
        <button @click="show = !show">switch</button>
        <Transition name="slide-fade">
            <p v-show="show">ab</p>
        </Transition>
    </div>
    <h1>{{ $translate('greetings.hello') }}</h1>
    <h1>{{ i18n.greetings.hello }}</h1>
    <p>
        <input v-model="message" v-focus>
        <ProvideInject />
    </p>
    <div>
        <MyButton @click="btnClick"></MyButton>
    </div>
    <CustomInput v-model="customInput" />
    <input ref="inputRef">
    <ul class="list">
        <!-- <li v-for="(value, key) of myObj">
            {{ key }}-{{ value }}
        </li> -->
        <template v-for="(value, key) of myObj" :key="key">
            <li>{{ key }}</li>
            <span>{{ value }}</span>
        </template>
    </ul>
    <p v-show="show">ab</p>
    <p>{{ obj.foo.value + 1 }}</p>
    <p>{{ foo + 1 }}</p>
    <P>{{ fullName }}</P>
    <div :class="classObj"></div>
    <div :style="styleObj">style </div>


    <button @click="switchBtn">切换</button>
    <p>
        鼠标移动的位置：{{ x }},{{ y }}
    </p>
    <BaseLayout>
        <template #header>
            <h1>Here might be a page title</h1>
        </template>
        <!-- 动态插槽名 -->
        <template #[dynamicSlotName]>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>
        <template #main="{ message }">
            <p>作用域插槽：{{ message }}</p>
        </template>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </BaseLayout>
    <List :api-url="url" :per-page="10">
        <template #item="{ body, username, likes }">
            <div>
                <p>{{ body }}</p>
                <p class="meta">by {{ username }} | {{ likes }} likes</p>
            </div>
        </template>
    </List>
    <TodoList />
    <!-- 事件处理 -->
    <button @click="warn('message info', $event)">Click Me</button>
    <button @click="(event) => warn('message info ()=>', event)">Click Me</button>
    <!-- select -->
    <div>Selectd: {{ selected }}</div>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
</template>
<style scoped lang="scss">
.wrap {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    overflow-y: scroll;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-leave-active {
    position: absolute;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.meta {
    font-size: 0.8em;
    color: #42b883;
}
</style>