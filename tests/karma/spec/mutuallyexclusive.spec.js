import mutuallyExclusiveInputs, {
  exclusiveWrapperClass,
  exclusiveGroupClass,
  checkboxClass,
  voiceOverAlertClass,
  inputToggle,
} from '02-form-elements/mutually-exclusive/mutually-exclusive';


const strCheckboxesTemplate = `

<div class="field field--checkbox field--multiplechoice ${exclusiveWrapperClass}">
  <fieldset>
    <legend class="field__legend u-fs-r u-vh">What type of central heating do you have?</legend>
    <div class="field__label u-fs-r--b">Select all that apply:</div>
      <div class="field__item">
        <input class="input input--checkbox ${exclusiveGroupClass}" name="heating-type" value="gas" id="gas" type="checkbox">
        <label class="label label--inline u-fs-r " for="gas">Gas</label>
      </div><div class="field__item">
        <input class="input input--checkbox ${exclusiveGroupClass}" name="heating-type" value="electric" id="electric" type="checkbox">
        <label class="label label--inline u-fs-r " for="electric">Electric</label>
      </div><div class="field__item">
        <input class="input input--checkbox ${exclusiveGroupClass}" name="heating-type" value="solid-fuel" id="solid-fuel" type="checkbox">
        <label class="label label--inline u-fs-r " for="solid-fuel">Solid fuel</label>
      </div><div class="field__item">
        <input class="input input--checkbox ${exclusiveGroupClass}" name="heating-type" value="other" id="other" type="checkbox">
        <label class="label label--inline u-fs-r " for="other">Other</label>
      </div>
      <div class="field__label u-mt-s u-fs-r--b" aria-hidden="true">Or</div>
      <div class="field__item">
        <input class="input input--checkbox ${checkboxClass}" name="heating-type" value="no central heating" id="none" type="checkbox">
        <label class="label label--inline u-fs-r " for="none">
            <span class="u-vh">Or,</span> No central heating<span class="u-vh">. Selecting this will uncheck all other checkboxes</span>
        </label>
        <span class=" ${voiceOverAlertClass} u-vh" role="alert" aria-live="polite" data-adjective="deselected"></span>
      </div>
  </fieldset>
</div>`;

const inputTypes = [
  { type: 'email', value: 'test@test.com' },
  { type: 'number', value: '123' },
  { type: 'password', value: 'password' },
  { type: 'tel', value: '01234 56789' },
  { type: 'text', value: 'yes' },
  { type: 'url', value: 'www.test.com' },
];

let inputRows = '';

inputTypes.forEach(inputType => {
  inputRows +=
  `<div class="field">
    <label class="label u-fs-s--b" for="input-${inputType.type}">${inputType.type}</label>
    <input type="${inputType.type}" id="input-${inputType.type}" class="input ${exclusiveGroupClass}">
  </div>`
});

const strInputsTemplate = `
<fieldset class="field ${exclusiveWrapperClass}">
    <legend class="field__legend u-fs-r u-vh">When did you leave your last job?</legend>
    <div class="field__label u-fs-r--b">Select a date:</div>

    <div class="fieldgroup fieldgroup--date" data-qa="widget-date">
        <div class="fieldgroup__fields">
            <div class="field field--input field--day">
                <label class="label u-fs-s--b" data-qa="label-day" for="date-range-from-day">Day</label>
                <input id="date-range-from-day" placeholder="DD" value="" data-qa="input-StringField" class="input input--StringField ${exclusiveGroupClass}">
            </div>

            <div class="field field--select field--month">
                <label class="label u-fs-s--b" for="date-range-from-month" id="label-date-range-from-month" data-qa="label-month">Month</label>
                <select class="input input--select ${exclusiveGroupClass}" id="date-range-from-month" name="date-range-from-month">
            <option value=""
              disabled="disabled"
              selected="selected">Select month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
        </select>
            </div>

            <div class="field field--input field--year">
                <label class="label u-fs-s--b" data-qa="label-year" for="date-range-from-year">Year</label>
                <input placeholder="YYYY" value="" data-qa="input-StringField" id="date-range-from-year" class="input input--StringField
                ${exclusiveGroupClass}">
            </div>
        </div>
    </div>

    ${inputRows}

    <div class="field__label u-mt-s u-fs-r--b" aria-hidden="true">Or,</div>

    <div class="field field--checkbox field--multiplechoice field--exclusive">
        <div class="field__item">
            <input class="input input--checkbox ${checkboxClass}" name="heating-type" value="I have never had a paid job" id="none" type="checkbox">
            <label class="label label--inline u-fs-r " for="none">
          <span class="u-vh">Or,</span> I have never had a paid job<span class="u-vh">. Selecting this will remove any pre-selected date</span>
      </label>
            <span class="${voiceOverAlertClass} u-vh" role="alert" aria-live="polite" data-adjective="deselected"></span>
        </div>
    </div>
</fieldset>`;

