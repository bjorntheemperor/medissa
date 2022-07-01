document.addEventListener('DOMContentLoaded', () => {
    let windowWidth = window.innerWidth


// phone number input mask

const phoneNumberFirst = document.querySelector('.intro__form__phone-number');
var maskOptionsFirst = {
    mask: '(000) - 000 - 0000'
};
var maskFirst = IMask(phoneNumberFirst, maskOptionsFirst);

const phoneNumberSecond = document.querySelector('.intro__form__phone-number.quest');
var maskOptionsSecond = {
    mask: '(000) - 000 - 0000'
};
var maskSecond = IMask(phoneNumberSecond, maskOptionsSecond);

if (windowWidth <= 1160){
    $('.intro__form__phone-number.quest').attr('placeholder', 'Ваш телефон')
} else $('.intro__form__phone-number.quest').attr('placeholder', '(XXX) - XXX - XXXX')

$(window).resize(()=>{
    if (windowWidth <= 1160){
        $('.intro__form__phone-number.quest').attr('placeholder', 'Ваш телефон')
    } else $('.intro__form__phone-number.quest').attr('placeholder', '(XXX) - XXX - XXXX')

})


})