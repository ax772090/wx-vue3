import { isRef, ref, unref, watchEffect } from 'vue'

export function useFetch(url: any) {
  // 加载成功数据
  const data = ref(null)
  // 加载失败
  const error = ref(null)

  function doFetch() {
    // 请求之前重设状态
    data.value = null
    error.value = null

    // unref：脱ref
    fetch(unref(url))
      .then(res => res.json())
      .then(res => (data.value = res))
      .catch(error => (error.value = error))
  }

  if (isRef(url)) {
    // 如果是ref，通过watch Effect进行监听
    watchEffect(doFetch)
  } else {
    doFetch()
  }

  return { data, error }
}
