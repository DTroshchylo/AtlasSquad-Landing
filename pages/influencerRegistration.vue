<template>
  <main class="page temp-page" >
    <section class="c-temp">
      <div class="-w">
        <a href="/" class="logo -a-to-top" data-string>
          <svg>
            <use href="#logo-220x20_typo"></use>
          </svg>
        </a>
  
        <div class="temp-registration">
          <input placeholder="email" text="youremail@already.here">
          <input placeholder="name">
          <input placeholder="surname">
          <input placeholder="link to channetl">
  
          <a href="https://atlas-squad.fiddle.digital" target="_blank">We click and we get a notification 'Done'</a>
          <p>Once the form is submitted — Atlas Squad team gets the request through Email, Slack, whatever</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass




onMounted(() => {

})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .c-temp {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    position: relative;


    .-w {
      position: relative;

      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        display: block;
        margin-bottom: clamp(6rem,10%,10%);
      }

      .logo {
        border: 1px solid blue;
        
        display: block;
        width: 11rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: clamp(3rem,5%,5%);

        svg {
          fill: var(--c-grey-0);

          aspect-ratio: 220/20;
        }
      }
      .logo:hover {
        svg {
          fill: var(--c-white);
        }
      }

      .temp-registration {
        margin-top: auto;
        margin-bottom: auto;

        text-align: center;

        input {
          border: 1px solid white !important;
        }
      }
    }
  }
}


html.-loaded {
  .page {
    .c-welcome {
      .-w {
        .form-email {
          form.-inview {
            &::after {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .page {}
}

</style>
