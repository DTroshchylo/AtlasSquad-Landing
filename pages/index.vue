<template>
  <main class="page home-page" ref="deep">
    <section class="c-welcome">
      <div
        class="bg"
        :class="[{
          '-form-active': isFocusOnElement || isHoverOnElement
        }]"
      >
        <span class="bg-ray"></span>
        <!-- <span class="bg-ray ray-1"></span> -->
        <!-- <span class="bg-ray ray-2"></span> -->

        <div class="-a-scale-in" data-string style="--l-delay: -0.15; --l-modifier: 1.5">
          <figure class="deep-1" >
            <svg>
              <use href="#logo-140x100_tl"></use>
            </svg>
          </figure>
          <figure class="deep-2" >
            <svg>
              <use href="#logo-140x100_tr"></use>
            </svg>
          </figure>
          <figure class="deep-3" >
            <svg>
              <use href="#logo-140x100_bl"></use>
            </svg>
          </figure>
          <figure class="deep-4" >
            <svg>
              <use href="#logo-140x100_br"></use>
            </svg>
          </figure>


          <figure class="deep-1 deep-ghost" >
            <svg>
              <use href="#logo-140x100_tl"></use>
            </svg>
          </figure>
          <figure class="deep-2 deep-ghost" >
            <svg>
              <use href="#logo-140x100_tr"></use>
            </svg>
          </figure>
          <figure class="deep-3 deep-ghost" >
            <svg>
              <use href="#logo-140x100_bl"></use>
            </svg>
          </figure>
          <figure class="deep-4 deep-ghost" >
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

        <div
          class="form-email"
          :class="{
            '-hidden': recruitedCap || joinCap
          }"
         >
          <h1 class="-tac -a-p -split" data-string>
            <!-- data-string-split-mode="random" -->
            <!-- What would you do with total willpower? -->
            <span data-string-split style="--l-delay: 0.6;">Take the first step towards your goals</span>
          </h1>
          <p class="caption -a-p -split" data-string >
            <span data-string-split style="--l-delay: 0.6;">Sign up for a free verification module at Atlas Squad</span>
          </p>

          <form
            action=""
            class="-a-clip-center "
            data-string
            style="--l-delay: -0.15;"
          >
            <BaseInput itsPlaceholder="Enter your email" class="-focus-element -hover-element" />

            <!-- <button @mouseenter="submitButtonEnter" @mouseleave="submitButtonLeave" class="-hover-element">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </button> -->
            <NuxtLink to="/user-tc" @mouseenter="submitButtonEnter" @mouseleave="submitButtonLeave" class="-hover-element">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </NuxtLink>

          </form>
        </div>

        <Transition name="-t-desc">
          <div class="description -tac -a-p -split -split-random" data-string v-if="recruitedCap">
            <span v-if="recruitedCap" data-string-split data-string-split-mode="random" style="--l-modifier: 8;">Planning for the future, and reflecting on one's values and decisions. The PFC is critical for such complex cognitive behaviors and decision-making processes. This module involves contemplating one's mortality.</span>
            <!-- <span v-if="joinCap" data-string-split data-string-split-mode="random" style="--l-modifier: 8;">This module involves contemplating one's mortality and life's purpose, activities that require abstract thinking, planning for the future, and reflecting on one's values and decisions. The PFC is critical for such complex cognitive behaviors and decision-making processes. This module involves contemplating one's mortality and life's purpose, activities that require abstract thinking.</span> -->
          </div>
        </Transition>

        <div class="get-recruited -a-p -split" data-string>
          
          <div>
            <NuxtLink to="/influencer-tc" class="-up -b -hover-element" @mouseenter="recruitedCap = true" @mouseleave="recruitedCap = false">
              <span class="wrap">
                <span class="-base" data-string-split style="--l-delay: 0.9;">Become an influencer</span>

                <span class="-hover">Get recruited</span>

                <svg>
                  <use href="#icon-20_info"></use>
                </svg>
              </span>
            </NuxtLink>
          </div>
          <!-- <div>
            <NuxtLink to="/" class="-up -b -hover-element" @mouseenter="joinCap = true" @mouseleave="joinCap = false">
              <span data-string-split style="--l-delay: 1.2;">Join now</span>
            </NuxtLink>
          </div> -->
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





const recruitedCap = ref(false)
const joinCap = ref(false)





const deep = ref()



const submitTextBasic = ref("Became a candidate >")
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
    submitText.value = 'Became a candidate >'
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


// let formActive = ref(false)
// let moveTo = ref(false)

