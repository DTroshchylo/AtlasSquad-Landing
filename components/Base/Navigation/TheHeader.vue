<template>
  <header class="the-header">
    <div class="-w -a-p" data-string>
      <NuxtLink class="logo -a-to-top" to="/" >
        <svg>
          <use href="#logo-220x20_typo"></use>
        </svg>
      </NuxtLink>
      <div>
        <NuxtLink class="-grey -a-to-top" style="--l-delay: 0.15;" to="/more-info">
          <span>More Info</span>
          <svg>
            <use href="#icon-20_info"></use>
          </svg>
        </NuxtLink>
      </div>
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

  margin-top: 2rem;
  
  .-w {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      flex-shrink: 0;
      display: block;
      width: 13rem;
  
      svg {
        fill: var(--c-grey-0);
  
        aspect-ratio: 220/20;
      }
    }
    
    >div {
      margin-top: 1rem;

      a {
        display: flex;
        margin-right: -0.5rem;

        svg {
          width: 1rem;
          transform: translate(0,-50%);
        }
      }
      
    }
  }
}

@media (min-width: 1024px) {
  .the-header {
    margin-top: clamp(3rem,5%,5%);

    .-w {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &::before {
        content: '';
        width: 32.3943662%;
      }
      .logo {
        width: 11rem;
      }
      .logo:hover {
        svg {
          fill: var(--c-white);
        }
      }
      >div {
        margin-top: initial;
        margin-left: initial;
        margin-right: initial;
        text-align: right;
        display: flex;
        justify-content: flex-end;
        width: 32.3943662%;

        a {
          margin-right: initial;
        }
        a:hover {
          svg {
            fill: var(--c-white);
          }
        }
      }
    }
  }
}
</style>
