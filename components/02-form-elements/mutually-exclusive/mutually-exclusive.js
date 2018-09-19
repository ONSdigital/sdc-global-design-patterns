import domready from '../../../assets/js/domready';

const exclusiveWrapperClass = 'field--exclusive'
const exclusiveGroupClass = 'js-exclusive-group';
const checkboxClass = 'js-exclusive-checkbox';
const voiceOverAlertClass = 'js-exclusive-alert';

export default function mutuallyExclusiveInputs() {
  const exclusiveWrapperElements = document.getElementsByClassName(exclusiveWrapperClass);
  for (let exclusiveWrapperElement of exclusiveWrapperElements) {
    const exclusiveGroupElements = exclusiveWrapperElement.getElementsByClassName(exclusiveGroupClass);
    const checkboxElement = exclusiveWrapperElement.getElementsByClassName(checkboxClass)[0];
    const voiceOverAlertElement = exclusiveWrapperElement.getElementsByClassName(voiceOverAlertClass)[0];
    
    for (let exclusiveGroupElement of exclusiveGroupElements) {
      exclusiveGroupElement.addEventListener('click', function() {
        voiceOverAlertElement.innerHTML = '';
        inputToggle(checkboxElement, voiceOverAlertElement, 'checkbox');
      });
    }

    checkboxElement.addEventListener('click', function() {
      voiceOverAlertElement.innerHTML = '';
      for (let exclusiveGroupElement of exclusiveGroupElements) {
        const elementType = exclusiveGroupElement.type;
        inputToggle(exclusiveGroupElement, voiceOverAlertElement, elementType);
      }
    });
  }
}

const inputToggle = function(inputEl, voiceOverAlertEl, elType) {
  if (elType === 'checkbox' && inputEl.checked === true) {
    inputEl.checked = false;
    inputEl.parentElement.classList.remove('is-checked');
  }

  if (elType === 'text') {
    inputEl.value = '';
  }

  if (elType === 'select-one') {
    inputEl.selectedIndex = 0;
  }

  voiceOverAlertEl.append(inputEl.getAttribute('value') + ' ' + voiceOverAlertEl.getAttribute('data-adjective') + '. ');
}

domready(mutuallyExclusiveInputs);
