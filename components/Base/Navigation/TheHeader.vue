<template>
  <!-- <header>
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
  </header> -->

  <header class="the-header">
    <div class="-w">
      <!-- <a href="/" class="logo -a-to-top" data-string>
        <svg>
          <use href="#logo-220x20_typo"></use>
        </svg>
      </a> -->
      <!-- <NuxtLink class="logo" to="/" v-if="path != '/'"> -->
      <NuxtLink class="logo" to="/" >
        <svg>
          <use href="#logo-220x20_typo"></use>
        </svg>
      </NuxtLink>
      <span>
        <NuxtLink class="-grey" to="/more-info">
          <span>More Info</span>
          <svg>
            <use href="#icon-20_info"></use>
          </svg>
        </NuxtLink>
      </span>
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


const route = useRoute();
const path = computed(() => route.path)


onMounted(() => {
})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
.the-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  // margin-bottom: auto;
  margin-top: clamp(3rem,5%,5%);
  
  .-w {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
      content: '';
      width: 32.3943662%;
    }
    .logo {
      flex-shrink: 0;
      display: block;
      width: 11rem;
  
      svg {
        fill: var(--c-grey-0);
  
        aspect-ratio: 220/20;
      }
    }
    .logo:hover {
      svg {
        fill: var(--c-white);
      }
    }
    >span {
      display: flex;
      justify-content: flex-end;
      width: 32.3943662%;
      text-align: right;
  
      a {
        display: flex;
  
        svg {
          width: 1rem;
          transform: translate(0,-50%);
        }
      }
      a:hover {
        svg {
          fill: var(--c-white);
        }
      }
    }
  }
}
</style>
