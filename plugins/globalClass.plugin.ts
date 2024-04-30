import GlobalClass from '@/src/globalClass'

export default defineNuxtPlugin((nuxtApp) => {
    const globalClassInstance = new GlobalClass()
    nuxtApp.provide('globalClass', globalClassInstance)
})
