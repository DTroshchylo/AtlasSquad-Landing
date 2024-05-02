<template>
  <main class="page home-page" ref="deep">
    <section class="c-welcome">
      <div
        class="bg"
        :class="{
          '-form-active': formActive
        }"
      >
        <span class="bg-ray"></span>
        <!-- <span class="bg-ray ray-1"></span> -->
        <!-- <span class="bg-ray ray-2"></span> -->

        <div class="-a-scale-in" data-string style="--l-delay: -0.15; --l-modifier: 1.5">
          <figure class="deep-1" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_tl"></use>
            </svg>
          </figure>
          <figure class="deep-2" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_tr"></use>
            </svg>
          </figure>
          <figure class="deep-3" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_bl"></use>
            </svg>
          </figure>
          <figure class="deep-4" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_br"></use>
            </svg>
          </figure>


          <figure class="deep-1 deep-ghost" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_tl"></use>
            </svg>
          </figure>
          <figure class="deep-2 deep-ghost" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_tr"></use>
            </svg>
          </figure>
          <figure class="deep-3 deep-ghost" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_bl"></use>
            </svg>
          </figure>
          <figure class="deep-4 deep-ghost" :class="{ '-back': moveTo }">
            <svg>
              <use href="#logo-140x100_br"></use>
            </svg>
          </figure>
        </div>
      </div>
      <div class="-w">
        <a href="#" class="logo -a-to-top" data-string>
          <svg>
            <use href="#logo-220x20_typo"></use>
          </svg>
        </a>

        <div class="form-email">
          <h1 class="-tac -a-p -split" data-string>
            <!-- data-string-split-mode="random" -->
            <span data-string-split style="--l-delay: 0.6;">
              What would you do with total willpower?
            </span>
          </h1>

          <form
            action=""
            class="-a-clip-center"
            data-string
            style="--l-delay: -0.15;"

            @mouseenter="formIn"
            @mouseleave="formOut"
          >
            <BaseInput itsPlaceholder="Enter your email" />
            <button @mouseenter="submitButtonEnter" @mouseleave="submitButtonLeave">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </button>
          </form>
        </div>

        <span class="get-recruited -a-p -split" data-string >
          <NuxtLink to="/" class="-up -b">
            <span data-string-split style="--l-delay: 0.9;">Get recruited</span>
          </NuxtLink>
        </span>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass


const deep = ref()

const submitTextBasic = ref("Submit >")
const submitText = ref(">")

function submitButtonEnter() {
  submitText.value = 'a +'

  setTimeout(() => {
    submitText.value = 'Aa _'
  }, 30)
  setTimeout(() => {
    submitText.value = 'Sb_t -'
  }, 60)
  setTimeout(() => {
    submitText.value = '> tS_um>'
  }, 90)
  setTimeout(() => {
    submitText.value = 'Submit >'
  }, 120)
}

function submitButtonLeave() {
  submitText.value = '8JuTug _'

  setTimeout(() => {
    submitText.value = 'Sutibm-_'
  }, 30)
  setTimeout(() => {
    submitText.value = 'utSm 3'
  }, 60)
  setTimeout(() => {
    submitText.value = 'sSr>'
  }, 90)
  setTimeout(() => {
    submitText.value = '>'
  }, 120)
}


let formActive = ref(false)
let moveTo = ref(false)

function formIn() {
  formActive.value = true
}
function formOut() {
  formActive.value = false
  moveTo.value = true
  setTimeout(() => {
    moveTo.value = false
  }, 150);
}









