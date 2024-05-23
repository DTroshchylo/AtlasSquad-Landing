<template>
  <footer class="the-footer">
    <div class="-w -a-p" data-string>
      <NuxtLink to="/terms-of-use" class="-grey -a-to-bottom" style="--l-delay: 0.3">Terms of Use</NuxtLink>
      <NuxtLink to="/cookie-policy" class="-grey -a-to-bottom" style="--l-delay: 0.3">Cookie Policy</NuxtLink>
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
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      display: inline-block;
    }
  }
}

@media (min-width: 1024px) {
  .the-footer {
    .-w {
      justify-content: initial;
      // display: block;

      a {}
    }
  }
}
</style>
