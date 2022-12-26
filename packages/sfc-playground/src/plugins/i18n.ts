import { i18nKey } from '../constants/keys'
export default {
    install: (app, options:Object) => {
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((pre, cur) => {
                if (pre) return pre[cur]
            }, options)
        }
        // 可以使用provide
        app.provide(i18nKey, options)
    }
}