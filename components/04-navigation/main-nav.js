import domready from '../../assets/js/domready'

const attrExpanded = 'aria-expanded'
const attrHidden = 'aria-hidden'
const hideClass = 'nav--h-m'
const activeClass = 'active'

let navVisible = false

export default class Nav {
    constructor(btn, nav) {
        this.btn = btn
        this.nav = nav
    }

    toggleNav() {
        navVisible ? this.closeNav() : this.openNav()
    }

    openNav() {
        this.btn.classList.add(activeClass)
        this.btn.setAttribute(attrExpanded, 'true')
        this.nav.setAttribute(attrHidden, 'false')
        this.nav.classList.remove(hideClass)
        navVisible = true
    }

    closeNav() {
        this.btn.classList.remove(activeClass)
        this.btn.setAttribute(attrExpanded, 'false')
        this.nav.setAttribute(attrHidden, 'true')
        this.nav.classList.add(hideClass) 
        navVisible = false
    }
}

domready(() => {
    const btn = document.querySelector('.js-nav-btn')
    const nav = document.querySelector('.js-main-nav')

    if (!btn || !nav) return false

    const mainNav = new Nav(btn,nav)
    
    btn.addEventListener('click', e => mainNav.toggleNav(e))
})
