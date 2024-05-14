let d: any = null
let w: any = null

function attr(e: any, n: string, d: any = null) {
  return e.getAttribute(n) == null ? d : e.getAttribute(n)
}

interface IStringSplitConfig {
  text: string;
  align: string;
  globalAlign: string;
  mode: string;
  processor?: (spanElement: HTMLSpanElement, charIndex: number, charCount: number) => void;
  abs?: boolean;
}

class StringSplit {
  private static instance: StringSplit;

  private constructor() {
    d = document
    w = window

    this.splitByAttribute()
    this.onMutationObserver()
  }

  public static getInstance(): StringSplit {
    if (!StringSplit.instance) {
      StringSplit.instance = new StringSplit();
    }

    return StringSplit.instance;
  }

  public split(config: IStringSplitConfig): any {
    if (config.text.length === 0) return "";
    config.text = this.decodeHtmlEntity(config.text)
    const element = document.createElement('span');
    const words = config.text.split(' ');

    const textWithoutSpace = config.text.replace(/\s/g, "")

    let globalCharIndex = 0;
    if (config.globalAlign == 'right') {
      globalCharIndex -= textWithoutSpace.length - 1
    }
    if (config.globalAlign == 'center') {
      globalCharIndex -= Math.round(textWithoutSpace.length / 2) - 1
    }


    const randomizedIndices = config.mode == "random" ? this.createRandomIndices(config.text.length) : null;
    let charsCount = 0
    words.forEach((word, wordIndex) => {
      const randomizedWordIndices = config.mode == "random" ? this.createRandomIndices(word.length) : null;
      let wordData = this.createWordSpan(word, wordIndex, globalCharIndex, randomizedIndices, randomizedWordIndices, config)
      const wordSpan = wordData.element;
      element.appendChild(wordSpan);
      charsCount += wordData.charCount
      globalCharIndex += word.length;
      if (wordIndex !== words.length - 1) {
        wordSpan.appendChild(this.createSpaceSpan());
      }
    });
    return {
      html: element.innerHTML,
      wordsCount: words.length,
      charsCount: charsCount
    };
  }

  private onMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          this.splitByAttribute()
        }
      });
    });
    const config = {
      attributes: true,
      childList: true,
      subtree: true
    };
    observer.observe(document.body, config);
  }

  private splitByAttribute() {
    d.querySelectorAll('[data-string-split]').forEach((element: any) => {
      if (element.classList.contains('-splited') == false) {
        element.classList.add('-splited')
        let isAbs = attr(element, "data-string-split-abs", false)
        if (isAbs == "") {
          isAbs = true
        }
        element.innerHTML = this.split({
          text: element.innerHTML,
          abs: isAbs,
          align: attr(element, "data-string-split-align", "left"),
          globalAlign: attr(element, "data-string-split-global-align", "left"),
          mode: attr(element, "data-string-split-mode", "default"),
        }).html
      }
    });
  }

  private createWordSpan(word: string, wordIndex: number, startCharIndex: number, randomizedIndices: number[] | null, randomizedWordIndices: number[] | null, config: IStringSplitConfig): any {
    const span = document.createElement('span');
    span.classList.add('-s-word');
    let wordArray = Array.from(word)

    let charIndexInWord = 0
    if (config.align == 'right') {
      charIndexInWord -= word.length - 1
    }
    if (config.align == 'center') {
      charIndexInWord -= Math.round(word.length / 2) - 1
    }

    wordArray.forEach((char, charIndex) => {


      let localCharIndex = charIndexInWord + charIndex
      let globalCharIndex = startCharIndex + charIndex

      if (config.abs != null && config.abs) {
        localCharIndex = Math.abs(localCharIndex)
        globalCharIndex = Math.abs(globalCharIndex)
      }


      const charSpan = this.createCharSpan(char, startCharIndex, globalCharIndex, localCharIndex, randomizedIndices, randomizedWordIndices);



      span.appendChild(charSpan);
      if (config['processor']) {
        config['processor'](charSpan, charIndex, word.length);
      }
    });

    span.style.setProperty('--word-index', String(wordIndex))
    span.style.setProperty('--char-count', String(wordArray.length))

    return {
      element: span,
      charCount: wordArray.length
    }

  }

  private createCharSpan(char: string, startCharIndex: number, globalCharIndex: number, charIndex: number, randomizedIndices: number[] | null, randomizedWordIndices: number[] | null): HTMLSpanElement {
    const span = document.createElement('span');
    span.innerText = char;
    span.classList.add('-s-char');

    if (randomizedIndices && randomizedWordIndices) {
      span.style.setProperty('--global-char-index', String(randomizedIndices[globalCharIndex]));
      span.style.setProperty('--char-index', String(randomizedWordIndices[charIndex]));
      // span.style.setProperty('--char-random-index', String(randomizedIndices[startCharIndex + charIndex]));
    } else {
      span.style.setProperty('--global-char-index', String(globalCharIndex));
      span.style.setProperty('--char-index', String(charIndex));
    }
    return span;
  }

  private createSpaceSpan(): HTMLSpanElement {
    const spaceSpan = document.createElement('span');
    spaceSpan.innerHTML = '\u00a0';

    return spaceSpan;
  }

  private createRandomIndices(size: number): number[] {
    const indices = Array.from({ length: size }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }

  private decodeHtmlEntity(str: string) {
    return str.replace(/&amp;/g, '&')
  };
}

export default StringSplit