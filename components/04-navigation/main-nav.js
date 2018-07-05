import domready from '../../assets/js/domready'
import {forEach} from 'lodash'

const attrExpanded = 'aria-expanded'
const attrHidden = 'aria-hidden'
const tabIndex = 'tabindex'
const hideClass = 'nav--h-m'
const activeClass = 'active'

let navVisible = false

export default class Nav {
    constructor(toggle, nav) {
        this.toggle = toggle
        this.nav = nav
    }

    toggleNav() {
        navVisible ? this.closeNav() : this.openNav()
    }

    openNav() {
        this.toggle.classList.add(activeClass)
        this.toggle.setAttribute(attrExpanded, 'true')
        this.nav.setAttribute(attrHidden, 'false')
        this.nav.classList.remove(hideClass)
        navVisible = true
    }

    closeNav() {
        this.toggle.classList.remove(activeClass)
        this.toggle.setAttribute(attrExpanded, 'false')
        this.nav.setAttribute(attrHidden, 'true')
        this.nav.classList.add(hideClass) 
        navVisible = false
    }
}

domready(() => {
    const toggle = document.querySelector('.js-nav-btn')
    const nav = document.querySelector('.js-main-nav')

    if (!toggle || !nav) return false

    const mainNav = new Nav(toggle,nav)
    
    toggle.addEventListener('click', e => mainNav.toggleNav(e))
})
