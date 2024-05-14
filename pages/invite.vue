<template>
    <main class="page landing-page" v-if="influencer!=null">
      
      <div>
        <h1>Influencer name: {{ influencer.name }}</h1>
        <h2>Influencer title: {{ influencer.title }}</h2>
        <h3>Influencer description: {{ influencer.description }}</h3>
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
    //console.log(storeInfluencer.getInviteInfluencer)
    return storeInfluencer.getInviteInfluencer
  })
  const router = useRouter()
  const route = useRoute();
  const personalSlug = ref('')
  onMounted(() => {
    //storeInfluencer.loadInviteInfluencer(route.params.slug.toString())
    if(influencer.value == null){
      navigateTo('/')
    }
  })
  onBeforeUnmount(() => {
    document.querySelectorAll('.-inview').forEach(element => {
      element.classList.remove('-inview')
    });
  })
  await useAsyncData('loadInviteInfluencer', () => storeInfluencer.loadInviteInfluencer(route.params.slug.toString()))
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
  