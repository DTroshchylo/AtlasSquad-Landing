<template>
  <main class="page tc-page">
    <section class="c-tc">
      <div class="-w">
        <div class="tc-content">

          <h1 class="-tac -a-p -split title -h6" data-string>
            <span data-string-split style="--l-delay: 0.6;">Become our recruiter</span>
          </h1>

          <div class="body -a-p -split" data-string>
            
            <span class="-up -b">
              <span data-string-split style="--l-delay: 0.6;">1 : Program Overview</span>
            </span>
            <p>
              <span data-string-split style="--l-modifier: 2;">Atlas Squad Boot Camp revolutionizes willpower training with active engagement and diverse modules for personal growth. Recruits participate in real-world tasks and receive personalized 1:1 24h-response-time mentorship. Progressing through customized tasks, recruits become squad members after completing 25. Specialized modules cover willpower, survivor personality, team dynamics, and health, fostering holistic development.</span>
            </p>
            
            <span class="-hl"></span>

            <span class="-up -b">
              <span data-string-split style="--l-delay: 0.6;">2 : Affiliate Perks</span>
            </span>
            <p>
              <span data-string-split style="--l-modifier: 2;">Get access to one free module & receive exclusive Atlas Squad merch, alongside special papers for cathartic trauma release and commitment pledges.</span>
            </p>
            <p>
              <span data-string-split style="--l-modifier: 2;">Plus, earn a generous 10% commission for every recruit you bring in. Simply share content featuring Atlas Squad to start earning and accessing your rewards today!</span>
            </p>
            
            <span class="-hl"></span>

            <span class="-up -b">
              <span data-string-split style="--l-delay: 0.6;">3 : Affiliate T&C</span>
            </span>
            <p>
              <span data-string-split style="--l-modifier: 2;">Commission payment are made via PayPal monthly. Post one Atlas Squad content to unlock your exclusive merch package & earn. Recruiters must be at least 21.</span>
            </p>
            
          </div>


          <div class="submition -a-to-bottom" data-string>
            <!-- <span class="checking">
              <input id="tc-agreement" type="checkbox" v-model="checkedTerms" />
              <span class="checkmark">
                <svg>
                  <use href="#icon-20_check"></use>
                </svg>
              </span>

              <label for="tc-agreement">agree to Terms of Service</label>
            </span> -->

            <!-- <Transition name="-t-submit">
              <NuxtLink class="-up -b -red" to="/influencer-registration" v-if="checkedTerms">Proceed to registration</NuxtLink>
            </Transition> -->
            <NuxtLink class="-up -b -red" to="/influencer-registration">Proceed to registration</NuxtLink>
          </div>

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

// const checkedTerms = ref(false)


// onMounted(() => {})
onBeforeUnmount(() => {
  document.querySelectorAll('.-inview').forEach(element => {
    element.classList.remove('-inview')
  });
})

</script>

<style lang="scss" scoped>
.page {
  .c-tc {
    position: relative;

    .-w {
      .tc-content {
        .title {
          margin-bottom: 3rem;
          color: var(--c-grey-0);

          >span {
            display: block;
          }
        }

        .body {
          >* {}
          .-h6 {
            margin-bottom: 1rem;
          }
          span {
            display: block;
            margin-bottom: 1rem;
          }
          span.-up {
            text-align: center;
          }
          p {
            margin-bottom: 1rem;
          }
          ul {
            li {
              list-style-type: decimal;
            }
          }
        }

        .submition {
          position: relative;
          margin-top: 4rem;
          
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          margin-bottom: 2rem;

          // .checking {
          //   position: relative;
          //   display: flex;
          //   justify-content: center;
          //   align-items: flex-start;
          //   padding: 0.5rem 1rem;

          //   background-color: var(--c-grey-2);

          //   input {
          //     flex-shrink: 0;
          //     position: absolute;
          //     left: 1rem;
          //     z-index: 100;
          //     width: 1.2rem;
          //     height: 1.2rem;
          //     pointer-events: all;
          //     -webkit-appearance: none;
          //     opacity: 0;
          //     box-sizing: content-box;
          //     margin: 0;
          //     padding: 0;
          //     opacity: 0.5;
          //     cursor: pointer;
          //   }
          //   .checkmark {
          //     flex-shrink: 0;
          //     position: relative;
          //     vertical-align: middle;
          //     margin-right: 0.5rem;
          //     position: relative;
          //     display: inline-flex;
          //     justify-content: center;
          //     align-items: center;
          //     height: 1.2rem;
          //     width: 1.2rem;
          //     border-radius: 0.5rem;
          //     border: 1px solid var(--c-grey-4);
          //     background-color: var(--c-black);
          //     pointer-events: none;

          //     svg {
          //       position: absolute;
          //       width: 100%;
          //       aspect-ratio: 1/1;
          //       fill: var(--c-red);
          //       opacity: 0;
          //       pointer-events: none;
          //       transform: translateZ(0);
          //       scale: 2;
          //       transition: scale 0.6s var(--f-cubic);
          //     }
          //   }
          // }
          // .checking input:checked~.checkmark {
          //   svg {
          //     opacity: 1;
          //     scale: 1;
          //   }

          //   .checkbox-label {
          //     display: inline-block;
          //     margin-left: 0.5rem;
          //   }
          // }

          a {
            display: block;
          }
          // a {
          //   position: absolute;
          //   top: 100%;
          //   padding: 1rem;
          //   display: block;
          // }
          // .-t-submit-leave-active,
          // .-t-submit-enter-active {
          //   opacity: 1;
          //   transform: translate(0,0);
          //   transition: all 0.3s var(--f-cubic);
          // }
          // .-t-submit-leave-to,
          // .-t-submit-enter-from {
          //   opacity: 0;
          //   transform: translate(0,1rem);
          // }
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .page {
    .c-tc {
      .-w {
        .tc-content {
          margin-top: clamp(3rem,5%,5%);

          .body {
            width: 49.29577465%;
            max-width: 35rem;
            margin-left: auto;
            margin-right: auto;

            ul {
              margin-left: 10%;
            }
          }

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