onMounted(() => {


  let calculateAngle = function (e: any, item: any) {
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    let halfWidth = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    let calcAngleX = (x - halfWidth) / 5;
    let calcAngleY = (y - halfHeight) / 5;

    // let gX = (1 - (x / (halfWidth * 2))) * 100;
    // let gY = (1 - (y / (halfHeight * 2))) * 100;


    // let glare = item.querySelector('.glare')
    // let glareRect = glare.getBoundingClientRect()

    // glare.style.transform = `translate3d(${x - glareRect.width / 2}px,${y - glareRect.height / 2}px, 0)`

    const deltaX = x - halfWidth;
    const deltaY = y - halfHeight;

    // let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    // if (angle < 0) {
    //   angle += 360;
    // }
    item.style.setProperty('--angleX', calcAngleX)
    item.style.setProperty('--angleY', calcAngleY)
    item.style.setProperty('--gX', deltaX)
    item.style.setProperty('--gY', deltaY)
    item.style.setProperty('--gXabs', Math.abs(deltaX))
    item.style.setProperty('--gYabs', Math.abs(deltaY))

    // item.querySelector('.border-wrap').style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) `;
    // item.querySelector('.deep img').style.transform = `translate3d(${ (x - halfWidth) / 20 }px, ${ (y - halfHeight) / 20 }px, 0)`;
  }

  // deep.value.addEventListener('mouseenter', (e: any) => {

  //   deep.value.querySelector('.border-wrap').style.transition = '0.1s'
  //   setTimeout(() => {
  //     global.emit('activate-torus')
  //     calculateAngle(e, deep.value);
  //   }, 0);
  //   setTimeout(() => {
  //     deep.value.querySelector('.border-wrap').style.transition = '0.0s'
  //   }, 100)

  // });

  // deep.value.addEventListener('mousemove', (e: any) => {
  deep.value.addEventListener('mousemove', (e: any) => {
    calculateAngle(e, deep.value);
  });
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

})
onBeforeUnmount(() => {
})

