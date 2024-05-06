<template>
  <main class="page landing-page" v-if="influencer!=null">
    <div>
        <h1>{{ influencer.name }}</h1>
    </div>
  </main>
</template>

<script setup lang="ts">  
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import { useInfluencer } from '~/store/influencer';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass
const storeInfluencer = useInfluencer()
const influencer: any = computed(()=>{
  return storeInfluencer.getInfluencer
})
const router = useRouter()
const route = useRoute();
const personalSlug = ref('')
onMounted(() => {
  if(influencer.value == null){
    navigateTo('/')
  }
})
onBeforeUnmount(() => {

})
await useAsyncData('loadInfluencer', () => storeInfluencer.loadInfluencer(route.params.slug.toString()))
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
