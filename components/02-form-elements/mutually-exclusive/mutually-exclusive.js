import domready from '../../../assets/js/domready';

const exclusiveCheckboxWrapperClass = 'field--exclusive'
const exclusiveCheckboxGroupClass = 'js-exclusive-checkbox-group';
const exclusiveCheckboxClass = 'js-exclusive-checkbox';
const exclusiveCheckboxAlertClass = 'js-exclusive-checkbox-alert';

export default function mutuallyExclusiveCheckboxes() {
  const exclusiveCheckboxWrapperElements = document.getElementsByClassName(exclusiveCheckboxWrapperClass);
  for (let exclusiveCheckboxWrapperElement of exclusiveCheckboxWrapperElements) {
    let exclusiveCheckboxGroupElements = exclusiveCheckboxWrapperElement.getElementsByClassName(exclusiveCheckboxGroupClass);
    let exclusiveCheckboxElement = exclusiveCheckboxWrapperElement.getElementsByClassName(exclusiveCheckboxClass);
    let exclusiveCheckboxAlert = exclusiveCheckboxWrapperElement.getElementsByClassName(exclusiveCheckboxAlertClass);
    for (let exclusiveCheckboxGroupElement of exclusiveCheckboxGroupElements) {
      exclusiveCheckboxGroupElement.onclick = function() {
        exclusiveCheckboxAlert[0].innerHTML = '';
        checkboxToggle(exclusiveCheckboxElement[0], exclusiveCheckboxAlert[0]);
      }
    }
    exclusiveCheckboxElement[0].onclick = function() {
      exclusiveCheckboxAlert[0].innerHTML = '';
      for (let exclusiveCheckboxGroupElement of exclusiveCheckboxGroupElements) {
        checkboxToggle(exclusiveCheckboxGroupElement, exclusiveCheckboxAlert[0]);
      }
    }
  }
}

const checkboxToggle = function(checkboxElement, checkboxAlertElement) {
  if (checkboxElement.checked === true) {
    checkboxElement.checked = false;
    checkboxElement.parentElement.classList.remove('is-checked');
    checkboxAlertElement.append(checkboxElement.getAttribute('value') + ' ' + checkboxAlertElement.dataset.adjective + '. ');
  }
}

domready(mutuallyExclusiveCheckboxes);
