// src/useDisableScroll.js
import { onMounted, onUnmounted } from 'vue';

export default function useDisableScroll(isDisabled: any) {
    document.getElementsByTagName("html")[0].style.overflow = isDisabled.value ? 'hidden' : 'auto';
}
