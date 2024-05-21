<template>
  <main class="page user-page" v-if="user != null && user.status == null" data-string-progress data-string-lerp data-string-start="top top" data-string-end="bottom bottom">
    <div class="bg">
      <span class="bg-ray"></span>
    </div>
    <div class="-w -a-p" data-string>
      <div class="user-content -a-to-top">
        <span class="bg"></span>


        <header class="c-header">
          <div class="title">
            <span class="-m">Profile /</span>
          </div>
          <div class="id-wrap">
            <div class="rank">
              <span class="-m -up -b">{{ user.role }}</span>
            </div>
            <h1 class="-shoulders-l -m-h2 -m-shoulders-l">AS-061432{{ user.id }}</h1>

            <figure class="achivements">
              <svg v-for="item in user.strengths">
                <use href="#icon-40_achivement"></use>
              </svg>
            </figure>
          </div>
        </header>


        <div class="body">
          <div class="wp-score">
            <span class="-m">Willpower score /</span>
            <span class="-h2 -shoulders-r -m-h3 -m-shoulders-r">108.6</span>
            <!-- <div>percentageTopTotal: {{ user.placeInRating.percentageTopTotal }}</div>
            <div>percentageBehindProgress: {{ user.placeInRating.percentageBehindProgress }}</div> -->
          </div>

          <div class="about">
            <div class="description">
              <div class="update">
                <span class="-m">Updated :&nbsp;</span>
                <span class="-m">17 May 2024</span>
              </div>
              <p class="-m">{{ user.description }}</p>
              <!-- <div>descriptionMentor: {{ user.descriptionMentor }}</div> -->
            </div>
            <div class="distinctions">
              <span class="-m">My distinctions /</span>
              
              <div class="i" v-for="item in user.strengths">
                <figure>
                  <svg>
                    <use href="#icon-40_achivement"></use>
                  </svg>
                </figure>
                <div>
                  <span class="-m -up -b">{{ item.title }}</span>
                  <p>{{ item.description }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- <h5>{{ user.id }}</h5>
        <div>role: {{ user.role }}</div> -->
  
  
        <!-- <div v-for="item in user.strengths">
          <div>{{ item.title }}</div>
          <div>{{ item.description }}</div>
        </div>
        <div v-for="item in user.weakSides">
          <div>{{ item.title }}</div>
          <div>{{ item.description }}</div>
        </div> -->



      </div>
    </div>

  </main>
  <div class="now-404 -tac" v-if="user == null || user.status == 404">
    <span class="-h6">404</span>
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

const router = useRouter()
const route = useRoute();
const userStore = useUser()

const user = computed(() => {
    return userStore.getUser
})

onMounted(async () => {
    //http://devnode1.palemiya.com/public/user/7

})
onBeforeUnmount(() => {

})

await useAsyncData('user', () => userStore.load(route.params.id))

</script>

<style lang="scss" scoped>
.page {
  position: relative;
  padding-top: initial !important;
  // min-height: calc(var(--vh, 1vh) * 100);

  >.bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: none;

    .bg-ray {
      position: absolute;
      top: 0%;
      left: 00%;
      width: 100%;
      height: 100%;
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

        clip-path: polygon(
          0% 0%,
          calc(100% - 4rem) 0%,
          100% 4rem,
          100% 100%,
          0% 100%
        );
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
      
              clip-path: polygon(
                0% 0%,
                100% 0%,
                100% calc(100% - 1rem),
                calc(100% - 1rem) 100%,
                0% 100%
              );
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
      position: fixed;
      height: calc(var(--vh, 1vh) * 100);

      .bg-ray {
        left: -50%;
        width: 200%;
        height: 200%;

        transform: translate3d(0,calc(-50% + var(--string-progress) * 50%),0);
      }
    }
    .-w {
      padding-top: calc(5% + 8rem);

      .user-content {
        padding-left: initial;
        padding-right: initial;

        .bg {
          clip-path: polygon(
            36.17021277% 0%,
            100% 0%,
            100% 100%,
            0 100%,
            0% 8rem,
            calc(36.17021277% - 8rem) 8rem
          );
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

            .description {

            }
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
