// Tabs
// import {forEach} from 'lodash'
// import domready from '../../assets/js/domready';
//
// export default function tabs() {
//   const elTabs = document.querySelectorAll('[role="tablist"]');
//
//   forEach(elTabs, element => new Tabs().registerDom(element))
// }
// var mediaQueryList = window.matchMedia("(orientation: portrait)");
//
// if (mediaQueryList.matches) {
//   console.log('orientation: portrait');
// } else {
//   console.log('orientation: landscape');
// }

var mqw = window.matchMedia("(max-width:700px)");

function tabsNoJS(){

  var tablist = document.getElementsByClassName('tabs')[0];

  if (mqw.matches) {
    console.log('< 700px');
    tablist.classList.add('no-js');
  } else {
    console.log('> 700px');
    tablist.classList.remove('no-js');
  }

}

window.addEventListener("resize", tabsNoJS);
