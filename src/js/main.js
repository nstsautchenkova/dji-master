/*!              !*/
/*!   MAIN.JS    !*/
/*!              !*/
'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuDropBtn = document.querySelectorAll('.burger-menu__item-drop');
    const burgerMainMenu = document.querySelector('.burger-menu__main');
    const burgerSubMenu = document.querySelectorAll('.burger-menu__submenu');
    const burgerBackBtn = document.querySelector('.burger-menu__back-btn');
    const burgerSubMenuBack = document.querySelectorAll('.burger-menu__submenu-back');

    burgerBtn.addEventListener('click', () => {
        body.classList.add('_lock');
        burgerMenu.classList.add('burger-menu--active');
    });

    burgerBackBtn.addEventListener('click', () => {
        body.classList.remove('_lock');
        burgerMenu.classList.remove('burger-menu--active');
    });

    for (let i = 0; i < burgerMenuDropBtn.length; i++) {
        burgerMenuDropBtn[i].addEventListener('click', () => {
            burgerMainMenu.style.display = 'none';
            burgerSubMenu[i].classList.add('burger-menu__submenu--active');
        });
    }
    for (let i = 0; i < burgerSubMenuBack.length; i++) {
        burgerSubMenuBack[i].addEventListener('click', () => {
            burgerSubMenu[i].classList.remove('burger-menu__submenu--active');
            burgerMainMenu.style.display = 'block';
        });
    }


    // Contacts drop
    const contactsDropBlock = document.querySelector('.top-header__phone');
    const contactsDropBtn = document.querySelector('.top-header__phone-drop');
    const contactsDrop = document.querySelector('.header__contacts');

    contactsDropBtn.addEventListener('click', () => {
        contactsDropBtn.classList.toggle('top-header__phone-drop--active');
        contactsDrop.classList.toggle('header__contacts--active');
        contactsDropBlock.classList.toggle('top-header__phone--active');
    });

    document.addEventListener('mouseup', (e) => {
        if (e.target !== contactsDrop && e.target !== contactsDropBtn) {
            contactsDropBtn.classList.remove('top-header__phone-drop--active');
            contactsDrop.classList.remove('header__contacts--active');
            contactsDropBlock.classList.remove('top-header__phone--active');
        }
    });

    // Search
    const searchBtn = document.querySelector('.header__search-btn');
    const dropSearch = document.querySelector('.drop-search');
    const closeSearchBtn = document.querySelector('.drop-search__close-btn');

    searchBtn.addEventListener('click', () => {
        body.classList.add('_lock');
        dropSearch.classList.add('drop-search--active');
    });

    closeSearchBtn.addEventListener('click', () => {
        body.classList.remove('_lock');
        dropSearch.classList.remove('drop-search--active');
    });


    // Counter
    const minusBtn = document.querySelectorAll('.minus-btn');
    const plusBtn = document.querySelectorAll('.plus-btn');
    let count = 1;

    for (let i = 0; i < minusBtn.length; i++) {
        let input = minusBtn[i].nextElementSibling;
        minusBtn[i].addEventListener('click', () => {
            if (count > 1) {
                count--;
                input.value = count;
            }
        });
    }

    for (let i = 0; i < plusBtn.length; i++) {
        let input = plusBtn[i].previousElementSibling;
        plusBtn[i].addEventListener('click', (e) => {
            count++;
            input.value = count;
        });
    }

    // Sliders
    const iconsSlider = new Swiper('.icons-slider', {
        slidesPerView: 'auto',
        freeMode: true,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    });

    const bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                pagination: {
                    clickable: true,
                    el: '.swiper-pagination',
                    type: "bullets",
                },
            },
        },
    });
});

// FORM VALID 
// feedback
$('.modal-feedback .form-submit').click(function () {
    $(".modal-feedback .form-required").each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            $('.modal-feedback .form-submit').addClass('btn-disabled');
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
            $('.modal-feedback .form-submit').removeClass('btn-disabled');
            $('.modal-feedback .form-submit').attr('data-toggle', 'modal');

            $('.modal-feedback .form-submit').attr('data-target', '.modal-send__feedback');
            $('.modal-feedback .form-submit').attr('data-dismiss', 'modal');
        }
    });

    $(".form-required").change(function (i) {
        $(this).parents('.form-group').removeClass('validation-error');
        $('.modal-feedback .form-submit').removeClass('btn-disabled');
        $('.modal-feedback .form-submit').attr('data-toggle', 'modal');
        $('.modal-feedback .form-submit').attr('data-target', '.modal-send__feedback');
        $('.modal-feedback .form-submit').attr('data-dismiss', 'modal');
    })
});

// preorder
$('.modal-preorder .form-submit').click(function () {
    $(".modal-preorder .form-required").each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            $('.modal-preorder .form-submit').addClass('btn-disabled');
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
            $('.modal-preorder .form-submit').removeClass('btn-disabled');
            $('.modal-preorder .form-submit').attr('data-toggle', 'modal');

            $('.modal-preorder .form-submit').attr('data-target', '.modal-send__preorder');
            $('.modal-preorder .form-submit').attr('data-dismiss', 'modal');
        }
    });

    $(".modal-preorder .form-required").change(function (i) {
        $(this).parents('.form-group').removeClass('validation-error');
        $('.modal-preorder .form-submit').removeClass('btn-disabled');
        $('.modal-preorder .form-submit').attr('data-toggle', 'modal');
        $('.modal-preorder .form-submit').attr('data-target', '.modal-send__preorder');
        $('.modal-preorder .form-submit').attr('data-dismiss', 'modal');
    })
});

//modal-quick-order
$('.modal-quick-order .form-submit').click(function () {
    $(".modal-quick-order .form-required").each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            $('.modal-quick-order .form-submit').addClass('btn-disabled');
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
            $('.modal-quick-order .form-submit').removeClass('btn-disabled');
            $('.modal-quick-order .form-submit').attr('data-toggle', 'modal');

            $('.modal-quick-order .form-submit').attr('data-target', '.modal-send__feedback');
            $('.modal-quick-order .form-submit').attr('data-dismiss', 'modal');
        }
    });

    $(".form-required").change(function (i) {
        $(this).parents('.form-group').removeClass('validation-error');
        $('.modal-quick-order .form-submit').removeClass('btn-disabled');
        $('.modal-quick-order .form-submit').attr('data-toggle', 'modal');
        $('.modal-quick-order .form-submit').attr('data-target', '.modal-send__feedback');
        $('.modal-quick-order .form-submit').attr('data-dismiss', 'modal');
    })
});


// basket-product__clear
$('.basket-product__clear').click(function () {
    $(this).parents('.basket-product').addClass('hide')
});
$('.clear-basket').click(function () {
    $(this).parents('.basket-page__container').addClass('hide')
});

// product-card__add
$('.product-card__add').click(function () {
    $(this).parents('.product-card').addClass('product-card--in-basket')
});