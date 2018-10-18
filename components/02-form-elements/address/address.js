import domready from '../../../assets/js/domready';
import Typeahead from '../typeahead/typeahead-core';

const classAddress = 'js-address';
const classSearchButton = 'js-address-search-btn';
const classManualButton = 'js-address-manual-btn';
const classTypeahead = 'js-address-typeahead';

class Address {
  constructor(context) {
    // DOM Elements
    this.context = context;
    this.searchButton = context.querySelector(`.${classSearchButton}`);
    this.manualButton = context.querySelector(`.${classManualButton}`);

    // State
    this.manualMode = true;

    // Initialise typeahead
    this.typeahead = new Typeahead({
      context: context.querySelector(`.${classTypeahead}`),
      suggestionFunction: this.suggestAddresses.bind(this),
      onSelect: this.onAddressSelect.bind(this),
      onUnsetResult: this.onUnsetAddress.bind(this)
    });

    // Bind Event Listeners
    this.searchButton.addEventListener('click', this.toggleMode.bind(this));
    this.manualButton.addEventListener('click', this.toggleMode.bind(this));

    this.toggleMode();
  }

  toggleMode() {
    if (this.manualMode) {
      this.context.classList.add('address-input--search');
    } else {
      this.context.classList.remove('address-input--search');
    }

    this.manualMode = !this.manualMode;
  }

  suggestAddresses(input) {
    return new Promise((resolve, reject) => {

      resolve();
    });
  }

  onAddressSelect(value) {

  }

  onUnsetAddress() {

  }
}

export default function address() {
  const addresses = [...document.getElementsByClassName(classAddress)];

  addresses.forEach(address => new Address(address));
}

domready(address);
