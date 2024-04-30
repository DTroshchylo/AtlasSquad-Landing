let d: any = null
let w: any = null
function attr(e: any, n: string, d: any = null) {
  return e.getAttribute(n) == null ? d : e.getAttribute(n)
}
interface iStringStorageContainer {
  get(key: string, value?: string): string
  set(key: string, value: string, expire: any): void
  has(key: string): boolean
  delete(key: string): void
}
interface StringStorageTime {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  months?: number;
  years?: number;
}

class StringLocalStorage implements iStringStorageContainer {
  storage: Storage;
  constructor(storage: Storage) {
    this.storage = storage;
  }
  get(key: string, value: string = ""): string {
    this.checkTimestamp(key);
    let storedValue = this.storage.getItem(key);
    if (storedValue == null) {
      return value;
    } else {
      let parsedValue = JSON.parse(storedValue);
      return parsedValue.value;
    }
  }
  set(key: string, value: string, expire: StringStorageTime = { days: 30 }): void {
    let expireTimestamp = this.getTimestamp(expire);
    this.storage.setItem(key, JSON.stringify({
      timestamp: expireTimestamp,
      value: value
    }));
  }
  has(key: string): boolean {
    this.checkTimestamp(key);
    return this.storage.getItem(key) !== null;
  }
  delete(key: string): void {
    this.storage.removeItem(key);
  }
  private getTimestamp(expire: StringStorageTime): number {
    let date = new Date();
    if (expire.seconds) date.setSeconds(date.getSeconds() + expire.seconds);
    if (expire.minutes) date.setMinutes(date.getMinutes() + expire.minutes);
    if (expire.hours) date.setHours(date.getHours() + expire.hours);
    if (expire.days) date.setDate(date.getDate() + expire.days);
    if (expire.months) date.setMonth(date.getMonth() + expire.months);
    if (expire.years) date.setFullYear(date.getFullYear() + expire.years);
    return date.getTime();
  }
  private checkTimestamp(key: string): void {
    let storedItem = this.storage.getItem(key);
    if (!storedItem) return;

    let { timestamp } = JSON.parse(storedItem);
    let now = new Date().getTime();
    if (timestamp < now) {
      this.delete(key);
    }
  }
}

class StringStorage {
  private static instance: StringStorage;
  private _local: StringLocalStorage = new StringLocalStorage(localStorage)
  public get local() {
    return this._local;
  }
  private _session: StringLocalStorage = new StringLocalStorage(sessionStorage)
  public get session() {
    return this._session;
  }
  private constructor() {
    d = document
    w = window

    d.querySelectorAll('[data-string-storage]').forEach((form: any) => {
      const inputChange = (input: any) => {
        let inputId = input.getAttribute('data-string-id')
        if (inputId == null) { return }
        let storageInputValue = this.local.get(`__string-input-${inputId}`)
        if (input.getAttribute(`data-string-storage-disable`) == null) {
          input.value = storageInputValue
          if (storageInputValue) {
            let event = new Event('focusout');
            input.dispatchEvent(event);
          }
          input.addEventListener('keydown', () => {
            setTimeout(() => {
              this.local.set(`__string-input-${inputId}`, input.value)
            }, 0);
          })
        }
      }
      form.querySelectorAll(`input`).forEach(inputChange)
      form.querySelectorAll(`textarea`).forEach(inputChange)
      form.querySelectorAll(`select`).forEach((select: any) => {
        let inputId = select.getAttribute('data-string-id')
        if (inputId == null) { return }
        let storageInputValue = this.local.get(`__string-input-${inputId}`)
        select.value = storageInputValue
        select.addEventListener('change', () => {
          setTimeout(() => {
            this.local.set(`__string-input-${inputId}`, select.value)
          }, 0);
        })
      })

      const removeEvent = (element: any) => {
        let inputId = element.getAttribute('data-string-id')
        if (inputId == null) { return }
        this.local.delete(`__string-input-${inputId}`)
      }

      form.addEventListener('submit', (event: Event) => {
        form.querySelectorAll(`input`).forEach(removeEvent)
        form.querySelectorAll(`textarea`).forEach(removeEvent)
        form.querySelectorAll(`select`).forEach(removeEvent)
      });
    })
  }
  public static getInstance(): StringStorage {
    if (!StringStorage.instance) {
      StringStorage.instance = new StringStorage();
    }
    return StringStorage.instance;
  }
}

export default StringStorage