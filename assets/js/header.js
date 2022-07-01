
function app() {

    let windowWidth = window.innerWidth


    // language choice animation
    const hiddenLang = document.querySelectorAll('.header__bottom__lang__hidden')
    const currentLang = document.querySelectorAll('.header__bottom__lang__current')
    const lang = document.querySelectorAll('.header__bottom__lang')

    currentLang[0].addEventListener('mouseenter', () => {
        hiddenLang[0].style.opacity = '1'
        currentLang[0].style.backgroundColor = 'white'
        hiddenLang[1].style.opacity = '1'
        currentLang[1].style.backgroundColor = 'white'
    })
    currentLang[1].addEventListener('mouseenter', () => {
        hiddenLang[0].style.opacity = '1'
        currentLang[0].style.backgroundColor = 'white'
        hiddenLang[1].style.opacity = '1'
        currentLang[1].style.backgroundColor = 'white'
    })
    lang[0].addEventListener('mouseleave', () => {
        hiddenLang[0].style.opacity = '0'
        currentLang[0].style.backgroundColor = 'transparent'
        hiddenLang[1].style.opacity = '0'
        currentLang[1].style.backgroundColor = 'transparent'
    })
    lang[1].addEventListener('mouseleave', () => {
        hiddenLang[0].style.opacity = '0'
        currentLang[0].style.backgroundColor = 'transparent'
        hiddenLang[1].style.opacity = '0'
        currentLang[1].style.backgroundColor = 'transparent'
    })


// Services animation
    const header = document.querySelector('.header')
    const service = document.querySelector('.hidden__service')
    const serviceBtn = document.querySelector('.nav__item.service')
    const burger = document.querySelectorAll('.nav__burger span')

    let crossBlocker = false
    $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $(".hidden__service"); // Элемент, клик по которому не должен приводить к закрытию.
        if (!$('.nav__item.service').is(e.target) && !$('.nav__burger').is(e.target) && !$('.nav__burger span').is(e.target)){
            if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.addClass('hidden')
                $('.nav__item.service').removeClass('green')
                $('.header').removeClass('white')
                $('.nav__burger').removeClass('cross')
                $('.nav__burger span').css('backgroundColor', '#b1b9c4')
            }
        }
        if ($('.nav__item.service').is(e.target) || $('.green').is(e.target) ) {
            $('.header').toggleClass('white')
            $('.hidden__service').toggleClass('hidden')
            $('.nav__item.service').toggleClass('green')
            // from burger to cross
            $('.nav__burger').toggleClass('cross')
            $('.nav__burger span').css('backgroundColor','white')
        }

        if ($('.nav__burger.cross').is(e.target) || $('.nav__burger.cross span').is(e.target)){
            div.addClass('hidden')
            $('.nav__burger').removeClass('cross')
            $('.nav__item.service').removeClass('green')
            $('.header').removeClass('white')
            $('.nav__burger span').css('backgroundColor','#b1b9c4')
            $('.container.hdr-small.hidden').removeClass('hidden')

            crossBlocker = true
        }
        if($('.nav__burger').is(e.target) || $('.nav__burger span').is(e.target)){
            if (crossBlocker == false) {
                $('.header').toggleClass('white')
                $('.hidden__service').toggleClass('hidden')
                $('.nav__item.service').toggleClass('green')
                $('.container.hdr-small').addClass('hidden')
                // from burger to cross
                $('.nav__burger').toggleClass('cross')
                $('.nav__burger span').css('backgroundColor','white')
            }
        }
        crossBlocker = false
    });


    $(window).resize(()=>{
        $(".hidden__service").addClass('hidden')
        $('.nav__item.service').removeClass('green')
        $('.header').removeClass('white')
        $('.nav__burger').removeClass('cross')
        $('.nav__burger span').css('backgroundColor', '#b1b9c4')
    })

    // hidden menu for tablets

    $(document).mouseup(function (e) { // событие клика по веб-документу
        let div = $(".hidden__menu-small"); // Элемент, клик по которому не должен приводить к закрытию.
        if (!$('.header-small__burger.cross').is(e.target) && !$('.header-small__burger span').is(e.target) ){
            if (!div.is(e.target) && div.has(e.target).length === 0 && !$('.header-small').is(e.target) && $('.header-small').has(e.target).length === 0 ) { // и не по его дочерним элементам
                $('.hidden__menu-small').addClass('hidden')
                $('.header-small').removeClass('white')
                $('.header-small__burger').removeClass('cross')
            }
        }
    })

    $('.header-small__burger').click(()=>{
        $('.hidden__menu-small').toggleClass('hidden')
        $('.header-small').toggleClass('white')
        $('.header-small__burger').toggleClass('cross')
    })

    // Moving themes serv track by clicking on topics
    const topics = document.querySelectorAll('.service__topic__item')
    const logos = document.querySelectorAll('.service__topic__item__logo')
    const servTrack = document.querySelector('.service__themes__track')
    const servSmallTrack = document.querySelector('.hidden__menu-small__service__item__track')
    const servSmallBlockWidth = document.querySelectorAll('.hidden__menu-small__service__item__block')[0].offsetWidth

    let serviceThemesColumnWidth
    let serviceThemesColumnPaddingLeft
    let serviceThemesColumnPaddingRight
    let serviceThemesColumnPadding
    let serviceThemesColumn
    let servTrackWidth
    function setServiceSlider(){
        if (windowWidth > 750) {
            serviceThemesColumnWidth = parseInt($('.service__themes__column').css('width'))
            serviceThemesColumnPaddingLeft = parseInt($('.service__themes__column').css('padding-left'))
            serviceThemesColumnPaddingRight = parseInt($('.service__themes__column').css('padding-right'))
            serviceThemesColumnPadding = serviceThemesColumnPaddingLeft + serviceThemesColumnPaddingRight
            serviceThemesColumn = serviceThemesColumnWidth + serviceThemesColumnPadding;
            servTrackWidth = serviceThemesColumn*6
            servTrack.style.width = servTrackWidth+'px'
            topics[0].classList.add('active')
            topics[1].classList.remove('active')
            topics[2].classList.remove('active')
            logos[0].classList.add('active')
            logos[1].classList.remove('active')
            logos[2].classList.remove('active')
            servTrack.style.transform = 'translateX(0)'
            servSmallTrack.style.transform = 'translateX(0)'
        } else {
            for (let i = 0; i < topics.length; i++){
                topics[i].classList.remove('active')
                logos[i].classList.remove('active')
            }
        }
    }
    setServiceSlider()
    $(window).resize(setServiceSlider)

    let tinyThemes = document.querySelectorAll('.hidden__menu-tiny__themes')

    if (windowWidth <= 750) {
        for (let i = 0; i < topics.length; i++){
            topics[i].classList.remove('active');
            logos[i].classList.remove('active');
        }
    }



    function cosmActive(){

        if (windowWidth > 750){
            for (let i = 0; i < topics.length; i++){
                topics[i].classList.remove('active');
                logos[i].classList.remove('active');
            }
            topics[0].classList.add('active')
            topics[3].classList.add('active')
            logos[0].classList.add('active')
            logos[3].classList.add('active')
        }


        if (windowWidth <= 750){

            $('.header-small.white').toggleClass('cosm')

            tinyThemes[0].classList.toggle('hidden')
            tinyThemes[1].classList.add('hidden')
            tinyThemes[2].classList.add('hidden')

            topics[1].classList.remove('active')
            topics[4].classList.remove('active')
            logos[1].classList.remove('active')
            logos[4].classList.remove('active')
            topics[2].classList.remove('active')
            topics[5].classList.remove('active')
            logos[2].classList.remove('active')
            logos[5].classList.remove('active')

            topics[0].classList.toggle('active')
            topics[3].classList.toggle('active')
            logos[0].classList.toggle('active')
            logos[3].classList.toggle('active')
            $('.header-small.white').removeClass('about-active')
            $('.hidden__menu-tiny__about-us').addClass('hidden')
            $('.header-small.white').toggleClass('topic-active')
            if ($('.header-small.white').hasClass('dent') || $('.header-small.white').hasClass('kids-dent')){
                $('.header-small.white').addClass('topic-active')
                $('.header-small.white').removeClass('dent')
                $('.header-small.white').removeClass('kids-dent')
            }
        }


        servTrack.style.transform = 'translateX(0)'
        servSmallTrack.style.transform = 'translateX(0)'

    }
    function dentActive(){

        if (windowWidth > 750){
            for (let i = 0; i < topics.length; i++){
                topics[i].classList.remove('active');
                logos[i].classList.remove('active');
            }
            topics[1].classList.add('active')
            topics[4].classList.add('active')
            logos[1].classList.add('active')
            logos[4].classList.add('active')
        }


        if (windowWidth <= 750){
            $('.header-small.white').toggleClass('dent')

            tinyThemes[0].classList.add('hidden')
            tinyThemes[1].classList.toggle('hidden')
            tinyThemes[2].classList.add('hidden')

            topics[0].classList.remove('active')
            topics[3].classList.remove('active')
            logos[0].classList.remove('active')
            logos[3].classList.remove('active')
            topics[2].classList.remove('active')
            topics[5].classList.remove('active')
            logos[2].classList.remove('active')
            logos[5].classList.remove('active')

            topics[1].classList.toggle('active')
            topics[4].classList.toggle('active')
            logos[1].classList.toggle('active')
            logos[4].classList.toggle('active')
            $('.header-small.white').removeClass('about-active')
            $('.hidden__menu-tiny__about-us').addClass('hidden')
            $('.header-small.white').toggleClass('topic-active')
            if ($('.header-small.white').hasClass('cosm') || $('.header-small.white').hasClass('kids-dent')){
                $('.header-small.white').addClass('topic-active')
                $('.header-small.white').removeClass('cosm')
                $('.header-small.white').removeClass('kids-dent')
            }
        }

        servTrack.style.transform = 'translateX(-'+((serviceThemesColumn*2)-serviceThemesColumnPadding*2)+'px)'
        servSmallTrack.style.transform = 'translateX(-'+servSmallBlockWidth+'px)'
    }
    function kidsDentActive(){

        if (windowWidth > 750){
            for (let i = 0; i < topics.length; i++){
                topics[i].classList.remove('active');
                logos[i].classList.remove('active');
            }
            topics[2].classList.add('active')
            topics[5].classList.add('active')
            logos[2].classList.add('active')
            logos[5].classList.add('active')

        }

        if (windowWidth <= 750){

            $('.header-small.white').toggleClass('kids-dent')

            tinyThemes[0].classList.add('hidden')
            tinyThemes[1].classList.add('hidden')
            tinyThemes[2].classList.toggle('hidden')

            topics[0].classList.remove('active')
            topics[3].classList.remove('active')
            logos[0].classList.remove('active')
            logos[3].classList.remove('active')
            topics[1].classList.remove('active')
            topics[4].classList.remove('active')
            logos[1].classList.remove('active')
            logos[4].classList.remove('active')

            topics[2].classList.toggle('active')
            topics[5].classList.toggle('active')
            logos[2].classList.toggle('active')
            logos[5].classList.toggle('active')
            $('.header-small.white').removeClass('about-active')
            $('.hidden__menu-tiny__about-us').addClass('hidden')
            $('.header-small.white').toggleClass('topic-active')
            if ($('.header-small.white').hasClass('cosm') || $('.header-small.white').hasClass('dent')){
                $('.header-small.white').addClass('topic-active')
                $('.header-small.white').removeClass('dent')
                $('.header-small.white').removeClass('cosm')
            }

        }

        servTrack.style.transform = 'translateX(-'+((serviceThemesColumn*4)-serviceThemesColumnPadding*4)+'px)'
        servSmallTrack.style.transform = 'translateX(-'+(servSmallBlockWidth*2)+'px)'
    }

    topics[0].addEventListener('click', cosmActive)
    topics[1].addEventListener('click', dentActive)
    topics[2].addEventListener('click', kidsDentActive)

    topics[3].addEventListener('click', cosmActive)
    topics[4].addEventListener('click', dentActive)
    topics[5].addEventListener('click', kidsDentActive)

