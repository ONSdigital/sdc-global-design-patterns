const attrExpanded = 'aria-expanded'
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
        this.nav.classList.remove(hideClass)
        navVisible = true
    }

    closeNav() {
        this.btn.classList.remove(activeClass)
        this.btn.setAttribute(attrExpanded, 'false')
        this.nav.classList.add(hideClass) 
        navVisible = false
    }
}
