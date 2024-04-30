let d: any = null
let w: any = null

function attr(e: any, n: string, d: any = null) {
  return e.getAttribute(n) == null ? d : e.getAttribute(n)
}

class StringCookies {
  private static instance: StringCookies;
  private localStorage: Storage

  private onAcceptEvents: Array<Function> = new Array<Function>()
  private onAcceptAllEvents: Array<Function> = new Array<Function>()
  private onDeniedEvents: Array<Function> = new Array<Function>()

  private cookieConsent: string = ""

  private constructor() {
    d = document
    w = window
    this.localStorage = localStorage
  }

  public static getInstance(): StringCookies {
    if (!StringCookies.instance) {
      StringCookies.instance = new StringCookies();
    }
    return StringCookies.instance;
  }

  acceptAll() {
    this.cookieConsent = "acceptAll"
    this.localStorage.setItem('cookieConsent', 'acceptAll')
    this.onAcceptAllEvents.forEach((event: Function) => {
      event()
    });
  }

  accept() {
    this.cookieConsent = "accept"
    this.localStorage.setItem('cookieConsent', 'accept')
    this.onAcceptEvents.forEach((event: Function) => {
      event()
    });
  }

  denied() {
    this.cookieConsent = "denied"
    this.localStorage.setItem('cookieConsent', 'denied')
    this.onDeniedEvents.forEach((event: Function) => {
      event()
    });
    this.deleteAllCookies()
  }

  check() {
    let cookieConsentInStorage = this.localStorage.getItem('cookieConsent')
    if (cookieConsentInStorage != null) {
      this.cookieConsent = cookieConsentInStorage
    }
    switch (this.cookieConsent) {
      case "accept":
        this.accept()
        break;
      case "acceptAll":
        this.acceptAll()
        break;
      case "denied":
        this.denied()
        break;
    }
  }

  set(name: string, value: string, options: any = {}) {
    if (this.cookieConsent == "denied") {
      console.warn(`An attempt to write a cookie without the user's consent`)
    }
    options = {
      path: '/',
      ...options
    };
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
    document.cookie = updatedCookie;
  }
  get(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  has(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches
  }
  delete(name: string) {
    this.set(name, "", {
      'max-age': -1
    })
  }

  on(type: "accept" | "denied" | "acceptAll", event: Function) {
    switch (type) {
      case "accept":
        this.onAcceptEvents.push(event)
        break;
      case "acceptAll":
        this.onAcceptAllEvents.push(event)
        break;
      case "denied":
        this.onDeniedEvents.push(event)
        break;
    }

  }

  private deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

}

export default StringCookies