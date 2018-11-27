import {replace, reset, noop} from '../../assets/js/api/_sdcModules';
import SessionTimeoutUI from './timeout';
import spies from 'chai-spies';
import fetchMock from '../../tests/karma/stubs/fetch.stub.spec';
import promiseInstanceMock from '../../tests/karma/stubs/promise.stub.spec';
import countdownAnimationMock from '../../tests/karma/stubs/countdown.stub.spec';
import dialogMock from '../../tests/karma/stubs/dialog.stub.spec';
import loaderBtnMock from '../../tests/karma/stubs/loader-btn.stub.spec';

chai.use(spies);

function createInstance() {
  return SessionTimeoutUI.create({
    scopeEl: createDOMFragment(),
    animation: countdownAnimationMock(),
    handleSave: noop,
    continueSuccessCallback: noop
  });
}

describe('SessionTimeoutUI (class)', () => {

  beforeEach(() => {
    replace('dialog', 'dialog', dialogMock());
    replace('loader-btn', 'LoaderBtn', loaderBtnMock());
  });

  afterEach(reset);

  it('should have static properties', () => {
    expect(SessionTimeoutUI).to.have.property('timeLimit', 0);
    expect(SessionTimeoutUI).to.have.property('timeStartCountdown');
  });

  describe('handleContinue (method)', () => {

    let instance,
      mockedFetch,
      promiseInstance = promiseInstanceMock();

    beforeEach(() => {
      mockedFetch = fetchMock(promiseInstance);
      replace('fetch', 'fetch', mockedFetch);
    });

    describe('when called', () => {
      it('should call the fetch API', () => {
        instance = createInstance();
        instance.handleContinue();

        expect(mockedFetch).to.have.been.called();
        expect(promiseInstance.then).to.have.been.called();
        expect(promiseInstance.catch).to.have.been.called();
      });
    });
  });

  describe('continueSuccess (method)', () => {

    describe('when called', () => {
      let instance;

      beforeEach(() => {
        instance = createInstance();
      });

      it('should call dialog hide', () => {
        const mockDialog = dialogMock();
        replace('dialog', 'dialog', mockDialog);

        instance.continueSuccess();

        expect(mockDialog.hide).to.have.been.called();
      });

      it('should reset all values', () => {
        chai.spy.on(instance.animation, 'reset');
        chai.spy.on(SessionTimeoutUI, 'reset');

        instance.continueSuccess();

        expect(instance.continueRetryCount).to.equal(instance.continueRetryLimit);
        expect(instance.continueBtn.reset).to.have.been.called();
        expect(instance.animation.reset).to.have.been.called();
        expect(SessionTimeoutUI.reset).to.have.been.called();
      });

      it('should call the continueSuccessCallback callback', () => {
        chai.spy.on(instance, 'continueSuccessCallback');

        instance.continueSuccess();

        expect(instance.continueSuccessCallback).to.have.been.called();
      });
    });
  });

  describe('continueFail (method)', () => {

    let instance;

    beforeEach(() => {
      instance = createInstance();
    });

    describe('when retry has been attempted less than 5 times', () => {
      it('should call handleContinue', () => {
        const originalTimeout = window.setTimeout;

        function fakeTimeout(func) {
          func();
        }

        window.setTimeout = chai.spy(fakeTimeout);

        chai.spy.on(instance, 'handleContinue');

        instance.continueFail();

        expect(instance.handleContinue).to.have.been.called();

        window.setTimeout = originalTimeout;
      });
    });

    describe('when return has been attempted 5 times', () => {
      it('should reset values', () => {
        instance.continueRetryCount = 0;

        instance.continueFail();

        expect(instance.continueBtn.reset).to.have.been.called();
        expect(instance.continueRetryCount).to.equal(instance.continueRetryLimit);
      });
    });
  });

  describe('reset (static method)', () => {

    describe('when called', () => {
      it('should set timeStartCountdown', () => {
        const currentTime = 123;
        SessionTimeoutUI.timeStartCountdown = currentTime;

        SessionTimeoutUI.reset();

        expect(currentTime).to.not.be.equal(SessionTimeoutUI.timeStartCountdown);
      });
    });
  });

  describe('onTick (static method)', () => {

    describe('when called', () => {
      it('should return new time increment', () => {
        SessionTimeoutUI.timeLimit = 123;
        SessionTimeoutUI.timeStartCountdown = 456;

        function getTimeNowMock() {
          return 789;
        }

        const spy = chai.spy(getTimeNowMock);

        replace('utils', 'getTimeNow', spy);

        expect(SessionTimeoutUI.onTick()).to.equal(-210);
      });
    });
  });

  describe('create (static method)', () => {

    describe('when options parameter is correct', () => {

      it('should create new instance of SessionTimeoutUI', () => {
        const instance = createInstance();

        expect(instance).to.not.be.an('undefined');
        expect(instance).to.be.an('object');
        expect(instance).to.have.property('continueBtn');
        expect(instance).to.have.property('saveBtn');
        expect(instance).to.have.property('continueRetryCount');
        expect(instance).to.have.property('animation');
        expect(instance).to.have.property('continueSuccessCallback');
      });
    });

    describe('when options parameter is wrong', () => {
      it('should throw an error', () => {
        expect(SessionTimeoutUI.create).to.throw(TypeError);
      });
    });
  });
});

function createDOMFragment() {
  const strTemplate = `
    <div class="js-timeout-container" id="dialog" aria-hidden="true" >
    <!-- <div class="dialog js-dialog" id="dialog" aria-hidden="true" {helpers.track('visible', 'Timeout', 'Timeout window visible')}> -->
      <div class="dialog__overlay" tabindex="-1"></div>
    
      <div class="dialog__body" role="dialog" aria-labelledby="dialog-title">
        <div role="document">
    
          <div class="mars u-mb-s">Title</div>
          <h1 class="saturn dialog__title" id="dialog-title" tabindex="0">Your session is about to expire</h1>
    
          <form class="" action="/" method="post">
            <button class="btn js-timeout-continue u-mb-s" type="button" data-loading-msg="Continuing&hellip;">Continue survey</button>
            <br/>
            <button class="btn btn--secondary js-timeout-save" type="submit">Save and sign out</button>
          </form>
        </div>
      </div>
    </div>
  `;

  let wrapper = document.createElement('div');
  wrapper.innerHTML = strTemplate;

  return wrapper;
}
