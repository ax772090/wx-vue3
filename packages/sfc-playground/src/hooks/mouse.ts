/**
 * 请使用 Vue3 + TS 写个 useMouse
    const [x, y] = useMouse();
    实现x，y是动态响应的鼠标坐标，在页面上展示出来。
 */
import { ref } from 'vue'
import { useEventListener } from './event'
export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, 'mousemove', update)

  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))
  return [
    x,
    y
  ]
}
