<template>
    <main class="page user-page">
        <div v-if="user != null && user.status == null">
            <h5>{{ user.id }}</h5>
            <div>role: {{ user.role }}</div>
            <div>description: {{ user.description }}</div>
            <div>descriptionMentor: {{ user.descriptionMentor }}</div>

            <div>percentageTopTotal: {{ user.placeInRating.percentageTopTotal }}</div>
            <div>percentageBehindProgress: {{ user.placeInRating.percentageBehindProgress }}</div>

            <div v-for="item in user.strengths">
                <div>{{ item.title }}</div>
                <div>{{ item.description }}</div>
            </div>
            <div v-for="item in user.weakSides">
                <div>{{ item.title }}</div>
                <div>{{ item.description }}</div>
            </div>
            
            
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
