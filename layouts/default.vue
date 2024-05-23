<template>
  <SvgList />
  <div class="page-wrap">
    <TheHeader />
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
import StringCookies from '~/src/string-cookies';
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
  const scroll = StringScroll.getInstance()
  let stringScroll = StringSplit.getInstance()
  scroll.setDesktopMode("default")
  scroll.setMobileMode("default")
  let stringForm = StringValidation.getInstance()
  let stringStorage = StringStorage.getInstance()
  let cookieManager = StringCookies.getInstance()

  cookieManager.use('Strictly necessary cookies', {
    accept: () => {
      console.log('Analytics cookies accepted');
    },
    deny: () => {
      console.log('Analytics cookies denied');
    },
    description: 'These cookies are used to collect information about how you interact with our website.'
  });

  cookieManager.use('Marketing', {
    accept: () => {
      console.log('Marketing cookies accepted');
    },
    deny: () => {
      console.log('Marketing cookies denied');
    },
    description: 'These cookies are used to display relevant advertising to you.'
  });
  cookieManager.use('Develop', {
    accept: () => {
      console.log('Develop cookies accepted');
    },
    deny: () => {
      console.log('Develop cookies denied');
    },
    description: 'These cookies are used to display relevant advertising to you.'
  });
  cookieManager.use('Testing', {
    accept: () => {
      console.log('Testing cookies accepted');
    },
    deny: () => {
      console.log('Testing cookies denied');
    },
    description: 'These cookies are used to display relevant advertising to you.'
  });

  cookieManager.show('Cookie Consent', `Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. `);

  cookieManager.on('accept', () => {
    console.log('User accepted cookies');
  });
  cookieManager.on('openSettings', () => {
    cookieManager.showSettings({ title: 'Title', description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full ', email: `penev.vladislav@gmail.com` });
  });

  cookieManager.on('deny', () => {
    console.log('User denied cookies');
  });

  cookieManager.on('settingsChange', () => {
    console.log('User changed cookie settings');
  });

  cookieManager.on('saveSettings', (settings: { enabled: string[], disabled: string[] }) => {
    console.log('User saved settings', settings);
  });

  //cookieManager.check();


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
