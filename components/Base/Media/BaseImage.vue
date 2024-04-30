<template>
  <picture v-if="develop">
    <img src="/images/customers.png" alt="EWJ">
  </picture>
  <picture v-if="develop == false">
    <source v-if="image.webp.data != null" :srcset="`http://localhost:1337${image.webp.data.attributes.url}`"
      type="image/webp">
    <img :src="`http://localhost:1337${image.image.data.attributes.url}`" alt="EWJ">
  </picture>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    default: null,
  },
})
const develop = ref(true)
</script>

<style lang="scss" scoped>
picture {
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>