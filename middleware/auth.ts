import StringStorage from "~/src/string-storage"
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  let stringStorage = StringStorage.getInstance()
  if (stringStorage.local.has('token') && stringStorage.local.get('token') != '') {
  } else {
    return navigateTo('/login')
  }
})