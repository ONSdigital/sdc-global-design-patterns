import domready from '../../../assets/js/domready';

const checkboxWrapperClass = 'field--exclusive'
const checkboxGroupClass = 'js-exclusive-checkbox-group';
const checkboxClass = 'js-exclusive-checkbox';
const voiceOverAlertClass = 'js-exclusive-checkbox-alert';

export default function mutuallyExclusiveCheckboxes() {
  const checkboxWrapperElements = document.getElementsByClassName(checkboxWrapperClass);
  for (let checkboxWrapperElement of checkboxWrapperElements) {
    const checkboxGroupElements = checkboxWrapperElement.getElementsByClassName(checkboxGroupClass);
    const checkboxElement = checkboxWrapperElement.getElementsByClassName(checkboxClass)[0];
    const voiceOverAlertElement = checkboxWrapperElement.getElementsByClassName(voiceOverAlertClass)[0];
    for (let checkboxGroupElement of checkboxGroupElements) {
      checkboxGroupElement.addEventListener('change', function() {
        voiceOverAlertElement.innerHTML = '';
        checkboxToggle(checkboxElement, voiceOverAlertElement);
      });
    }
    checkboxElement.addEventListener('change', function() {
      voiceOverAlertElement.innerHTML = '';
      for (let checkboxGroupElement of checkboxGroupElements) {
        checkboxToggle(checkboxGroupElement, voiceOverAlertElement);
      }
    });
  }
}

const checkboxToggle = function(checkboxEl, voiceOverAlertEl) {
  if (checkboxEl.checked === true) {
    checkboxEl.checked = false;
    checkboxEl.parentElement.classList.remove('is-checked');
    voiceOverAlertEl.append(checkboxEl.getAttribute('value') + ' ' + voiceOverAlertEl.getAttribute('data-adjective') + '. ');
  }
}

domready(mutuallyExclusiveCheckboxes);
