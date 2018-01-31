import domready from '../../assets/js/domready';
import dialog from '../../assets/js/dialog';
import fetch from '../../assets/js/fetch';
import LoaderBtn from '../../assets/js/loader-btn';
// import { padStart } from 'lodash'
import { objHasInterface } from '../../assets/js/utils';
import CountdownAnimation, { Countable } from '../countdown/countdown';

class SessionTimeoutUI {

  constructor ({
    scopeEl,

    promptTime = 12,
    continueRetryLimit = 5,

    sessionExpiredUrl = '/session-expired',
    expireSessionUrl = '/expire-session',
    sessionContinueUrl = '/timeout-continue',

    animation,

    handleSave
  }) {

    if (!objHasInterface(animation, Countable)) {
      throw Error("Invalid 'animation' object supplied");
    }

    let initailised = false;

    this.sessionExpiredUrl = sessionExpiredUrl,
    this.expireSessionUrl = expireSessionUrl,
    this.sessionContinueUrl = sessionContinueUrl;

    this.continueBtn = new LoaderBtn('.js-timeout-continue', scopeEl);
    this.saveBtn = scopeEl.querySelector('.js-timeout-save');

    this.continueRetryCount = continueRetryLimit;

    // intercept and override ESC key closing dialog
    document.addEventListener('keydown', (e) => {
      if (e.which === 27) { // ESC Key
        e.preventDefault();
        e.stopImmediatePropagation();
        handleContinue(e);
      }
    }, false);

    this.continueBtn.addEventListener('click', this.handleContinue.bind(this));
    this.saveBtn.addEventListener('click', this.handleSave);

    this.timeoutInterval = window.setInterval((a) => {
      let countDown = animation.onTick();

      if (countDown < 1) {
        window.clearInterval(this.timeoutInterval);

        fetch(expireSessionUrl, { method: 'POST' })
          .then(() => {
            window.location = sessionExpiredUrl;
          });
      }

      if (countDown < promptTime) {
        if (!initailised) {
          // must be initialised after the keydown listener
          dialog.init();
          initailised = true;
        }

        dialog.show();
      }
    }, 1000);
  }

  handleContinue (e) {
    e.preventDefault();

    fetch(this.sessionContinueUrl)
      .then(() => {
        dialog.hide();
        this.continueBtn.reset();
        this.continueRetryCount = continueRetryLimit;
        animation.reset();
      }).catch(() => {
        // if error retry 5 times
        if (continueRetryCount-- > 0) {
          window.setTimeout(() => {
            this.handleContinue(e);
          }, 1000);
        } else {
          this.continueBtn.reset();
          this.continueRetryCount = continueRetryLimit;
        }
      });
  }
}

domready(() => {

  const promptTime = window.__EQ_SESSION_TIMEOUT_PROMPT__,
    containerScopeEl = document.querySelector('.js-timeout-container');

  /**
   * If globals aren't set and we aren't on the correct page don't proceed
   */
  if (!promptTime || !window.__EQ_SESSION_TIMEOUT__ || !containerScopeEl) {
    return;
  }

  new SessionTimeoutUI({
    scopeEl: containerScopeEl,

    promptTime: promptTime,
    continueRetryLimit: 5,

    animation: new CountdownAnimation(
      containerScopeEl.querySelector('.js-timeout'),

      promptTime,
      window.__EQ_SESSION_TIMEOUT__
    ),

    handleSave: function save_handler (e) {
      e.preventDefault();

      document.querySelector('.js-btn-save').click();
      return false;
    },
  });
});