// function formIn() {
//   formActive.value = true
// }
// function formOut() {
//   formActive.value = false
//   moveTo.value = true
//   setTimeout(() => {
//     moveTo.value = false
//   }, 150);
// }



let mouseX = 0, mouseY = 0, animationX = 0, animationY = 0
let isFocusOnElement = ref(false), isHoverOnElement = ref(false)
onMounted(() => {

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
    mouseX = e.clientX
    mouseY = e.clientY
  });
  function lerp (start: any, end: any, amt: any){
    return (1-amt)*start+amt*end
  }

  let hoverElements = document.querySelectorAll('.-hover-element')
  let focusElements = document.querySelectorAll('.-focus-element')


  focusElements.forEach(element => {
    element.querySelector('input')?.addEventListener('focus', ()=>{
      isFocusOnElement.value = true
    })
    element.querySelector('input')?.addEventListener('blur', ()=>{
      isFocusOnElement.value = false
    })
  });

  hoverElements.forEach(element => {
    element.addEventListener('mouseover', ()=>{
      console.log(true)
      isHoverOnElement.value = true
    })
    element.addEventListener('mouseout', ()=>{
      console.log(false)
      isHoverOnElement.value = false
    })
  });



  const animation = ()=>{
    if(isFocusOnElement.value || isHoverOnElement.value){
      mouseX = window.innerWidth / 2
      mouseY = window.innerHeight / 2
    }
    animationX = lerp(animationX, mouseX, 0.1);
    animationY = lerp(animationY, mouseY, 0.1);
    
    calculateAngle(animationX, animationY, deep.value);
    requestAnimationFrame(animation)
  }
  requestAnimationFrame(animation)
  

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

        transform: perspective 0.6s var(--f-swoosh);

        figure {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;

          // transition: scale 0.3s var(--f-cubic);
          
          svg {
            fill: rgba(var(--c-black-rgb),0);
            stroke: var(--c-grey-4);
            // stroke: blue;
            stroke-width: 0.1px;
            filter: drop-shadow( 0 0 1rem var(--c-white));
            
            scale: 1;
            transition: scale 0.9s var(--f-cubic), fill 0.9s var(--f-cubic), filter 0.9s var(--f-back);
          }
        }
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
            
            transition-delay: 0.15s;
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

            transition-delay: 0.225s;
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
            
            transition-delay: 0.3s;
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
    .bg.-form-active {
      div {
        // perspective: 0rem;

        figure {
          svg {
            fill: rgba(var(--c-black-rgb),1);
            scale: 0.8;
            filter: drop-shadow( 0 0 0rem var(--c-white));

            transition: scale 0.9s var(--f-cubic), fill 0.9s var(--f-cubic), filter 0.3s var(--f-cubic);
          }
        }
      }
    }

    .-w {
      position: relative;

      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logo {
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

      .form-email {
        width: 100%;
        opacity: 1;
        transition: opacity 0.6s var(--f-cubic);

        h1 {
          max-width: 25rem;
          margin-left: auto;
          margin-right: auto;
         margin-bottom: 0.5rem;
        }
        .caption {
          text-align: center;
          max-width: 25rem;
          margin-left: auto;
          margin-right: auto;
        }
        form {
          margin-top: 1.25rem;
          // width: 32.3943662%;
          width: 49.29577465%;
          margin-left: auto;
          margin-right: auto;

          position: relative;
          display: flex;

          // border: 1px solid red;

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
          button,
          a {
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
      .form-email.-hidden {
        opacity: 0;
      }

      .description {
        position: absolute;
        width: 49.29577465%;
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
        opacity: 0;
        scale: 1.2;
      }

      .get-recruited {
        margin-bottom: clamp(3rem,5%,5%);
        display: flex;
        justify-content: center;
        width: 49.29577465%;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;

        div {
          width: 50%;
          text-align: center;

          // border: 1px solid blue;
          
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
                transform: translate(0,0);
                transition: transform 0.3s var(--f-cubic), opacity 0.3s var(--f-cubic);
              }
              .-hover {
                position: absolute;
                opacity: 0;
                transform: translate(0,100%);
                transition: transform 0.3s var(--f-cubic), opacity 0.3s var(--f-cubic);
              }
              svg {
                width: 1rem;
                position: absolute;
                left: 100%;
                bottom: 100%;

                scale: 1;
                opacity: 1;
                transition: scale 0.3s var(--f-cubic), opacity 0.3s var(--f-cubic);
              }
            }
          }
          a:hover {
            animation: blinking 0.6s infinite step-end;

            .wrap {

              .-base {
                opacity: 0;
                transform: translate(0,-50%);
              }
              .-hover {
                opacity: 1;
                transform: translate(0,0);
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
