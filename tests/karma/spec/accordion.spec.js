import accordion, {
  classAccordion,
  classAccordionContent,
  classAccordionBody,
  classToggle,
  classAccordionToggleAll,
  classAccordionTitle,
  classHidden,
} from 'accordion/accordion';

const strTemplate = `
<div class="${classAccordion}">
  <div class="accordion__controls">
    <button class="${classAccordionToggleAll} btn btn--secondary btn--small accordion__control u-wa--@xs" data-ga="click" data-ga-category="Preview Survey" data-ga-action="Show all" data-close-all-label="Hide all" data-open-all-label="Show all" data-open="false" aria-hidden="true">Show all</button>
  </div>
  <div class="${classAccordionContent}">

    <h3 class="${classAccordionTitle}" data-js-accordion-event-label="First Item">
      <span class="accordion__title-text">First Item</span>
      <button class="${classToggle} btn btn--secondary btn--small accordion__title-right  u-wa--@xs" data-close-label="Hide" data-open-label="Show" aria-hidden="true">Show</button>
    </h3>
    <div class="${classAccordionBody}">
      First item content
    </div>

    <h3 class="${classAccordionTitle}" data-js-accordion-event-label="Second Item">
      <span class="accordion__title-text">Second Item</span>
      <button class="${classToggle} btn btn--secondary btn--small accordion__title-right  u-wa--@xs" data-close-label="Hide" data-open-label="Show" aria-hidden="true">Show</button>
    </h3>
    <dd class="${classAccordionBody}">
      Second item content
    </dd>
  </div>
</div>
`;

let elTemplate;

describe('Accordion;', function() {
  before('Add template to DOM and stub analytics', function() {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = strTemplate;
    elTemplate = wrapper;
    document.body.appendChild(elTemplate);

    accordion((event, attr) => {
      this.lastEvent = attr
      this.lastEvent.name = event
    });
  });

  it('DOM should contain the template', function() {
    expect(document.body.contains(elTemplate)).to.equal(true);
  });

  describe('When the accordion attaches to the DOM,', function() {

    describe('Elements marked as content,', function() {
      it('Should be assigned the "tablist" role', function() {
        testAttributeValueEquals(classAccordionContent, 'role', 'tablist');
      });

      it('Should have an aria-multiselectable attribute set to true', function() {
        testAttributeValueEquals(classAccordionContent, 'aria-multiselectable', 'true');
      });
    });

    describe('Elements marked as a title', function() {
      it('Should be assigned the "tab" role', function() {
        testAttributeValueEquals(classAccordionTitle, 'role', 'tab');
      });

      it('Should have an aria-expanded attribute set to false', function() {
        testAttributeValueEquals(classAccordionTitle, 'aria-expanded', 'false');
      });

      it('Should have an aria-selected attribute set to false', function() {
        testAttributeValueEquals(classAccordionTitle, 'aria-selected', 'false');
      });
    });

    describe('Elements marked as a body', function() {
      it('Should be assigned the "tabpanel" role', function() {
        testAttributeValueEquals(classAccordionBody, 'role', 'tabpanel');
      });

      it('Should have an aria-hidden attribute set to true', function() {
        testAttributeValueEquals(classAccordionBody, 'aria-hidden', 'true');
      });
    });
  });

  describe('When the first title is clicked', function() {
    before('Click the first title', function() {
      this.titles = document.getElementsByClassName(classAccordionTitle);
      this.titles[0].click();
    });

    it('should publish the open question event', function() {
      expect(this.lastEvent.name).to.equal('send');
      expect(this.lastEvent.eventCategory).to.equal('Preview Survey');
      expect(this.lastEvent.eventAction).to.equal('Open question');
      expect(this.lastEvent.eventLabel).to.equal('First Item');
    });

    it('should have an aria-expanded attribute set to true', function() {
      expect(this.titles[0].getAttribute('aria-expanded')).to.equal('true');
    });

    it('should have an aria-selected attribute set to true', function() {
      expect(this.titles[0].getAttribute('aria-selected')).to.equal('true');
    });

    describe('the associated body', function() {
      before('get the associated body', function() {
        this.body = document.getElementById(this.titles[0].getAttribute('aria-controls'));
      });

      it('should have an aria-hidden attribute set to false', function() {
        expect(this.body.getAttribute('aria-hidden')).to.equal('false');
      });

      it('should not have the hidden class', function() {
        expect(this.body.classList.contains(classHidden)).to.be.false;
      });
    });

    describe('and the first title is clicked again,', () => {
      before('Click the first title, again', function() {
        this.titles[0].click();
      });

      it('should publish the close question event', function() {
        expect(this.lastEvent.name).to.equal('send');
        expect(this.lastEvent.eventCategory).to.equal('Preview Survey');
        expect(this.lastEvent.eventAction).to.equal('Close question');
        expect(this.lastEvent.eventLabel).to.equal('First Item');
      });

      it('should have an aria-expanded attribute set to false', function() {
        expect(this.titles[0].getAttribute('aria-expanded')).to.equal('false');
      });

      it('should have an aria-selected attribute set to false', function() {
        expect(this.titles[0].getAttribute('aria-selected')).to.equal('false');
      });

      describe('the associated body', function() {
        before('get the associated body', function() {
          this.body = document.getElementById(this.titles[0].getAttribute('aria-controls'));
        });

        it('should have an aria-hidden attribute set to true', function() {
          expect(this.body.getAttribute('aria-hidden')).to.equal('true');
        });

        it('should have the hidden class', function() {
          expect(this.body.classList.contains(classHidden)).to.be.false;
        });
      });
    });
  });

  describe('When toggle all is clicked all items are open,', () => {
    before("Click toggle all", function() {
      this.openAlls = document.getElementsByClassName(classAccordionToggleAll);
      this.openAlls[0].click();
    });

    it('All toggle all buttons data-open attribute should be true', function() {
      for (let i=0; i < this.openAlls.length; i++) {
        expect(this.openAlls[i].getAttribute('data-open')).to.equal('true');
      }
    });

    it('All titles should have an aria-expanded attribute set to true', function() {
      testAttributeValueEquals(classAccordionTitle, 'aria-expanded', 'true');
    });

    it('All titles should have an aria-selected attribute set to true', function() {
      testAttributeValueEquals(classAccordionTitle, 'aria-selected', 'true');
    });

    it('All bodys should not have the hidden class', () => {
      const bodys = document.getElementsByClassName(classAccordionBody);

      for (let i=0; i < bodys.length; i++) {
        expect(bodys[i].classList.contains(classHidden)).to.be.false;
      }
    });

    it('All bodys should have an aria-hidden attribute set to false', () => {
      testAttributeValueEquals(classAccordionBody, 'aria-hidden', 'false');
    });

    describe("and a Title is clicked", () => {
      before("Click the first title", function() {
        this.titles = document.getElementsByClassName(classAccordionTitle);
        this.titles[0].click();
      });

      it('All toggle all buttons data-open attribute should be false', function() {
        for (let i=0; i < this.openAlls.length; i++) {
          expect(this.openAlls[i].getAttribute('data-open')).to.equal('false');
        }
      });
    });
  });
});

function testAttributeValueEquals(className, attribute, value) {
  const elements = document.getElementsByClassName(className);

  for (let i=0; i < elements.length; i++) {
    expect(elements[i].getAttribute(attribute)).to.equal(value);
  }
}
