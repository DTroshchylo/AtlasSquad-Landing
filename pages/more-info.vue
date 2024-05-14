<template>
  <main class="page info-page" >
    <section class="c-info">
      <div class="-w">
        <div class="info-content">
          More Info content
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
  document.querySelectorAll('.-inview').forEach(element => {
    element.classList.remove('-inview')
  });
})

</script>

<style lang="scss" scoped>
.page {

  .c-info {
    position: relative;

    .-w {
      position: relative;
    }
  }
}

@media (min-width: 1024px) {
  .page {}
}


</style>
