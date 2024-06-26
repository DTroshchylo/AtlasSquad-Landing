<template>
  <main class="page info-page" data-string-progress data-string-lerp data-string-start="top top" data-string-end="bottom bottom">
  <!-- data-string-offset="" -->
    <div class="bg">
      <span class="bg-ray"></span>
    </div>
    <section class="c-welcome -a-p" data-string data-string-progress data-string-start="top top">
      <div class="-w">
        <div class="l">
          <p class="special-h -a-to-top" style="--l-delay: 0;">The Atlas Squad’s boot camp is a neuroscience-based self-engineering program for a select group of people who feel that their missions deserve nothing less.</p>
          <label class="-link -a-to-top" style="--l-delay: 0.15;">Enter email to start the journey /</label>
          <form onsubmit="return false" class="-a-to-top" style="--l-delay: 0.3;">
            <BaseInput :onInputChanged="onEmailChange" itsPlaceholder="Enter your email" class="-focus-element -hover-element" type="email" />

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
        <div class="r graphics -a-scale-in">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/brain-01.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="c-personalization -a-p" data-string data-string-progress>
      <div class="-w">
        <div class="l graphics -a-scale-in">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/dashboard.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
        <div class="r tt">
          <div class="description">
            <div class="route -a-to-top" style="--l-delay: 0; --active: 1;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red -a-to-top" style="--l-delay: 0.15;">Total personalization /</span>
            <p class="-mid -a-to-top" style="--l-delay: 0.3;">The program is a completely personalized, thoroughly gamified and AI-informed journey towards achieving the most demanding personal goals.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="c-mentoring -a-p" data-string data-string-progress>
      <span class="bg"></span>
      <div class="-w">
        
        <div class="l tt">
          <div class="description">
            <div class="route -a-to-top" style="--l-delay: 0; --active: 2;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red -a-to-top" style="--l-delay: 0.15;">Next level mentoring / </span>
            <p class="-mid -a-to-top" style="--l-delay: 0.3;">Atlas Squad recruits enjoy constant one on one support from mentors — accomplished entrepreneurs and athletes with thorough training in mental conditioning.</p>
          </div>
        </div>

        <div class="r graphics -a-scale-in">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/letter.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="c-journey -a-p" data-string data-string-progress>
      <div class="-w">
        <div class="l graphics -a-scale-in">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/tags.webp" alt="Atlas Squad">
            </figure>
          </div>
        </div>
        <div class="r tt">
          <div class="description">
            <div class="route -a-to-top" style="--l-delay: 0; --active: 3;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red -a-to-top" style="--l-delay: 0.15;">A transformational journey /</span>
            <p class="-mid -a-to-top" style="--l-delay: 0.3;">The 25-task journey of the boot camp involves intense emotional, spiritual, and physical work, and is unique for each recruit. Many tasks require collaboration with their buddy and their team.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="c-club -a-p" data-string data-string-progress>
      <span class="bg"></span>
      <div class="-w">
        
        <div class="l tt">
          <div class="description">
            <div class="route -a-to-top" style="--l-delay: 0; --active: 4;">
              <div class="step" v-for="item in 4"></div>
            </div>
            <span class="-up -m -b -red -a-to-top" style="--l-delay: 0.15;">An elite club / </span>
            <p class="-mid -a-to-top" style="--l-delay: 0.3;">Those who complete the camp are asked to become Squad members. They have demonstrated the willpower to start or stop doing anything they choose without stress or drama, playfully control the arc of their story so as to eliminate deathbed regrets, and forge deep and lasting relationships with others.</p>
          </div>
        </div>

        <div class="r graphics -a-scale-in">
          <div class="fig-wrap">
            <figure>
              <img data-not-lazy src="/images/more-info/public.jpg" alt="Atlas Squad">
            </figure>
          </div>
        </div>
      </div>
    </section>


    <section class="c-cta -a-p" data-string>
      <div class="-w -tac">
        <p class="special-h -a-to-top" style="--l-delay: 0.0;">The Atlas Squad is a meritocracy devoted to nurturing elite performers who redefine what human willpower can do.</p>
        <p class="-mid -a-to-top" style="--l-delay: 0.15;">Anyone can start our boot camp — the first module is free. Not everyone has what it takes to complete the program. Very few do it in a way that qualifies them to guide others — only they get to be mentors.</p>

        <label for="" class="-red -mid -a-to-top" style="--l-delay: 0.3;">Enter email to start the journey /</label>
        <form onsubmit="return false" class="-a-to-top" style="--l-delay: 0.45;">
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

