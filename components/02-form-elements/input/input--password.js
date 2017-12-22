import domready from '../../../assets/js/domready';

export const idPasswordInputCheckbox = 'showPasswordToggle';
export const idPasswordInputText = 'inputPassword';

export default function() {
  return bindInputChangeHandlers();
}

export function bindInputChangeHandlers() {
  if (document.getElementById(idPasswordInputCheckbox)) {
    const passwordInputCheckbox = document.getElementById(idPasswordInputCheckbox);
    console.log(passwordInputCheckbox);
    const passwordInputText = document.getElementById(idPasswordInputText);
    console.log(passwordInputText);
    passwordInputCheckbox.addEventListener('change', () => {
      passwordInputText.type = passwordInputCheckbox.checked ? 'text' : 'password';
    });
  }
}

domready(bindInputChangeHandlers);
