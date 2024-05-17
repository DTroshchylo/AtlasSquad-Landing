<template>
  <main class="page home-page" ref="deep">
    <div class="bg" :class="[{
      '-form-active': isFocusOnElement || isHoverOnElement
    }]">
      <span class="bg-ray"></span>

      <div class="-a-scale-in" ref="bglogo" data-string style="--l-delay: -0.15; --l-modifier: 1.5">
        <figure class="deep-1">
          <svg>
            <use href="#logo-140x100_tl"></use>
          </svg>
        </figure>
        <figure class="deep-2">
          <svg>
            <use href="#logo-140x100_tr"></use>
          </svg>
        </figure>
        <figure class="deep-3">
          <svg>
            <use href="#logo-140x100_bl"></use>
          </svg>
        </figure>
        <figure class="deep-4">
          <svg>
            <use href="#logo-140x100_br"></use>
          </svg>
        </figure>


        <figure class="deep-1 deep-ghost">
          <svg>
            <use href="#logo-140x100_tl"></use>
          </svg>
        </figure>
        <figure class="deep-2 deep-ghost">
          <svg>
            <use href="#logo-140x100_tr"></use>
          </svg>
        </figure>
        <figure class="deep-3 deep-ghost">
          <svg>
            <use href="#logo-140x100_bl"></use>
          </svg>
        </figure>
        <figure class="deep-4 deep-ghost">
          <svg>
            <use href="#logo-140x100_br"></use>
          </svg>
        </figure>
      </div>
    </div>


    <section class="c-welcome">
      <div class="-w">
        <div class="form-email" :class="{
          '-hidden': recruitedCap
        }">
          <h1 class="-tac -a-p -split -h6" data-string>
            <span data-string-split style="--l-delay: 0.6;">What would you do with total willpower?</span>
          </h1>
          <p class="caption -a-p -split" data-string>
            <span class="-m-m" data-string-split style="--l-delay: 0.6;">Start your personalized self-engineering
              journey.</span>
          </p>

          <form onsubmit="return false" class="-a-clip-center " data-string style="--l-delay: -0.15;">
            <BaseInput :onInputChanged="onEmailChange" itsPlaceholder="Enter your email"
              class="-focus-element -hover-element" type="email" />

            <button type="submit" @click.native="onSendEmail($event)" @mouseenter="submitButtonEnter"
              @mouseleave="submitButtonLeave" class="-hover-element" v-if="desktop">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </button>

            <button type="submit" @click.native="onSendEmail($event)" v-if="mobile" class="-tac -a-to-top" data-string>
              <span class="-up -b -link">Became a candidate ></span>
            </button>

          </form>


        </div>
      </div>
    </section>


    <Transition name="-t-desc">
      <div class="description -tac -a-p -split -split-random" data-string v-if="desktop && recruitedCap">
        <span v-if="recruitedCap" data-string-split data-string-split-mode="random" style="--l-modifier: 8;">The Atlas
          Squad experience is for a select group of achievers who want the very best in AI-driven, personalized
          self-improvement. Are you the kind of influencer who can bring such people to our platform?</span>
      </div>
    </Transition>

    <section class="c-recruited">
      <div class="-w">
        <div class="get-recruited -a-p -split" data-string>

          <div class="-a-p" data-string>
            <NuxtLink to="/influencer-tc" class="-up -b -hover-element" @mouseenter.native="recruitedCap = true"
              @mouseleave.native="recruitedCap = false" v-if="desktop">
              <span class="wrap">
                <span class="-base" data-string-split style="--l-delay: 0.9;">Become our recruiter</span>

                <span class="-hover">Become our recruiter</span>

                <svg class="-a-to-top">
                  <use href="#icon-20_info"></use>
                </svg>
              </span>
            </NuxtLink>

            <NuxtLink to="/influencer-tc" class="-up -b" v-if="mobile">
              <span class="" style="--l-delay: 0.9;" data-string-split>Become our recruiter</span>
            </NuxtLink>

            <!-- <span
              class="-up -b -link"
              :class="{ '-hidden': recruitedCap }"
              v-if="mobile"
              @click="recruitedCap = true"
            >
              <span class="" style="--l-delay: 0.9;" data-string-split>Become our recruiter</span>
            </span> -->


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
import axios from 'axios';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass





