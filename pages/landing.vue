<template>
  <main class="page landing-page" ref="deep" v-if="influencer!=null">
    <!-- <div>
      <h1>Influencer name: {{ influencer.name }}</h1>
      <p>Form for registration</p>
    </div> -->

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


    <section class="c-welcome">
      <div class="-w">
        <div
          class="form-email"
         >
          <h1 class="-tac -a-p -split" data-string>
            <span data-string-split style="--l-delay: 0.6;">What would you do with total willpower?</span>
          </h1>
          <p class="caption -a-p -split" data-string >
            <span data-string-split style="--l-delay: 0.6;">Start your personalized self-engineering journey</span>
          </p>

          <form
            action=""
            class="-a-clip-center "
            data-string
            style="--l-delay: -0.15;"
          >
            <BaseInput :onInputChanged="onEmailChange" itsPlaceholder="Enter your email" class="-focus-element -hover-element" />

            <!-- <button @mouseenter="submitButtonEnter" @mouseleave="submitButtonLeave" class="-hover-element">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </button> -->
            <NuxtLink to="/user-tc" @click.native="onSendEmail" @mouseenter="submitButtonEnter" @mouseleave="submitButtonLeave" class="-hover-element">
              <span class="holder -b -up" :data-text="submitTextBasic">
                <span class="-b -up">{{ submitText }}</span>
              </span>
            </NuxtLink>

          </form>
        </div>
      </div>
    </section>

    <div class="blank">

    </div>
  </main>
</template>

<script setup lang="ts">  
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import StringStorage from '~/src/string-storage';
import { useInfluencer } from '~/store/influencer';

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass
const storeInfluencer = useInfluencer()
const influencer: any = computed(()=>{
  return storeInfluencer.getInfluencer
})
const router = useRouter()
const route = useRoute();
const personalSlug = ref('')








const email = ref('')
const onEmailChange = (value: any)=>{
  email.value = value
}

const onSendEmail = ()=>{
  storage.local.set('email', email.value)
}


const deep = ref()

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
onMounted(() => {
  if(influencer.value == null){
    navigateTo('/')
  }


  storage = StringStorage.getInstance()

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
      // console.log(true)
      isHoverOnElement.value = true
    })
    element.addEventListener('mouseout', ()=>{
      // console.log(false)
      isHoverOnElement.value = false
    })
  });



  const animation = ()=>{


    requestAnimationId = requestAnimationFrame(animation)
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      if(isFocusOnElement.value || isHoverOnElement.value){
        mouseX = window.innerWidth / 2
        mouseY = window.innerHeight / 2
      }
      animationX = lerp(animationX, mouseX, 0.1);
      animationY = lerp(animationY, mouseY, 0.1);
      calculateAngle(animationX, animationY, deep.value);
    }
  }
  //requestAnimationFrame(animation)



  var fpsInterval: any, startTime: any, now: any, then: any, elapsed: any;
  var isAnimationStarted: boolean = false
  var requestAnimationId: number = 0

  function startAnimating(fps: number) {
    if (isAnimationStarted) { return }
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animation();
    isAnimationStarted = true
  }
  function stopAnimating() {
    if (!isAnimationStarted) { return }
    cancelAnimationFrame(requestAnimationId)
    isAnimationStarted = false
  }

  startAnimating(30)
})
onBeforeUnmount(() => {

})
await useAsyncData('loadInfluencer', () => storeInfluencer.loadInfluencer(route.params.slug.toString()))
</script>

<style lang="scss" scoped>
.page {
  padding-top: initial !important;
  padding-bottom: initial !important;
  position: relative;
  height: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  // flex-shrink: 0;
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

  .c-welcome {
    height: 100%;
    width: 100%;
    position: relative;

    margin-top: auto;
    margin-bottom: -5%;

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
    }
  }
  .blank {
    margin-top: auto;
    margin-bottom: clamp(3rem,5%,5%);
    height: 3rem;
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
