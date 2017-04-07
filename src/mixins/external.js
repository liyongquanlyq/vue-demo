/* eslint-disable */
import store from '../store'
export function handleFirstSource (str) {
  alert(str)
  store.commit('user_helloTest', str)
}
