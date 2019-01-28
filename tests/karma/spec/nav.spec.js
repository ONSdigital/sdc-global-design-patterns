import {replace, reset, noop} from '../../../assets/js/api/_sdcModules';
import mobileNav, {
    attrExpanded,
    attrHidden,
    hideClass
} from '04-navigation/main-nav';
import {matchMediaDesktopMock} from '../stubs/utils.stub.spec';

const strTemplate = `
<div class="header__main header__main--border">
        <div class="container">
            <div class="grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap">
                <div class="grid__col col-auto u-flex-shrink">
                    <h1 class="header__title">ONS Business Surveys</h1>
                </div>
                <div class="grid__col col-auto u-flex-no-shrink">
                    <button class="btn btn--mobile js-toggle-main" type="button" id="menu-btn" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle main navigation" aria-haspopup="true">Menu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="header__nav">
        <div class="container container--gutterless@xs@m">
            <nav class="nav nav--inline nav--light nav--header js-main-nav ${hideClass}" aria-label="Main menu" id="main-nav">
                <ul class="nav__list" aria-label="Navigation menu" role="menubar">
                    <li class="nav__item nav__item--active " role="menuitem" aria-current="page"><a href="#1" class="nav__link ">Home</a>
                    </li>
                    <li class="nav__item  " role="menuitem"><a href="#1" class="nav__link ">Search</a>
                    </li>
                    <li class="nav__item  nav__item--hasChildList" role="menuitem"><a href="records" class="nav__link js-toggle-childList">Record management</a>
                        <ul class="nav__list nav__list--childList ${hideClass}  u-d-no@m">
                            <li class="nav__item" role="menuitem"><a href="#1" class="nav__link">Search for a record</a></li>
                            <li class="nav__item" role="menuitem"><a href="#1" class="nav__link">Create a new record</a></li>
                        </ul>
                    </li>
                    <li class="nav__item  nav__item--hasChildList" role="menuitem"><a href="sampling" class="nav__link js-toggle-childList">Sampling</a>
                        <ul class="nav__list nav__list--childList ${hideClass}  u-d-no@m">
                            <li class="nav__item" role="menuitem"><a href="#1" class="nav__link">Sampling 1</a></li>
                            <li class="nav__item" role="menuitem"><a href="#1" class="nav__link">Sampling 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
`;

let elTemplate;
const mainNavList = document.getElementsByClassName('js-main-nav');

describe('Nav toggle;', function() {
    afterEach(reset);

    describe('when the viewport is small,', function() {

        beforeEach(() => {
            replace('utils', 'matchMedia', matchMediaDesktopMock());
            attachTemplate();
        });

        afterEach(() => {
            removeTemplate();
        });

        it('DOM should contain the template', function() {
            expect(document.body.contains(elTemplate)).to.equal(true);
        });

        describe('The main navigation,', function() {
            it('Should be assigned the "aria-hidden" value of true', function() {
                testAttributeValueEquals(mainNavList[0], attrHidden, 'true');
            });
        });

        describe('When the main nav toggle button is clicked,', function() {
            beforeEach('Click the main nav button', function() {
                const toggleMainBtn = document.getElementsByClassName('js-toggle-main')[0]
                toggleMainBtn.click();
            });

            describe('The main navigation,', function() {
                it('Should be assigned the "aria-hidden" value of false', function() {
                    testAttributeValueEquals(mainNavList[0], attrHidden, 'false');
                });

                it('Should not have the hidden class', function() {
                    expect(mainNavList[0].classList.contains(hideClass)).to.be.false;
                });
            });

            describe('The child navigation list toggle,', function() {
                const childListToggle = document.getElementsByClassName('js-toggle-childList');

                it('Should be assigned the "role" "tab"', function() {
                    for (let i=0; i < childListToggle.length; i++) {
                        expect(childListToggle[i].getAttribute('role')).to.equal('tab');
                    }                
                });

                it('Should be assigned the "aria-expanded" value of false', function() {
                    for (let i=0; i < childListToggle.length; i++) {
                        expect(childListToggle[i].getAttribute(attrExpanded)).to.equal('false');
                    }
                });

                it('Should be assigned the "aria-controls" with the correct ID', function() {
                    for (let i=0; i < childListToggle.length; i++) {
                        const listID = childListToggle[0].nextElementSibling.getAttribute('id')
                        expect(childListToggle[0].getAttribute('aria-controls')).to.equal(listID);
                    }                
                });
            });

            describe('The child navigation list,', function() {
                const childList = document.getElementsByClassName('nav__list--childList');

                it('Should be assigned the "aria-hidden" value of true', function() {
                    for (let i=0; i < childList.length; i++) {
                        expect(childList[i].getAttribute('aria-hidden')).to.equal('true');
                    }
                });

                it('Should be assigned the "role" "tabpanel"', function() {
                    for (let i=0; i < childList.length; i++) {
                        expect(childList[i].getAttribute('role')).to.equal('tabpanel');
                    }                
                });
            });

            describe('When the child nav toggle button is clicked,', function() {
                beforeEach('Click the child nav button', function() {
                    const childListToggle = document.getElementsByClassName('js-toggle-childList')[0];
                    childListToggle.click();
                });

                describe('The child navigation list,', function() {
                    it('Should be assigned the "aria-hidden" value of false', function() {
                        const childList = document.getElementsByClassName('nav__list--childList')[0];
                        testAttributeValueEquals(childList, 'aria-hidden', 'false');
                    });
                    
                    it('Should not have the hidden class', function() {
                        const childList = document.getElementsByClassName('nav__list--childList')[0];
                        expect(childList.classList.contains(hideClass)).to.be.false;
                    });
                });
            });
            
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
  mobileNav();
}

function testAttributeValueEquals(className, attribute, value) {
  const elements = document.getElementsByClassName(className);

  for (let i=0; i < elements.length; i++) {
    expect(elements[i].getAttribute(attribute)).to.equal(value);
  }
}
