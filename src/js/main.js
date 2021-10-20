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
        //slidesPerView: 1,
        longSwipesRatio:0.1,
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

$('.form-submit').click(function () {
    var form = $(this).parents('.form');
    var formAttr = $(this).parents('.form').attr("data-form");
    form.addClass(formAttr);

    var formClass = '.' + formAttr;
    var input = $(formClass + ' ' + '.form-required');
    var btn = $(formClass + ' ' + '.form-submit');

    var flag = true;

    input.each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            flag = false;
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
        }
    });

    if (!flag) {
        btn.attr('disabled', 'disabled');
    }
    if (flag) {
        btn.attr('disabled', false);
        form.addClass('form-valid');
    }

    input.change(function () {
        $(this).parents('.form-group').removeClass('validation-error');
        $(this).parents('.form-group').removeClass('group-validation');

        if ($(formClass + ' ' + '.form-group').hasClass("group-validation")) {
            btn.attr('disabled', 'disabled');
        } else {
            btn.attr('disabled', false);
            form.addClass('form-valid');
        }
    });
});

// MODAL
$('.modal .form-submit').click(function () {
    var modalName = $(this).parents('.modal').attr("data-modal");
    var modalSend = 'modal-send__' + modalName;

    if ($('.modal .form').hasClass("form-valid")) {
        $('.modal .form-submit').attr('data-toggle', 'modal');
        $('.modal .form-submit').attr('data-target', '.modal-send');
        $('.modal .form-submit').attr('data-dismiss', 'modal');

        $('.modal-send').attr('data-name', modalSend);
    }
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
    $(this).parents('.product-buy').addClass('product-card--in-basket')
});

//catalog-filter
$(".catalog-filter__item").click(function () {
    $(".catalog-filter__item").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");

    $(".product-filter").css('display', 'none');
    $(selectedFilter).css('display', 'flex');
});

// tabs
$('.tabs-header__list').on('click', 'li:not(.tabs-header__item--active)', function () {
    $(this)
        .addClass('tabs-header__item--active').siblings().removeClass('tabs-header__item--active')
        .closest('.tabs').find('.tabs-content__item').removeClass('tabs-content__item--active').eq($(this).index()).addClass('tabs-content__item--active');
});
$('.tabs-content__title').on('click', function () {
    $(this).toggleClass('tabs-content__title--active')
        .siblings('.tabs-content__wrap').slideToggle('medium');

});


$('.rate-area label').on('click', function () {
    var tit = $(this).attr('title');
    $('.rate-area .tit').text('-' + ' ' + tit);
});

$('.btn--reviews-leave').on('click', function () {
    $(this).parents('.product-reviews__header').toggleClass('add-reviews');
    $('.reviews-leave').slideToggle('medium');
});

$(".input-group-val .form-control").focus(function () {
    $(this).parent().addClass('input-focus');
});

$(".input-group-val .form-control").blur(function () {
    if ($(this).val() == "") {
        $(this).parent().removeClass('input-focus')
    }
});

// MAP 
$(".map-select__item").click(function () {
    $(".map-select__item").removeClass('active');
    $(this).addClass('active');
});

// search
$(".search-filter__btn").click(function () {
    $(".search-filter__btn").removeClass('filter-active');
    $(this).addClass('filter-active');
});

//header__basket 
var basketValue = $('.header__basket span').text();
if (basketValue == 0) {
    $('.header__basket').addClass('header__basket--empty');
}

// preloader
$(window).on('load', function () {
    $('#preloader').delay(500).fadeToggle(500);
});


$(document).ready(function () {
    var productSliderThumbs = new Swiper(".product-slider__thumbs", {
        direction: "vertical",

        spaceBetween: 15,
        longSwipesRatio:0.1,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slidesPerView: 'auto',
    });

    var productSliderProduct = new Swiper(".product-slider__product", {
        loop: true,
        spaceBetween: 10,
        longSwipesRatio:0.1,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        thumbs: {
            swiper: productSliderThumbs,
        },
        pagination: {
            el: '.product-slider .swiper-pagination',
            clickable: true
        },
    });
});

// product-scroll
$(window).load(function () {
    $.mCustomScrollbar.defaults.theme = "light-2";
    $(".product__scroll-x").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        mouseWheel: true,
        advanced: { autoExpandHorizontalScroll: true }
    });
});

$(window).load(function () {
    $.mCustomScrollbar.defaults.theme = "light-2";
    $(".scroll-x").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        //mouseWheel: false,
        mouseWheel: true,
        horizontalScroll: true,
        callback: true,
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });
});


