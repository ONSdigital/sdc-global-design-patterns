import domready from '../../../assets/js/domready';

const exclusiveCheckboxGroupClass = 'js-exclusive-checkbox-group';
const exclusiveCheckboxClass = 'js-exclusive-checkbox';
const exclusiveCheckboxAlertClass = 'js-exclusive-checkbox-alert';

export default function mutuallyExclusiveCheckboxes() {
  const exclusiveCheckboxGroupElements = document.getElementsByClassName(exclusiveCheckboxGroupClass);
  const exclusiveCheckboxElement = document.getElementsByClassName(exclusiveCheckboxClass);
  const exclusiveCheckboxAlert = document.getElementsByClassName(exclusiveCheckboxAlertClass);
  for (let exclusiveCheckboxGroupElement of exclusiveCheckboxGroupElements) {
    exclusiveCheckboxGroupElement.onclick = function() {
      exclusiveCheckboxAlert[0].innerHTML = '';
      if (exclusiveCheckboxElement[0].checked === true) {
        exclusiveCheckboxElement[0].checked = false;
        exclusiveCheckboxElement[0].parentElement.classList.remove('is-checked');
        exclusiveCheckboxAlert[0].append(exclusiveCheckboxElement[0].getAttribute('value') + ' deselected. ');
      }
    }
  }
  exclusiveCheckboxElement[0].onclick = function() {
    exclusiveCheckboxAlert[0].innerHTML = '';
    for (let exclusiveCheckboxGroupElement of exclusiveCheckboxGroupElements) {
      if (exclusiveCheckboxGroupElement.checked === true) {
        exclusiveCheckboxGroupElement.checked = false;
        exclusiveCheckboxGroupElement.parentElement.classList.remove('is-checked');
        exclusiveCheckboxAlert[0].append(exclusiveCheckboxGroupElement.getAttribute('value') + ' deselected. ');
      }
    }
  }
}

domready(mutuallyExclusiveCheckboxes);
