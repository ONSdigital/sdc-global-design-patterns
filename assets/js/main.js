//Navigation
(function (window, doc) {
    'use strict';
    if (!doc.querySelector || !window.addEventListener || !doc.documentElement.classList) {
        return;
    }

    var Page = doc.documentElement
    var MenuOpen = doc.querySelector('.Menu');
    var MenuClose = doc.querySelector('.Menu--close');

    Page.classList.add('is-capable');
    MenuOpen.addEventListener('click', MenuToggle, false); 
    MenuClose.addEventListener('click', MenuToggle, false); 
    
    function MenuToggle(ev) {
        if (Page.classList.contains('is-toggling')) {
            Page.classList.remove('is-toggling')
        } else {
            Page.classList.add('is-toggling')
        }
        ev.preventDefault();
    };

}(this, this.document));
