<template>
  <footer class="c-footer" ref="footer" data-string data-string-repeat>
    <div class="-w">
      <div class="foot-header">
        <div class="l">
          <span class="-m">EyewearJunckie @{{ currentDate.getFullYear() }}</span>
        </div>

        <a href="/" class="logo" v-if="path == '/'">
          <span class="symbol">
            <img data-not-lazy src="/images/logo-base.svg" alt="EWJ">
            <span class="glass"></span>
            <span class="frame"></span>
          </span>
          <img data-not-lazy src="/images/logo-type.svg" alt="EWJ">
        </a>
        <NuxtLink to="/" class="logo" v-if="path != '/'">
          <span class="symbol">
            <img data-not-lazy src="/images/logo-base.svg" alt="EWJ">
            <span class="glass"></span>
            <span class="frame"></span>
          </span>
          <img data-not-lazy src="/images/logo-type.svg" alt="EWJ">
        </NuxtLink>


        <div class="soc">
          <a v-for="social in navigation.socials" :href="social.url" target="_blank">
            <svg>
              <use v-if="social.type.toLowerCase() == 'facebook'" href="#icon-20_fb"></use>
              <use v-if="social.type.toLowerCase() == 'tiktok'" href="#icon-20_tiktok"></use>
              <use v-if="social.type.toLowerCase() == 'x'" href="#icon-20_x"></use>
              <use v-if="social.type.toLowerCase() == 'youtube'" href="#icon-20_youtube"></use>
              <use v-if="social.type.toLowerCase() == 'instagram'" href="#icon-20_instagram"></use>
            </svg>
          </a>
          <!-- <a href="" target="_blank">
            <svg>
              <use href="#icon-20_fb"></use>
            </svg>
          </a>
          <a href="" target="_blank">
            <svg>
              <use href="#icon-20_instagram"></use>
            </svg>
          </a>
          <a href="" target="_blank">
            <svg>
              <use href="#icon-20_tiktok"></use>
            </svg>
          </a>
          <a href="" target="_blank">
            <svg>
              <use href="#icon-20_youtube"></use>
            </svg>
          </a> -->
        </div>

      </div>

      <div class="contact-info">
        <div class="location">
          <figure>
            <svg>
              <use href="#icon-40_pin"></use>
            </svg>
          </figure>
          <span class="-h6 -m-p">{{ navigation.footer.address }}</span>
        </div>
        <div class="phone">
          <div class="row">
            <figure>
              <svg>
                <use href="#icon-40_phone"></use>
              </svg>
              <span></span>
              <svg>
                <use href="#icon-40_arrow"></use>
              </svg>
            </figure>
            <a :href="`tel:${locationItems[0].phone}`" class="-h6 -m-p">{{ locationItems[0].phone }}</a>
          </div>
          <!-- <div class="row">
            <span class="-m">Mon—Fri</span>
            <span class="-p">07:00 am — 04:00 pm</span>
          </div>
          <div class="row">
            <span class="-m">Sat—Sun</span>
            <span class="-p">Closed</span>
          </div> -->
        </div>
      </div>

      <div class="nav">
        <div class="col shop -h6 -m-p">
          <span class="-m-h3 -m-basic">Shop</span>
          <NuxtLink :to="`/shop/${menu.slug}`" v-for="menu in allMenu">{{ menu.name }}</NuxtLink>
          <!-- <NuxtLink to="/">Glasses</NuxtLink>
          <NuxtLink to="/">Women's Glasses</NuxtLink>
          <NuxtLink to="/">Men's Glasses</NuxtLink>
          <NuxtLink to="/">Kid's Glasses</NuxtLink>
          <NuxtLink to="/">Sunglasses</NuxtLink>
          <NuxtLink to="/">Women's Sunglasses</NuxtLink>
          <NuxtLink to="/">Men's Sunglasses</NuxtLink> -->
        </div>
        <div class="col about -h6 -m-p">



          <span class="-p -m-h5 -m-basic">{{ navigation.footer.about_title }}</span>
          <span v-for="link in navigation.footer.about_links">
            <NuxtLink v-if="link.type == 'inside'" :to="link.url">
              <span>{{ link.text }}</span>
            </NuxtLink>
            <a v-if="link.type == 'outside'" :href="link.url" target="_blank">{{ link.text
              }}</a>
          </span>

          <!-- <span class="-m-h3 -m-basic">About us</span>
          <NuxtLink to="/faq">FAQ</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/locations">Locations</NuxtLink>
          <NuxtLink to="/careers">Careers</NuxtLink> -->


          <div class="-p -m-m">
            <span v-for="link in navigation.footer.about_sublinks">
              <NuxtLink v-if="link.type == 'inside'" :to="link.url">
                <span>{{ link.text }}</span>
              </NuxtLink>
              <a v-if="link.type == 'outside'" :href="link.url" target="_blank">{{ link.text
                }}</a>
            </span>
            <!-- <NuxtLink to="/subscription">Subscription</NuxtLink>
            <NuxtLink to="/membership">Membership</NuxtLink> -->
            <!-- <NuxtLink to="/">Clearance</NuxtLink> -->
            <!-- <NuxtLink to="/try-at-home">Try at home</NuxtLink> -->
          </div>
        </div>
        <div class="col how-to -m">
          <span class="-p -m-h5 -m-basic">{{ navigation.footer.howTo_title }}</span>
          <span v-for="link in navigation.footer.howTo_links">
            <NuxtLink v-if="link.type == 'inside'" :to="link.url">
              <span>{{ link.text }}</span>
            </NuxtLink>
            <a v-if="link.type == 'outside'" :href="link.url" target="_blank">{{ link.text
              }}</a>
          </span>
          <!-- <span class="-p -m-h5 -m-basic">
            <span>How to</span>
            <svg>
              <use>
                <use href="#icon-20_youtube"></use>
              </use>
            </svg>
          </span>
          <a href="#" target="_blank">Measure your PD</a>
          <a href="#" target="_blank">Replace lenses in a full-rim frame</a>
          <a href="#" target="_blank">Replace lenses in a half-rim frame</a>
          <a href="#" target="_blank">How to choose prescription sunglasses</a> -->
          <NuxtLink to="/refund-policy" class="-p" v-if="desktop">Refund Policy</NuxtLink>
        </div>
        <div class="col infographics -m">
          <span class="-p -m-h5 -m-basic">{{ navigation.footer.infographics_title }}</span>
          <span v-for="link in navigation.footer.infographics_links">
            <NuxtLink v-if="link.type == 'inside'" :to="link.url">
              <span>{{ link.text }}</span>
            </NuxtLink>
            <a v-if="link.type == 'outside'" :href="link.url" target="_blank">{{ link.text
              }}</a>
          </span>
          <!-- <span class="-p -m-h5 -m-basic">Infographics</span>
          <NuxtLink to="/measure-pd">Measure your PD</NuxtLink>
          <NuxtLink to="/face-shape">Best eyeglasses for your face shape</NuxtLink>
          <NuxtLink to="/frame-size">Measure your frame size</NuxtLink>
          <NuxtLink to="/prescription-meaning">What does my prescription mean?</NuxtLink>
          <NuxtLink to="/lenses">Lenses</NuxtLink> -->

          <NuxtLink to="/terms-of-service" class="-p" v-if="desktop">Terms of Service</NuxtLink>
        </div>
      </div>
      <div class="m-tech-links" v-if="mobile">
        <NuxtLink to="/refund-policy" class="-p">Refund Policy</NuxtLink>
        <NuxtLink to="/terms-of-service" class="-p">Terms of Service</NuxtLink>
      </div>

    </div>

    <div class="ending -w-compensation" data-string-progress>
      <!-- <div class="ending -w-compensation"> -->
      <figure>
        <!-- data-string-parallax="0.5" -->
        <img v-lazy-load src="/images/ending.webp" alt="EWJ">
        <!-- <img data-not-lazy src="/images/ending.webp" alt="EWJ"> -->
      </figure>
      <a href="https://fiddle.digital" target="_blank">Website by Fiddle.Digital</a>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass';
