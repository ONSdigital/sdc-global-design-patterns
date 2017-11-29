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
        '<div><div role="document" tabindex="0"><button role="button">' +
          closeText +
          '</button></div></div>'
      );

      // Insert the message held in the trigger's [data-dialog-msg] attribute
      let dataDialogCall = anchor.getAttribute('data-dialog-call');
      dialog.insertAdjacentHTML('afterbegin', dataDialogCall);

      // hide and make unfocusable all other elements
      let elements = document.querySelectorAll('.page > *:not(dialog)');
      for (let element of elements) {
        element.setAttribute('class', 'mod-hidden');
      }
    };
  }
});

// var article = document.getElementById('electriccars');
//
// article.dataset.columns // "3"
// article.dataset.indexNumber // "12314"
// article.dataset.parent // "cars"

// $('[data-dialog-call]').on('click', function () {
