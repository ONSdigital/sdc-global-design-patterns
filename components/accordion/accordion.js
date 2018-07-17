import {forEach} from 'lodash'
import domready from '../../assets/js/domready';
import {trackEvent} from '../../assets/js/analytics';

export const classHasJs = 'has-js'
export const classAccordion = 'js-accordion'
export const classAccordionContent = 'js-accordion-content'
export const classAccordionTitle = 'js-accordion-title'
export const classAccordionBody = 'js-accordion-body'
export const classExpanded = 'is-expanded'
export const classToggle = 'js-accordion-toggle'
export const classAccordionToggleAll = 'js-accordion-toggle-all'

export const attrHidden = 'aria-hidden'
export const attrExpanded = 'aria-expanded'
export const attrMultiselectable = 'aria-multiselectable'
export const attrControls = 'aria-controls'
export const attrSelected = 'aria-selected'

class Accordion {
  constructor(trackEvent) {
    this.trackEvent = trackEvent
    this.openItems = 0
  }

  registerDom(rootEl) {
    rootEl.classList.add(classHasJs)
    const content = rootEl.getElementsByClassName(classAccordionContent)[0]

    content.setAttribute('role', 'tablist')
    content.setAttribute(attrMultiselectable, 'true')

    this.titles = forEach(
      rootEl.getElementsByClassName(classAccordionTitle),
      (el, index) => { this.registerTitle(el, index) }
    )

    this.bodys = forEach(
      rootEl.getElementsByClassName(classAccordionBody),
      (el, index) => { this.registerBody(el, index) }
    )

    this.toggleAllTrigger = forEach(
      rootEl.getElementsByClassName(classAccordionToggleAll),
      el => { this.registerToggleAll(el) }
    )
  }

  registerTitle(element, index) {
    // Better screen reader interaction
    element.setAttribute('id', 'accordion-title-' + index)
    element.setAttribute('role', 'tab')
    element.setAttribute(attrControls, 'accordion-body-' + index)
    element.setAttribute(attrExpanded, 'false')
    element.setAttribute(attrSelected, 'false')

    // Content of this container is keyboard navigable so
    // ensure that the this container isn't
    element.setAttribute('tabindex', '-1')

    if (element.classList.contains(classExpanded)) {
      element.setAttribute(attrExpanded, 'true')
      this.openItems += 1
    }

    element.addEventListener('click', e => {
      e.preventDefault()
      this.toggle(element)
    })

    element.addEventListener('keydown', e => {
      this.keyboardInteraction(element, e)
    })
  }

  registerBody(element, index) {
    // Better screen reader interaction
    element.setAttribute('id', 'accordion-body-' + index)
    element.setAttribute('role', 'tabpanel')
    element.setAttribute('aria-labelledby', 'accordion-title-' + index)
    element.setAttribute(attrHidden, 'true')
  }

  registerToggleAll(toggleAllEl) {
    toggleAllEl.addEventListener('click', e => {
      e.preventDefault()
      if (toggleAllEl.getAttribute('data-open') === 'false'){
        forEach(this.titles, el => { this.open(el) })
        toggleAllEl.setAttribute('data-open', true)
      } else {
        forEach(this.titles, el => { this.close(el) })
        toggleAllEl.setAttribute('data-open', false)
      }
      this.updateOpenCloseTriggerDisplay()
    })
  }

  updateOpenCloseTriggerDisplay() {
    if (this.openItems / this.titles.length < 1) {
      forEach(this.toggleAllTrigger, trigger => this.hide(trigger))
    } else {
      forEach(this.toggleAllTrigger, trigger => this.show(trigger))
    }
  }
  
  toggle(element) {
    let action = ''
    if (element.getAttribute(attrExpanded) === 'true') {
      this.close(element)
      action = 'Close question'
    } else {
      this.open(element)
      action = 'Open question'
    }

    this.updateOpenCloseTriggerDisplay()

    this.publishEvent(action, element.getAttribute('data-js-accordion-event-label'))
  }

  open(titleEl) {
    const toggleBtn = titleEl.getElementsByClassName(classToggle)[0]
    const closeLabel = toggleBtn.getAttribute('data-close-label')

    if (titleEl.getAttribute(attrExpanded) === 'true') return

    const bodyEl = titleEl.nextElementSibling
    titleEl.classList.add(classExpanded)
    titleEl.setAttribute(attrExpanded, true)
    titleEl.setAttribute(attrSelected, true)

    bodyEl.classList.add(classExpanded)
    bodyEl.setAttribute(attrHidden, false)
    
    toggleBtn.innerHTML = closeLabel

    this.openItems += 1
  }

  close(titleEl) {
    if (titleEl.getAttribute(attrExpanded) === 'false') return
    const toggleBtn = titleEl.getElementsByClassName(classToggle)[0]
    const openLabel = toggleBtn.getAttribute('data-open-label')

    const bodyEl = titleEl.nextElementSibling

    titleEl.classList.remove(classExpanded)
    titleEl.setAttribute(attrExpanded, false)
    titleEl.setAttribute(attrSelected, false)

    bodyEl.classList.remove(classExpanded)
    bodyEl.setAttribute(attrHidden, true)

    toggleBtn.innerHTML = openLabel

    this.openItems -= 1
  }

  hide(element) {
    const openAllLabel = element.getAttribute('data-open-all-label')
    element.innerHTML = openAllLabel
    element.setAttribute('data-open', false)
    element.setAttribute('data-ga-action', 'Close all')
  }

  show(element) {
    const closeAllLabel = element.getAttribute('data-close-all-label')
    element.innerHTML = closeAllLabel
    element.setAttribute('data-open', true)
    element.setAttribute('data-ga-action', 'Show all')
  }

  publishEvent(action, label) {
    this.trackEvent('send', {
      hitType: 'event',
      eventCategory: 'Preview Survey',
      eventAction: action,
      eventLabel: label
    })
  }

  keyboardInteraction(elem, e) {
    const keyCode = e.which
    switch (keyCode) {
      // Enter/Space
      case 13:
      case 32:
        e.preventDefault()
        e.stopPropagation()

        // Show answer content
        this.toggle(elem)
        break
    }
  }
}

export default function accordion(eventTracker = trackEvent) {
  const elAccordion = document.getElementsByClassName(classAccordion)

  forEach(elAccordion, element => new Accordion(eventTracker).registerDom(element))
}

domready(accordion)
