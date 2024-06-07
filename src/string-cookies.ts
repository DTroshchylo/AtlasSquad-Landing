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
      .sc-setting-container {
        position: relative;
        padding-bottom: 4em;
        padding-top: 4em;
        background-color: var(--sc-bg, #101214);
        border-radius: var(--sc-border-radius, .6em);
        box-sizing: border-box;
        overflow: hidden;
        max-width: 720px;

        font-size: 1rem;
      }
      .sc-header {
        background-color: var(--sc-bg, #101214);
        border-bottom: 1px solid var(--sc-section-border, #1E1D21);
        display: table;
        height: 4em;
        padding: 0 1em;
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
        width: 2em;
        height: 2em;
      }
      .sc-main-action {
        display: flex;
        margin-top: 1.25em;
        gap: 0.5em;
      }
      .sc-main-action .sc-button {
        flex: 1;
      }
      .sc-c-btn-cont .sc-c-btn:after,
      .sc-c-btn-cont .sc-c-btn:before {
        content: "";
        margin: 0 auto;
        position: absolute;
        transform: rotate(45deg);
        background: var(--sc-button-primary-bg, #B8A5B8);
        border-radius: 1em;
        height: 0.8em;
        left: 0.9em;
        top: 0.6em;
        width: 2px;
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
        padding: 1.5em 1em;
      }
      .sc-settings {
        margin-top: 1em;
      }
      .sc-settings-item .label-container {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        background: var(--sc-cookie-category-block-bg, #101214);
        color: var(--sc-button-secondary-text, #BDAEB9);

        border-bottom: 1px solid var(--sc-cookie-category-block-bg-hover, #1E1D21);
        font-size: 0.9em;
        font-weight: 600;
      }
      .sc-settings-item .label-container:hover {
        border-radius: var(--sc-border-radius, .3em);
        background: var(--sc-cookie-category-block-bg-hover, #1E1D21);
        border-bottom: 1px solid transparent;
      }
      .sc-settings-item label {
        display: flex;
        align-items: center;
      }
      .sc-settings-item .toggle-container {
        position: relative;
        display: inline-block;
        width: calc(var(--sc-toggle-height, 1em) * var(--sc-toggle-width-percent, 1.85));
        height: calc(var(--sc-toggle-height, 1em));
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
        background-color: var(--sc-toggle-bg-off, #544D56);
        transition: .4s;
        border-radius: 34px;
      }
      .sc-settings-item .toggle:before {
        position: absolute;
        content: "";
        height: calc(var(--sc-toggle-height, 1em) - var(--sc-toggle-padding, .15em) * 2);
        width: calc(var(--sc-toggle-height, 1em) - var(--sc-toggle-padding, .15em) * 2);
        left: var(--sc-toggle-padding, .15em);
        bottom: var(--sc-toggle-padding, .15em);
        background-color: var(--sc-toggle-knob-bg, var(--sc-cookie-category-block-bg, #101214));
        transition: .3s var(--f-cubic, ease);
        border-radius: 50%;
      }
      .sc-settings-item .toggle-container input:checked + .toggle {
        background-color: var(--sc-toggle-bg-on, #B8A5B8);
      }
      .sc-settings-item .toggle-container input:checked + .toggle:before {
        background-color: var(--sc-toggle-knob-bg, var(--sc-cookie-category-block-bg, #101214));
        transform: translateX(calc(var(--sc-toggle-height, 1em) * var(--sc-toggle-width-percent, 1.85) - var(--sc-toggle-height, 1em)));
      }
      .sc-settings-item .toggle-label {
        margin-left: .5em;
      }
      .sc-settings-item .sc-dd-a {
        border: solid var(--sc-button-secondary-bg, #544D56);
        border-width: 0 2px 2px 0;
        content: "";
        display: inline-block;
        margin-right: 15px;
        padding: .2em;
        transform: rotate(45deg);
      }
      .sc-settings-item.-opened .label-container {
        background: var(--sc-cookie-category-block-bg-hover, #1E1D21);
        border-top-left-radius: var(--sc-border-radius, .3em);
        border-top-right-radius: var(--sc-border-radius, .3em);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .sc-settings-item .label-container:hover .sc-dd-a {
        border-color: var(--sc-button-secondary-hover-bg, #625C64);
      }
      .sc-settings-item.-opened .label-container .sc-dd-a {
        border-color: var(--sc-button-primary-bg, #B8A5B8);
        transform: rotate(225deg);
      }
      .sc-settings-item.-opened p {
        display: flex;
      }
      .sc-settings-item p {
        padding: 0em 1em 0.75em;
        border-radius: var(--sc-border-radius, .45em);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background: var(--sc-cookie-category-block-bg, #1E1D21);
        display: none;
        box-sizing: border-box;

        font-size: 0.7em;
        color: var(--sc-block-text, #BDAEB9);
      }
      .sc-contact {
        margin-top: 1.5em;
        // padding: 1.25em 0.5em;
        // border-radius: var(--sc-border-radius, .3em);
        // border: 1px solid var(--sc-section-border, #1E1D21);
        // padding: 0.5em rem 0.75em;
        width: 50%;
        margin-left: auto;
        // background: var(--sc-cookie-category-block-bg, #1E1D21);
        // opacity: 0.5;
      }
      // .sc-contact:hover {
      //   opacity: 1;
      // }
      .sc-actions {
        display: flex;
        align-items: center;
        background-color: var(--sc-bg, #101214);
        border-top: 1px solid var(--sc-section-border, #1E1D21);
        bottom: 0;
        height: 4em;
        left: 0;
        padding: 1em;
        position: absolute;
        right: 0;
        box-sizing: border-box;
        z-index: 2;

        gap: 0.5em
      }
      // .sc-actions .sc-button.-primary {
      //   float: left;
      //   margin-right: .5em;
      // }
      .sc-actions .sc-button:nth-child(3) {
        margin-left: auto;
      }

      .sc-container {
        position: fixed;
        left: var(--scm-position-left, initial);
        right: var(--scm-position-right, 1em);
        top: var(--scm-position-top, initial);
        bottom: var(--scm-position-bottom, 1em);
        background-color: var(--sc-bg, #101214);
        padding: 0.8rem 1rem 1rem 1rem;
        border-radius: var(--sc-border-radius, .6rem);
        max-width: 540px;
        font-family: "Manrope", sans-serif;
        font-size: 1rem;
      }
      
      .sc-title {
        color: var(--sc-button-secondary-text, #E6DFE4);
        font-size: 0.9em;
        font-weight: 600;
      }
      .sc-link {
        // border-bottom: 1px solid var(--sc-button-primary-bg, #E6DFE4);
        color: var(--sc-button-primary-bg, #E6DFE4);
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        padding-bottom: 0;
        // text-decoration: none;
        text-decoration: underline;
      }
      .sc-link:hover {
        color: var(--sc-button-primary-bg, #E6DFE4);
        // border-bottom: 1px solid transparent;
        text-decoration: none;
      }
      .sc-description {
        font-size: .7em;
        line-height: 1.5em;
        color: var(--sc-block-text, #BDAEB9);
      }
      .sc-button {
        background: var(--sc-button-secondary-bg, #544D56);
        color: var(--sc-button-secondary-text, #E6DFE4);
        border-radius: var(--sc-button-border-radius, 0.3em);
        padding: 1em 1em;
        font-weight: 600;
        font-size: .7em;

        // transition: background-color 0.15s ease-out;
      }
      .sc-button:hover {
        background: var(--sc-button-secondary-hover-bg, #625C64);
        color: var(--sc-button-secondary-hover-text, #E6DFE4);
      }
      .sc-button.-primary {
        background: var(--sc-button-primary-bg, #B8A5B8);
        color: var(--sc-button-primary-text, #101214);
      }
      .sc-button.-primary:hover {
        background: var(--sc-button-primary-hover-bg, #CABCC9);
        color: var(--sc-button-primary-hover-text, #101214);
      }
      @media (max-width: 1024px) {
        .sc-body {
          max-height: 100%;
        }
        .sc-header {
          height: 3em;
          padding: 0 0.5em;
        }
        .sc-container {
          font-size: 16px;
          left: var(--scm-position-left, 1em);
          right: var(--scm-position-right, 1em);
          bottom: var(--scm-position-bottom, 1em);
        }
        .sc-setting-container {
          height: 100%;
          padding-bottom: 10em;

          font-size: 16px;
        }
        .sc-contact {
          width: initial;
        }
        .sc-actions {
          height: 10em;
          padding: 1em;
          flex-direction: column;
          justify-content: flex-end;
        }
        .sc-body-scroll {
          padding: 1.2em 1em;
        }
        .scs-main-action {
          display: flex;
          flex-direction: column;
        }
        .sc-button {
          width: 100%;
        }
        .sc-settings-item .label-container {
          padding: 0.5em;
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

  use(name: string, config: { accept: Function, deny: Function, description: string, value?: boolean, readOnly?: boolean }) {
    this.settings[name] = config;
  }

  showSettings(settings: any) {
    const { title, description, privacyLink, subtitle, email, contact } = settings;
    const overlay = document.createElement('div');
    overlay.className = 'sc-overlay';

    const container = document.createElement('div');
    container.id = 'cookie-settings-container';
    container.className = 'sc-setting-container';

    const headerEl = document.createElement('div');
    headerEl.classList.add('sc-header');

    const titleEl = document.createElement('div');
    titleEl.classList.add('sc-title');
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
    subtitleEl.className = 'sc-title';
    subtitleEl.innerHTML = subtitle || 'Subtitle';

    const descEl = document.createElement('div');
    descEl.className = 'sc-description';
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
      const inputContainer = document.createElement('div');
      inputContainer.classList.add('toggle-container');
      const inputToggle = document.createElement('div');
      inputToggle.classList.add('toggle');
      const inputLabel = document.createElement('div');
      inputLabel.innerHTML = key;
      inputLabel.classList.add('toggle-label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = value.value;
      checkbox.setAttribute('data-key', key);
      checkbox.onchange = (event) => {
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
    // const contactTitle = document.createElement('div');
    // contactTitle.className = 'sc-title';
    // contactTitle.innerHTML = contact?.title || 'Contact title';
    // contactContainer.appendChild(contactTitle);
    const contactDescription = document.createElement('div');
    contactDescription.className = 'sc-description';
    contactDescription.innerHTML = contact?.description || 'For any queries in relation to our policy on cookies and your choices, please ';
    if (email) {
      const link = document.createElement('a');
      link.href = `mailto:${email}`;
      link.innerHTML = 'contact us';
      link.className = 'sc-link';
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
    acceptButton.className = 'sc-button -primary';
    acceptButton.onclick = () => {
      this.acceptAll();
      document.body.removeChild(d.getElementById('cookie-consent-container'));
      document.body.removeChild(overlay);
    };

    const denyButton = document.createElement('button');
    denyButton.innerHTML = 'Reject all';
    denyButton.className = 'sc-button';
    denyButton.onclick = () => {
      this.deny();
      document.body.removeChild(d.getElementById('cookie-consent-container'));
      document.body.removeChild(overlay);
    };

    const saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save Settings';
    saveButton.className = 'sc-button';
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
      if (d.getElementById('cookie-consent-container') != null) {
        document.body.removeChild(d.getElementById('cookie-consent-container'));
      }

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
    container.className = 'sc-container';

    const header = document.createElement('div');
    header.classList.add('sc-title');
    header.innerHTML = title || 'Cookie Consent';
    container.appendChild(header);

    const desc = document.createElement('div');
    desc.className = 'sc-description';
    desc.innerHTML = description || 'We use cookies to improve your experience on our site. ';

    const advancedSettingsButton = document.createElement('button');
    advancedSettingsButton.id = 'sc-m-open-advanced';
    advancedSettingsButton.className = 'sc-link';
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
    mainActionsContainer.className = 'sc-main-action';

    const acceptButton = document.createElement('button');
    acceptButton.innerHTML = 'Accept All';
    acceptButton.className = 'sc-m-accept-all sc-button -primary';
    acceptButton.onclick = () => {
      this.acceptAll();
      document.body.removeChild(container);
    };

    const denyButton = document.createElement('button');
    denyButton.innerHTML = 'Reject all';
    denyButton.className = 'sc-m-deny-all sc-button';
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
""