import { useProducts } from '~/store/products';
import { useContent } from '~/store/content';

const currentDate = new Date()

const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

const storeProducts = useProducts()

const route = useRoute();
const path = computed(() => route.path)
const storeContent = useContent()
const allMenu = computed(() => {
  return storeProducts.getCategoriesFooter
})
const navigation = computed(() => {
  return storeContent.getNavigation
})
const locationItems = computed(() => {
  return storeContent.getLocationItems
})

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
  queryCheck()
  window.addEventListener("resize", queryCheck)
})
onUnmounted(() => {
  window.removeEventListener("resize", queryCheck)
})



</script>

<style lang="scss" scoped>
.c-footer {
  background-color: var(--c-black);
  color: var(--c-blue-light);

  padding-top: 1rem;

  svg {
    fill: var(--c-blue-light);
  }

  a {
    color: var(--c-blue-light);
  }

  .-w {
    .foot-header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .l {}

      .logo {
        margin-top: 0.5rem;
        background-color: var(--c-blue-light);
        padding: 0.75rem 0.5rem;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;

        .symbol {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.8rem;
          transform: scale(1) rotate(0deg) translate(0, 0);
          transition: transform 0.3s var(--f-cubic);

          img {}

          span {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
          }

          .glass {
            background-image: linear-gradient(60deg,
                var(--c-red) 0%,
                var(--c-yellow) 40%,
                var(--c-yellow) 60%,
                var(--c-red) 100%);
            background-size: 200% auto;
            background-position: 0% 0%;
            mask: url(/images/logo-glass.svg);
            overflow: hidden;

            transition: background-position 0.3s var(--f-cubic);

            &::before {
              content: '';
              display: block;
              position: absolute;
              top: -50%;
              right: 0;
              width: 140%;
              height: 200%;
              background-image: linear-gradient(75deg,
                  rgba(var(--c-white-rgb), 0) 0%,
                  rgba(var(--c-white-rgb), 1) 20%,
                  rgba(var(--c-white-rgb), 0) 40%);

              transition: transform 0.3s var(--f-cubic);
            }
          }

          .frame {
            background-color: var(--c-white);
            mask: url(/images/logo-frame.svg);
          }
        }

        >img {
          width: 7rem;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          transform: scale(1) rotate(0deg) translate(0, 0);
          transition: transform 0.3s var(--f-cubic);
        }
      }

      .soc {
        margin-top: 1.5rem;
        display: flex;
        justify-content: flex-end;

        a {
          display: block;
          margin-left: 1rem;
          margin-right: 1rem;

          svg {
            width: 1.5rem;
          }
        }
      }
    }

    .contact-info {
      margin-top: 2rem;

      .location {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        figure {
          width: 2rem;

          svg {
            width: 2rem;
          }
        }

        span {
          max-width: 17rem;
        }
      }

      .phone {
        margin-top: 1rem;

        .row {
          margin-bottom: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          figure {
            display: flex;
            align-items: center;
            width: 4rem;

            svg {
              width: 2rem;
              flex-shrink: 0;
            }

            span {
              width: 100%;
              border-bottom: 1px dashed var(--c-blue-light);
            }
          }

          >span,
          >a {
            flex-shrink: 0;
            white-space: nowrap;
            vertical-align: bottom;
          }

          >.-m {
            margin-bottom: 0.15rem;
          }
        }

        .row:first-child {
          margin-bottom: 1.5rem;
        }
      }
    }

    .nav {
      display: flex;
      flex-wrap: wrap;

      padding-bottom: 3rem;

      .col {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;

        line-height: 2rem;

        >span:first-child {
          margin-bottom: 1rem;
          text-transform: initial;
          // text-align: center;
          width: 100%;
        }

        span.-p {
          margin-top: 0.4rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;

          svg {
            width: 2rem;
            margin-left: 0.5rem;
            margin-bottom: -0.15rem;
          }
        }

        div.-p {
          width: 100%;
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;

          a {
            width: 50%;
            line-height: 1.4;
            margin-bottom: 1rem;
          }
        }

        >a {
          width: 50%;
        }

        a.-exact-active {
          color: var(--c-purple);
          cursor: default;
        }
      }

      .col.-m {
        line-height: 1.414rem;

        a {
          margin-bottom: 0.25rem;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        a.-p {
          margin-top: auto;
          margin-bottom: 0.15rem;
        }
      }

      .col:last-child {
        width: initial;
      }
    }

    .m-tech-links {
      a {
        margin-bottom: 1rem;
      }
    }

  }

  .ending {
    position: relative;
    width: 100%;
    height: 20rem;
    background-color: var(--c-black);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 18%;

      background-image: url(/images/ending-bg.webp);
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center top;
    }

    figure {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    a {
      color: var(--c-black);
      position: absolute;
      bottom: 1rem;
      right: var(--w-compensation);

      // transform-origin: 0% 100%;
      // transform: translate(100%,0%) rotate(-90deg);
    }
  }
}

