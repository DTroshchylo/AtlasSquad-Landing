<template>
  <div class="field" :class="[{
    '-error': isError,
    '-active': isFocus || value.length > 0,
    '-select': options.length > 0
  }]">

    <label class="-m -up" :for="forID" v-if="name">{{ name }}</label>

    <input v-if="isTextarea == false && options.length == 0" :id="forID" ref="inputElement"
      :type='type == "" ? `text` : type' :name="inputName" :placeholder="itsPlaceholder" v-model="value"
      @focus="onInputFocus" @blur="onInputBlur" @keyup="onInputChange" @input="formatInput" required />
    <!-- title="error" -->

    <textarea v-if="isTextarea == true && options.length == 0" rows="4" :id="forID" ref="inputElement" type="text"
      :name="inputName" :placeholder="itsPlaceholder" v-model="value" @focus="onInputFocus" @blur="onInputBlur"
      @keyup="onInputChange" required></textarea>

    <select class="" :id="forID" v-if="options.length > 0" name="role" @change="onInputSelectChange($event)">
      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>



    <Transition name="-t-validation">
      <span class="-mm -m-m validation" v-if="errors.length > 0 && isFocus == false">{{ errors[0] }}</span>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlobalClass from '@/src/globalClass';
const nuxtApp = useNuxtApp()
const global = nuxtApp.$globalClass as GlobalClass
const props = defineProps(
  {
    name: {
      type: String,
      default: '',
    },
    itsPlaceholder: {
      type: String,
      default: '',
    },
    forID: {
      type: String,
      default: '',
    },
    inputName: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '',
    },
    onInputChanged: {
      type: Function,
      default: (event: any) => { }
    },
    isTextarea: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: false
    },
    errors: {
      type: Array<String>,
      default: new Array<any>()
    },
    options: {
      type: Array<String>,
      default: []
    },
    format: {
      type: Function,
      default: (value: string) => { return value }
    },
  }
)
const value = ref(props.defaultValue)
const inputElement = ref<any>()

const formatInput = (event: any) => {
  if (props.format != null) {
    value.value = props.format(value.value)
  }
}
const onInputChange = (event: any) => {
  props.onInputChanged(event.target.value)
}
const onInputSelectChange = (event: any) => {
  //props.onInputChanged(value.value)
  props.onInputChanged(event.target.value)
}

const isFocus = ref(false)
const onInputFocus = () => {
  isFocus.value = true
}
const onInputBlur = () => {
  isFocus.value = false
}

const resetInput = () => {
  value.value = ""
}

onMounted(() => {
  global.on("form-try-send", () => {
    isFocus.value = false
  })
  global.on("form-send", () => {
    resetInput()
  })
})



</script>

<style lang="scss" scoped>
.field {
  position: relative;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  textarea,
  input {
    position: relative;
    flex-grow: 1;
  }

  textarea::placeholder,
  input::placeholder {
    color: var(--c-grey-3);
  }

  select {
    width: 100%;
    height: 100%;
    resize: vertical;
  }

  textarea {}

  textarea:focus+label,
  input:focus+label {}

  textarea:valid+label,
  input:valid+label {}

  //validation
  .validation {
    pointer-events: none;
    transform: translateZ(0);
  }
}
</style>
