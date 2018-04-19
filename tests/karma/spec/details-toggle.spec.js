import {forEach} from 'lodash';
import detailsToggleModule, {
  classDetails,
  classTrigger,
  classBody,
  classExpandedState,
  classLabel,
  attrAriaExpanaded,
  attrAriaHidden
} from 'details-toggle';

const strTemplate = `<div class="${classDetails}" data-show-label="Show label" data-hide-label="Hide label">
  <a class="${classTrigger} js-details-label" aria-controls="content-main" aria-expanded="false">
    Show further guidance
  </a>
  <div class="${classBody}" id="content-main" aria-hidden="true">
    Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
  </div>
</div>`;

let wrapper, elDetails, elTriggers, elBody, originEventListenerAttachMethod;

describe('details-toggle [module]', () => {

  beforeEach(() => {
    wrapper = document.createElement('div');
    wrapper.innerHTML = strTemplate;
    elDetails = wrapper.firstChild;
    document.body.appendChild(elDetails);
    originEventListenerAttachMethod = detailsToggleModule.applyDetailsToggle;
  });

  afterEach(() => {
    delete detailsToggleModule.applyDetailsToggle;
    detailsToggleModule.applyDetailsToggle = originEventListenerAttachMethod.bind(detailsToggleModule);
    wrapper = undefined;
    document.body.removeChild(elDetails);
    elDetails = undefined;
    elTriggers = undefined;
    elBody = undefined;
  });

  describe('DOM behaviour', () => {
    beforeEach(() => {
      const el = detailsToggleModule.applyDetailsToggle(elDetails);
      ({elTriggers, elBody} = el);
    });

    it('DOM should contain the template', () => {
      expect(document.body.contains(elDetails)).to.equal(true);
    });

    it(`should toggle class '.${classExpandedState}' when clicked`, () => {
      elTriggers[0].click();
      expect(elDetails.classList.contains(classExpandedState)).to.equal(true);

      elTriggers[0].click();
      expect(elDetails.classList.contains(classExpandedState)).to.equal(false);
    });
  });

  describe('detailsToggle [method]', () => {
    let spy;

    beforeEach(() => {
      spy = sinon.spy(detailsToggleModule, 'applyDetailsToggle');
    });

    afterEach(() => {
      spy.restore();
    });

    it('should call applyDetailsToggle method', () => {
      detailsToggleModule.detailsToggle();

      expect(detailsToggleModule.applyDetailsToggle).to.have.been.calledWith(elDetails);
    });
  });

  describe('applyDetailsToggle [method]', () => {
    let spy;

    beforeEach(() => {
      spy = sinon.spy(detailsToggleModule, 'toggle');
    });

    afterEach(() => {
      spy.restore();
    });

    it('should call toggle method when trigger is clicked', () => {
      let res = detailsToggleModule.applyDetailsToggle(elDetails);
      ({elTriggers, elBody} = res);
      elTriggers[0].click();

      expect(detailsToggleModule.toggle.calledOnce).to.equal(true);
    });
  });

  describe('open [method]', () => {
    let elBody,
      elLabel,
      elTrigger;

    beforeEach(() => {
      ({elBody, elLabel, elTriggers} = getDOMParts());
      elTrigger = elTriggers[0];
    });

    it('should change DOM to open state', () => {
      detailsToggleModule.open(elDetails, elBody, elLabel, elTrigger);

      expect(elDetails.classList.contains(classExpandedState)).to.equal(true);
      expect(elLabel.innerHTML).to.equal('Hide label');
      expect(elTrigger.getAttribute(attrAriaExpanaded)).to.equal('true');
      expect(elBody.getAttribute(attrAriaHidden)).to.equal('false');
    });
  });

  describe('close [method]', () => {
    let elBody,
      elLabel,
      elTrigger;

    beforeEach(() => {
      ({elBody, elLabel, elTriggers} = getDOMParts());
      elTrigger = elTriggers[0];
    });

    it('should change DOM to close state', () => {
      detailsToggleModule.close(elDetails, elBody, elLabel, elTrigger);

      expect(elDetails.classList.contains(classExpandedState)).to.equal(false);
      expect(elLabel.innerHTML).to.equal('Show label');
      expect(elTrigger.getAttribute(attrAriaExpanaded)).to.equal('false');
      expect(elBody.getAttribute(attrAriaHidden)).to.equal('true');
    });
  });

  describe('toggle [method]', () => {
    let spyOpen,
      spyClosed,
      elBody,
      elLabel,
      elTrigger;

    beforeEach(() => {
      spyOpen = sinon.spy(detailsToggleModule, 'open');
      spyClosed = sinon.spy(detailsToggleModule, 'close');

      ({elBody, elLabel, elTriggers} = getDOMParts());
      elTrigger = elTriggers[0];
    });

    afterEach(() => {
      spyOpen.restore();
      spyClosed.restore();
    });

    describe('when toggled parameter is true', () => {
      it('should call close method', () => {
        const res = detailsToggleModule.toggle(true, elDetails, elTrigger, elBody, elLabel);

        expect(detailsToggleModule.close.calledOnce).to.equal(true);
        expect(res).to.equal(false);
      });
    });

    describe('when toggled parameter is false', () => {
      it('should call open method', () => {
        const res = detailsToggleModule.toggle(false, elDetails, elTrigger, elBody, elLabel);

        expect(detailsToggleModule.open.calledOnce).to.equal(true);
        expect(res).to.equal(true);
      });
    });
  });

});

function getDOMParts() {
  return {
    elBody: elDetails.getElementsByClassName(classBody)[0],
    elLabel: elDetails.getElementsByClassName(classLabel)[0],
    elTriggers: elDetails.getElementsByClassName(classTrigger)
  }
}