// .specifications--swiper
const addSpecificationsSlider = () => {
    $(".specifications--swiper").addClass('swiper-container');
    $(".specifications--swiper .specifications__row").addClass('swiper-wrapper');
    $(".specifications--swiper .specifications__card").addClass('swiper-slide');

    var news = new Swiper(".specifications--swiper", {
        slidesPerView: 'auto',
        freeMode: {
            enabled: true,
            minimumVelocity: 0.2,
            momentum: false,
        },
        slidesPerColumn: 3,
        slidesPerColumnFill: 'row',
        scrollbar: {
            el: '.specifications--swiper .swiper-scrollbar',
            hide: false,
            draggable: true,
        },
    });
}

const even = n => !(n % 2);
const specificationsCout = $('.specifications__card').length;
const specificationsCoutEven = even(specificationsCout);
if (specificationsCout > 6 && specificationsCout < 10) {
    if (specificationsCoutEven) {
        const specificationsCoutRow = specificationsCout - 4;
        $('.specifications__row').attr('style', 'grid-template-columns: repeat(' + specificationsCoutRow + ',196px);');
        addSpecificationsSlider();
    } else {
        const specificationsCoutRow = (specificationsCout + 1) / 2;
        $('.specifications__row').attr('style', 'grid-template-columns: repeat(' + specificationsCoutRow + ',196px);');
        addSpecificationsSlider();
    }
}

if (specificationsCout > 6 && specificationsCout >= 10) {
    if (specificationsCoutEven) {
        const specificationsCoutRow = specificationsCout / 2;
        $('.specifications__row').attr('style', 'grid-template-columns: repeat(' + specificationsCoutRow + ',196px);');
        addSpecificationsSlider();
    } else {
        const specificationsCoutRow = (specificationsCout + 1) / 2;
        $('.specifications__row').attr('style', 'grid-template-columns: repeat(' + specificationsCoutRow + ',196px);');
        addSpecificationsSlider();
    }
}

// .about__cards--swiper
$(".about__cards--swiper").addClass('swiper-container');
$(".about__cards--swiper .about__cards").addClass('swiper-wrapper');
$(".about__cards--swiper .about-card").addClass('swiper-slide');

var about = new Swiper(".about__cards--swiper", {
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.about__cards--swiper .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
});
// .product--swiper-1
$(".product--swiper-1").addClass('swiper-container');
$(".product--swiper-1 .product__cards--scroll").addClass('swiper-wrapper');
$(".product--swiper-1 .product-card").addClass('swiper-slide');

var product1 = new Swiper(".product--swiper-1", {
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.product--swiper-1 .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
});

// .product--swiper-2
$(".product--swiper-2").addClass('swiper-container');
$(".product--swiper-2 .product__cards--scroll").addClass('swiper-wrapper');
$(".product--swiper-2 .product-card").addClass('swiper-slide');

var product2 = new Swiper(".product--swiper-2", {
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.product--swiper-2 .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
});

// .product--swiper-3
$(".product--swiper-3").addClass('swiper-container');
$(".product--swiper-3 .product__cards--scroll").addClass('swiper-wrapper');
$(".product--swiper-3 .product-card").addClass('swiper-slide');

var product3 = new Swiper(".product--swiper-3", {
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.product--swiper-3 .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
});

// .news--swiper
$(".news--swiper").addClass('swiper-container');
$(".news--swiper .news__cards").addClass('swiper-wrapper');
$(".news--swiper .news-card").addClass('swiper-slide');

var news = new Swiper(".news--swiper", {
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.news--swiper .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
});
// .specifications--swiper
addSpecificationsSlider();

// .contacts-info--swiper
$(".contacts-info--swiper").addClass('swiper-container');
$(".contacts-info--swiper .contacts-info__row").addClass('swiper-wrapper');
$(".contacts-info--swiper .contacts-info__item").addClass('swiper-slide');

var contactsInfo = new Swiper(".contacts-info--swiper", {
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.contacts-info--swiper .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
});


// adaptive / add slider 
$(".catalog-filter--mobile").click(function () {
    $(this).toggleClass('active');
    $('.catalog-filter--mobile .catalog-filter__select').toggleClass('active');
    $(".catalog-filter--mobile .catalog-filter__list").slideToggle('medium');

    let filterActiveTxt = $(".filter-active").text();
    $('.catalog-filter--mobile .catalog-filter__select .tit').text(filterActiveTxt);
});


//Минус плюс
$(document).ready(function() {
    $('.counter .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counter .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});	