<template>
  <span
    class="arrow"
    :class="{
      '-big': big,
      '-red': red,
    }"
  >
    <svg>
      <use href="#icon-40_arrow-blank"></use>
    </svg>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  big: {
    type: Boolean,
    default: false,
  },
  red: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {})

</script>

<style lang="scss" scoped>
.arrow {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--c-blue-light);
  border-radius: 0 0.4rem 0 0.4rem;
  overflow: hidden;

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

.arrow.-red {
  background-color: var(--c-red);

  svg {
    fill: var(--c-blue-light);
  }
}


@media (min-width: 1024px) {
  .arrow {
    transition: padding 0.6s var(--f-cubic);
  }
  .arrow.-big {
    padding: 1rem 1rem;
  }
  a:hover {
    .arrow {
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
}

</style>
