<template>
  <main class="page home-page">
    Personal landing {{ personalSlug }}
  </main>
</template>

<script setup lang="ts">  
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

const router = useRouter()
const route = useRoute();

const personalSlug = ref('')

onMounted(() => {
  personalSlug.value = route.params.id
})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
.page {
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 5rem;

}

@media (min-width: 1024px) {
  .page {}
}
</style>
