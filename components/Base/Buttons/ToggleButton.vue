<template>
  <button
    ref="button"
    class="toggle-button"
    :class="{ '-on': status == true }"
    @click="toggle"
  >
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'

const props = defineProps({
  status: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['enable', 'disable'])

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

const button = ref()

let elStatus = ref(false)

const toggle = () => {
  // status.value = !status.value
  elStatus.value = props.status
  elStatus.value = !elStatus.value
  

  if (elStatus.value) {
    emit('enable')
    //global.emit("set-enable-state")
  } else {
    //global.emit("set-disable-state")
    emit('disable')
  }


}

onMounted(() => {

})

</script>

<style lang="scss" scoped>
button {
  position: relative;
  border-radius: 2rem;
  height: 2rem;
  width: 3rem;
  cursor: pointer;
  background: var(--c-black);

  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    background: var(--c-grey-dark);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transform: translate(25%, 0) scale(0.8);
    transition: transform 0.3s var(--f-cubic);
  }
}

button.-on {
  &:after {
    background: var(--c-green);
    transform: translate(-25%, 0) scale(0.8);
  }
}

@media (min-width: 1024px) {}
</style>
