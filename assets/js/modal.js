document.addEventListener('DOMContentLoaded', () => {
    let windowWidth = window.innerWidth

    $('.header__bottom__circles__callback').click(()=>{

        // creating modal window

        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.insertAdjacentHTML('afterbegin',`
            <div class="modal__overlay">
                <div class="modal__window">
                <div class="modal__top"><span class="nothing">&nbsp;&nbsp;</span><span class="modal__close">&times;</span></div>
                    
                    <div class="modal__title">
                        Мы свяжемся с Вами в течении 10 минут!
                    </div>
                  <div class="modal__form">
                    <input placeholder="Как Вас зовут?" class="modal__form__name" type="text" name="" value="">
                    <input placeholder="(XXX) - XXX - XXXX" class="modal__form__phone-number" type="tel" name="" value="">
                    <button class="modal__form__button" type="button" name="button">отправить</button>
                  </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        setTimeout(()=>{modal.classList.add('open')},1)



        let close = $('.modal__close')
        close.click(()=>{
            modal.classList.add('fade')
            setTimeout(()=>{modal.remove();},300)

        })


    // phone number input mask

        const phoneNumberFirst = document.querySelector('.modal__form__phone-number');
        var maskOptionsFirst = {
            mask: '(000) - 000 - 0000'
        };
        var maskFirst = IMask(phoneNumberFirst, maskOptionsFirst);


    })

    $('.header__bottom__circles__percent').click(()=>{

        // creating modal window

        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.insertAdjacentHTML('afterbegin',`
            <div class="modal__overlay">
                <div class="modal__window">
                <div class="modal__top"><span class="nothing">&nbsp;&nbsp;</span><span class="modal__close">&times;</span></div>
                    
                    <div class="modal__title percent">
                        Получите скидку -5% на 1-й визит!
                    </div>
                  <div class="modal__form">
                    <input placeholder="Как Вас зовут?" class="modal__form__name" type="text" name="" value="">
                    <input placeholder="(XXX) - XXX - XXXX" class="modal__form__phone-number" type="tel" name="" value="">
                    <button class="modal__form__button" type="button" name="button">отправить</button>
                  </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        setTimeout(()=>{modal.classList.add('open')},1)



        let close = $('.modal__close')
        close.click(()=>{
            modal.classList.add('fade')
            setTimeout(()=>{modal.remove();},300)

        })


        // phone number input mask

        const phoneNumberFirst = document.querySelector('.modal__form__phone-number');
        var maskOptionsFirst = {
            mask: '(000) - 000 - 0000'
        };
        var maskFirst = IMask(phoneNumberFirst, maskOptionsFirst);


    })



    function modalMain(){

        // creating modal window

        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.classList.add('main')
        modal.insertAdjacentHTML('afterbegin',`
        <div class="modal__overlay">
            <div class="modal__window">
                <div class="modal__top"><span class="nothing">&nbsp;&nbsp;</span><span class="modal__close">&times;</span></div>

                <div class="modal__title">
                    Мы свяжемся с Вами в течении 10 минут!
                </div>
                <div class="modal__form">
                    <input placeholder="Как Вас зовут?" class="modal__form__name" type="text" name="" value="">
                    <input placeholder="(XXX) - XXX - XXXX" class="modal__form__phone-number" type="tel" name="" value="">
                    <div class="modal__dropdown">
                        <button class='modal__category'><span class="modal__current-category">Косметология</span><img class=""src="assets/images/arrow.png" alt=""></button>
                        <ul class="modal__category-list hidden">
                            <li class="cosm">Косметология</li>
                            <li class="dent">Стоматология</li>
                            <li class="kids-dent">Детская стоматология</li>
                        </ul>
                    </div>
                    <button class="modal__form__button" type="button" name="button">отправить</button>
                </div>

            </div>
        </div>
        `)
        document.body.appendChild(modal)
        setTimeout(()=>{modal.classList.add('open')},1)



        let close = $('.modal__close')
        close.click(()=>{
            modal.classList.add('fade')
            setTimeout(()=>{modal.remove();},300)

        })


        // phone number input mask

        const phoneNumberFirst = document.querySelector('.modal__form__phone-number');
        var maskOptionsFirst = {
            mask: '(000) - 000 - 0000'
        };
        var maskFirst = IMask(phoneNumberFirst, maskOptionsFirst);



        let cosmActive = true
        let dentActive = false
        let kidsDentActive = false

        $('.modal__category').click(()=>{
            $('.modal__category-list').toggleClass('hidden')
        })
        document.querySelector('.modal__category-list .cosm').addEventListener('click', ()=>{
            cosmActive = true
            dentActive = false
            kidsDentActive = false
            document.querySelector('.modal__current-category').innerHTML = 'Косметология'
            $('.modal__category-list').addClass('hidden')
        })
        document.querySelector('.modal__category-list .dent').addEventListener('click', ()=>{
            cosmActive = false
            dentActive = true
            kidsDentActive = false
            document.querySelector('.modal__current-category').innerHTML = 'Стоматология'
            $('.modal__category-list').addClass('hidden')
        })
        document.querySelector('.modal__category-list .kids-dent').addEventListener('click', ()=>{
            cosmActive = false
            dentActive = false
            kidsDentActive = true
            document.querySelector('.modal__current-category').innerHTML = 'Детская стоматология'
            $('.modal__category-list').addClass('hidden')
        })

    }

    $('.appointment').click(modalMain)
    $('.service__order__btn').click(modalMain)
    $('.promo__button').click(modalMain)
    $('.intro__form__button').click(modalMain)


})