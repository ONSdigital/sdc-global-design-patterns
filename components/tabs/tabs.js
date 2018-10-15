// Tabs
import {forEach} from 'lodash'
import domready from '../../assets/js/domready';

export default function tabs() {
  const elTabs = document.querySelectorAll('[role="tablist"]');

  forEach(elTabs, element => new Tabs().registerDom(element))
}
