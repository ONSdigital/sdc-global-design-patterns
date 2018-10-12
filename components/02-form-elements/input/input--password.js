import domready from '../../../assets/js/domready';

export const idPasswordInputCheckbox = 'showPasswordToggle';
export const idPasswordInputText = 'inputPassword';

export default function() {
  return bindInputChangeHandlers();
}

export function bindInputChangeHandlers() {
  if (document.getElementById(idPasswordInputCheckbox)) {

    const passwordInputCheckbox = document.getElementById(idPasswordInputCheckbox);
    const passwordInputText = document.getElementById(idPasswordInputText);

// Toggle the data-ga-label to record the hide password event as well as show
    function toggleGALabel() {
      var passwordInputGALabel = document.getElementById(idPasswordInputCheckbox).getAttribute('data-ga-label');
      if(passwordInputGALabel === 'Show password'){
        passwordInputCheckbox.setAttribute('data-ga-label', 'Hide password');
      } else {
        passwordInputCheckbox.setAttribute('data-ga-label', 'Show password');
      }
    }
//
    passwordInputCheckbox.addEventListener('change', () => {
      passwordInputText.type = passwordInputCheckbox.checked ? 'text' : 'password';
      toggleGALabel();
    });
  }
}

domready(bindInputChangeHandlers);
