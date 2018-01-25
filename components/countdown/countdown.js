import { padStart } from 'lodash'

export const Countable = {
  el: true,
  reset: true,
  onTick: true
}

export default class CountdownAnimation {

  constructor (scopeEl, timePrompt, timeLimit) {

    // bail if there's no timeout
    if (!timeLimit || !scopeEl) {
      return;
    }

    this.el = scopeEl;
    this.circleEl = scopeEl.querySelector('.js-timeout-circle');
    this.timeTextEl = scopeEl.querySelector('.js-timeout-time');
    this.timePrompt = timePrompt;
    this.timeLimit = timeLimit;

    if (!this.circleEl || !this.timeTextEl) return false;

    this.circleElRadius = this.circleEl.getAttribute('r');
    this.strokeWidth = this.circleEl.getAttribute('stroke-width');
    this.timeStartCountdown = this.getTimeNow();

    this.reset();
  }

  getTimeNow () {
    return parseInt(new Date().getTime() / 1000)
  }

  onTick () {
    let countDown = this.timeLimit - (this.getTimeNow() - this.timeStartCountdown)
    if (countDown <= this.timePrompt) {
      this.draw(countDown)
    }

    return countDown
  }

  draw (time) {
    const date = new Date(null)
    date.setSeconds(time)
    const mins = padStart(date.getUTCMinutes(), 2, '0')
    const seconds = padStart(date.getUTCSeconds(), 2, '0')
    const angle = (360 - (360 / (this.timePrompt / time))) / (57.5 / this.circleElRadius)

    this.timeTextEl.innerHTML = `${mins}:${seconds}`

    if (angle > 0) {
      // adjust for stroke, but add a couple of px to account for stroke radius
      this.circleEl.style.strokeDasharray = `${Math.max(0, (angle - (this.strokeWidth / 2)) + 2)}, 1000`
      this.circleEl.getBoundingClientRect()
    }

    if (time < 10) {
      this.el.classList.add('is-warning')
    }
  }

  reset () {
    this.timeStartCountdown = this.getTimeNow()
    this.circleEl.style.strokeDasharray = '0, 1000'
    this.circleEl.getBoundingClientRect()
  }
}
