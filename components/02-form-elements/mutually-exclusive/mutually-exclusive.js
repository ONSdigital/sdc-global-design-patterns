import domready from 'assets/js/domready';

const checkboxWrapperClass = 'field--exclusive'
const checkboxGroupClass = 'js-exclusive-checkbox-group';
const checkboxClass = 'js-exclusive-checkbox';
const spanAlertClass = 'js-exclusive-checkbox-alert';

export default function mutuallyExclusiveCheckboxes() {
  const checkboxWrapperElements = document.getElementsByClassName(checkboxWrapperClass);
  for (let checkboxWrapperElement of checkboxWrapperElements) {
    const checkboxGroupElements = checkboxWrapperElement.getElementsByClassName(checkboxGroupClass);
    const checkboxElement = checkboxWrapperElement.getElementsByClassName(checkboxClass);
    const spanAlert = checkboxWrapperElement.getElementsByClassName(spanAlertClass);
    for (let checkboxGroupElement of checkboxGroupElements) {
      checkboxGroupElement.addEventListener('change', function() {
        spanAlert[0].innerHTML = '';
        checkboxToggle(checkboxElement[0], spanAlert[0]);
      });
    }
    checkboxElement[0].addEventListener('change', function() {
      spanAlert[0].innerHTML = '';
      for (let checkboxGroupElement of checkboxGroupElements) {
        checkboxToggle(checkboxGroupElement, spanAlert[0]);
      }
    });
  }
}

const checkboxToggle = function(checkboxEl, spanAlertEl) {
  if (checkboxEl.checked === true) {
    checkboxEl.checked = false;
    checkboxEl.parentElement.classList.remove('is-checked');
    spanAlertEl.append(checkboxEl.getAttribute('value') + ' ' + spanAlertEl.getAttribute('data-adjective') + '. ');
  }
}

domready(mutuallyExclusiveCheckboxes);
