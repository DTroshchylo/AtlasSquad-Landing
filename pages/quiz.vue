<template>
  <main class="page quiz-page" >
    <section class="c-quiz">
      <div class="-w">
        <a href="/" class="logo -a-to-top" data-string>
          <svg>
            <use href="#logo-220x20_typo"></use>
          </svg>
        </a>

        <div class="quiz-body">

          <h1 class="-tac -a-p -split" data-string>
            <span data-string-split style="--l-delay: 0.6;">
              Quiz page
            </span>
          </h1>

          <p>We collected the email here.</p>
          <p>&nbsp;</p>
          <p>Now the 'quiz' is started</p>
          <p>Basically, we have a plane text here, bulletpoints etc.</p>
          <p>&nbsp;</p>
          <p>1. I understand bla bla</p>
          <p>2. I understand bla bla</p>
          <p>3. I confirtm that</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div>
            <input type="checkbox" id="test">
            <label for="test">I agree text</label>
          </div>

          <NuxtLink to="/registration">Submit / go to registration / go to platform, actually</NuxtLink>
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
  .c-quiz {
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
        border: 1px solid red;

        
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

      .quiz-body {
        margin-top: auto;
        margin-bottom: auto;

        text-align: center;
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
