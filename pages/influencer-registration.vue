<template>
  <main class="page form-page">

    <div class="bg">
      <span class="bg-ray"></span>
    </div>

    <section class="c-form">
      <div class="-w">
        <form ref="registrationForm" class="-a-p" data-string data-string-validation-form="registration"
          data-string-storage="registration">
          <div class="row -a-scale-out" style="--l-delay: 0;">
            <label for="form-email">Email *</label>
            <input id="form-email" v-model="email" type="text" data-string-id="email"
              data-string-validation="email|Email not formated;required|Field is required">
            <div class="-error -m-mm" data-string-validation-error="email"></div>
          </div>
          <div class="row -a-scale-out" style="--l-delay: 0.075;">
            <label for="form-name">Name *</label>
            <input id="form-name" v-model="name" type="text" data-string-id="name"
              data-string-validation="required|Field is required">
            <div class="-error -m-mm" data-string-validation-error="name"></div>
          </div>
          <div class="row -a-scale-out" style="--l-delay: 0.15;">
            <label for="form-channel-link">Link to channel *</label>
            <input id="form-channel-link" v-model="socialLink" type="text" data-string-id="socialLink"
              data-string-validation="required|Field is required">
            <div class="-error -m-mm" data-string-validation-error="socialLink"></div>
          </div>
          <div class="row -a-scale-out" style="--l-delay: 0.225;">
            <label for="form-why">Why</label>
            <input id="form-why" v-model="why" type="text">
          </div>

          <div class="submition">

            <span class="checking -a-to-bottom">
              <input id="tc-agreement" type="checkbox" v-model="checkedTerms" />
              <span class="checkmark">
                <svg>
                  <use href="#icon-20_check"></use>
                </svg>
              </span>

              <label for="tc-agreement">I agree to the Terms & Conditions of Atlas Squad recruit program.</label>
            </span>

            <span class="checking -a-to-bottom" style="--l-delay: 0.075;">
              <input id="subscription-agreement" type="checkbox" v-model="checkedSubscription" />
              <span class="checkmark">
                <svg>
                  <use href="#icon-20_check"></use>
                </svg>
              </span>

              <label for="subscription-agreement">I agree to receiving occasional emails and offers.</label>
            </span>

            <button type="submit" class="-link -red -up -b -a-to-bottom" style="--l-delay: 0.15;">Submit Form</button>

          </div>
        </form>


      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import axios from 'axios';
import StringValidation from '~/src/string-validation';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass


const checkedTerms = ref(false);
const checkedSubscription = ref(false);

const name = ref('')
const email = ref('')
const why = ref('')
const socialLink = ref('')
const registrationForm = ref()





onMounted(() => {
  let stringForm = StringValidation.getInstance()

  registrationForm.value?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
    await axios.get(`https://dev.atlas-squad.com/api/send-influencer?name=${name.value}&email=${email.value}&message=${socialLink.value}&why=${why.value}`)
    name.value = ''
    email.value = ''
    why.value = ''
    socialLink.value = ''
    navigateTo('/?message=Data sent successfully')
  })
})
onBeforeUnmount(() => {
  document.querySelectorAll('.-inview').forEach(element => {
    element.classList.remove('-inview')
  });
})

</script>

<style lang="scss" scoped>
.page {
  padding-top: initial !important;
  padding-bottom: initial !important;



  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: none;

    .bg-ray {
      position: absolute;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      display: block;
      background-image: url(/images/logo-bg.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      animation: logo-bg 12s infinite ease-in-out;
    }
  }

  .c-form {
    position: relative;


    .-w {
      height: 100%;
      min-height: 100vh;
      min-height: calc(var(--vh, 1vh) * 100);
      display: flex;
      align-items: center;


      form {
        padding-top: 8rem;
        padding-bottom: 6rem;

        .row {
          position: relative;
          margin-bottom: 1.5rem;

          .-error {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            padding: 0.2rem;
            background-color: var(--c-grey-2);
            color: var(--c-red);
          }

          .-error.-show {
            display: initial;
          }
        }

        .submition {
          position: relative;
          margin-top: 2rem;
          // margin-top: 4rem;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          .checking {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 0.5rem 1rem;

            background-color: var(--c-grey-2);

            input {
              flex-shrink: 0;
              position: absolute;
              left: 1rem;
              z-index: 100;
              width: 1.2rem;
              height: 1.2rem;
              pointer-events: all;
              -webkit-appearance: none;
              opacity: 0;
              box-sizing: content-box;
              margin: 0;
              padding: 0;
              opacity: 0.5;
              cursor: pointer;
            }

            .checkmark {
              flex-shrink: 0;
              position: relative;
              vertical-align: middle;
              margin-right: 0.5rem;
              position: relative;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              height: 1.2rem;
              width: 1.2rem;
              border-radius: 0.5rem;
              border: 1px solid var(--c-grey-4);
              background-color: var(--c-black);
              pointer-events: none;

              svg {
                position: absolute;
                width: 100%;
                aspect-ratio: 1/1;
                fill: var(--c-red);
                opacity: 0;
                pointer-events: none;
                transform: translateZ(0);
                scale: 2;
                transition: scale 0.6s var(--f-cubic);
              }
            }
          }

          .checking input:checked~.checkmark {
            svg {
              opacity: 1;
              scale: 1;
            }

            .checkbox-label {
              display: inline-block;
              margin-left: 0.5rem;
            }
          }

          .checking {
            margin-bottom: 0.5rem;
          }

          button {
            margin-top: 1rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .page {
    .bg {
      .bg-ray {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .c-form {

      .-w {
        form {
          padding-top: clamp(6rem, 10%, 10%);
          padding-bottom: 4rem;
          // margin-top: clamp(3rem,5%,5%);

          width: 49.29577465%;
          max-width: 35rem;
          margin-left: auto;
          margin-right: auto;



          .submition {
            width: 49.29577465%;
            max-width: 35rem;
            margin-left: auto;
            margin-right: auto;


          }
        }
      }
    }
  }
}
</style>
