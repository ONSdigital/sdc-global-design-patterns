const attrExpanded = 'aria-expanded'
const hideClass = 'nav--hide-mob'
let navVisible = false

export default class Nav {
    constructor(btn, nav) {
        this.btn = btn
        this.nav = nav
    }

    toggleNav() {
        navVisible ? this.navClose() : this.navOpen()
    }
    
    navOpen() {
        this.btn.setAttribute(attrExpanded, 'true')
        this.nav.classList.remove(hideClass)
        navVisible = true
    }

    navClose() {
        this.btn.setAttribute(attrExpanded, 'false')
        this.nav.classList.add(hideClass)
        navVisible = false
    }

}