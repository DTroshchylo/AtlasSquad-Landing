<template>
  <SvgList />
  <div class="page-wrap">
    <TheHeaderAlt />
    <NuxtPage />
    <TheFooter />
  </div>
  <Transition name="-t-splash">
    <span class="splash" v-if="splash"></span>
  </Transition>
  <Grid />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import StringScroll from '~/src/string-scroll';
import { useAccount } from '~/store/account';
import StringValidation from '@/src/string-validation';
import StringStorage from '@/src/string-storage';
import StringSplit from '~/src/string-split';
const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass
// query check
let mobile = ref(false)
let desktop = ref(false)
let queryCheck = () => {
  if (window.innerWidth >= 1024) {
    mobile.value = false
    desktop.value = true
  } else {
    mobile.value = true
    desktop.value = false
  }
}
// splash
const splash = ref(true)
const pageTransition = ref(false)
const route = useRoute();
const path = computed(() => route.path)
console.log(route);
watch(
  () => route.path,
  () => {
    global.emit("page-change")
  },
);
const storeAccount = useAccount()
onMounted(() => {
  const  scroll =  StringScroll.getInstance()
  let stringScroll = StringSplit.getInstance()
  scroll.setDesktopMode("default")
  scroll.setMobileMode("default")
  let stringForm = StringValidation.getInstance()
  let stringStorage = StringStorage.getInstance()
  if (stringStorage.local.has('token')) {
    storeAccount.setToken(stringStorage.local.get('token'))
  } else {
    storeAccount.setToken('')
  }
  setTimeout(() => {
    splash.value = false
    scroll.setDesktopMode("default")
    scroll.setMobileMode("default")
    const htmlElement = document.documentElement
    htmlElement.classList.add("-loaded");
  }, 900)
  global.on("page-change", () => {
    const htmlElement = document.documentElement
    setTimeout(() => {
      if (htmlElement.classList.contains("-ready")) {
        htmlElement.classList.remove("-ready")
      }
      pageTransition.value = true
      setTimeout(() => {
        if (!htmlElement.classList.contains("-ready")) {
          htmlElement.classList.add("-ready")
        }
        pageTransition.value = false
      }, 1200)
    }, 0)
  })
  global.emit("page-change")
  queryCheck()
  window.addEventListener("resize", queryCheck)
  //VH
  let vh = document.documentElement.clientHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
})

onUnmounted(() => { })
onBeforeUnmount(() => {
  window.removeEventListener("resize", queryCheck)
})
</script>
<style lang="scss">
@import "assets/styles.scss";
@import "assets/layout.scss";
</style>
