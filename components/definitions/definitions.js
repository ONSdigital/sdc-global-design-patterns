import domready from '../../assets/js/domready';

domready(() => {
  const anchors = document.querySelectorAll('.definition__anchor');

  for (let anchor of anchors) {
    anchor.onclick = function(e) {
      e.preventDefault();
      // define the dialog element
      let dialog = document.getElementById('dialog');

      // record the trigger element
      let trigger = anchor.getAttribute('id')
        ? anchor.getAttribute('id')
        : 'trigger';

      // open dialog and add roles
      dialog.setAttribute('tabindex', '0');
      dialog.setAttribute('open', 'true');
      dialog.setAttribute('role', 'alertdialog');
      dialog.setAttribute('aria-labelledby', 'd-message');

      // retrieve custom close button wording, if any
      let closeText = anchor.getAttribute('data-dialog-response')
        ? anchor.getAttribute('data-dialog-response')
        : 'close';

      // build the dialog markup
      dialog.insertAdjacentHTML(
        'beforeend',
        '<div><div id="document" role="document" tabindex="0"><button id="button" role="button">' +
          closeText +
          '</button></div></div>'
      );

      // make last button in dialog the close button
      let btnClose = document.getElementById('button');
      btnClose.focus();

      // Insert the message held in the trigger's [data-dialog-msg] attribute
      let dataDialogCall = anchor.getAttribute('data-dialog-call');
      btnClose.insertAdjacentHTML(
        'beforebegin',
        '<p id="d-message">' + dataDialogCall + '</p>'
      );

      // hide and make unfocusable all other elements
      let elements = document.querySelectorAll('.page > *:not(dialog)');
      for (let element of elements) {
        element.setAttribute('class', 'mod-hidden');
      }

      // Define content to refocus dialog if user tries to leave it
      let content = document.getElementById('document');

      // Close Dialog
      let closeDialog = function() {
        document.getElementById('d-message').remove();
        for (let element of elements) {
          element.removeAttribute('class', 'mod-hidden');
        }
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

        //
        // $(dialog).off('keypress.escape');
      };

      // run closeDialog() on click of close button
      btnClose.onclick = function(e) {
        closeDialog();
      };

      // also run closeDialog() on ESC
      dialog.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode === 27) {
          closeDialog();
        }
      };

      // Refocus dialog if user tries to leave it
      btnClose.onkeydown = function(e) {
        if ((e.keyCode || e.which) === 9) {
          content.focus();
          e.preventDefault();
        }
      };
    };
  }
});
