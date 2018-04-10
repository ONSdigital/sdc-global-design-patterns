import domready from '../../../assets/js/domready';

const exclusiveCheckboxClass = 'js-exclusive-checkboxes';

export default function mutuallyExclusiveCheckboxes() {
  const exclusiveCheckboxElements = document.getElementsByClassName(exclusiveCheckboxClass);
  for (let exclusiveCheckboxElement of exclusiveCheckboxElements) {
    exclusiveCheckboxElement.onclick = function() {
      if (exclusiveCheckboxElement.getAttribute('value') === 'none') {
        if (exclusiveCheckboxElement.checked === true) {
          for (let exclusiveCheckboxElement of exclusiveCheckboxElements) {
            exclusiveCheckboxElement.checked = false;
          }
          exclusiveCheckboxElement.checked = true;
        } else {
        }
      } else {
        if (exclusiveCheckboxElement.checked === true) {
          for (let exclusiveCheckboxElement of exclusiveCheckboxElements) {
            exclusiveCheckboxElement.checked = false;
          }
          exclusiveCheckboxElement.checked = true;
        } else {
        }
      }
    }
  }
}

domready(mutuallyExclusiveCheckboxes);
