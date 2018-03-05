import domready from '../../assets/js/domready';
import dialog from '../../assets/js/dialog';
import fetch from '../../assets/js/fetch';
import LoaderBtn from '../../assets/js/loader-btn';
import { objHasInterface, getTimeNow } from '../../assets/js/utils';
import CountdownAnimation, { Countable } from '../countdown/countdown';

class SessionTimeoutUI {

  static timeLimit = 0;
  static sessionExpiredUrl = '/session-expired';
  static expireSessionUrl = '/expire-session';
  static sessionContinueUrl = '/timeout-continue';
  static timeStartCountdown = getTimeNow();

  constructor ({
    scopeEl,
    continueRetryLimit = 5,
    animation,
    handleSave,
    continueSuccessCallback
  }) {

    if (!objHasInterface(animation, Countable)) {
      throw Error("Invalid 'animation' object supplied");
    }

    this.continueBtn = new LoaderBtn('.js-timeout-continue', scopeEl);
    this.saveBtn = scopeEl.querySelector('.js-timeout-save');

    this.continueRetryCount = this.continueRetryLimit = continueRetryLimit;

    this.animation = animation;
    this.continueSuccessCallback = continueSuccessCallback;

    // intercept and override ESC key closing dialog
    document.addEventListener('keydown', (e) => {
      if (e.which === 27) { // ESC Key
        e.preventDefault();
        e.stopImmediatePropagation();
        this.handleContinue(e);
      }
    }, false);

    this.continueBtn.addEventListener('click', this.handleContinue.bind(this));
    this.saveBtn.addEventListener('click', handleSave);

    dialog.init();
    dialog.show();
  }

  handleContinue (e) {
    e.preventDefault();

    fetch(SessionTimeoutUI.sessionContinueUrl)
      .then(() => {
        dialog.hide();
        this.continueBtn.reset();
        this.continueRetryCount = this.continueRetryLimit;
        this.animation.reset();
        SessionTimeoutUI.reset();
        this.continueSuccessCallback();
      }).catch(() => {
        // if error retry 5 times
        if (this.continueRetryCount-- > 0) {
          window.setTimeout(() => {
            this.handleContinue(e);
          }, 1000);
        } else {
          this.continueBtn.reset();
          this.continueRetryCount = this.continueRetryLimit;
        }
      });
  }

  static reset () {
    SessionTimeoutUI.timeStartCountdown = getTimeNow();
  }

  static onTick () {
    return SessionTimeoutUI.timeLimit - (getTimeNow() - SessionTimeoutUI.timeStartCountdown);
  }

  static create(opts) {

    const instance = new SessionTimeoutUI({
      scopeEl: opts.scopeEl,
      continueRetryLimit: opts.continueRetryLimit || 5,
      animation: opts.animation,
      handleSave: function saveHandler (e) {
        e.preventDefault();

        document.querySelector('.js-btn-save').click();
        return false;
      },
      continueSuccessCallback: opts.continueSuccessCallback
    });

    instance.animation.draw(opts.countDown || 0);

    return instance;
  }
}

domready(() => {

  const promptTime = window.__EQ_SESSION_TIMEOUT_PROMPT__,
    timeLimit = window.__EQ_SESSION_TIMEOUT__,
    containerScopeEl = document.querySelector('.js-timeout-container');

  let timeoutInterval,
    instance = null;

  /**
   * If globals aren't set and DOM isn't configured don't proceed
   */
  if (!promptTime || !window.__EQ_SESSION_TIMEOUT__ || !containerScopeEl) {
    return;
  }

  SessionTimeoutUI.timeLimit = timeLimit;

  /**
   * Create SessionTimeoutUI instance only when needed.
   */
  timeoutInterval = window.setInterval(() => {
    let countDown = SessionTimeoutUI.onTick();

    if (countDown < 1) {
      window.clearInterval(timeoutInterval);

      fetch(SessionTimeoutUI.expireSessionUrl, { method: 'POST' })
        .then(() => {
          window.location = SessionTimeoutUI.sessionExpiredUrl;
        });
    }

    if (countDown < promptTime) {
      if (!instance) {
        instance = SessionTimeoutUI.create({
          scopeEl: containerScopeEl,
          countDown: countDown,
          animation: new CountdownAnimation(
            containerScopeEl.querySelector('.js-timeout'),
            promptTime,
            timeLimit
          ),
          continueSuccessCallback: () => {
            instance = null;
          }
        });
      }
      else {
        instance.animation.draw(countDown);
      }
    }
  }, 1000);
});
