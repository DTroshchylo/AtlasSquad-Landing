<template>
  <main class="page info-page" >

    <section class="c-welcome" data-string-progress data-string-start="top top">
      <div class="-w">
        <div class="l">
          <p class="special-h">The Atlas Squad’s boot camp is a neuroscience-based self-engineering program for a select group of people who feel that their missions deserve nothing less.</p>

          <span class="-link">Enter email to start the journey /</span>
        </div>
        <div class="r graphics">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/brain-01.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="c-personalization" data-string-progress>
      <div class="-w">
        <div class="l graphics">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/brain-01.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
        <div class="r tt">
          <div class="description">
            <div class="route" style="--active: 1;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red">Total personalization /</span>
            <p class="-mid">The program is a completely personalized, thoroughly gamified and AI-informed journey towards achieving the most demanding personal goals.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="c-mentoring" data-string-progress>
      <span class="bg"></span>
      <div class="-w">
        
        <div class="l tt">
          <div class="description">
            <div class="route" style="--active: 2;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red">Next level mentoring / </span>
            <p class="-mid">Atlas Squad recruits enjoy constant one on one support from mentors — accomplished entrepreneurs and athletes with thorough training in mental conditioning.</p>
          </div>
        </div>

        <div class="r graphics">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/brain-01.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="c-journey" data-string-progress>
      <div class="-w">
        <div class="l graphics">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/brain-01.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
        <div class="r tt">
          <div class="description">
            <div class="route" style="--active: 3;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red">A transformational journey /</span>
            <p class="-mid">The 25-task journey of the boot camp involves intense emotional, spiritual, and physical work, and is unique for each recruit. Many tasks require collaboration with their buddy and their team.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="c-club" data-string-progress>
      <span class="bg"></span>
      <div class="-w">
        
        <div class="l tt">
          <div class="description">
            <div class="route" style="--active: 2;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red">An elite club / </span>
            <p class="-mid">Those who complete the camp are asked to become Squad members. They have demonstrated the willpower to start or stop doing anything they choose without stress or drama, playfully control the arc of their story so as to eliminate deathbed regrets, and forge deep and lasting relationships with others.</p>
          </div>
        </div>

        <div class="r graphics">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/brain-01.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
      </div>
    </section>


    <section class="c-cta" data-string-progress>
      <div class="-w -tac">
        <p class="special-h">The Atlas Squad is a meritocracy devoted to nurturing elite performers who redefine what human willpower can do.</p>
        <p class="-mid">Anyone can start our boot camp — the first module is free. Not everyone has what it takes to complete the program. Very few do it in a way that qualifies them to guide others — only they get to be mentors.</p>

        <label for="" class="-red -mid">Enter email to start the journey /</label>
        <form onsubmit="return false">
            <BaseInput :onInputChanged="onEmailChange" itsPlaceholder="Enter your email"
              class="-focus-element -hover-element" type="email" />

            <button type="submit" @click.native="onSendEmail($event)" @mouseenter="submitButtonEnter" @mouseleave="submitButtonLeave" v-if="desktop">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </button>

            <button type="submit" @click.native="onSendEmail($event)" v-if="mobile" class="-tac">
              <span class="-up -b -link">Became a candidate ></span>
            </button>
          </form>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import StringStorage from '~/src/string-storage';
import axios from 'axios';

// definePageMeta({
//   layout: 'alt'
// })

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass


const checkedTerms = ref(false);
let storage: any


const submitTextBasic = ref("Became a candidate >")
const submitText = ref(">")

function submitButtonEnter() {
  submitText.value = 'ao +'

  setTimeout(() => {
    submitText.value = 'Aa nAc _'
  }, 30)
  setTimeout(() => {
    submitText.value = 'S dit Ab_t -'
  }, 60)
  setTimeout(() => {
    submitText.value = '> cAm( C a tS_um>'
  }, 90)
  setTimeout(() => {
    submitText.value = 'Became a candidate >'
  }, 120)
}

function submitButtonLeave() {
  submitText.value = '8JOme a cnuTug _'

  setTimeout(() => {
    submitText.value = 'con C%__tibm-_'
  }, 30)
  setTimeout(() => {
    submitText.value = 'utS2 Bn m 3'
  }, 60)
  setTimeout(() => {
    submitText.value = 'sVa aSr>'
  }, 90)
  setTimeout(() => {
    submitText.value = '>'
  }, 120)
}



const email = ref('')
const error = ref('')
const errors = ref(new Array<string>())
const onEmailChange = (value: any) => {
  email.value = value
}

const onSendEmail = async (e: any) => {
  //e.preventDefault()
  errors.value = new Array<string>()
  if (/^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$/.test(email.value)) {

    let answer = await axios.post(`https://devnode1.palemiya.com/api/authorization/check-email`, {
      email: email.value
    })

    if (answer.data.status == 403) {
      error.value = 'Email reserv'
      errors.value.push('Email reserv')
    } else {
      storage.local.set('email', email.value)
      navigateTo(`/user-tc`)
    }


  } else {
    error.value = 'Email not valid'
    errors.value.push('Email not valid')
  }

}



// query check
let mobile = ref(false)
let desktop = ref(false)
let queryCheck = () => {
  if (window.innerWidth >= 1024) {
    mobile.value = false
    desktop.value = true
  } else {
    mobile.value = true
    desktop.value = false
  }
}

onMounted(() => {
  storage = StringStorage.getInstance()
  storage.local.set('invite', '')

  queryCheck()
  window.addEventListener("resize", queryCheck)
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", queryCheck)

  document.querySelectorAll('.-inview').forEach(element => {
    element.classList.remove('-inview')
  });
})