const recruitedCap = ref(false)
const joinCap = ref(false)
const isFocus = ref(false)

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


const deep = ref()
const bglogo = ref()

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



let storage: any
let mouseX = 0, mouseY = 0, animationX = 0, animationY = 0
let isFocusOnElement = ref(false), isHoverOnElement = ref(false)




var startAnimating: any
var stopAnimating: any

// query check
let mobile = ref(false)
let desktop = ref(false)
let queryCheck = () => {
  if (window.innerWidth >= 1024) {
    mobile.value = false
    desktop.value = true

    startAnimating(30)
  } else {
    mobile.value = true
    desktop.value = false

    stopAnimating()
  }
}


onMounted(() => {

  storage = StringStorage.getInstance()
  storage.local.set('invite', '')

  let calculateAngle = function (clientX: number, clientY: number, item: any) {
    let x = Math.abs(item.getBoundingClientRect().x - clientX);
    let y = Math.abs(item.getBoundingClientRect().y - clientY);


    let halfWidth = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    let calcAngleX = (x - halfWidth) / 5;
    let calcAngleY = (y - halfHeight) / 5;

    const deltaX = x - halfWidth;
    const deltaY = y - halfHeight;


    item.style.setProperty('--angleX', calcAngleX)
    item.style.setProperty('--angleY', calcAngleY)
    item.style.setProperty('--gXabs', Math.abs(deltaX))
    item.style.setProperty('--gYabs', Math.abs(deltaY))
    item.style.setProperty('--gX', deltaX)
    item.style.setProperty('--gY', deltaY)
  }
  deep.value.addEventListener('mousemove', (e: any) => {
    if (desktop.value == true) {
      mouseX = e.clientX
      mouseY = e.clientY
    }
  });
  function lerp(start: any, end: any, amt: any) {
    return (1 - amt) * start + amt * end
  }



  nextTick(() => {
    let hoverElements = document.querySelectorAll('.-hover-element')
    let focusElements = document.querySelectorAll('.-focus-element')

    focusElements.forEach(element => {
      element.querySelector('input')?.addEventListener('focus', () => {
        isFocusOnElement.value = true
      })
      element.querySelector('input')?.addEventListener('blur', () => {
        isFocusOnElement.value = false
      })
    });

    hoverElements.forEach(element => {
      element.addEventListener('mouseover', () => {
        //console.log(desktop.value)
        if (desktop.value == true) {
          isHoverOnElement.value = true
        }
      })
      element.addEventListener('mouseout', () => {
        if (desktop.value == true) {
          isHoverOnElement.value = false
        }
      })
    });
  })





  const animation = () => {


    requestAnimationId = requestAnimationFrame(animation)
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      //console.log(isFocusOnElement.value || isHoverOnElement.value)
      if (isFocusOnElement.value || isHoverOnElement.value) {
        mouseX = window.innerWidth / 2
        mouseY = window.innerHeight / 2
      }
      animationX = lerp(animationX, mouseX, 0.1);
      animationY = lerp(animationY, mouseY, 0.1);
      calculateAngle(animationX, animationY, bglogo.value);
    }
  }
  //requestAnimationFrame(animation)



  var fpsInterval: any, startTime: any, now: any, then: any, elapsed: any;
  var isAnimationStarted: boolean = false
  var requestAnimationId: number = 0

  startAnimating = (fps: number) => {
    if (isAnimationStarted) { return }
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animation();
    isAnimationStarted = true
  }
  stopAnimating = () => {
    if (!isAnimationStarted) { return }
    cancelAnimationFrame(requestAnimationId)
    isAnimationStarted = false
  }

  startAnimating(30)


  // deep.value.addEventListener('mouseleave', (e: any) => {

  //   deep.value.querySelector('.border-wrap').style.transition = '0.3s'
  //   deep.value.querySelector('.deep img').style.transition = '0.3s'
  //   setTimeout(() => {
  //     global.emit('activate-sphere')
  //     deep.value.querySelector('.border-wrap').style.perspective = `0px`
  //     deep.value.querySelector('.border-wrap').style.transform = `rotateY(0deg) rotateX(0deg)`;
  //     deep.value.querySelector('.deep img').style.transform = `translate3d(0, 0, 0)`;
  //   }, 0);
  //   setTimeout(() => {
  //     deep.value.querySelector('.border-wrap').style.transition = '0.0s'
  //     deep.value.querySelector('.deep img').style.transition = '0.0s'
  //   }, 100);
  // });


  queryCheck()
  window.addEventListener("resize", queryCheck)

})
onBeforeUnmount(() => {
  stopAnimating()
  window.removeEventListener("resize", queryCheck)

  document.querySelectorAll('.-inview').forEach(element => {
    element.classList.remove('-inview')
  });
})

