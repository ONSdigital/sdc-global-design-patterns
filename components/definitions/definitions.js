import domready from '../../assets/js/domready';

export const classAnchor = 'definition__anchor';
export const classDialog = 'dialog';
export const classDialogButton = 'dialog__button';
export const classDialogDocument = 'dialog__document';

export const idDialogMessage = 'd-message';

export const attrResponse = 'data-dialog-response';
export const attrDataDialogCall = 'data-dialog-call';
export const attrDataTitle = 'data-title';

export default function() {
  return definitionDialog();
}

export function definitionDialog() {
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

// Open dialog
export function buttonClick() {
  const buttons = document.getElementsByClassName(classAnchor);
  for (let button of buttons) {
    button.onclick = function(e) {
      e.preventDefault();

      // define the dialog element
      let dialog = document.getElementsByClassName(classDialog)[0];

      // record the trigger element
      let trigger = button.getAttribute('id')
        ? button.getAttribute('id')
        : 'trigger';

      if (dialog.getAttribute('open') === 'true') {
        closeDialog(buttons, trigger, dialog);
      }

      openDialog(button, dialog, trigger);
    };
  }
}

// Open Dialog
export function openDialog(button, dialog, trigger) {
  // retrieve custom close button wording, if any
  let closeText = button.getAttribute(attrResponse)
    ? button.getAttribute(attrResponse)
    : 'close';

  button.setAttribute('disabled', 'true');

  // open dialog and add roles
  dialog.setAttribute('tabindex', '0');
  dialog.setAttribute('open', 'true');
  dialog.setAttribute('role', 'alertdialog');
  dialog.setAttribute('aria-labelledby', idDialogMessage);

  // build the dialog markup
  dialog.insertAdjacentHTML(
    'beforeend',
    '<div class="dialog__wrapper">' +
      '<div class="' + classDialogDocument + '" id="document" role="document" tabindex="0">' +
        '<button class="' + classDialogButton + ' mars" id="button" role="button">' +
          closeText +
        '</button>' +
      '</div>' +
    '</div>'
  );

  // Define content to refocus dialog if user tries to leave it
  let content = document.getElementsByClassName(classDialogDocument)[0];

  // make last button in dialog the close button
  let btnClose = document.getElementsByClassName(classDialogButton)[0];
  btnClose.focus();

  // Insert the message held in the trigger's [data-dialog-msg] attribute
  let dataDialogCall = button.getAttribute(attrDataDialogCall);
  let dataTitle = button.getAttribute(attrDataTitle);

  btnClose.insertAdjacentHTML(
    'beforebegin',
    '<div id="' + idDialogMessage + '" class="dialog__message" ><h3 class="dialog__title venus">' + dataTitle + '</h3><p class="dialog__description mars" >' + dataDialogCall + '</p></div>'
  );

  closeButton(btnClose, closeDialog, trigger, dialog);
  escapeEvent(dialog, closeDialog, trigger);
  focusEvent(btnClose, content);
}

// Close Dialog
export function closeDialog(trigger, dialog) {
  const buttons = document.getElementsByClassName(classAnchor);
  for (let button of buttons) {
    button.removeAttribute('disabled');
  }
  document.getElementById(idDialogMessage).remove();

  // Set focus back to element that triggered dialog
  document.getElementById(trigger).focus();

  // If we manufactured the ID, remove it
  if (document.getElementById(trigger).getAttribute('id') === 'trigger') {
    document.getElementById(trigger).setAttribute('id', null);
  }

  // remove dialog attributes and empty dialog
  dialog.removeAttribute('open');
  dialog.removeAttribute('role');
  dialog.removeAttribute('aria-describedby');
  dialog.removeAttribute('tabindex');
  while (dialog.firstChild) {
    dialog.removeChild(dialog.firstChild);
  }
}

// run closeDialog() on click of anchor button
export function closeButton(btnClose, closeDialog, trigger, dialog) {
  btnClose.onclick = function(e) {
    closeDialog(trigger, dialog);
  };
}

// closeDialog() on ESC
export function escapeEvent(dialog, closeDialog, trigger) {
  dialog.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode === 27) {
      closeDialog(trigger, dialog);
    }
  };
}

// Refocus dialog if user tries to leave it
export function focusEvent(btnClose, content) {
  btnClose.onkeydown = function(e) {
    if ((e.keyCode || e.which) === 9) {
      content.focus();
      e.preventDefault();
    }
  };
}

domready(definitionDialog);
