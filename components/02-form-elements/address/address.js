import { compareTwoStrings } from 'string-similarity';
import { orderBy } from 'lodash';

import domready from '../../../assets/js/domready';
import Typeahead from '../typeahead/typeahead-core';

const classAddress = 'js-address';
const classSearchButton = 'js-address-search-btn';
const classManualButton = 'js-address-manual-btn';
const classTypeahead = 'js-address-typeahead';

const lookupURL = 'https://preprod-address-lookup-api.eq.ons.digital/address_api/';

class Address {
  constructor(context) {
    // DOM Elements
    this.context = context;
    this.searchButton = context.querySelector(`.${classSearchButton}`);
    this.manualButton = context.querySelector(`.${classManualButton}`);

    // State
    this.manualMode = true;
    this.currentQuery = null;
    this.xhr = null;

    // Initialise typeahead
    this.typeahead = new Typeahead({
      context: context.querySelector(`.${classTypeahead}`),
      suggestionFunction: this.suggestAddresses.bind(this),
      onSelect: this.onAddressSelect.bind(this),
      onUnsetResult: this.onUnsetAddress.bind(this),
      sanitisedQueryReplaceChars: [','],
      resultLimit: 10
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

  suggestAddresses(query) {
    return new Promise((resolve, reject) => {
      if (this.currentQuery !== query) {
        this.currentQuery = query;

        if (this.xhr && this.xhr.status !== 'DONE') {
          this.xhr.abort();
        }

        this.xhr = new XMLHttpRequest();

        // this.xhr.open('GET', lookupURL);
        this.xhr.open('GET', `${lookupURL}?q=${encodeURIComponent(query)}`);
        this.xhr.setRequestHeader('Content-Type', 'application/json;');

        this.xhr.onload = () => {
          const mappedResults = JSON.parse(this.xhr.responseText).addresses.map((address, index) => {
            return {
              value: index,
              text: address,
              querySimilarity: compareTwoStrings(query, address)
            }
          });

          resolve(orderBy(mappedResults, ['querySimilarity'], ['desc']));
        };

        // this.xhr.send(JSON.stringify({ q: encodeURIComponent(query) }));
        this.xhr.send();
      }
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
