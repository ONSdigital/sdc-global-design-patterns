import {replace, reset, noop} from '../../../assets/js/api/_sdcModules';
import tabs, {
    classTabs,
    classTab,
    classTabList,
    classTabListItems,
} from 'tabs/tabs';
import {matchMediaMobileMock, matchMediaDesktopMock} from '../stubs/utils.stub.spec';
const sleepfor = require('sleepfor');
const strTemplate = `
    <section role="region" class="${classTabs} u-mt-l">
        <h2 class="tabs__title u-fs-m u-vh">The tab component</h2>
        <ul class="${classTabList}">
            <li id="tab1Item" class="${classTabListItems}"><a href="#tabId1" class="${classTab}">First tab label</a></li>
            <li id="tab2Item" class="${classTabListItems}"><a href="#tabId2" class="${classTab}">Second tab</a></li>
            <li id="tab3Item" class="${classTabListItems}"><a href="#tabId3" class="${classTab}">Tab 3</a></li>
        </ul>

        <section id="tabId1" class="tabs__panel">
            <h1 class="u-fs-l">Tab one heading</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <section id="tabId2" class="tabs__panel">
            <h1 class="u-fs-l">Tab two heading</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <section id="tabId3" class="tabs__panel">
            <h1 class="u-fs-l">Tab three heading</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </section>
    </section>
`;

let elTemplate;

describe('Tabs;', function() {
    afterEach(reset);

    describe('when the viewport is large,', function() {

        beforeEach(() => {
            replace('utils', 'matchMedia', matchMediaDesktopMock());
            attachTemplate();
        });

        afterEach(() => {
            removeTemplate();
        });

        describe('When the tabs component attaches to the DOM,', function() {
            const tabs = document.getElementsByClassName(classTab);

            it('DOM should contain the template', function() {
                expect(document.body.contains(elTemplate)).to.equal(true);
            });

            describe('The tab list items,', function() {
                it('Should be assigned the "presentation" role', function() {
                    testAttributeValueEquals(classTab, 'role', 'tab');
                });
            });

            describe('All Tab elements,', function() {
                it('Should be assigned the "tab" role', function() {
                    testAttributeValueEquals(classTabListItems, 'role', 'presentation');
                });

                it('Should be assigned the "ID" of the corresponding panel id', function() {
                    for (let i=0; i < tabs.length; i++) {
                      i = i+1;
                      expect(tabs[i-1].getAttribute('id')).to.equal('tab_tabId'+i);
                    }
                });

                it('Should be assigned the "aria-controls" corresponding panel id', function() {
                    for (let i=0; i < tabs.length; i++) {
                      i = i+1;
                      expect(tabs[i-1].getAttribute('aria-controls')).to.equal('tabId'+i);
                    }
                });

            });

            describe('The first tab element,', function() {
                it('Should be assigned a "tabindex" value', function() {
                    expect(tabs[0].getAttribute('tabindex')).to.equal('0');
                });

                it('Should be assigned the "aria-selected" value of true', function() {
                    expect(tabs[0].getAttribute('aria-selected')).to.equal('true');
                });

                it('Should be assigned the class tab--selected', function() {
                    expect(tabs[0].getAttribute('class')).to.equal('tab tab--selected');
                });

                it('Should show the corresponding panel', function() {
                    const tabId = tabs[0].getAttribute('href').slice(1);
                    const panel = document.getElementById(tabId);
                    const classHidden = 'tabs__panel--hidden';
                    expect(panel.classList.contains(classHidden)).to.be.false;
                });

                it('Should hide all other panels', function() {
                    const classHidden = 'tabs__panel--hidden';
                    const panels = document.getElementsByClassName('tabs__panel');
                    expect(panels[1].classList.contains(classHidden)).to.be.true;
                    expect(panels[2].classList.contains(classHidden)).to.be.true;
                });
            });

            describe('When a tab is clicked,', function() {
                beforeEach('Click the second tab', function() {
                    tabs[1].click();
                });

                it('Should be assigned a "tabindex" value', function() {
                    expect(tabs[1].getAttribute('tabindex')).to.equal('0');
                });

                it('Should be assigned the "aria-selected" value of true', function() {
                    expect(tabs[1].getAttribute('aria-selected')).to.equal('true');
                });

                it('Should be assigned the class tab--selected', function() {
                    expect(tabs[1].getAttribute('class')).to.equal('tab tab--selected');
                });

                it('Should show the corresponding panel', function() {
                    const tabId = tabs[1].getAttribute('href').slice(1);
                    const panel = document.getElementById(tabId);
                    const classHidden = 'tabs__panel--hidden';
                    expect(panel.classList.contains(classHidden)).to.be.false;
                });

                it('Should hide all other panels', function() {
                    const classHidden = 'tabs__panel--hidden';
                    const panels = document.getElementsByClassName('tabs__panel');
                    expect(panels[0].classList.contains(classHidden)).to.be.true;
                    expect(panels[2].classList.contains(classHidden)).to.be.true;
                });
            });
        });
  });

  describe('when the viewport is small,', function() {

      beforeEach(() => {
          replace('utils', 'matchMedia', matchMediaMobileMock());
          attachTemplate();
      });

      afterEach(() => {
          removeTemplate();
      });

      it('DOM should contain the template', function() {
          expect(document.body.contains(elTemplate)).to.equal(true);
      });

      it('Should remove all aria attributes from the tabs', function() {
          testAttributeValueEquals(classTab, 'role', null);
          testAttributeValueEquals(classTab, 'aria-controls', null);
          testAttributeValueEquals(classTab, 'aria-selected', null);
      });

      it('Should display all panels', function() {
          const classHidden = 'tabs__panel--hidden';
          const panels = document.getElementsByClassName('tabs__panel');
          for (let i=0; i < panels.length; i++) {
            expect(panels[i].classList.contains(classHidden)).to.be.false;
          }
      });
  });
});

function removeTemplate() {
  document.body.removeChild(elTemplate);
}

function attachTemplate() {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = strTemplate;
  elTemplate = wrapper;
  document.body.appendChild(elTemplate);
  tabs();
}

function testAttributeValueEquals(className, attribute, value) {
  const elements = document.getElementsByClassName(className);

  for (let i=0; i < elements.length; i++) {
    expect(elements[i].getAttribute(attribute)).to.equal(value);
  }
}
