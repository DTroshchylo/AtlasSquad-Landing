<template>
  <main class="page privacy-cookies-page" >
    <section class="c-privacy-cookies">
      <div class="-w">
        <div class="privacy-cookies-content">
          Privacy content
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass


const checkedTerms = ref(false);

onMounted(() => {

})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 8rem;

  .c-privacy-cookies {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    position: relative;

    .-w {
      position: relative;

      height: 100%;

      // display: flex;
      // flex-direction: column;
      // align-items: center;
      // justify-content: center;


      &::after {
        content: '';
        display: block;
        margin-bottom: clamp(6rem,10%,10%);
      }


    }
  }
}

@media (min-width: 1024px) {
  .page {}
}


</style>
