import { onMounted, onUnmounted } from 'vue'

export function useEventListener(
  target: any,
  type: string,
  callback: Function
) {
  onMounted(() => {
    target.addEventListener(type, callback)
  })
  onUnmounted(() => target.removeEventListener(type, callback))
}
