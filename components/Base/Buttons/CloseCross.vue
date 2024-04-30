<template>
  <span
    class="cross"
    :class="{
      '-red': red,
    }"
  >
    <svg>
      <use href="#icon-40_close"></use>
    </svg>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  red: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {})

</script>

<style lang="scss" scoped>
.cross {
  display: block;
  position: absolute;
  top: 0;
  right: -1px;
  background-color: var(--c-blue-light);
  border-radius: 0 0.4rem 0 0.4rem;
  overflow: hidden;

  box-shadow: 0 0 0 2px rgba(var(--c-white-rgb),0.1);
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--c-black);

    clip-path: polygon(0% 100%, 100% 150%, 100% 100%, 0 100%);
    transition: clip-path 0.3s var(--f-cubic);
  }
  svg {
    position: relative;
    width: 2rem;
    fill: var(--c-red);
    transform: translateZ(0);
  }
}
.cross.-red {
  background-color: var(--c-red);

  svg {
    fill: var(--c-blue-light);
  }
}


@media (min-width: 1024px) {
  .cross {
    transition: padding 0.6s var(--f-cubic);
  }
  .cross:hover {
    padding: 0 1rem;

    &::before {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
    }
    svg {
      fill: var(--c-blue-light) !important;
    }
  }
  .arrow.-big {
    padding: 1rem 2rem;
  }
}

</style>
