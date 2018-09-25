import domready from '../../../assets/js/domready';

export const exclusiveWrapperClass = 'field--exclusive'
export const exclusiveGroupClass = 'js-exclusive-group';
export const checkboxClass = 'js-exclusive-checkbox';
export const voiceOverAlertClass = 'js-exclusive-alert';

export default function mutuallyExclusiveInputs() {
  const exclusiveWrapperElements = document.getElementsByClassName(exclusiveWrapperClass);
  for (let exclusiveWrapperElement of exclusiveWrapperElements) {
    const exclusiveGroupElements = exclusiveWrapperElement.getElementsByClassName(exclusiveGroupClass);
    const checkboxElement = exclusiveWrapperElement.getElementsByClassName(checkboxClass)[0];
    const voiceOverAlertElement = exclusiveWrapperElement.getElementsByClassName(voiceOverAlertClass)[0];
    
    for (let exclusiveGroupElement of exclusiveGroupElements) {
      exclusiveGroupElement.addEventListener('change', function() {
        voiceOverAlertElement.innerHTML = '';
        inputToggle(checkboxElement, voiceOverAlertElement, 'checkbox');
      });
    }

    checkboxElement.addEventListener('click', function() {
      for (let exclusiveGroupElement of exclusiveGroupElements) {
        const elementType = exclusiveGroupElement.type;
        inputToggle(exclusiveGroupElement, voiceOverAlertElement, elementType);
      }
    });
  }
}

export const inputToggle = function(inputEl, voiceOverAlertEl, elType) {

  let attr
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

  if (elType === 'text' || elType === 'select-one') {
    attr = inputEl.getAttribute('data-value')
  } else {
    attr = inputEl.getAttribute('value')
  }
  
  voiceOverAlertEl.append(attr + ' ' + voiceOverAlertEl.getAttribute('data-adjective') + '. ');
}

domready(mutuallyExclusiveInputs);