let elTemplate, checkboxElement, exclusiveGroupElement, voiceOverAlertElement, inputElements;

describe('Mutually Exclusive Checkboxes;', function() {

  before('Add template to DOM', function() {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = strCheckboxesTemplate;
    elTemplate = wrapper;
    document.body.appendChild(elTemplate);
    mutuallyExclusiveInputs();
    checkboxElement = document.getElementsByClassName(checkboxClass);
    exclusiveGroupElement = document.getElementsByClassName(exclusiveGroupClass);
    voiceOverAlertElement = document.getElementsByClassName(voiceOverAlertClass);
  });

  it('DOM should contain the template', function() {
    expect(document.body.contains(elTemplate)).to.equal(true);
  });

  describe('When multiple checkboxes of the group are clicked,', function() {
    exclusiveGroupElement = document.getElementsByClassName(exclusiveGroupClass);
    before('Click the checkboxes', function() {
      exclusiveGroupElement[0].click();
      exclusiveGroupElement[1].click();
      exclusiveGroupElement[2].click();
    });

    it('should update the live region', function() {
      expect(voiceOverAlertElement[0]).should.not.be.empty;
    });
  });

  describe('When the single override checkbox is clicked', function() {
    before('Click the first checkbox', function() {
      checkboxElement[0].click();
    });

    it('should uncheck the checkboxes in the group', function() {
      expect(exclusiveGroupElement[0].checked).to.equal(false);
      expect(exclusiveGroupElement[1].checked).to.equal(false);
      expect(exclusiveGroupElement[2].checked).to.equal(false);
    });
  });
});

describe('Mutually Exclusive Inputs;', function() {

  before('Add template to DOM', function() {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = strInputsTemplate;
    elTemplate = wrapper;
    document.body.appendChild(elTemplate);
  });

  it('DOM should contain the template', function() {
    expect(document.body.contains(elTemplate)).to.equal(true);
  });

  describe('When multiple fields of the group are given values,', function() {
    exclusiveGroupElement = document.getElementsByClassName(exclusiveGroupClass);
    before('Enter values into the fields', function() {
      exclusiveGroupElement[4].value = '22';
      exclusiveGroupElement[5].selectedIndex = 2;
      exclusiveGroupElement[6].value = '1979';

      const inputValues = [];

      inputElements = inputTypes.map(inputType => {
        const element = document.getElementById(`input-${inputType.type}`);
        element.value = inputType.value;
        inputValues.push(inputType.value);
        return element;
      });

      console.log('Input values before:', exclusiveGroupElement[4].value, exclusiveGroupElement[5].selectedIndex, exclusiveGroupElement[6].value, ...inputValues);
    });

    it('should update the live region', function() {
      expect(voiceOverAlertElement[1]).should.not.be.empty;
    });
  });

  describe('When the single override checkbox is clicked', function() {
    before('Click the first checkbox', function() {
      checkboxElement[1].click();
      inputToggle(exclusiveGroupElement[4], voiceOverAlertElement[1], 'text');
      inputToggle(exclusiveGroupElement[5], voiceOverAlertElement[1], 'select-one');
      inputToggle(exclusiveGroupElement[6], voiceOverAlertElement[1], 'text');

      inputElements.forEach((element, index) => inputToggle(element, voiceOverAlertElement[1], inputTypes[index].type))
    });

    it('should clear all input fields', function() {
      const inputValues = inputElements.map(element => element.value);

      console.log('Input values after:', exclusiveGroupElement[4].value, exclusiveGroupElement[5].value, exclusiveGroupElement[6].value, ...inputValues);

      expect(exclusiveGroupElement[4].value).to.be.empty;
      expect(exclusiveGroupElement[5].selectedIndex).to.equal(0);
      expect(exclusiveGroupElement[6].value).to.be.empty;

      inputElements.forEach(element => {
        expect(element.value).to.be.empty
      });
    });

  });

});
