let d: any = null
let w: any = null
function attr(e: any, n: string, d: any = null) {
  return e.getAttribute(n) == null ? d : e.getAttribute(n)
}
class StringValidationInput {
  validation: Function
  valid: boolean
  errorMessage: string
  constructor(validation: Function, valid: boolean, errorMessage: string) {
    this.validation = validation
    this.valid = valid
    this.errorMessage = errorMessage
  }
}
class StringInput {
  id: string
  el: HTMLInputElement
  valid: boolean
  errorMessage: string
  validations: Array<StringValidationInput>
  errorEl?: Element

  constructor(id: string, el: HTMLInputElement, validations: Array<StringValidationInput>, errorEl?: HTMLElement) {
    this.id = id
    this.el = el
    this.errorMessage = ""
    this.valid = false
    this.validations = validations
    if (errorEl != null) {
      this.errorEl = errorEl
    }
  }

  enableInput() {
    this.el.classList.remove('-valid')
    this.el.classList.remove('-invalid')
    this.el.classList.add('-focus')
  }

  validate() {
    let isValid = true

    this.el.classList.remove('-focus')
    this.validations.forEach((validation: StringValidationInput) => {
      validation.valid = validation.validation(this.el.value)
      this.valid = validation.valid
      this.el.classList.remove('-valid')
      this.el.classList.remove('-invalid')
      if (validation.valid == false) {
        isValid = false
        this.errorMessage = validation.valid ? '' : validation.errorMessage
      }
    });

    if (!isValid) {
      this.el.classList.add('-invalid')
      if (this.errorEl != null) {
        this.errorEl.classList.add('-show')
      }
    } else {
      this.el.classList.add('-valid')
      this.errorMessage = ``
      if (this.errorEl != null) {
        this.errorEl.classList.remove('-show')
      }
    }
    if (this.errorEl != null) {
      this.errorEl.innerHTML = this.errorMessage
    }
    return isValid
  }

}
class StringForm {
  id: string
  inputs: Array<StringInput>

  constructor(id: string, inputs: Array<StringInput>) {
    this.id = id
    this.inputs = inputs
  }

  validate() {
    let isValid = true

    this.inputs.forEach((input: StringInput) => {
      let inputValid = input.validate()
      if (inputValid == false) {
        isValid = false
      }
    });

    return isValid
  }
}
class StringValidation {
  private static instance: StringValidation;
  private globalId: number = 0
  private forms: Array<StringForm> = new Array<StringForm>()
  private constructor() {
    d = document
    w = window
    this.setValidationByAttribute()
    this.onMutationObserver()
  }
  public static getInstance(): StringValidation {
    if (!StringValidation.instance) {
      StringValidation.instance = new StringValidation();
    }
    return StringValidation.instance;
  }
  private onMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          this.setValidationByAttribute()
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
  private setValidationByAttribute() {
    d.querySelectorAll('[data-string-validation-form]').forEach((element: any) => {
      if (!element.classList.contains('-validation')) {
        element.classList.add('-validation');
        let inputs: StringInput[] = [];
        element.querySelectorAll('[data-string-validation]').forEach((inputEl: HTMLInputElement) => {
          this.globalId++;
          let validationString = attr(inputEl, 'data-string-validation');
          let validations: StringValidationInput[] = this.parseValidationString(validationString);
          let errorEl: any = null;
          if (inputEl.dataset.stringId) {
            errorEl = document.querySelector(`[data-string-validation-error="${inputEl.dataset.stringId}"]`);
          }
          let input = new StringInput(this.globalId.toString(), inputEl, validations, errorEl);

          let forceType = attr(inputEl, `data-string-validation-force`, null);
          inputEl.addEventListener('keydown', (event: any) => {
            if (forceType == null) {
              return
            }
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
              (event.keyCode == 65 && (event.ctrlKey === true || event.metaKey === true)) ||
              (event.keyCode == 67 && (event.ctrlKey === true || event.metaKey === true)) ||
              (event.keyCode == 88 && (event.ctrlKey === true || event.metaKey === true)) ||
              (event.keyCode >= 35 && event.keyCode <= 39)) {
              return;
            }
            if (forceType == "number") {
              if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
              }
            }
            if (forceType == "text") {
              if ((event.keyCode >= 48 && event.keyCode <= 57 && !event.shiftKey) || (event.keyCode >= 96 && event.keyCode <= 105)) {
                event.preventDefault();
              }
            }
            input.enableInput()
          })
          inputEl.addEventListener('focusout', () => {
            input.validate()
          })
          inputs.push(input);
        });
        let form = new StringForm(element.getAttribute('data-string-validation-form'), inputs);
        this.forms.push(form);
        element.addEventListener('submit', (event: Event) => {
          if (!form.validate()) {
            event.preventDefault()
            event.stopImmediatePropagation()
          } else {
          }
        });
      }
    })
  }
  private parseValidationString(validationString: string): StringValidationInput[] {
    const validationRules = validationString.split(';').map(rule => rule.split('|'));
    const validations: StringValidationInput[] = [];

    for (const [ruleWithParams, errorMessage] of validationRules) {
      let rule: string, params: string = '';
      // Оновлення для коректної обробки enum[...]
      if (ruleWithParams.includes('[')) {
        const match = ruleWithParams.match(/([a-z]+)\[([^\]]+)\]/i);
        if (match) {
          rule = match[1];
          params = match[2];
        } else {
          console.warn(`Could not parse rule: ${ruleWithParams}`);
          continue;
        }
      } else {
        [rule, params] = ruleWithParams.split('(').map(part => part.replace(')', ''));
      }

      let validationFunction: (value: string) => boolean;
      switch (rule) {
        case 'email':
          validationFunction = (value: string) => /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$/.test(value);
          break;
        case 'required':
          validationFunction = (value: string) => value.trim() !== '';
          break;
        case 'phone':
          validationFunction = this.createPhoneValidationFunction(params);
          break;
        case 'enum':
          validationFunction = this.createEnumValidationFunction(params);
          break;
        case 'text':
          validationFunction = (value: string) => /^[A-Za-z ]+$/.test(value);
          break;
        case 'number':
          validationFunction = (value: string) => /^-?\d+(\.\d+)?$/.test(value);
          break;
        default:
          console.warn(`Unknown validation rule: ${rule}`);
          continue;
      }
      validations.push(new StringValidationInput(validationFunction, true, errorMessage || 'Validation error'));
    }

    return validations;
  }
  private createEnumValidationFunction(enumParams: string): (value: string) => boolean {
    const enumValues = enumParams.split(',').map(value => value.trim());
    return (value: string) => enumValues.includes(value);
  }
  private createPhoneValidationFunction(countryCode: string): (value: string) => boolean {
    switch (countryCode.toLowerCase()) {
      case 'usa':
        return (value: string) => /^\(\d{3}\) \d{3}-\d{4}$/.test(value);
      case 'ukraine':
        return (value: string) => /^\+380\d{9}$/.test(value);
      default:
        console.warn(`Unknown phone format for: ${countryCode}`);
        return () => false;
    }
  }
}

export default StringValidation