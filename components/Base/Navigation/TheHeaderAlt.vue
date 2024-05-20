<template>
  <header class="header">
    <span class="bg"></span>
    <NuxtLink class="logo" to="/">
      <svg>
        <use href="#logo-140x100"></use>
      </svg>
      <svg>
        <use href="#logo-220x20_typo"></use>
      </svg>
    </NuxtLink>
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


const route = useRoute();
const path = computed(() => route.path)


onMounted(() => {
})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  transform: translate(0,-100%);
  

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--c-grey-2);
  }
  .logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    
    svg {
    }
    svg:first-child {
      flex-shrink: 0;
      width: 5rem;
      aspect-ratio: 140/100;

      animation: blinking 1.5s infinite step-end;
    }
    svg:last-child {
      flex-shrink: 0;
      width: 13rem;
      aspect-ratio: 220/20;

      animation: blinking 1.2s infinite step-end;
    }
  }
}

html.-ready.-loaded {
  .header {
    transform: translate(0,0);
    transition: transform 0.3s var(--f-cubic);
    transition-delay: 0.3s;
  }
}

@media (min-width: 1024px) {
  .header {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    .bg {
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% calc(100% - 3.5rem),
        74.30555556% calc(100% - 3.5rem),
        calc(74.30555556% - 3.5rem) 100%,
        calc(25.69444444% + 3.5rem) 100%,
        25.69444444% calc(100% - 3.5rem),
        0% calc(100% - 3.5rem),
      );
    }
    .logo:hover {
      svg {
        fill: var(--c-grey-3);
      }
    }
  }
}
</style>
