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
        const list = this.nav.childNodes[1]
        const links = list.getElementsByTagName('a')
        const btns = list.getElementsByTagName('button')
        this.links = links
        this.btns = btns
    }

    checkState() {
        if (!navVisible && window.innerWidth < 500) {
            forEach(this.links, link => { link.setAttribute(tabIndex, '-1') })
            forEach(this.btns, btn => { btn.setAttribute(tabIndex, '-1') })
        }
    }

    toggleNav() {
        navVisible ? this.closeNav() : this.openNav()
    }

    openNav() {
        this.toggle.classList.add(activeClass)
        this.toggle.setAttribute(attrExpanded, 'true')
        this.nav.setAttribute(attrHidden, 'false')
        this.nav.classList.remove(hideClass)
        forEach(this.links, link => { link.setAttribute(tabIndex, '0') })
        forEach(this.btns, btn => { btn.setAttribute(tabIndex, '0') })
        navVisible = true
    }

    closeNav() {
        this.toggle.classList.remove(activeClass)
        this.toggle.setAttribute(attrExpanded, 'false')
        this.nav.setAttribute(attrHidden, 'true')
        this.nav.classList.add(hideClass) 
        forEach(this.links, link => { link.setAttribute(tabIndex, '-1') })
        forEach(this.btns, btn => { btn.setAttribute(tabIndex, '-1') })
        navVisible = false
    }
}

domready(() => {
    const toggle = document.querySelector('.js-nav-btn')
    const nav = document.querySelector('.js-main-nav')

    if (!toggle || !nav) return false

    const mainNav = new Nav(toggle,nav)
    
    mainNav.checkState()
    toggle.addEventListener('click', e => mainNav.toggleNav(e))
})
