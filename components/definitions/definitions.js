import domready from '../../assets/js/domready';

export const classAnchor = 'definition__anchor';
export const classDialog = 'popup';
export const classDialogWrapper = 'popup__wrapper';
export const classDialogButton = 'popup__button';
export const classDialogDocument = 'popup__document';

export const idDialogMessage = 'd-message';

export const attrResponse = 'data-popup-response';
export const attrDataDialogCall = 'data-popup-call';
export const attrDataTitle = 'data-title';

export default function() {
  return bindButtonClickHandlers();
}

export function bindButtonClickHandlers() {
  anchorsToButton();
  buttonClick();
}

// Replace anchor links with buttons
export function anchorsToButton() {
  let anchors = document.getElementsByClassName(classAnchor);
  for (let anchor of anchors) {
    // Replace <a> tag with <button> tag.
    anchor.outerHTML = anchor.outerHTML
      .replace(/<a/g, '<button')
      .replace(/<\/a>/g, '</button>');
  }
}

// Open popup
export function buttonClick() {
  const buttons = document.getElementsByClassName(classAnchor);
  for (let button of buttons) {
    button.onclick = function(e) {
      e.preventDefault();

      // define the popup element
      const popup = document.getElementsByClassName(classDialog)[0];

      // record the trigger element
      const trigger = button.getAttribute('id')
        ? button.getAttribute('id')
        : 'trigger';

      if (popup.getAttribute('open') === 'true') {
        closeDialog(buttons, trigger, popup);
      }

      openDialog(buttons, button, popup, trigger);
    };
  }
}

// Open Dialog
export function openDialog(buttons, button, popup, trigger) {
  // retrieve custom close button wording, if any
  let closeText = button.getAttribute(attrResponse)
    ? button.getAttribute(attrResponse)
    : 'close';

  button.setAttribute('disabled', 'true');

  // open popup and add roles
  popup.setAttribute('tabindex', '0');
  popup.setAttribute('open', 'true');
  popup.setAttribute('role', 'alertpopup');
  popup.setAttribute('aria-labelledby', idDialogMessage);

  // build the popup markup
  popup.insertAdjacentHTML(
    'beforeend',
    `<div class="${classDialogWrapper}">
      <div class="${classDialogDocument}" id="document" role="document" tabindex="0">
        <button class="${classDialogButton}" mars" id="button" role="button">
          ${closeText}
        </button>
      </div>
    </div>`
  );

  // Define content to refocus popup if user tries to leave it
  const content = document.getElementsByClassName(classDialogDocument)[0];

  // make last button in popup the close button
  let btnClose = document.getElementsByClassName(classDialogButton)[0];
  btnClose.focus();

  // Insert the message held in the trigger's [data-popup-msg] attribute
  let dataDialogCall = button.getAttribute(attrDataDialogCall);
  let dataTitle = button.getAttribute(attrDataTitle);

  btnClose.insertAdjacentHTML(
    'beforebegin',
    `<div id="${idDialogMessage}" class="popup__message" >
      <h3 class="popup__title venus">${dataTitle}</h3>
      <p class="popup__description mars" >${dataDialogCall}</p>
    </div>`
  );

  closeButton(buttons, btnClose, closeDialog, trigger, popup);
  escapeEvent(buttons, popup, closeDialog, trigger);
  focusEvent(btnClose, content);
}

// Close Dialog
export function closeDialog(buttons, trigger, popup) {
  for (let button of buttons) {
    button.removeAttribute('disabled');
  }
  document.getElementById(idDialogMessage).remove();

  // Set focus back to element that triggered popup
  document.getElementById(trigger).focus();

  // If we manufactured the ID, remove it
  if (document.getElementById(trigger).getAttribute('id') === 'trigger') {
    document.getElementById(trigger).setAttribute('id', null);
  }

  // remove popup attributes and empty popup
  popup.removeAttribute('open');
  popup.removeAttribute('role');
  popup.removeAttribute('aria-describedby');
  popup.removeAttribute('tabindex');
  while (popup.firstChild) {
    popup.removeChild(popup.firstChild);
  }
}

// run closeDialog() on click of anchor button
export function closeButton(buttons, btnClose, closeDialog, trigger, popup) {
  btnClose.onclick = function(e) {
    closeDialog(buttons, trigger, popup);
  };
}

// closeDialog() on ESC
export function escapeEvent(buttons, popup, closeDialog, trigger) {
  popup.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode === 27) {
      closeDialog(buttons, trigger, popup);
    }
  };
}

// Refocus popup if user tries to leave it
export function focusEvent(btnClose, content) {
  btnClose.onkeydown = function(e) {
    if ((e.keyCode || e.which) === 9) {
      content.focus();
      e.preventDefault();
    }
  };
}

domready(bindButtonClickHandlers);
