// src/globalClass.ts

export default class GlobalClass {
  handlers: any
  state: any
  userId: string = ""
  activePage: string = ""
  isLoaded: boolean = false

  isFirstLoaded: boolean = false

  constructor() {
    this.state = reactive({
      someData: "example data",
    });
    this.handlers = {};
  }

  // //SPLITTING
  getSplitText(text: String, processor: Function = (span: HTMLElement, index: number, length: number) => { }) {
    if (text.length == 0) { return "" }

    let globalCharIndex = 0;

    const element = document.createElement('span');

    const words = text.split(' ');
    words.forEach((word: string, wordIndex: number) => {
      const spanContainer = document.createElement('span');
      spanContainer.classList.add('-splitted-wrap');

      const characters = Array.from(word);
      characters.forEach((char: string, charIndex: number) => {

        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add('-splitted-char');

        span.style.setProperty('--char-index', String(globalCharIndex));

        spanContainer.appendChild(span);

        globalCharIndex++
        processor(span, charIndex, characters.length);
      });

      element.appendChild(spanContainer);
      if (wordIndex !== words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = '\u00a0';
        spanContainer.appendChild(spaceSpan);
      }
    });

    return element.innerHTML;
  }




  setUserId(id: string) {
    this.userId = id
  }
  getUserId() {
    return this.userId
  }

  on(event: string, handler: any) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
  }

  off(event: string, handler: any) {
    if (this.handlers[event]) {
      this.handlers[event] = this.handlers[event].filter((h: any) => h !== handler);
    }
  }

  emit(event: string, ...args: any) {
    if (this.handlers[event]) {
      this.handlers[event].forEach((handler: any) => handler(...args));
    }
  }
}


