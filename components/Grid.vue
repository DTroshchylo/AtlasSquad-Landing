<template>
  <div class="guide-grid">
    <span v-for="item in 12"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

let showGrid = ref(true)


onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 76 && e.ctrlKey == true) {
      showGrid.value = !showGrid.value

      console.log(showGrid.value)
      const htmlElement = document.documentElement

      if(showGrid.value == true) {
        htmlElement.classList.add("-guidelines")
      }
      if(showGrid.value == false) {
        htmlElement.classList.remove("-guidelines")
      }
    }
  });
})
</script>

<style lang="scss" scoped>
.guide-grid {
  visibility: hidden;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  left: 0;
  right: 0;
  height: 100%;
  pointer-events: none;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: var(--s-gap);

  grid-auto-rows: minmax(100px, auto);
  padding: 0 0.6944444444%;
  box-sizing: border-box;

  opacity: .125;
}

span {
  grid-column: span 1;
  background: rgb(255, 0, 0);
}

.t-grid {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  left: 0.8rem;
  right: 0.8rem;
  // width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  opacity: 0.25;

  span {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    background: blue;
    padding: 0 0.2762%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: skyblue;
    }

    &::after {
      // content: '';
      display: block;
      height: 100%;
      width: 8.3333%;
      background: yellow;
      position: absolute;
      top: 0;
    }
  }
}

html.-guidelines {
  .guide-grid {
    visibility: visible;
  }
  .-w {
    box-shadow: inset 0 0 0 1px blue;
  }
}
</style>

