<template>
  <header>
    <span class="bg"></span>
    <div class="-w">
      <a class="logo" href="/">
        <svg>
          <use href="#logo-140x100_tl"></use>
        </svg>
        <svg>
          <use href="#logo-140x100_tr"></use>
        </svg>
        <svg>
          <use href="#logo-140x100_bl"></use>
        </svg>
        <svg>
          <use href="#logo-140x100_br"></use>
        </svg>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass';
import { useAccount } from '~/store/account';
import StringStorage from '~/src/string-storage';

const props = defineProps(
  {
    data: {
      type: Object,
      default: null,
    },
  }
)

onMounted(() => {
})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: var(--c-sblack);

    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% calc(100% - 2rem),
      15.97222222% calc(100% - 2rem),
      calc(15.97222222% - 2rem) 100%,
      0% 100%,
    );
  }

  .logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.49295775%;

    box-sizing: border-box;

    svg {
      width: 7rem;
      position: absolute;
      aspect-ratio: 140/100;

      animation: blinking 1.5s infinite step-end;

      scale: 1;
      transition: scale 0.3s var(--f-cubic);
    }
    svg:first-child {
      position: relative;
    }
    svg:nth-child(1) {
      transition-delay: 0.225s;
      
    }
    svg:nth-child(2) {
      animation-duration: 2.1s;
      transition-delay: 0.075s;
    }
    svg:nth-child(3) {
      animation-duration: 1.65s;
    }
    svg:nth-child(4) {
      animation-duration: 3s;
      transition-delay: 0.15s;
    }
  }
  .logo:hover {
    svg {
      scale: 1.5;
    }
    svg:nth-child(1) {
      transition-delay: 0.075s;
    }
    svg:nth-child(2) {
      
    }
    svg:nth-child(3) {
      transition-delay: 0.15s;
    }
    svg:nth-child(4) {
      transition-delay: 0.225s;
    }
  }
}



</style>