@media (min-width: 1024px) {
  .c-footer {
    padding-top: 3rem;

    a:hover {
      color: var(--c-blue);
    }

    .-w {
      .foot-header {
        justify-content: initial;
        flex-direction: row;

        .l {
          width: 100%;
        }

        .logo {
          margin-top: initial;
        }

        .logo:hover {
          .symbol {
            transform: scale(1.1) rotate(5deg) translate(0, -0.25rem);

            .glass {
              background-position: 100% 0%;

              &::before {
                transform: translate(100%, 0);
              }
            }
          }

          >img {
            transform: scale(1.1) rotate(-5deg) translate(0.25rem, 0.25rem);
          }
        }

        .soc {
          margin-top: initial;
          width: 100%;

          a {
            margin-right: initial;
            margin-left: 2rem;

            svg {
              width: 1rem;
            }
          }
        }
      }

      .contact-info {
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .location {
          width: 40.84507042%;
          flex-direction: row;
          align-items: flex-start;
          text-align: left;

          figure {
            width: 20.68965517%;
          }
        }

        .phone {
          margin-top: initial;
          width: 40.84507042%;


          .row {
            width: 58.62068966%;
            justify-content: space-between;

            flex-direction: row;
            align-items: flex-start;
            text-align: left;

            figure {
              width: 100%;
            }
          }
        }
      }

      .nav {
        margin-top: 4rem;

        .col {
          flex-wrap: initial;
          margin-top: initial;
          flex-direction: column;
          width: 25.35211268%;

          >span:first-child {
            margin-bottom: 2rem;
            text-align: left;
          }

          span.-p {
            svg {
              width: 1rem;
            }
          }

          div.-p {
            flex-wrap: initial;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            a {
              width: initial;
              line-height: initial;
              margin-bottom: initial;
            }
          }

          >a {
            width: initial;
          }
        }

        .col.-m {
          a {
            line-height: 1.75;
            margin-bottom: initial
          }
        }
      }
    }

    .ending {
      height: 90vh;
      height: calc(var(--vh, 1vh) * 90);

      figure {
        transform: translate3d(0, calc(-30% + var(--string-progress) * 70%), 0);
      }

      a {}
    }
  }
}
</style>
