import domready from '../../assets/js/domready';

export const classInlineForm = '.js-feedback-inline'
export const classFeedbackThanks = '.js-feedback-thanks'
export const classFeedback = '.js-feedback'
export const classMessage = '.js-feedback-message'
export const className = '.js-feedback-name'
export const classEmail = '.js-feedback-email'
export const classSubmit = '.js-feedback-submit'
export const classHidden = 'u-hidden'

class Feedback {
  constructor(form, feedback, thanks) {
    // This module relies on browsers having implemented
    // the FormData Interface
    // (https://developer.mozilla.org/en-US/docs/Web/API/FormData)
    // < IE10 don't have it so they get the No-JS fallback
    if (window.FormData) {
      this.form = form
      this.registerForm(this.form)
      this.thanks = thanks
      this.feedback = feedback
    }
  }

  registerForm(element) {
    if (element) {
      const elSubmit = element.querySelector(classSubmit)
      this.registerSubmit(elSubmit)
    }
  }

  registerSubmit(element) {
    element.addEventListener('click', e => {
      e.preventDefault()

      this.sendFeedback(element)
      this.hide(this.feedback)
      this.show(this.thanks)
    })
  }

  sendFeedback(element) {
    const endpoint = element.dataset.endpoint
    const form = this.form.querySelector('form')
    const formData = new FormData(form)
    formData.append('redirect', 'false')
    fetch(endpoint, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })

    // NB: clearing textarea like this does not update remaining chars
    this.form.querySelector(classMessage).value = ''
  }

  hide(element) {
    element.classList.add(classHidden)
  }

  show(element) {
    element.classList.remove(classHidden)
  }
}

export default function feedback() {
  const elFeedbackForm = document.querySelector(classInlineForm)
  const elFeedback = document.querySelector(classFeedback)
  const elThanks = document.querySelector(classFeedbackThanks)

  return new Feedback(elFeedbackForm, elFeedback, elThanks)
}

domready(feedback)
