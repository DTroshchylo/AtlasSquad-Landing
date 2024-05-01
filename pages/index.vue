<template>
  <main class="page home-page">
    <section class="c-welcome">
      <div class="bg">
        <span class="bg-ray ray-1"></span>
        <span class="bg-ray ray-2"></span>

        <div ref="deep">
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
        </div>
      </div>
      <div class="-w">
        <a href="#" class="logo">
          <svg>
            <use href="#logo-220x20_typo"></use>
          </svg>
        </a>

        <div class="form-email">
          <h1 class="-tac">What would you do with total willpower?</h1>

          <form action="">
            <BaseInput placeholder="Enter your email" />
            <button>
              <!-- <span class="-b -up">Submit ></span> -->
              <span class="-b -up">Submit ></span>
            </button>
          </form>
        </div>

        <NuxtLink to="/" class="get-recruited -up -b">Get recruited</NuxtLink>
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



onMounted(() => {


  let calculateAngle = function (e: any, item: any) {
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    let halfWidth = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    let calcAngleX = (x - halfWidth) / 5;
    let calcAngleY = (y - halfHeight) / 5;
    // let calcAngleX = (x - halfWidth) / 5;
    // let calcAngleY = (y - halfHeight) / 5;

    let gX = (1 - (x / (halfWidth * 2))) * 100;
    let gY = (1 - (y / (halfHeight * 2))) * 100;


    // let glare = item.querySelector('.glare')
    // let glareRect = glare.getBoundingClientRect()

    // glare.style.transform = `translate3d(${x - glareRect.width / 2}px,${y - glareRect.height / 2}px, 0)`

    const deltaX = x - halfWidth;
    const deltaY = y - halfHeight;

    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    if (angle < 0) {
      angle += 360;
    }
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
  document.addEventListener('mousemove', (e: any) => {
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
        background-image: url(/images/logo-bg.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        animation: logo-bg 9s infinite ease-out;
      }
      .ray-1 {}
      .ray-2 {
        scale: -1 -1;

        animation-duration: 15s;
        animation-delay: -3s;
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

        // perspective: calc((var(--gXabs)/1000 + var(--gYabs)/1000) * 10rem + 90rem);
        perspective: 100rem;

        figure {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;

          

          svg {
            fill: transparent;
            stroke: var(--c-grey-4);
            // stroke: blue;
            stroke-width: 0.1px;
            filter: drop-shadow( 0 0 1rem var(--c-white));
          }
        }
        .deep-1 {
          animation: blinking 0.3s ease infinite;

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
        }
        .deep-2 {
          animation: blinking 0.45s ease infinite;

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
        }
        .deep-3 {
          animation: blinking 0.6s ease infinite;

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
        }
        .deep-4 {
          animation: blinking 0.75s ease infinite;

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
        }
      }
    }

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

      .form-email {
        width: 100%;

        h1 {
          max-width: 25rem;
          margin-left: auto;
          margin-right: auto;
        }
        form {
          width: 32.3943662%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .get-recruited {
        margin-bottom: clamp(3rem,5%,5%);
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
  }
  20% {
    opacity: 0.3;
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
    opacity: 0.3;
  }
  65% {
    opacity: 0.05;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
