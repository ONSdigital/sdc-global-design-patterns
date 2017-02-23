import domready from './domready';

const focusableClass = 'js-focusable';
const focusableBoxClass = 'js-focusable-box';
const focusClass = 'has-focus';
const checkedClass = 'is-checked';

const getNextSiblings = function(e, filter) {
  let siblings = [];
  while ((e = e.nextSibling)) { if (!filter || filter(e)) siblings.push(e); }
  return siblings;
};

const getPreviousSiblings = function(e, filter) {
  let siblings = [];
  while ((e = e.previousSibling)) { if (!filter || filter(e)) siblings.push(e); }
  return siblings;
};

domready(() => {
  // apply classes to existing elements on page load
  const checkedElements = Array.from(document.getElementsByClassName(focusableClass));
  for (let checkedElement of checkedElements) {
    if (checkedElement.checked === true) {
      checkedElement.closest(`.${focusableBoxClass}`).classList.add(checkedClass);
    }
  }
  function setFocused(e) {
    e.target.closest(`.${focusableBoxClass}`).classList.add(focusClass);
  }
  function unsetFocused(e) {
    e.target.closest(`.${focusableBoxClass}`).classList.remove(focusClass);
  }
  function setChanged(e) {
    e.target.closest(`.${focusableBoxClass}`).classList.toggle(checkedClass);
    if (e.target.getAttribute('type') === 'radio') {
      // uncheck siblings
      const nextSibs = getNextSiblings(e.target.closest('.js-focusable-box'));
      const prevSibs = getPreviousSiblings(e.target.closest('.js-focusable-box'));
      for (let nextSib of nextSibs) {
        if (nextSib.className && nextSib.className.indexOf(focusableBoxClass) >= 0) {
          nextSib.classList.remove(checkedClass);
        }
      }
      for (let prevSib of prevSibs) {
        if (prevSib.className && prevSib.className.indexOf(focusableBoxClass) >= 0) {
          prevSib.classList.remove(checkedClass);
        }
      }
    }
  }
  for (let checkedElement of checkedElements) {
    checkedElement.addEventListener('focus', setFocused);
    checkedElement.addEventListener('blur', unsetFocused);
    checkedElement.addEventListener('change', setChanged);
  }
});
