import domready from './domready';

const exclusiveCheckboxClass = 'js-exclusive-checkboxes';

export default function mutuallyExclusiveCheckboxes() {
  const exclusiveCheckboxElements = document.getElementsByClassName(exclusiveCheckboxClass);
  console.log(exclusiveCheckboxElements);
}

domready(mutuallyExclusiveCheckboxes)
