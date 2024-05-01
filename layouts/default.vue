<template>
  <SvgList />
  
  <NuxtPage />

  <Transition name="-t-splash">
    <span class="splash" v-if="splash"></span>
  </Transition>
  
  <!-- <span class="splash"></span> -->


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
watch(
  () => route.path,
  () => {
    global.emit("page-change")
  },
);


const cartActive = ref(false)

let globalOverlay = ref(false)

//scroll top
let scrollTop = ref(false)
global.on("scroll-to-top-on", () => {
  scrollTop.value = true
})
global.on("scroll-to-top-off", () => {
  scrollTop.value = false
})

//iframes
let root = ref()
let resizeIFrameToFitContent = () => {
  if (root.value != null) {
    for (var t = root.value.querySelectorAll("iframe"), e = 0; e < t.length; e++) {
      var s = t[e].parentElement.offsetWidth,
        a = t[e].getAttribute("width"),
        i = t[e].getAttribute("height"),
        o = i / a;
      t[e].setAttribute("width", s),
        t[e].setAttribute("height", s * o)
    }
  }
}


// SEARCH RESULTS
let searchActive = ref(false)
const storeAccount = useAccount()


onBeforeMount(() => { })

onMounted(() => {

  const  scroll =  StringScroll.getInstance()
  let stringScroll = StringSplit.getInstance()


  scroll.setDesktopMode("default")
  scroll.setMobileMode("default")
  let stringForm = StringValidation.getInstance()
  let stringStorage = StringStorage.getInstance()

  // stringStorage.local.set('token', '123')


  if (stringStorage.local.has('token')) {
    storeAccount.setToken(stringStorage.local.get('token'))
  } else {
    storeAccount.setToken('')
  }
  
  //VH
  let vh = document.documentElement.clientHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  if (window.innerWidth > 1024) {
    window.addEventListener("resize", () => {
      let vh = document.documentElement.clientHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }


  // setTimeout(() => {
  //   const htmlElement = document.documentElement
  //   htmlElement.classList.add("-go");
  // }, 150)
  setTimeout(() => {
    splash.value = false
    scroll.setDesktopMode("default")
    scroll.setMobileMode("default")
    const htmlElement = document.documentElement
    // htmlElement.classList.remove("-go");
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

  global.on('global-overlay-on', () => {
    globalOverlay.value = true
  })
  global.on('global-overlay-off', () => {
    globalOverlay.value = false
  })


  queryCheck()
  window.addEventListener("resize", queryCheck)

  resizeIFrameToFitContent()
  window.addEventListener("resize", resizeIFrameToFitContent)
})

onUnmounted(() => { })
onBeforeUnmount(() => {
  window.removeEventListener("resize", queryCheck)
  window.removeEventListener("resize", resizeIFrameToFitContent)
})

</script>

<style lang="scss">
@import "assets/styles.scss";

.content {
  padding-bottom: 200vh;
  --string-progress: 0;
  
  .-w {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // padding-top: 5rem;
    --string-progress-content: var(--string-progress);
  
    .main-nav {
      // margin-top: 9rem;
      position: sticky;
      top: 9rem;
      width: 14.08450704%;
    }
    .page {
      width: 83.09859155%;
    }
  }
}

.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--c-black);

  // clip-path: polygon(
  //   25% 50%, 0% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%,
  //   25% 50%, 75% 50%, 75% 50%, 25% 50%, 0% 50%, 25% 50%
  // );

  // clip-path: polygon(
  //   0% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%,
  //   40% 50%,
  //   30% 50%, 50% 50%, 70% 50%, 50% 50%, 40% 50%
  // );

  clip-path: polygon(
    0% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%,
    0% 50%, 40% 50%, 30% 50%, 50% 50%,
    70% 50%, 50% 50%, 40% 50%
  );
  
}
.-t-splash-leave-active {
  transition: clip-path 1.2s var(--f-swoosh);
}
.-t-splash-leave-to {
  clip-path: polygon(
    0% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%,
    0% 50%, 0% 50%, 0% 100%, 100% 100%,
    100% 0%, 0% 0%, 0% 50%
  );
}



@keyframes blinking {
  0%  {
    opacity: 1;
  }
  20%  {
    opacity: 0.9;
  }
  30%  {
    opacity: 0.95;
  }
  35%  {
    opacity: 1;
  }
  // 45%  {
  //   opacity: 0.95;
  // }
  60%  {
    opacity: 1;
  }
  75%  {
    opacity: 0.95;
  }
  80%  {
    opacity: 0.8;
  }
  90%  {
    opacity: 0.9;
  }
  92%  {
    opacity: 0.75;
  }
  95%  {
    opacity: 1;
  }
  100%  {
    opacity: 1;
  }
}

@keyframes blinkingAlt {
  0%  {
    opacity: 1;
  }
  50%  {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
