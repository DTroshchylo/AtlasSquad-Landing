<template>
  <main class="page tc-page">
    <section class="c-tc">
      <div class="-w">
        <div class="tc-content">

          <h1 class="-tac -a-p -split title -h6" data-string>
            <span data-string-split style="--l-delay: 0.6;">The Atlas Squad boot camp is not for everyone.</span>
            <span data-string-split style="--l-delay: 0.9;">Is this you?</span>
          </h1>

          <div class="body -a-p -split" data-string>

            <span class="-up -b">
              <span data-string-split style="--l-delay: 0.6;">I want to</span>
            </span>
            <ul>
              <li>
                <span data-string-split style="--l-modifier: 1;">Have the willpower to start or stop doing anything I
                  choose without stress or drama.</span>
              </li>
              <li>
                <span data-string-split style="--l-modifier: 1;">Playfully control the arc of my story and eliminate
                  deathbed regrets.</span>
              </li>
              <li>
                <span data-string-split style="--l-modifier: 1;">Forge deep and lasting relationships with
                  others.</span>
              </li>
            </ul>

            <span class="-hl"></span>

            <span class="-up -b">
              <span data-string-split style="--l-delay: 0.6;">I commit to</span>
            </span>
            <ul>
              <li>
                <span data-string-split style="--l-modifier: 1;">Take on intense, challenging emotional, spiritual and
                  physical work.</span>
              </li>
              <li>
                <span data-string-split style="--l-modifier: 1;">Actively contribute to a society exploring the
                  frontiers of human mental ability.</span>
              </li>
              <li>
                <span data-string-split style="--l-modifier: 1;">Mentor others on their journey and do so with utmost
                  integrity.</span>
              </li>
            </ul>

            <span class="-hl"></span>

            <span class="-up -b">
              <span data-string-split style="--l-delay: 0.6;">I have</span>
            </span>
            <ul>
              <li>
                <span data-string-split style="--l-modifier: 1;">Three examples of past achievements that required
                  strong willpower.</span>
              </li>
              <li>
                <span data-string-split style="--l-modifier: 1;">A vague impulse inside me pulling towards more truth
                  and authenticity.</span>
              </li>
              <li>
                <span data-string-split style="--l-modifier: 1;">A sense of humor.</span>
              </li>
            </ul>

          </div>

          <div class="submition -a-to-bottom" data-string>
            <span class="checking">
              <input id="tc-agreement" type="checkbox" v-model="checkedTerms" />
              <span class="checkmark">
                <svg>
                  <use href="#icon-20_check"></use>
                </svg>
              </span>

              <label for="tc-agreement">agree to Terms of Service</label>
            </span>

            <!-- <NuxtLink to="/registration">Submit / go to registration / go to platform, actually</NuxtLink> -->
            <Transition name="-t-submit">
              <button @click="submit">Submit</button>
              <!-- <a class="-up -b -red"
                :href="`https://atlas-squad.fiddle.digital/registration?email=${email}&invite=${invite}`"
                v-if="checkedTerms">Go to my Dashoboard</a> -->
            </Transition>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import StringStorage from '~/src/string-storage';
import { useAccount } from '~/store/account';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass


const checkedTerms = ref(false);
const email = ref('')
const password = ref('')
const type = ref('')
const invite = ref('')
const storeAccount = useAccount()

function generatePassword(length: number = 12): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const submit = async () => {
  password.value = generatePassword()
  let answer = await storeAccount.create({
    email: email.value,
    password: password.value,
    type: type.value,
    firstName: 'AS user',
    lastName: 'AS user',
    acceptsMarketing: false,
  }, invite.value)

  if (answer.status == 301) {
    //error.value = answer.text
  } else {
    await navigateTo('/success')
  }
}

onMounted(() => {

  if (StringStorage.getInstance().local.has('email')) {
    email.value = StringStorage.getInstance().local.get('email')
    invite.value = StringStorage.getInstance().local.get('invite')
    type.value = StringStorage.getInstance().local.get('type')
  } else {
    navigateTo('/')
  }




})
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

          a {
            position: absolute;
            top: 100%;
            padding: 1rem;
            display: block;
          }

          .-t-submit-leave-active,
          .-t-submit-enter-active {
            opacity: 1;
            transform: translate(0, 0);
            transition: all 0.3s var(--f-cubic);
          }

          .-t-submit-leave-to,
          .-t-submit-enter-from {
            opacity: 0;
            transform: translate(0, 1rem);
          }
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
          margin-top: clamp(3rem, 5%, 5%);

          .body {
            width: 49.29577465%;
            max-width: 35rem;
            margin-left: auto;
            margin-right: auto;

            ul {
              margin-left: 5%;
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