// phone hover

    $('.header__bottom__circles__callback').mouseenter(function () {
        $('.header__bottom__circles__phone').css('fill','white')
    })
    $('.header__bottom__circles__callback').mouseleave(function () {
        $('.header__bottom__circles__phone').css('fill','black')
    })

// burger hover

    $('.nav__item.service').mouseenter(function () {
        $('.nav__burger span').css('backgroundColor','white')
    })
    $('.nav__item.service').mouseleave(function () {
        if ($('.nav__item.service').hasClass('green')){
            $('.nav__burger span').css('backgroundColor','white')
        } else {
            $('.nav__burger span').css('backgroundColor','#b1b9c4')
        }

    })


// about us hover

    // $('.nav__item.about-us').click(() => {
    //     $('.hidden__about-us').removeClass('hidden')
    // })
    // $('.hidden__about-us').mouseleave(() => {
    //     $('.hidden__about-us').addClass('hidden')
    // })
    // $(document).mouseup(function (e) { // событие клика по веб-документу
    //     let div = $(".hidden__about-us"); // Элемент, клик по которому не должен приводить к закрытию.
    //     if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         $('.hidden__about-us').addClass('hidden')
    //     }
    // })


    // about us menu when hidden menu becomes tiny

    $('.hidden__menu-tiny__nav__item.about-us').click(()=>{
        $('.hidden__menu-tiny__about-us').toggleClass('hidden')
        if ($('.hidden__menu-tiny__about-us').hasClass('hidden')){
            $('.hidden__menu-tiny__nav__item.about-us').html("О нас <img class='about-us arrow__img gone'src='assets/images/arrow.png'>")
        } else $('.hidden__menu-tiny__nav__item.about-us').html("Скрыть <img style='transform: rotate(180deg)' class='about-us arrow__img gone'src='assets/images/arrow.png'>")
        $('.header-small.white').removeClass('topic-active')
        $('.header-small.white').removeClass('cosm')
        $('.header-small.white').removeClass('dent')
        $('.header-small.white').removeClass('kids-dent')
        $('.header-small.white').toggleClass('about-active')
        for (let i=0; i < tinyThemes.length; i++){
            tinyThemes[i].classList.add('hidden')
        }
        for (let i=0; i < topics.length; i++){
            topics[i].classList.remove('active')
            logos[i].classList.remove('active')
        }

    })


