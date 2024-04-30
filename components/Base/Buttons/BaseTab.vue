<template>
  <button class="tab -p -b" :class="{ '-selected': itsActive }">
    <span :data-label="text" v-if="text" class="-mm -up">
      <span>{{ text }}</span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  itsActive: {
    type: Boolean,
    default: false,
  },
})



onMounted(() => { })

</script>

<style lang="scss" scoped>
.tab {
  overflow: hidden;
  position: relative;
  // border: 2px solid var(--c-grey);
  box-shadow: inset 0 0 0 1px var(--c-grey), 0 0 0 1px var(--c-grey);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--c-grey);

    transform: scale(1, 0);
    transform-origin: 50% 0%;
    transition: transform 0.3s var(--f-cubic);
  }

  >span {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-left: 1rem;
    margin-right: 1rem;

    &:before {
      position: absolute;
      content: attr(data-label);
      display: block;
      color: var(--c-sblack);
      transform: translate(0, 100%) translateZ(0);
      transition: transform 0.3s var(--f-cubic);
    }

    span {
      display: block;
      transform: translate(0, 0%) translateZ(0);
      transition: transform 0.6s var(--f-smooth);
    }
  }
}

.tab.-selected {
  z-index: 20;
  box-shadow: inset 0 0 0 1px var(--c-sblack), 0 0 0 1px var(--c-sblack);

  &::before {
    background-color: var(--c-sblack);
    transform: scale(1, 1);
  }

  >span {
    color: var(--c-grey);

    &::before {
      color: var(--c-grey);
    }
  }
}



@media (min-width: 1024px) {
  .tab:hover {
    &::before {
      transform: scale(1, 1);
      transform-origin: 50% 100%;
    }

    >span {
      span {
        transform: translate(0, -120%) translateZ(0);
        transition: transform 0.3s var(--f-cubic);
      }

      .-category {
        border: 2px solid var(--c-grey);
        transform: translate(0, 0) translateZ(0);
      }

      &:before {
        transform: translate(0, 0%) translateZ(0);
        transition: transform 0.3s var(--f-smooth);
      }
    }
  }
}
</style>
