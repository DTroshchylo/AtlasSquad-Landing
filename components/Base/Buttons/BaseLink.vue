<template>
  <NuxtLink class="link -p -b" :to="link" ref="button">
    <div class="overlay-container">

    </div>
    <span :data-label="text">
      <span>{{ text }}</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
})

const button = ref()
onMounted(() => {

})

</script>

<style lang="scss" scoped>
.link {
  position: relative;
  // width: 7rem;
  padding: 0.5rem;
  cursor: pointer;
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;


  .overlay-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      left: 0rem;
      top: 0rem;
      right: 0rem;
      bottom: 0rem;
      background: var(--c-background-grey);
      transform: scaleY(0);
      transform-origin: top center;
      transition: transform .6s cubic-bezier(.4, 0, 0, 1);
    }
  }

  span {
    display: block;
    flex: auto;
    line-height: 1;
    overflow: hidden;
    position: relative;

    span {
      text-align: center;
      display: block;
      transition: opacity .3s, transform .3s;
    }

    &:before {
      text-align: center;
      bottom: 0;
      color: var(--c-grey-dark);
      content: attr(data-label);
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      transform: translateY(100%);
      transition: opacity .3s, transform .3s;
      width: 100%;
      z-index: 2;
    }
  }





  &:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: var(--c-blue);
    transform: translate(-50%, 50%) scale(0);
    transition: transform .3s var(--f-cubic);
  }

  :slotted(figure) {
    display: none;
  }
}

.link.router-link-active {
  &:before {
    transform: translate(-50%, calc(50% + 0.5rem)) scale(1);
  }
  span {
    color: var(--c-blue);
  }
}



@media (min-width: 1024px) {
  .link {
    // width: 7rem;
  }
  .link:hover {
    .overlay-container {
      &:after {
        transform: scaleY(1);
        transform-origin: bottom center;
      }
    }

    span {
      span {
        opacity: 0;
        transform: translateY(-100%);
      }

      &:before {
        opacity: 1;
        transform: translateY(0);
      }
    }

  }
}
</style>