</script>

<style lang="scss" scoped>
.page {
  padding-top: initial !important;
  background-color: #171717;
  min-height: calc(var(--vh, 1vh) * 100);
  contain: paint;

  .special-h {
    font-family: 'Raleway-Regular';
    font-size: 1.1rem;
    line-height: 2.41;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    width: 80%;
    margin-bottom: 2rem;
  }

  section {
    position: relative;
    padding-top: 5%;
    padding-bottom: 5%;

    .-w {
      position: relative;
    }
  }
  section:not(.c-cta) {
    .-w {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .graphics {
        width: 49.29577465%;
        perspective: 100rem;

        .fig-wrap {
          position: relative;
          will-change: transform;
          transform-style: preserve-3d;

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background-color: #1A1A1A;
            will-change: transform;
          }
          figure {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            will-change: transform;
          }
        }
      }
      .l.graphics {
        .fig-wrap {
          transform: translate3d(0,calc(var(--string-progress) * -50%),0);

          &::before {
            transform:
            rotateY(calc(30deg + var(--string-progress) * 30deg ))
              rotateX(calc(15deg + var(--string-progress) * 15deg ))
              rotateZ(calc(-15deg - var(--string-progress) * 0deg ))
              translateZ(-2rem)
            ;
          }
          figure {
            transform:
              rotateY(calc(30deg + var(--string-progress) * 30deg ))
              rotateX(calc(15deg + var(--string-progress) * 15deg ))
              rotateZ(calc(-15deg - var(--string-progress) * 0deg ))
            ;
          }
        }
      }
      .r.graphics {
        .fig-wrap {
          transform: translate3d(0,calc(var(--string-progress) * -50%),0);

          &::before {
            transform:
              rotateY(calc(-30deg - var(--string-progress) * 30deg ))
              rotateX(calc(30deg - var(--string-progress) * 15deg ))
              rotateZ(calc(15deg + var(--string-progress) * 0deg ))
              translateZ(-2rem)
            ;
          }
          figure {
            transform:
              rotateY(calc(-30deg - var(--string-progress) * 30deg ))
              rotateX(calc(30deg - var(--string-progress) * 15deg ))
              rotateZ(calc(15deg + var(--string-progress) * 0deg ))
            ;
          }
        }
      }
      .tt {
        width: 49.29577465%;

        .description {
          width: 65.71428571%;
          margin-left: auto;
          margin-right: auto;

          .route {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            margin-bottom: 2rem;

            &::before {
              content: '';
              display: block;
              width: 100%;
              height: 1px;
              background-color: var(--c-grey-3);
              position: absolute;
              left: 0;
              bottom: 0;
            }

            .step {
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 1px;

              &::before {
                content: '';
                display: block;
                width: 1px;
                height: 0.4rem;
                background-color: var(--c-grey-3);
              }

              &::after {
                content: '';
                display: block;
                position: absolute;
                top: 0.8rem;
                left: calc((var(--active) - 1) * 33.33333%);
                margin-left: -3px;
                width: 4px;
                height: 0.7rem;
                background-color: var(--c-red);

                clip-path: polygon(3px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 3px 25%);
              }
            }
          }

          >span {
            display: block;
            margin-bottom: 1.5rem;
          }
          .p {
            line-height: 1.875;
          }
        }
      }
    }
  }
  .c-welcome {
    padding-top: calc(5% + 8rem);

    .-w {
      .l {
        margin-left: 8.450704225%;
        width: 40.84507042%;

        
      }
      .r {}
    }
  }
  .c-mentoring {
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--c-grey-4);
      background-color: #43423D;

      clip-path: polygon(
        0% 0%,
        25.69444444% 0%,
        calc(25.69444444% + 8rem) 8rem,
        100% 8rem,
        100% 100%,
        8rem 100%,
        0% calc(100% - 8rem)
      );
    }
    .-w {
      .tt {
        .description {
          .route {
            &::before {
              background-color: #C4C1BC !important;
            }
            .step {
              &::before {
                background-color: #C4C1BC !important;
              }
            }
          }
        }
      }
    }
  }
  .c-club {
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--c-sblack);

      clip-path: polygon(
        0% 0%,
        25.69444444% 0%,
        calc(25.69444444% + 8rem) 8rem,
        100% 8rem,
        100% 100%,
        8rem 100%,
        0% calc(100% - 8rem)
      );
    }
  }
  .c-cta {
    .-w {
      >p,
      >label,
      form {
        width: 49.29577465%;
        margin-left: auto;
        margin-right: auto;
      }
      >p {
        max-width: 35rem;
      }
      >.-mid {
        margin-bottom: 2rem;
      }
      >label {
        text-align: left;
        display: block;
        margin-bottom: 0.5rem !important;
      }
      form {
        text-align: left;
        position: relative;
        display: flex;

        .field {
          :deep(input) {
            text-align: center;
          }
        }

        button,
        a {
          width: 100%;
          display: block;
        }

        .field {
          margin-bottom: initial;
          flex-grow: 1;

          :deep(input) {
            text-align: left;
          }
        }

        button,
        a {
          width: initial;
          position: absolute;
          height: 100%;
          right: 0;
          border-left: 1px solid var(--c-grey-4);
          color: var(--c-grey-3);
          display: flex;
          justify-content: center;
          align-items: center;

          .holder {
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 1rem;
            padding-left: 1rem;

            white-space: nowrap;

            &::before {
              content: attr(data-text);
              visibility: hidden;
            }

            span {
              position: absolute;
              text-align: right;
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
