import domready from '../../assets/js/domready'
import Nav from '../../assets/js/nav'

domready(() => {
    const btn = document.querySelector('.js-menu-btn')
    const nav = document.querySelector('.js-nav')
    const mainNav = new Nav(btn,nav)
    const openLabel = btn.innerHTML
    const closeLabel = btn.getAttribute('data-close-label')
  
    if (btn) {
        btn.addEventListener('click', e => mainNav.toggleNav(e))
        btn.innerHTML = openLabel
    }

})
