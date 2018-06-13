import domready from '../../assets/js/domready'
import Nav from '../../assets/js/nav'

domready(() => {
    const btn = document.querySelector('.js-nav-btn')
    const nav = document.querySelector('.js-main-nav')

    if (!btn || !nav) return false

    const mainNav = new Nav(btn,nav)
    
    btn.addEventListener('click', e => mainNav.toggleNav(e))
})
