// src/useDisableScroll.js
import { onMounted, onUnmounted } from 'vue';

export default function windowScrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