definePageMeta({
  layout: 'alt'
})

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
  position: relative;
  padding-top: initial !important;
  background-color: #171717;
  // min-height: calc(var(--vh, 1vh) * 100);
  // contain: paint;

  >.bg {
    position: fixed;
    top: 0;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: none;

    .bg-ray {
      position: absolute;
      top: 0%;
      left: -50%;
      width: 200%;
      height: 200%;
      display: block;
      background-image: url(/images/logo-bg-17.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      animation: logo-bg 12s infinite ease-in-out;
    }
  }

  .special-h {
    font-family: 'Raleway-Regular';
    font-size: 1.1rem;
    line-height: 2.41;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  section {
    position: relative;
    padding-top: 1.5rem;
    padding-bottom: 6rem;

    .-w {
      position: relative;
    }
  }
  section:not(.c-cta) {
    .-w {
      display: flex;
      flex-direction: column;

      .graphics {
        width: 100%;

        .fig-wrap {
          position: relative;
          
          figure {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
          }
        }
      }
      
      .tt {
        width: 100%;

        .description {
          width: 80%;
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
    padding-top: 6rem;

    .-w {
      .l {
        text-align: center;
        // width: 80%;
        // margin-left: auto;
        // margin-right: auto;

        p {
          // width: 80%;
          // margin-left: auto;
          // margin-right: auto;
        }
        label {
          display: block;
          margin-bottom: 0.5rem !important;
        }
        form {
          width: 100%;
          position: relative;

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
        }
      }
      .r {}
    }
  }
  .c-personalization {
    z-index: 10;
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
      .graphics {
        .fig-wrap {
          width: 40%;
          margin-left: auto;
          margin-right: auto;

          &::before {
            content: none !important;
          }
          figure {
            border-radius: 0 !important;

            box-shadow: 2rem 1rem 4rem rgba(var(--c-grey-2-rgb),0.4);
          }
        }
      }
    }
  }
  .c-journey {
    .-w {
      .graphics {
        .fig-wrap {
          width: 60%;
          margin-top: -10%;
          margin-bottom: -10%;
          margin-left: auto;
          margin-right: auto;

          &::before {
            content: none !important;
          }
          figure {
            transform: initial !important;
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
        width: 80%;
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
        display: block;
        margin-bottom: 0.5rem !important;
      }
      form {
        width: 100%;
        position: relative;

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
      }
    }
  }
}

@media (max-width: 1024px) {
  .page {
    section:not(.c-cta) {
      .-w {
        .graphics {
          margin-bottom: 2rem;
        }
      }
    }
    .c-welcome,
    .c-mentoring,
    .c-club {
      .-w {
        flex-direction: column-reverse !important;
      }
    }
  }
}
@media (min-width: 1024px) {
  .page {
    >.bg {
      .bg-ray {
        transform: translate3d(0,calc(-50% + var(--string-progress) * 50%),0);
      }
    }
    .special-h {
      width: 80%;
    }
    section {
      padding-top: 5%;
      padding-bottom: 5%;
    }
    section:not(.c-cta) {
      .-w {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .graphics {
          width: 49.29577465%;
          perspective: 100rem;

          .fig-wrap {
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
              // background-color: #1A1A1A;
              background-color: var(--c-grey-4);
              will-change: transform;
              box-shadow: inset 0 0 1rem 0 #1A1A1A;
            }
            figure {
              will-change: transform;
            }
          }
        }
        .l.graphics {
          .fig-wrap {
            transform: translate3d(0,calc(25% + var(--string-progress) * -50%),0);

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
          margin-top: 5%;
          margin-bottom: 5%;

          .description {
            width: 65.71428571%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
    .c-welcome {
      padding-top: calc(5% + 8rem);

      .-w {
        .l {
          margin-right: initial;
          margin-left: 8.450704225%;
          width: 40.84507042%;
          text-align: left;

          label {}
          form {
            text-align: left;
            display: flex;

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
    .c-mentoring {
      .-w {
      
        .graphics {
          width: 70% !important;
          margin-top: -10%;
          margin-bottom: -10%;
        }
      
      }
    }
    .c-cta {
      .-w {
        >p,
        >label,
        form {
          width: 49.29577465%;
        }
        >label {
          text-align: left;
        }
        form {
          text-align: left;
          display: flex;

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
}


</style>
