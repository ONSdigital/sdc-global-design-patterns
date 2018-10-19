import { compareTwoStrings } from 'string-similarity';
import { orderBy } from 'lodash';

import domready from '../../../assets/js/domready';
import Typeahead from '../typeahead/typeahead-core';
import { sanitiseTypeaheadText } from '../typeahead/typeahead-helpers';

const classAddress = 'js-address';
const classSearchButton = 'js-address-search-btn';
const classManualButton = 'js-address-manual-btn';
const classTypeahead = 'js-address-typeahead';

const lookupURL = 'https://preprod-address-lookup-api.eq.ons.digital/address_api/';
const addressReplaceChars = [','];

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
    this.currentResults = [];

    // Initialise typeahead
    this.typeahead = new Typeahead({
      context: context.querySelector(`.${classTypeahead}`),
      suggestionFunction: this.suggestAddresses.bind(this),
      onSelect: this.onAddressSelect.bind(this),
      onUnsetResult: this.onUnsetAddress.bind(this),
      sanitisedQueryReplaceChars: addressReplaceChars,
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
    query = query.trim();
    return new Promise((resolve, reject) => {
      if (this.currentQuery === query && this.currentQuery.length) {
        resolve(this.currentResults);
      } else {
        this.currentQuery = query;
        this.currentResults = [];

        if (this.xhr && this.xhr.status !== 'DONE') {
          this.xhr.abort();
        }

        this.xhr = new XMLHttpRequest();
        this.reject = reject;

        // this.xhr.open('GET', lookupURL);
        this.xhr.open('GET', `${lookupURL}?q=${encodeURIComponent(query)}`);
        this.xhr.setRequestHeader('Content-Type', 'application/json;');

        this.xhr.onload = () => {
          const mappedResults = JSON.parse(this.xhr.responseText).addresses
            .map((address, index) => {
              const sanitisedText = sanitiseTypeaheadText(address, addressReplaceChars);
              let queryIndex = sanitisedText.indexOf(query);

              if (queryIndex < 0) {
                queryIndex = 9999;
              }

              return {
                value: index,
                text: address,
                sanitisedText,
                querySimilarity: compareTwoStrings(sanitisedText, query),
                queryIndex
              }
            });

          this.currentResults = orderBy(mappedResults, ['queryIndex', 'querySimilarity'], ['asc', 'desc']);

          resolve(this.currentResults);
        };

        // this.xhr.send(JSON.stringify({ q: encodeURIComponent(query) }));
        this.xhr.send();
      }
    });
  }

  onAddressSelect(value) {
    return new Promise((resolve, reject) => {

    });
  }

  onUnsetAddress() {

  }
}

export default function address() {
  const addresses = [...document.getElementsByClassName(classAddress)];

  addresses.forEach(address => new Address(address));
}

domready(address);
