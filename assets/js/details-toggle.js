import {forEach} from 'lodash';
import domready from '../../assets/js/domready';

export const classDetails = 'js-details';
export const classTrigger = 'js-details-trigger';
export const classBody = 'js-details-body';
export const classLabel = 'js-details-label';
export const classExpandedState = 'is-expanded';

export const attrShowLbl = 'data-show-label';
export const attrHideLbl = 'data-hide-label';
export const attrAriaExpanaded = 'aria-expanded';
export const attrAriaHidden = 'aria-hidden';
export const attrTabIndex = 'tabindex';

const detailsToggleModule = {

  elTriggers: null,

  detailsToggle() {
    const nodeList = document.getElementsByClassName(classDetails);
    forEach(nodeList, detailsToggleModule.applyDetailsToggle.bind(detailsToggleModule));
  },

  applyDetailsToggle(elDetails) {
    const elTriggers = detailsToggleModule.elTriggers = elDetails.getElementsByClassName(classTrigger);
    const elBody = elDetails.getElementsByClassName(classBody)[0];
    const elLabel = elDetails.getElementsByClassName(classLabel)[0];
    let toggled = false;

    forEach(elTriggers, (elTrigger) => {
      elTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggled = this.toggle(toggled, elDetails, elTrigger, elBody, elLabel);
        return false;
      });
    });

    return {elDetails, elTriggers, elBody};
  },

  open(elDetails, elBody, elLabel, elTrigger) {
    elDetails.classList.add(classExpandedState);
    elLabel.innerHTML = elDetails.getAttribute(attrHideLbl);
    elTrigger.setAttribute(attrAriaExpanaded, true);
    elBody.setAttribute(attrAriaHidden, false);
  },

  close(elDetails, elBody, elLabel, elTrigger) {
    elDetails.classList.remove(classExpandedState);
    elLabel.innerHTML = elDetails.getAttribute(attrShowLbl);
    elTrigger.setAttribute(attrAriaExpanaded, false);
    elBody.setAttribute(attrAriaHidden, true);

    /**
     * Upon closing, focus back to the first trigger
     */
    if (detailsToggleModule.elTriggers && (elTrigger !== detailsToggleModule.elTriggers[0])) {
      detailsToggleModule.elTriggers[0].focus();
    }
  },

  toggle(toggled, elDetails, elTrigger, elBody, elLabel) {
    !toggled ? this.open(elDetails, elBody, elLabel, elTrigger) : this.close(elDetails, elBody, elLabel, elTrigger);
    return !toggled;
  }
};

domready(detailsToggleModule.detailsToggle);

export default detailsToggleModule;
