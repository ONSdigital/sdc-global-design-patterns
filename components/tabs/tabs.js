// Tabs

import {forEach} from 'lodash'
import domready from '../../assets/js/domready';

const classTabs = 'tabs'
const classTab = 'tab'
const classTabList = 'tabs__list'
const classTabListItems = 'tab__list-item'

class Tabs {
    constructor() {
      this.keys = { left: 37, right: 39, up: 38, down: 40 }
      this.boundTabClick = this.onTabClick.bind(this)  
      this.boundTabKeydown = this.onTabKeydown.bind(this)

      this.jsHiddenClass = 'tabs__panel--hidden'
      this.jsTabListAsListClass = 'tabs__list--list'
      this.jsTabItemAsListClass = 'tab__list-item--list'
      this.jsTabAsListClass = 'tab--list'
    }

    init(component) {
        this.component = component
        this.tabs = component.getElementsByClassName(classTab)

        if (typeof window.matchMedia === 'function') {
            this.setupViewportChecks()
        } else {
            this.makeTabs()
        }
    }

    setupViewportChecks() {
        this.viewport = window.matchMedia('(min-width: 40.0625em)')
        this.viewport.addListener(this.checkViewport.bind(this))
        this.checkViewport()
    }

    checkViewport () {
        if (this.viewport.matches) {
            this.makeTabs()
        } else {
            this.makeList()
        }
    }

    makeTabs() {
        let component = this.component
        let tabs = this.tabs
        let tabList = component.getElementsByClassName(classTabList)
        let tabListItems = component.getElementsByClassName(classTabListItems)

        if (!tabs || !tabList || !tabListItems) {
            return
        }

        tabList[0].setAttribute('role', 'tablist')
        tabList[0].classList.remove(this.jsTabListAsListClass)

        forEach(tabListItems, (item) => {
            item.setAttribute('role', 'presentation') 
            item.classList.remove(this.jsTabItemAsListClass)
        })      

        forEach(tabs, (tab) => {
            this.setAttributes(tab)
            tab.classList.remove(this.jsTabAsListClass)
    
            tab.addEventListener('click', this.boundTabClick, true)
            tab.addEventListener('keydown', this.boundTabKeydown, true)
            this.hideTab(tab)
        })

        const activeTab = this.getTab(window.location.hash) || this.tabs[0]
        this.showTab(activeTab)

        component.boundOnHashChange = this.onHashChange.bind(this)
        window.addEventListener('hashchange', component.boundOnHashChange, true)
    }

    makeList() {
        let component = this.component
        let tabs = this.tabs
        let tabList = component.getElementsByClassName(classTabList)
        let tabListItems = component.getElementsByClassName(classTabListItems)

        if (!tabs || !tabList || !tabListItems) {
            return
        }

        tabList[0].removeAttribute('role')
        tabList[0].classList.add(this.jsTabListAsListClass)
        
        forEach(tabListItems, (item) => {
            item.removeAttribute('role', 'presentation') 
            item.classList.add(this.jsTabItemAsListClass)
        })      

        forEach(tabs, (tab) => {   
            tab.removeEventListener('click', this.boundTabClick, true)
            tab.removeEventListener('keydown', this.boundTabKeydown, true)
            tab.classList.add(this.jsTabAsListClass)
            this.unsetAttributes(tab)
        })

        window.removeEventListener('hashchange', component.boundOnHashChange, true)
    }

    onHashChange() {
        const hash = window.location.hash
        const tabWithHash = this.getTab(hash)
        if (!tabWithHash) {
            return
        }

        if (this.changingHash) {
            this.changingHash = false
            return
        }

        var previousTab = this.getCurrentTab()

        this.hideTab(previousTab)
        this.showTab(tabWithHash)
        tabWithHash.focus()
    }

    hideTab(tab) {
        this.unhighlightTab(tab)
        this.hidePanel(tab)
    }

    showTab(tab) {
        this.highlightTab(tab)
        this.showPanel(tab)
    }

    getTab(hash) {
        return this.component.querySelector('.tab[href="' + hash + '"]')
    }

    setAttributes(tab) {
        const panelId = this.getHref(tab).slice(1)
        tab.setAttribute('id', 'tab_' + panelId)
        tab.setAttribute('role', 'tab')
        tab.setAttribute('aria-controls', panelId)
        tab.setAttribute('tabindex', '-1')

        const panel = this.getPanel(tab)
        panel.setAttribute('role', 'tabpanel')
        panel.setAttribute('aria-labelledby', tab.id)
        panel.classList.add(this.jsHiddenClass)
    }

    unsetAttributes(tab) {
        tab.removeAttribute('id')
        tab.removeAttribute('role')
        tab.removeAttribute('aria-controls')
        tab.removeAttribute('tabindex')

        const panel = this.getPanel(tab)
        panel.removeAttribute('role')
        panel.removeAttribute('aria-labelledby')
        panel.classList.remove(this.jsHiddenClass)
    }

    onTabClick(e) {
        e.preventDefault()
        const newTab = e.target
        const currentTab = this.getCurrentTab()
        this.hideTab(currentTab)
        this.showTab(newTab)
        this.createHash(newTab)
    }

    createHash(tab) {
        const panel = this.getPanel(tab)
        var id = panel.id
        panel.id = ''
        this.changingHash = true
        window.location.hash = this.getHref(tab).slice(1)
        panel.id = id
    }

    onTabKeydown(e) {
        switch (e.keyCode) {
            case this.keys.left:
            case this.keys.up:
                this.activatePreviousTab()
                e.preventDefault()
            break
            case this.keys.right:
            case this.keys.down:
                this.activateNextTab()
                e.preventDefault()
            break
        }
    }

    activateNextTab() {
        const currentTab = this.getCurrentTab()
        const nextTabListItem = currentTab.parentNode.nextElementSibling
        let nextTab = null
        if (nextTabListItem) {
            nextTab = nextTabListItem.firstElementChild
        }
        if (nextTab) {
            this.hideTab(currentTab)
            this.showTab(nextTab)
            nextTab.focus()
            this.createHash(nextTab)
        }
    }

    activatePreviousTab() {
        const currentTab = this.getCurrentTab()
        const previousTabListItem = currentTab.parentNode.previousElementSibling
        let previousTab = null
        if (previousTabListItem) {
            previousTab = previousTabListItem.firstElementChild
        }
        if (previousTab) {
            this.hideTab(currentTab)
            this.showTab(previousTab)
            previousTab.focus()
            this.createHash(previousTab)
        }
    }

    getPanel(tab) {
        const panel = this.component.querySelector(this.getHref(tab))
        return panel
    }

    showPanel(tab) {
        const panel = this.getPanel(tab)
        panel.classList.remove(this.jsHiddenClass)
    }

    hidePanel(tab) {
        const panel = this.getPanel(tab)
        panel.classList.add(this.jsHiddenClass)
    }

    unhighlightTab(tab) {
        tab.setAttribute('aria-selected', 'false')
        tab.classList.remove('tab--selected')
        tab.setAttribute('tabindex', '-1')
    }

    highlightTab(tab) {
        tab.setAttribute('aria-selected', 'true')
        tab.classList.add('tab--selected')
        tab.setAttribute('tabindex', '0')
    }

    getCurrentTab() {
        return this.component.querySelector('.tab--selected')
    }

    getHref = function (tab) {
        const href = tab.getAttribute('href')
        const hash = href.slice(href.indexOf('#'), href.length)
        return hash
    }
}

export default function tabs() {
    const tabsComponent = document.getElementsByClassName(classTabs)
    forEach(tabsComponent, component => new Tabs().init(component))
}

domready(tabs)