<template>
  <footer class="the-footer">
    <div class="-w -a-p" data-string>
      <NuxtLink to="/privacy-cookies" class="-grey -a-to-bottom" style="--l-delay: 0.3">Privacy and cookie policy</NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nuxtApp = useNuxtApp()


onMounted(() => {
})
onUnmounted(() => {
})



</script>

<style lang="scss" scoped>
.the-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 1rem 0;
  margin-top: auto;

  .-w {
    a {
      display: inline-block;
    }
  }
}
</style>
