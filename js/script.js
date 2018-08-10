function activeBlock(button, block) {
    document.getElementById(button).onclick = function () {
        document.getElementById(block).classList.add('active');
    };
}

function inActiveBlock(button, block) {
    document.getElementById(button).onclick = function () {
        document.getElementById(block).classList.remove('active');
    };
}

function changeActiveBlock(button, block, changed_block) {
    document.getElementById(button).onclick = function () {
        document.getElementById(block).classList.toggle('active');
        document.getElementById(changed_block).classList.toggle('active');
    };
}

document.getElementById('menu-block__btn-close').onclick = function () {
    document.getElementById('menu-block__first-block').style.overflow = "hidden";
    document.getElementById('menu-block__first-block').style.maxHeight = "0";
};

activeBlock('select-region', 'footer-region-map');
inActiveBlock('close-btn', 'footer-region-map');
inActiveBlock('dropdown-menu__btn', 'menu');
changeActiveBlock('menu__state', 'menu', 'c-hamburger--htx');
changeActiveBlock('menu__rubric__state', 'menu__list__rubric', 'icon_menu-mark-down');
