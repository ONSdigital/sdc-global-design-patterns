import domready from '../../../assets/js/domready';

const exclusiveCheckboxGroupClass = 'js-exclusive-checkbox-group';
const exclusiveCheckboxClass = 'js-exclusive-checkbox';

export default function mutuallyExclusiveCheckboxes() {
  const exclusiveCheckboxGroupElements = document.getElementsByClassName(exclusiveCheckboxGroupClass);
  const exclusiveCheckboxElement = document.getElementsByClassName(exclusiveCheckboxClass);
  for (let exclusiveCheckboxGroupElement of exclusiveCheckboxGroupElements) {
    exclusiveCheckboxGroupElement.onclick = function() {
      if (exclusiveCheckboxElement[0].checked === true) {
        exclusiveCheckboxElement[0].checked = false;
        exclusiveCheckboxElement[0].parentElement.classList.remove('is-checked');
      }
    }
  }
  exclusiveCheckboxElement[0].onclick = function() {
    for (let exclusiveCheckboxGroupElement of exclusiveCheckboxGroupElements) {
      if (exclusiveCheckboxGroupElement.checked === true) {
        exclusiveCheckboxGroupElement.checked = false;
        exclusiveCheckboxGroupElement.parentElement.classList.remove('is-checked');
      }
    }
  }
}

domready(mutuallyExclusiveCheckboxes);