</script>

<style lang="scss" scoped>
.page {
  padding-top: initial !important;
  padding-bottom: initial !important;

  position: relative;

  height: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .bg {
    position: absolute;
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

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      figure {
        position: absolute;
        width: 200%;
        height: 200%;
        display: flex;
        justify-content: center;
        align-items: center;
        will-change: transform;

        svg {
          fill: rgba(var(--c-black-rgb), 0);
          stroke: var(--c-grey-4);
          stroke-width: 0.1px;
          filter: drop-shadow(0 0 0.5rem var(--c-grey-3));

          scale: 2;
          transition: scale 0.9s var(--f-cubic), fill 0.9s var(--f-cubic), filter 0.9s var(--f-back);
        }
      }

      .deep-1 {
        svg {
          animation: blinking 0.3s ease infinite;
          transition-delay: 0.15s;
        }
      }

      .deep-2 {
        svg {
          animation: blinking 0.45s ease infinite;
          transition-delay: 0.225s;
        }
      }

      .deep-3 {
        svg {
          animation: blinking 0.6s ease infinite;
          transition-delay: 0.3s;
        }
      }

      .deep-4 {
        svg {
          animation: blinking 0.75s ease infinite;
          transition-delay: 0.45s;
        }
      }

      .deep-ghost {
        scale: 1.1;
        opacity: 0.6;

        svg {
          filter: initial;
          stroke: var(--c-grey-2);
        }
      }
    }
  }


  .c-welcome {
    height: 100%;
    width: 100%;
    position: relative;

    // margin-top: 5rem;
    margin-top: auto;
    margin-bottom: -5rem;

    .-w {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .form-email {
        width: 100%;
        opacity: 1;
        transition: opacity 0.6s var(--f-cubic);

        h1 {
          margin-bottom: 0.5rem;
          margin-left: auto;
          margin-right: auto;
          color: var(--c-grey-0);
        }

        .caption {
          text-align: center;
          max-width: 90%;
          margin-left: auto;
          margin-right: auto;
        }

        form {
          margin-top: 1.25rem;
          position: relative;

          &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--c-sblack);
            pointer-events: none;

            opacity: 1;
            transition: opacity 0.9s var(--f-cubic);
            transition-delay: 0.9s;
          }

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

      .form-email.-hidden {
        opacity: 0;
      }
    }
  }

  .c-recruited {
    margin-top: auto;
    width: 100%;

    .get-recruited {
      margin-bottom: 6rem;
      text-align: center;

      div {
        a {
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          .wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .-base {
              opacity: 1;
              transform: translate(0, 0);
              transition: transform 0.3s var(--f-cubic), opacity 0.3s var(--f-cubic);
            }

            .-hover {
              position: absolute;
              opacity: 0;
              transform: translate(0, 100%);
              transition: transform 0.3s var(--f-cubic), opacity 0.3s var(--f-cubic);
            }

            svg {
              width: 1rem;
              position: absolute;
              left: 100%;
              bottom: 100%;

              // scale: 1;
              // opacity: 1;
              transition: scale 0.3s var(--f-cubic), opacity 0.3s var(--f-cubic), transform 0.9s var(--f-cubic);
            }
          }
        }


      }
    }
  }


  .description {
    position: absolute;
    width: 80%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .-t-desc-enter-active,
  .-t-desc-leave-active {
    opacity: 1;
    scale: 1;
    transition: opacity 0.6s var(--f-cubic), scale 0.6s var(--f-cubic);
  }

  .-t-desc-enter-from,
  .-t-desc-leave-to {
    opacity: 0 !important;
    scale: 1.2;
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

@media (max-width: 1024px) {
  .page {
    .bg {}

    .bg.-form-active {
      div {
        figure {
          svg {
            fill: rgba(var(--c-black-rgb), 1);
            scale: 0.8;
            filter: drop-shadow(0 0 0rem var(--c-white));

            transition: scale 1s var(--f-cubic), fill 0.9s var(--f-cubic), filter 0.3s var(--f-cubic);
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

      div {
        perspective: 100rem;
        transform: perspective 0.6s var(--f-swoosh);

        figure {
          width: 100%;
          height: 100%;

          svg {
            // stroke-width: 0.1px;
            filter: drop-shadow(0 0 1rem var(--c-white));
            scale: 1;
          }
        }

        .deep-1 {
          transform:
            translate3d(calc(var(--gX) * -0.75px),
              calc(var(--gY) * -0.5px),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 20rem)) rotateZ(calc(var(--angleX) / 600 * 30deg)) rotateX(calc(var(--angleY) / 200 * -15deg)) rotateY(calc(var(--angleX) / 600 * 30deg));
        }

        .deep-2 {
          transform:
            translate3d(calc(var(--gX) * -0.75px),
              calc(var(--gY) * -0.5px),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * -50rem)) rotateZ(calc(var(--angleX) / 600 * 30deg)) rotateX(calc(var(--angleY) / 200 * -15deg)) rotateY(calc(var(--angleX) / 600 * 30deg));
        }

        .deep-3 {
          transform:
            translate3d(calc(var(--gX) * -1.125px),
              calc(var(--gY) * -0.75px),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * -30rem)) rotateZ(calc(var(--angleX) / 600 * 30deg)) rotateX(calc(var(--angleY) / 200 * -15deg)) rotateY(calc(var(--angleX) / 600 * 30deg));
        }

        .deep-4 {
          transform:
            translate3d(calc(var(--gX) * -1.5px),
              calc(var(--gY) * -1px),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 10rem)) rotateZ(calc(var(--angleX) / 600 * 30deg)) rotateX(calc(var(--angleY) / 200 * -15deg)) rotateY(calc(var(--angleX) / 600 * 30deg));
        }


      }
    }

    .bg.-form-active {
      div {
        figure {
          svg {
            fill: rgba(var(--c-black-rgb), 1);
            scale: 0.8;
            filter: drop-shadow(0 0 0rem var(--c-white));

            transition: scale 0.9s var(--f-cubic), fill 0.9s var(--f-cubic), filter 0.3s var(--f-cubic);
          }
        }
      }
    }

    .c-welcome {
      margin-bottom: -5%;

      .-w {
        .form-email {
          h1 {
            max-width: 28rem;
          }

          .caption {
            max-width: 28rem;
          }

          form {
            width: 49.29577465%;
            margin-left: auto;
            margin-right: auto;
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

    .c-recruited {
      .get-recruited {
        margin-bottom: clamp(3rem, 5%, 5%);

        display: flex;
        justify-content: center;
        width: 49.29577465%;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;

        div {
          width: 50%;

          a:hover {
            animation: blinking 0.6s infinite step-end;

            .wrap {

              .-base {
                opacity: 0;
                transform: translate(0, -50%);
              }

              .-hover {
                opacity: 1;
                transform: translate(0, 0);
              }

              svg {
                scale: 0;
                opacity: 0;
              }
            }
          }
        }
      }
    }

    .description {
      width: 49.29577465%;
    }
  }
}
</style>
