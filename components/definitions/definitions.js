import domready from '../../assets/js/domready';

export const classAnchor = 'definition__anchor';
export const classDialog = 'popup';
export const classDialogWrapper = 'popup__wrapper';
export const classDialogButton = 'popup__button';
export const classDialogHeader = 'popup__header';

export const idDialogContent = 'd-message';

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
  const anchors = document.getElementsByClassName(classAnchor);
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
  const closeText = button.getAttribute(attrResponse)
    ? button.getAttribute(attrResponse)
    : 'close';

  button.setAttribute('disabled', 'true');

  // open popup and add roles
  popup.setAttribute('open', 'true');
  popup.setAttribute('role', 'alert');
  popup.setAttribute('aria-labelledby', idDialogContent);

  // build the popup markup
  popup.insertAdjacentHTML(
    'beforeend',
    `<div class="${classDialogWrapper}">
      <div class="${classDialogHeader}">
        <button class="${classDialogButton}" mars" id="button" role="button">
          ${closeText}
        </button>
      </div>
    </div>`
  );

  // make last button in popup the close button
  const btnClose = document.getElementsByClassName(classDialogButton)[0];
  btnClose.focus();

  const dialogHeader = document.getElementsByClassName(classDialogHeader)[0];
  // Insert the message held in the trigger's [data-popup-msg] attribute
  const dataDialogCall = button.getAttribute(attrDataDialogCall);
  const dataTitle = button.getAttribute(attrDataTitle);

  dialogHeader.insertAdjacentHTML(
    'afterend',
    `<div class="popup__content" id="${idDialogContent}" role="document" tabindex="0" >
      <h3 class="popup__title venus">${dataTitle}</h3>
      <p class="popup__description mars" >${dataDialogCall}</p>
    </div>`
  );

  closeButton(buttons, btnClose, closeDialog, trigger, popup);
  escapeEvent(buttons, popup, closeDialog, trigger);
}

// Close Dialog
export function closeDialog(buttons, trigger, popup) {
  for (let button of buttons) {
    button.removeAttribute('disabled');
  }
  document.getElementById(idDialogContent).remove();

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

domready(bindButtonClickHandlers);