</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .c-welcome {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    position: relative;

    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .bg-ray {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background-image: url(/images/logo-bg.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        animation: logo-bg 12s infinite ease-in-out;
      }
      // .ray-1 {}
      // .ray-2 {
      //   scale: -1 -1;

      //   animation-duration: 15s;
      //   animation-delay: -3s;
      // }
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        // perspective: calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 10rem + 90rem);
        perspective: 100rem;

        // transform: perspective 0.6s var(--f-swoosh);

        figure {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;

          // opacity: 1;
          // transition: opacity 0.3s var(--f-back);

          svg {
            fill: transparent;
            stroke: var(--c-grey-4);
            // stroke: blue;
            stroke-width: 0.1px;
            filter: drop-shadow( 0 0 1rem var(--c-white));
          }
        }
        // figure.-back {
        //   opacity: 0;
        //   transition: opacity 0.0s var(--f-back);
        //   // transition: transform 0.15s var(--f-cubic);
        // }
        .deep-1 {
          transform:
            translate3d(
              calc( var(--gX) * -0.75px ),
              calc( var(--gY) * -0.5px ),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 20rem)
            )
            rotateZ(calc( var(--angleX) / 600 * 30deg))
            rotateX(calc( var(--angleY) / 200 * -15deg))
            rotateY(calc( var(--angleX) / 600 * 30deg))
          ;

          svg {
            animation: blinking 0.3s ease infinite;
          }
        }
        .deep-2 {
          transform:
            translate3d(
              calc( var(--gX) * -0.75px ),
              calc( var(--gY) * -0.5px ),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * -50rem)
            )
            rotateZ(calc( var(--angleX) / 600 * 30deg))
            rotateX(calc( var(--angleY) / 200 * -15deg))
            rotateY(calc( var(--angleX) / 600 * 30deg))
          ;

          svg {
            animation: blinking 0.45s ease infinite;
          }
        }
        .deep-3 {
          transform:
            translate3d(
              calc( var(--gX) * -1.125px ),
              calc( var(--gY) * -0.75px ),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * -30rem)
            )
            rotateZ(calc( var(--angleX) / 600 * 30deg))
            rotateX(calc( var(--angleY) / 200 * -15deg))
            rotateY(calc( var(--angleX) / 600 * 30deg))
          ;

          svg {
            animation: blinking 0.6s ease infinite;
          }
        }
        .deep-4 {
          transform:
            translate3d(
              calc( var(--gX) * -1.5px ),
              calc( var(--gY) * -1px ),
              calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 10rem)
            )
            rotateZ(calc( var(--angleX) / 600 * 30deg))
            rotateX(calc( var(--angleY) / 200 * -15deg))
            rotateY(calc( var(--angleX) / 600 * 30deg))
          ;

          svg {
            animation: blinking 0.75s ease infinite;
          }
        }

        .deep-ghost {
          scale: 1.1;
          opacity: 0.6;

          svg {
            stroke: var(--c-grey-2);
          }
        }
        // .deep-5 {
        //   transform:
        //     translate3d(
        //       calc( var(--gX) * -0.75px ),
        //       calc( var(--gY) * -0.5px ),
        //       calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 40rem)
        //     )
        //     rotateZ(calc( var(--angleX) / 600 * 30deg))
        //     rotateX(calc( var(--angleY) / 200 * -15deg))
        //     rotateY(calc( var(--angleX) / 600 * 30deg))
        //   ;
        // }
        // .deep-6 {
        //   transform:
        //     translate3d(
        //       calc( var(--gX) * -0.75px ),
        //       calc( var(--gY) * -0.5px ),
        //       calc((var(--gXabs)/1000 + var(--gYabs)/1000) * -50rem)
        //     )
        //     rotateZ(calc( var(--angleX) / 600 * 30deg))
        //     rotateX(calc( var(--angleY) / 200 * -15deg))
        //     rotateY(calc( var(--angleX) / 600 * 30deg))
        //   ;
        // }
        // .deep-7 {
        //   transform:
        //     translate3d(
        //       calc( var(--gX) * -1.125px ),
        //       calc( var(--gY) * -0.75px ),
        //       calc((var(--gXabs)/1000 + var(--gYabs)/1000) * -30rem)
        //     )
        //     rotateZ(calc( var(--angleX) / 600 * 30deg))
        //     rotateX(calc( var(--angleY) / 200 * -15deg))
        //     rotateY(calc( var(--angleX) / 600 * 30deg))
        //   ;
        // }
        // .deep-8 {
        //   transform:
        //     translate3d(
        //       calc( var(--gX) * -1.5px ),
        //       calc( var(--gY) * -1px ),
        //       calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 10rem)
        //     )
        //     rotateZ(calc( var(--angleX) / 600 * 30deg))
        //     rotateX(calc( var(--angleY) / 200 * -15deg))
        //     rotateY(calc( var(--angleX) / 600 * 30deg))
        //   ;
        // }
      }
    }
    // .bg.-form-active {
    //   div {
    //     figure {
    //       transform:
    //         translate3d(
    //           0,
    //           0,
    //           0
    //         )
    //         rotateZ(0)
    //         rotateX(0)
    //         rotateY(0)
    //       ;
    //       transition: transform 0.6s var(--f-cubic);
    //     }
    //   }
    // }

    .-w {
      position: relative;

      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .logo {
        display: block;
        width: 11rem;
        margin-left: auto;
        margin-right: auto;
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

      .form-email {
        width: 100%;

        h1 {
          max-width: 25rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1.25rem;
        }
        form {
          width: 32.3943662%;
          margin-left: auto;
          margin-right: auto;

          position: relative;
          display: flex;

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
            margin-bottom: initial;
            flex-grow: 1;
          }
          button {
            position: absolute;
            height: 100%;
            right: 0;
            border-left: 1px solid var(--c-grey-4);

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

      .get-recruited {
        margin-bottom: clamp(3rem,5%,5%);
      }
      .get-recruited:hover {
        animation: blinking 0.6s infinite step-end;
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




@keyframes logo-bg {
  0% {
    opacity: 0.2;
    scale: 1;
  }
  20% {
    opacity: 0.8;
  }
  // 20.25% {
  //   opacity: 0.0;
  // }
  // 20.5% {
  //   opacity: 0.05;
  // }
  // 20.75% {
  //   opacity: 0.0;
  // }
  // 21% {
  //   opacity: 0.05;
  // }
  // 21.25% {
  //   opacity: 0.0;
  // }
  // 21.5% {
  //   opacity: 0.05;
  // }
  // 21.75% {
  //   opacity: 0.0;
  // }
  // 22% {
  //   opacity: 0.05;
  // }
  30% {
    opacity: 0.0;
  }
  60% {
    opacity: 0.99;
    scale: 1.2;
  }
  65% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.99;
  }
  100% {
    opacity: 0.2;
    scale: 1;
  }
}
</style>
