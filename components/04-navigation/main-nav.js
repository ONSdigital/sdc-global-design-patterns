import domready from '../../assets/js/domready'
import Nav from '../../assets/js/nav'

domready(() => {
    const btn = document.querySelector('.js-nav-btn')
    const nav = document.querySelector('.js-main-nav')
    const mainNav = new Nav(btn,nav)
    if (btn) {
        btn.addEventListener('click', e => mainNav.toggleNav(e))
    }
})
