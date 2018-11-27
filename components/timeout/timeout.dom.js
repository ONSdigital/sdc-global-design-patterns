import fetch from "../../assets/js/fetch";
import {get} from '../../assets/js/api/_sdcModules';

const timeoutModule = get('timeout');
const countdownModule = get('countdown');

export default function timeoutDOM() {
  const SessionTimeoutUI = timeoutModule.SessionTimeoutUI;
  const CountdownAnimation = countdownModule.CountdownAnimation;

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

      fetch(SessionTimeoutUI.expireSessionUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' } })
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
}

