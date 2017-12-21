import domready from '../../../assets/js/domready';

export const idPasswordInputCheckbox = 'showPasswordToggle';
export const idPasswordInputText = 'inputPassword';

export default function() {
  return bindInputChangeHandlers();
}

export function bindInputChangeHandlers() {
  const passwordInputCheckbox = document.getElementById(idPasswordInputCheckbox);
  const passwordInputText = document.getElementById(idPasswordInputText);
  passwordInputCheckbox.addEventListener('change', (e) => {
    passwordInputText.type = passwordInputCheckbox.checked ? 'text' : 'password';
  });
}

domready(bindInputChangeHandlers);