// dissapeing arrows when hovering links

    const bottomThemeItem = document.querySelectorAll('.serv__item__themes__item')
    for(let key of bottomThemeItem){
        key.addEventListener('mouseenter', ()=>{
            key.children[1].classList.remove('hidden')
        })
        key.addEventListener('mouseleave', ()=>{
            key.children[1].classList.add('hidden')
        })
    }
    const topThemeItem = document.querySelectorAll('.service__themes__item')
    for(let key of topThemeItem){
        key.addEventListener('mouseenter', ()=>{
            key.children[1].classList.remove('hidden')
        })
        key.addEventListener('mouseleave', ()=>{
            key.children[1].classList.add('hidden')
        })
    }


    // when click on logo, it moves user to the main page

    $(".header__logo").click(function() {
        window.location = "index.html";
    });
    $(".about-us__item.about-us").click(function() {
        window.location = "about_us.html";
    });

    // fixed header
    let height = window.scrollY
    $(window).scroll(()=>{
        height = window.scrollY
        if (height > 50) {
            $('.header').addClass('fixed')
            $('.header-small').addClass('fixed')

        } else {
            $('.header').removeClass('fixed')
            $('.header-small').removeClass('fixed')
        }
    })


}


document.addEventListener('DOMContentLoaded', app)


