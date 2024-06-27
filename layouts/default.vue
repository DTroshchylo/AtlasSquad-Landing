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


  StringCookies.getInstance().use('Shopify', {
    accept: () => {
      StringStorage.getInstance().local.set('shopify-cookies', "1")

    },
    deny: () => {
      StringStorage.getInstance().local.set('shopify-cookies', "0")

    },
    value: StringStorage.getInstance().local.has('shopify-cookies') ? (StringStorage.getInstance().local.get('shopify-cookies') == "1" ? true : false) : true,
    readOnly: true,
    description: 'Shopify cookies are essential for the functioning of our online store. These cookies manage various aspects of the shopping experience, such as keeping track of items in your cart, remembering your login status, and storing your preferences. Additionally, Shopify cookies help ensure the security and performance of our site, enabling features like secure checkout and fraud prevention. They are crucial for providing a seamless and secure shopping experience on our website.'
  });

  StringCookies.getInstance().use('Google Analytics', {
    accept: () => {
      StringStorage.getInstance().local.set('google-analytics-cookies', "1")

    },
    deny: () => {
      StringStorage.getInstance().local.set('google-analytics-cookies', "0")

    },
    value: StringStorage.getInstance().local.has('google-analytics-cookies') ? (StringStorage.getInstance().local.get('google-analytics-cookies') == "1" ? true : false) : true,
    description: 'Google Analytics cookies are used to collect information about how visitors interact with our website. These cookies track data such as the number of visitors, the pages they visit, and the sources that referred them to our site. The data gathered is aggregated and anonymized, helping us understand website usage patterns and improve user experience. These cookies do not identify individual users and all information is used for statistical analysis only.'
  });
  StringCookies.getInstance().on('acceptAll', () => {
    StringStorage.getInstance().local.set('google-analytics-cookies', "1")
    StringStorage.getInstance().local.set('shopify-cookies', "1")
    stringStorage.local.set('cookies-answer', '1')
  });
  StringCookies.getInstance().on('deny', () => {
    StringStorage.getInstance().local.set('google-analytics-cookies', "0")
    StringStorage.getInstance().local.set('shopify-cookies', "0")
    stringStorage.local.set('cookies-answer', '1')
  });
  if (stringStorage.local.has('cookies-answer')) {
  } else {
    StringCookies.getInstance().show('Cookie Consent', `We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://dev.atlas-squad.com/cookie-policy" target="_blank">Cookie Policy</a>. `);
  }
  StringCookies.getInstance().on('openSettings', () => {
    StringCookies.getInstance().showSettings({ title: 'Cookies settings', description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://dev.atlas-squad.com/cookie-policy" target="_blank">Cookie Policy</a>. ', email: `privacy@atlas-squad.com` });
  });
  StringCookies.getInstance().on('settingsChange', () => {

  });
  StringCookies.getInstance().on('saveSettings', (settings: { enabled: string[], disabled: string[] }) => {

    stringStorage.local.set('cookies-answer', '1')
  });
  StringCookies.getInstance().check();


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
