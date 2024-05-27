let d: any = null
let w: any = null

class StringCookies {
  private static instance: StringCookies;
  private localStorage: Storage;

  private onAcceptEvents: Array<Function> = [];
  private onAcceptAllEvents: Array<Function> = [];
  private onDeniedEvents: Array<Function> = [];
  private onSettingsChangeEvents: Array<Function> = [];
  private onSaveSettingsEvents: Array<Function> = [];
  private onOpenSettingsEvents: Array<Function> = [];

  private cookieConsent: string = "";
  private settings: any = {};

  private constructor() {
    d = document;
    w = window;
    this.localStorage = localStorage;
    this.addGoogleFonts();
    this.injectStyles();
  }

  public static getInstance(): StringCookies {
    if (!StringCookies.instance) {
      StringCookies.instance = new StringCookies();
    }
    return StringCookies.instance;
  }

  private injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
      .sc-overlay {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100000000;
        font-family: "Manrope", sans-serif;
        font-optical-sizing: auto;
      }
      .sc-container {
        position: relative;
        padding-bottom: 4rem;
        padding-top: 4rem;
        background-color: var(--sc-bg, #181b1d);
        box-shadow: var(--sc-consent-modal-box-shadow, 0 0.625rem 1.875rem rgba(2, 2, 3, .28));
        border-radius: var(--sc-border-radius, .45rem);
        box-sizing: border-box;
        overflow: hidden;
        max-width: 720px;
      }
      .sc-header {
        background-color: var(--sc-bg, #181b1d);
        border-bottom: 1px solid var(--sc-section-border, #292d31);
        display: table;
        height: 4rem;
        padding: 0 1.6rem;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 2;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .sc-c-btn-cont .sc-c-btn {
        position: relative;
        width: 1.7rem;
        height: 1.7rem;
        background: var(--sc-btn-secondary-bg, #33383c);
        border-radius: var(--sc-btn-border-radius, 0.375rem);
      }
      .sc-m-main-action {
        display: flex;
      }
      .sc-m-main-action .sc-btn{
        flex: 1;
        margin-top: 1rem;
      }
      .sc-m-main-action .sc-btn:nth-child(1){
        float: left;
        margin-right: .5rem;
      }
      .sc-c-btn-cont .sc-c-btn:after,
      .sc-c-btn-cont .sc-c-btn:before {
        content: "";
        margin: 0 auto;
        position: absolute;
        transform: rotate(45deg);
        background: var(--sc-btn-secondary-text, #d8e5ea);
        border-radius: 1rem;
        height: .6rem;
        left: .82rem;
        top: .58rem;
        width: 1.5px;
      }
      .sc-c-btn-cont .sc-c-btn:after {
        transform: rotate(-45deg);
      }
      .sc-body {
        max-height: 60vh;
        overflow: auto;
      }
      .sc-body-scroll {
        box-sizing: border-box;
        padding: 1.3rem 1.6rem;
      }
      .sc-settings {
        margin-top: 1rem;
      }
      .sc-settings-item {
        margin-bottom: 1rem;
      }
      .sc-settings-item .label-container {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .75rem 1.5rem;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        border-radius: var(--sc-border-radius, .45rem);
        background: var(--sc-cookie-category-block-bg, #23272a);
        color: var(--sc-btn-secondary-text, #d8e5ea);
        font-size: 1.05em;
        font-weight: 600;
      }
      .sc-settings-item .label-container:hover {
        background: var(--sc-cookie-category-block-bg-hover, #2b3035);
      }
      .sc-settings-item label {
        display: flex;
        align-items: center;
        opacity: .75;
      }
      .sc-settings-item label.-active {
        display: flex;
        align-items: center;
        opacity: 1;
      }
      .sc-settings-item .toggle-container {
        position: relative;
        display: inline-block;
        width: calc(var(--sc-toggle-height, 1rem) * var(--sc-toggle-width-percent, 1.85));
        height: calc(var(--sc-toggle-height, 1rem));
      }
      .sc-settings-item .toggle-container input {
        display: none;
      }
      .sc-settings-item .toggle {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--sc-toggle-bg-off, #667481);
        transition: .4s;
        border-radius: 34px;
      }
      .sc-settings-item .toggle:before {
        position: absolute;
        content: "";
        height: calc(var(--sc-toggle-height, 1rem) - var(--sc-toggle-padding, .15rem) * 2);
        width: calc(var(--sc-toggle-height, 1rem) - var(--sc-toggle-padding, .15rem) * 2);
        left: var(--sc-toggle-padding, .15rem);
        bottom: var(--sc-toggle-padding, .15rem);
        background-color: var(--sc-toggle-knob-bg, var(--sc-cookie-category-block-bg, #23272a));
        transition: .3s var(--f-cubic, ease);
        border-radius: 50%;
      }
      .sc-settings-item label.-active .toggle-container input:checked + .toggle {
        background-color: var(--sc-toggle-bg-on, #a6c4dd);
      }
      .sc-settings-item label.-readonly .toggle-container input + .toggle {
        background-color: var(--sc-toggle-bg-on, #a6c4dd);
      }
      .sc-settings-item label.-active .toggle-container input:checked + .toggle:before {
        background-color: var(--sc-toggle-knob-bg, var(--sc-cookie-category-block-bg, #23272a));
        transform: translateX(calc(var(--sc-toggle-height, 1rem) * var(--sc-toggle-width-percent, 1.85) - var(--sc-toggle-height, 1rem)));
      }
      .sc-settings-item label.-readonly .toggle-container .toggle:before {
        background-color: var(--sc-toggle-knob-bg, var(--sc-cookie-category-block-bg, #23272a));
        transform: translateX(calc(var(--sc-toggle-height, 1rem) * var(--sc-toggle-width-percent, 1.85) - var(--sc-toggle-height, 1rem)));
      }
      .sc-settings-item .toggle-label {
        margin-left: .5rem;
      }
      .sc-settings-item .sc-dd-a {
        border: solid var(--sc-btn-secondary-text, #d8e5ea);
        border-width: 0 2px 2px 0;
        content: "";
        display: inline-block;
        margin-right: 15px;
        padding: .2em;
        transform: rotate(45deg);
      }
      .sc-settings-item.-opened .label-container {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .sc-settings-item.-opened .sc-dd-a {
        transform: rotate(225deg);
      }
      .sc-settings-item.-opened p {
        display: flex;
      }
      .sc-settings-item p {
        padding: .75rem 1.5rem;
        border-radius: var(--sc-border-radius, .45rem);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background: var(--sc-cookie-category-block-bg, #23272a);
        display: none;
        box-sizing: border-box;
      }
      .sc-contact {
        border-radius: var(--sc-border-radius, .45rem);
        border: 1px solid var(--sc-section-border, #292d31);
        padding: .75rem;
      }
      .sc-contact:hover {
        background: var(--sc-cookie-category-block-bg, #23272a);
      }
      .sc-actions {
        display: flex;
        align-items: center;
        background-color: var(--sc-bg, #181b1d);
        border-top: 1px solid var(--sc-section-border, #292d31);
        bottom: 0;
        height: 4rem;
        left: 0;
        padding: 1em 1.6rem;
        position: absolute;
        right: 0;
        box-sizing: border-box;
        z-index: 2;
      }
      .sc-actions .sc-btn.-prm {
        float: left;
        margin-right: .5rem;
      }
      .sc-actions .sc-btn:nth-child(3) {
        margin-left: auto;
      }
      .sc-m-container {
        position: fixed;
        left: var(--scm-position-left, initial);
        right: var(--scm-position-right, 1rem);
        top: var(--scm-position-top, initial);
        bottom: var(--scm-position-bottom, 1rem);
        background-color: var(--sc-bg, #181b1d);
        padding: 1rem 1.4rem 1.3rem;
        box-shadow: var(--sc-consent-modal-box-shadow, 0 0.625rem 1.875rem rgba(2, 2, 3, .28));
        border-radius: var(--sc-border-radius, .45rem);
        max-width: 360px;
        font-family: "Manrope", sans-serif;
      }
      
      .sc-ttl {
        color: var(--sc-btn-secondary-text, #d8e5ea);
        font-size: 1.05em;
        font-weight: 600;
      }
      .sc-lnk {
        border-bottom: 1px solid var(--sc-btn-primary-bg, #a6c4dd);
        color: var(--sc-btn-primary-bg, #a6c4dd);
        cursor: pointer;
        display: inline;
        font-weight: 600;
        padding-bottom: 0;
        text-decoration: none;
      }
      .sc-lnk:hover {
        color: var(--sc-btn-primary-bg, #a6c4dd);
        border-bottom: 0px solid var(--sc-btn-primary-bg, #a6c4dd);
      }
      .sc-txt {
        font-size: .9em;
        line-height: 1.5em;
        color: var(--sc-block-text, #b3bfc5);
      }
      .sc-btn {
        background: var(--sc-btn-secondary-bg, #33383c);
        color: var(--sc-btn-secondary-text, #d8e5ea);
        border-radius: var(--sc-btn-border-radius, 0.375rem);
        padding: 12px 20px;
        font-weight: 600;
      }
      .sc-btn:hover {
        background: var(--sc-btn-secondary-hover-bg, #3e454a);
        color: var(--sc-btn-secondary-hover-text, #d8e5ea);
      }
      .sc-btn.-prm {
        background: var(--sc-btn-primary-bg, #a6c4dd);
        color: var(--sc-btn-primary-text, #000);
      }
      .sc-btn.-prm:hover {
        background: var(--sc-btn-primary-hover-bg, #c2dff7);
        color: var(--sc-btn-primary-hover-text, #000);
      }
      @media (max-width: 1024px) {
        .sc-body{
          max-height: 100%;
        }
        .sc-header{
          padding: 0 1rem;
        }
        .sc-m-container {
          left: var(--scm-position-left, 1rem);
          right: var(--scm-position-right, 1rem);
          bottom: var(--scm-position-bottom, 1rem);
        }
        .sc-container{
          height: 100%;
          padding-bottom: 8.5rem;
        }
        .sc-actions{
          height: 8.5rem;
          padding: 1em 1rem;
          flex-direction: column;
          justify-content: space-between;
        }
        .sc-body-scroll{
          padding: 1.3rem 1rem;
        }
        .scs-main-action{
          display: flex;
          flex-direction: column;
        }
        .sc-actions .sc-btn{
          margin: 0 !important;
          width: 100%;
        }
        .sc-settings-item .label-container{
          padding: .75rem .75rem .75rem 1rem;
        }
        .sc-settings-item p{
          padding: .75rem 1rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private addGoogleFonts() {
    const head = document.head;

    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous'; // додаємо атрибут crossorigin
    head.appendChild(preconnect2);

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap';
    head.appendChild(fontLink);
  }

  acceptAll() {
    this.cookieConsent = "acceptAll";
    this.localStorage.setItem('cookieConsent', 'acceptAll');
    this.onAcceptAllEvents.forEach((event) => event());
  }

  accept() {
    this.cookieConsent = "accept";
    this.localStorage.setItem('cookieConsent', 'accept');
    this.onAcceptEvents.forEach((event) => event());
  }

  deny() {
    this.cookieConsent = "deny";
    this.localStorage.setItem('cookieConsent', 'deny');
    this.onDeniedEvents.forEach((event) => event());
    this.deleteAllCookies();
  }

  check() {
    const cookieConsentInStorage = this.localStorage.getItem('cookieConsent');
    if (cookieConsentInStorage != null) {
      this.cookieConsent = cookieConsentInStorage;
    }
    switch (this.cookieConsent) {
      case "accept":
        this.accept();
        break;
      case "acceptAll":
        this.acceptAll();
        break;
      case "deny":
        this.deny();
        break;
    }
  }

  set(name: string, value: string, options: any = {}) {
    if (this.cookieConsent === "deny") {
      console.warn(`An attempt to write a cookie without the user's consent`);
      return;
    }
    options = { path: '/', ...options };
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (const optionKey in options) {
      updatedCookie += "; " + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
    document.cookie = updatedCookie;
  }

  get(name: string) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  has(name: string) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches;
  }

  delete(name: string) {
    this.set(name, "", { 'max-age': -1 });
  }

  on(type: "accept" | "deny" | "acceptAll" | "settingsChange" | "saveSettings" | "openSettings", event: Function) {
    switch (type) {
      case "accept":
        this.onAcceptEvents.push(event);
        break;
      case "acceptAll":
        this.onAcceptAllEvents.push(event);
        break;
      case "deny":
        this.onDeniedEvents.push(event);
        break;
      case "settingsChange":
        this.onSettingsChangeEvents.push(event);
        break;
      case "saveSettings":
        this.onSaveSettingsEvents.push(event);
        break;
      case "openSettings":
        this.onOpenSettingsEvents.push(event);
        break;
    }
  }

  private deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  use(name: string, config: { accept: Function, deny: Function, description: string, readOnly?: boolean }) {
    this.settings[name] = config;
  }

  showSettings(settings: any) {
    const { title, description, privacyLink, subtitle, email, contact } = settings;
    const overlay = document.createElement('div');
    overlay.className = 'sc-overlay';

    const container = document.createElement('div');
    container.id = 'cookie-settings-container';
    container.className = 'sc-container';

    const headerEl = document.createElement('div');
    headerEl.classList.add('sc-header');

    const titleEl = document.createElement('div');
    titleEl.classList.add('sc-ttl');
    titleEl.innerHTML = title || 'Cookie Settings';

    const closeButtonContainerEl = document.createElement('div');
    closeButtonContainerEl.classList.add('sc-c-btn-cont');
    const closeButtonEl = document.createElement('button');
    closeButtonEl.classList.add('sc-c-btn');
    closeButtonEl.onclick = () => {
      document.body.removeChild(overlay);
    };
    closeButtonContainerEl.appendChild(closeButtonEl);
    headerEl.appendChild(titleEl);
    headerEl.appendChild(closeButtonContainerEl);
    container.appendChild(headerEl);

    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'sc-ttl';
    subtitleEl.innerHTML = subtitle || 'Subtitle';

    const descEl = document.createElement('div');
    descEl.className = 'sc-txt';
    descEl.innerHTML = description || 'We use cookies to improve your experience on our site. Please review and accept cookies.';
    if (privacyLink) {
      const link = document.createElement('a');
      link.href = privacyLink;
      link.innerHTML = 'Privacy Policy';
      link.target = '_blank';
      descEl.appendChild(link);
    }

    const bodyContainer = document.createElement('div');
    bodyContainer.className = 'sc-body';

    const bodyScrollContainer = document.createElement('div');
    bodyScrollContainer.className = 'sc-body-scroll';

    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'sc-settings';
    const settingsObject: any = Object.entries(this.settings);

    for (const [key, value] of settingsObject) {
      const checkboxContainer = document.createElement('div');
      checkboxContainer.classList.add('sc-settings-item');
      const labelContainer = document.createElement('div');
      labelContainer.classList.add('label-container');
      labelContainer.addEventListener('click', () => {
        checkboxContainer.classList.toggle('-opened');
      });

      const label = document.createElement('label');
      if (value.readOnly == null || value.readOnly == false) {
        label.classList.add('-active');
      } else {
        label.classList.add('-readonly');
      }
      const inputContainer = document.createElement('div');
      inputContainer.classList.add('toggle-container');
      const inputToggle = document.createElement('div');
      inputToggle.classList.add('toggle');
      const inputLabel = document.createElement('div');
      inputLabel.innerHTML = key;
      inputLabel.classList.add('toggle-label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.readOnly = value.readOnly;
      checkbox.checked = true;
      checkbox.setAttribute('data-key', key);
      checkbox.onchange = (event) => {
        if (value.readOnly == true) {
          event.preventDefault()
          return false;
        }


        if ((event.target as HTMLInputElement).checked) {
          value.accept();
        } else {
          value.deny();
        }
        this.onSettingsChangeEvents.forEach((event: Function) => {
          event();
        });
      };

      const desc = document.createElement('p');
      desc.innerHTML = value.description;

      inputContainer.appendChild(checkbox);
      inputContainer.appendChild(inputToggle);
      label.appendChild(inputContainer);
      label.appendChild(inputLabel);
      labelContainer.appendChild(label);

      const dropdownArrow = document.createElement('div');
      dropdownArrow.classList.add('sc-dd-a');
      labelContainer.appendChild(dropdownArrow);

      checkboxContainer.appendChild(labelContainer);
      checkboxContainer.appendChild(desc);
      settingsContainer.appendChild(checkboxContainer);
    }

    const contactContainer = document.createElement('div');
    contactContainer.className = 'sc-contact';
    const contactTitle = document.createElement('div');
    contactTitle.className = 'sc-ttl';
    contactTitle.innerHTML = contact?.title || 'Contact title';
    contactContainer.appendChild(contactTitle);
    const contactDescription = document.createElement('div');
    contactDescription.className = 'sc-txt';
    contactDescription.innerHTML = contact?.description || 'For any queries in relation to our policy on cookies and your choices, please ';
    if (email) {
      const link = document.createElement('a');
      link.href = `mailto:${email}`;
      link.innerHTML = 'contact us';
      link.className = 'sc-lnk';
      contactDescription.appendChild(link);
    }
    contactContainer.appendChild(contactDescription);

    bodyScrollContainer.appendChild(subtitleEl);
    bodyScrollContainer.appendChild(descEl);
    bodyScrollContainer.appendChild(settingsContainer);
    bodyScrollContainer.appendChild(contactContainer);
    bodyContainer.appendChild(bodyScrollContainer);

    container.appendChild(bodyContainer);

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'sc-actions';

    const acceptButton = document.createElement('button');
    acceptButton.innerHTML = 'Accept All';
    acceptButton.className = 'sc-btn -prm';
    acceptButton.onclick = () => {
      this.acceptAll();
      document.body.removeChild(d.getElementById('cookie-consent-container'));
      document.body.removeChild(overlay);
    };

    const denyButton = document.createElement('button');
    denyButton.innerHTML = 'Reject all';
    denyButton.className = 'sc-btn';
    denyButton.onclick = () => {
      this.deny();
      document.body.removeChild(d.getElementById('cookie-consent-container'));
      document.body.removeChild(overlay);
    };

    const saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save Settings';
    saveButton.className = 'sc-btn';
    saveButton.onclick = () => {
      const enabledSettings = Object.keys(this.settings).filter(key => {
        const checkbox = settingsContainer.querySelector(`input[type="checkbox"][data-key="${key}"]`) as HTMLInputElement;
        return checkbox && checkbox.checked;
      });
      const disabledSettings = Object.keys(this.settings).filter(key => {
        const checkbox = settingsContainer.querySelector(`input[type="checkbox"][data-key="${key}"]`) as HTMLInputElement;
        return checkbox && !checkbox.checked;
      });
      this.onSaveSettingsEvents.forEach((event: Function) => {
        event({ enabled: enabledSettings, disabled: disabledSettings });
      });
      document.body.removeChild(d.getElementById('cookie-consent-container'));
      document.body.removeChild(overlay);
    };


    actionsContainer.appendChild(acceptButton);
    actionsContainer.appendChild(denyButton);
    actionsContainer.appendChild(saveButton);

    container.appendChild(actionsContainer);
    overlay.appendChild(container);
    document.body.appendChild(overlay);
  }

  show(title: string, description: string) {
    const container = document.createElement('div');
    container.id = 'cookie-consent-container';
    container.className = 'sc-m-container';

    const header = document.createElement('div');
    header.classList.add('sc-ttl');
    header.innerHTML = title || 'Cookie Consent';
    container.appendChild(header);

    const desc = document.createElement('div');
    desc.className = 'sc-txt';
    desc.innerHTML = description || 'We use cookies to improve your experience on our site. ';

    const advancedSettingsButton = document.createElement('button');
    advancedSettingsButton.id = 'sc-m-open-advanced';
    advancedSettingsButton.className = 'sc-lnk';
    advancedSettingsButton.innerHTML = 'Customize Settings';
    advancedSettingsButton.onclick = () => {
      this.onOpenSettingsEvents.forEach((event: Function) => {
        event();
      });
    };

    desc.appendChild(advancedSettingsButton);
    container.appendChild(desc);

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'sc-m-actions';
    const mainActionsContainer = document.createElement('div');
    mainActionsContainer.className = 'sc-m-main-action';

    const acceptButton = document.createElement('button');
    acceptButton.innerHTML = 'Accept All';
    acceptButton.className = 'sc-m-accept-all sc-btn -prm';
    acceptButton.onclick = () => {
      this.acceptAll();
      document.body.removeChild(container);
    };

    const denyButton = document.createElement('button');
    denyButton.innerHTML = 'Reject all';
    denyButton.className = 'sc-m-deny-all sc-btn';
    denyButton.onclick = () => {
      this.deny();
      document.body.removeChild(container);
    };

    mainActionsContainer.appendChild(acceptButton);
    mainActionsContainer.appendChild(denyButton);

    actionsContainer.appendChild(mainActionsContainer);
    container.appendChild(actionsContainer);
    document.body.appendChild(container);
  }
}

export default StringCookies;
