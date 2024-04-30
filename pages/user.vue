<template>
    <main class="page user-page">
        <div v-if="user != null && user.status == null">
            <h5>{{ user.id }}</h5>
            <div>{{ user.raiting }}</div>

        </div>

        <div v-if="user == null || user.status == 404">404</div>
    </main>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import { useUser } from '~/store/user';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

const router = useRouter()
const route = useRoute();
const userStore = useUser()

const user = computed(() => {
    return userStore.getUser
})

onMounted(async () => {
    //http://devnode1.palemiya.com/public/user/7

})
onBeforeUnmount(() => {

})

await useAsyncData('user', () => userStore.load(route.params.id))

</script>

<style lang="scss" scoped>
.page {
    padding-top: 10rem;
}
</style>
