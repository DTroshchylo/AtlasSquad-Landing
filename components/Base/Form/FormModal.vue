<template>
  <div class="c-form-modal">
    <!-- <div class="c-form-modal_wrapper"> -->
    <div class="close">
      <span class="close -h5 -link" @click="closeTalkClick">Close</span>
    </div>
    
    <span class="caption -up">Fill the form and we'll reach out to you</span>

    <form>
      <!-- <div>Name</div>
      <div>email</div>
      <div>your request</div> -->
      <BaseInput name="Name" />
      <BaseInput name="Email" />
      <BaseInput name="Your request" isTextarea />

      <button class="-h5">Send</button>
    </form>
    <!-- </div> -->
  </div>
</template>


<script setup lang="ts">
import GlobalClass from '@/src/globalClass';
const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass

const closeTalkClick = () => {
  global.emit("close-talk")
}
</script>

<style lang="scss" scoped>
.c-form-modal {
  // width: 100%;
  // height: 100%;
  min-height: 100%;
  background-color: var(--c-black); 
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  .close {
    padding-top: 1rem;

    span {
      color: var(--c-grey);
      display: inline-block;
    }
  }
  .caption {
    display: block;
    color: var(--c-grey);
    margin-top: 4rem;
  }

  form {
    margin-top: 3rem;
    padding-bottom: 6rem;

    button {
      margin-left: auto;
      margin-top: 15%;
    }
  }

}
</style>
