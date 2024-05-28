<template>
  <div class="now-404 -tac">
    <span class="-h6">Check email</span>
    <NuxtLink to="/">Back to Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass'
import { useUser } from '~/store/user';

definePageMeta({
  layout: 'alt'
})

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

onMounted(async () => {

})
onBeforeUnmount(() => {

})


</script>

<style lang="scss" scoped>
.page {
  position: relative;
  padding-top: initial !important;
  // min-height: calc(var(--vh, 1vh) * 100);

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
      background-image: url(/images/logo-bg.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      animation: logo-bg 12s infinite ease-in-out;
    }
  }

  .-w {
    padding-top: 6rem;

    .user-content {
      position: relative;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      .bg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--c-grey-2);

        clip-path: polygon(0% 0%,
            calc(100% - 4rem) 0%,
            100% 4rem,
            100% 100%,
            0% 100%);
      }

      .c-header {
        padding-top: 1rem;
        position: relative;

        .title {}

        .id-wrap {
          position: relative;
          padding-top: 0.5rem;

          .rank {
            span {
              display: inline-block;
              padding: 0.5rem 1.5rem 0.5rem 1rem;
              background-color: var(--c-red);
              color: var(--c-black);

              clip-path: polygon(0% 0%,
                  100% 0%,
                  100% calc(100% - 1rem),
                  calc(100% - 1rem) 100%,
                  0% 100%);
            }
          }

          h1 {
            color: var(--c-grey-1);
            letter-spacing: -0.25rem;
          }

          .achivements {
            position: absolute;
            top: 0.75rem;
            right: 1rem;
            display: flex;

            svg {
              width: 2rem;
              fill: var(--c-red);
            }
          }
        }
      }

      .body {
        position: relative;
        padding-bottom: 2rem;

        .wp-score {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: flex-start;
          color: var(--c-grey-3);

          span {}

          span:last-child {
            line-height: 0.9;
            color: var(--c-red);
            margin-right: 1rem;
          }
        }

        .about {
          margin-top: 1rem;

          .description {
            .update {
              margin-bottom: 0.5rem;
              margin-right: 2rem;
              color: var(--c-grey-3);

              span:first-child {
                color: var(--c-red);
              }
            }

            p {
              margin-right: 2rem;
            }
          }

          .distinctions {
            margin-top: 1.5rem;

            >span {
              color: var(--c-grey-3);
            }

            .i {
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;

              figure {
                width: 2rem;
                flex-shrink: 0;
                margin-right: 1rem;

                svg {}
              }

              div {
                span {
                  display: block;
                  margin-bottom: 0.5rem;
                  margin-right: 2rem;
                }

                p {
                  margin-right: 2rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .page {
    >.bg {


      .bg-ray {
        transform: translate3d(0, calc(-50% + var(--string-progress) * 50%), 0);
      }
    }

    .-w {
      padding-top: calc(5% + 8rem);

      .user-content {
        padding-left: initial;
        padding-right: initial;

        .bg {
          clip-path: polygon(36.17021277% 0%,
              100% 0%,
              100% 100%,
              0 100%,
              0% 8rem,
              calc(36.17021277% - 8rem) 8rem);
        }

        .c-header {
          padding-top: initial;
          display: flex;
          justify-content: space-between;

          .title {
            width: 36.17021277%;
          }

          .id-wrap {
            padding-top: 1.5rem;
            width: 61.70212766%;

            .achivements {
              top: 1.5rem;
            }
          }
        }

        .body {
          display: flex;
          justify-content: space-between;

          .wp-score {
            gap: initial;
            justify-content: flex-start;
            // width: 38.29787234%;
            width: 36.17021277%;


            span {
              margin-left: 1rem;
            }

            span:last-child {
              margin-right: initial;
            }
          }

          .about {
            margin-top: initial;
            width: 61.70212766%;

            .description {}

            .distinctions {
              margin-top: 3rem;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .page {
    .-w {
      .user-content {
        width: 83.09859155%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@media (min-width: 1920px) {
  .page {
    .-w {
      .user-content {
        width: 65.27777778%;
      }
    }
  }
}
</style>
