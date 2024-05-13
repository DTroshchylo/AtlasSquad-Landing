<template>
  <main class="page temp-page">
    <section class="c-temp">
      <div class="-w">
        <a href="/" class="logo -a-to-top" data-string>
          <svg>
            <use href="#logo-220x20_typo"></use>
          </svg>
        </a>

        <div class="temp-registration">

          <form ref="registrationForm" data-string-validation-form="registration" data-string-storage="registration">
            <div class="row">
              <label for="form-email">Email</label>
              <input class="-tac" id="form-email" v-model="email" type="password" data-string-id="email"
                data-string-validation="email|Email not formated;required|Field is required">
              <div class="error" data-string-validation-error="email"></div>
            </div>
            <div class="row">
              <label for="">Name</label>
              <input v-model="name" type="text" data-string-id="name"
                data-string-validation="required|Field is required">
              <div class="error" data-string-validation-error="name"></div>
            </div>
            <div class="row">
              <label for="">Link to channel</label>
              <input v-model="socialLink" type="text" data-string-id="socialLink"
                data-string-validation="required|Field is required">
              <div class="error" data-string-validation-error="socialLink"></div>
            </div>
            <div class="row">
              <label for="">Why</label>
              <input v-model="why" type="text">
            </div>


            <button type="submit" class="-link -red -up -b">Registration</button>
            <p>Once the form is submitted — Atlas Squad team gets the request through Email, Slack, whatever</p>
          </form>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import axios from 'axios';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

const name = ref('')
const email = ref('')
const why = ref('')
const socialLink = ref('')
const registrationForm = ref()

onMounted(() => {
  registrationForm.value?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
    axios.get(`https://atlas-squad-landing.fiddle.digital/api/send-influencer?name=${name.value}&email=${email.value}&message=${socialLink.value}&why=${why.value}`)
  })
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
        margin-bottom: clamp(6rem, 10%, 10%);
      }

      .logo {
        // border: 1px solid blue;

        display: block;
        width: 11rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: clamp(3rem, 5%, 5%);

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
