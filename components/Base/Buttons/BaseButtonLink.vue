<template>
  <a
    :href="url"
    class="button -p -b"
    :class="{
      '-centered': !text || center,
      '-red': red,
      '-big': big,
      '-hover': itshover
    }"
    @mouseover="itshover = true"
    @mouseleave="itshoverOut()"
  >
    <span v-if="text" class="-m -up">{{ text }}</span>
    
    <slot />
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  red: {
    type: Boolean,
    default: false,
  },
  big: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
})

const itshover = ref(false)

const itshoverOut = () => {
  setTimeout(() => {
    itshover.value = false
  }, 300);
}

onMounted(() => {

})

</script>

<style lang="scss" scoped>
.button {
  min-width: 13.5rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--c-blue-light);
  padding: 0.25rem 0;
  box-shadow: 0 0 0 2px rgba(var(--c-white-rgb),0.1);
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--c-black);

    clip-path: polygon(0% 100%, 100% 400%, 100% 100%, 0 100%);
    // transform: scale(1,0);
    // transform-origin: 50% 100%;
    transition: clip-path 0.3s var(--f-cubic);
  }
  span {
    position: relative;
    margin-left: 0.5rem;
  }
  :slotted(svg) {
    position: relative;
    width: 2rem;
    margin-left: auto;
    margin-right: 0.25rem;
    fill: var(--c-black);
  }
}

.button.-red {
  background-color: var(--c-red);

  span {
    color: var(--c-blue-light);
    margin-left: 1rem;
  }
  :slotted(svg) {
    fill: var(--c-blue-light);
  }
}
.button.-big {
  padding-bottom: 3.75rem;
}

.button.-centered {
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  span {
    margin-left: 0.25rem;
  }
  :slotted(svg) {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1024px) {
  .button.-centered {
    padding-left: 1rem;
    padding-right: 1rem;

    span {
      margin-left: 0.5rem;
    }
  }
  .button {
    min-width: 11rem;
  }
  .button.-hover {
    &::before {
      clip-path: polygon(0% 150%, 100% 100%, 100% 100%, 0% 100%);
    }
  }
  .button:hover,
  .button.-red:hover {
    &::before {
      // transform: scale(1,1);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
    }
    span {
      color: var(--c-white);
    }
    :slotted(svg) {
      fill: var(--c-white);
    }
  }
}

.button.-active {
  &::before {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
  }
  span {
    color: var(--c-white);
  }
  :slotted(svg) {
    fill: var(--c-white);
  }
}

</style>
