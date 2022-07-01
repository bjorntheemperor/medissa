function app(){
  let windowWidth = window.innerWidth


// disappearing arrows when hovering links

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

// wide theme items hover

  const wideThemeItem = document.querySelectorAll('.serv__item__themes__item__wide a')
  for(let key of wideThemeItem){
    key.addEventListener('mouseenter', ()=>{
      key.style.borderBottom = '1px solid #009fa5'
    })
    key.addEventListener('mouseleave', ()=>{
      key.style.borderBottom = '0'
    })
  }

// SERV IMG HOVER

  $('.serv__item.first').mouseenter(()=>{
    $('.serv__item__more.long').removeClass('hidden')
    $('.serv__item__block__blur.first').addClass('hidden')
    $('.serv__item__block.first').addClass('hidden')
    $('.serv__item__block__text.first').addClass('hidden')
  })
  $('.serv__item__more.long').mouseleave(()=>{
    $('.serv__item__more.long').addClass('hidden')
    $('.serv__item__block__blur.first').removeClass('hidden')
    $('.serv__item__block.first').removeClass('hidden')
    $('.serv__item__block__text.first').removeClass('hidden')
  })

  $('.serv__item.second').mouseenter(()=>{
    $('.serv__item__more.wide-first').removeClass('hidden')
    $('.serv__item__block__blur.second').addClass('hidden')
    $('.serv__item__block.second').addClass('hidden')
    $('.serv__item__block__text.second').addClass('hidden')
  })
  $('.serv__item__more.wide-first').mouseleave(()=>{
    $('.serv__item__more.wide-first').addClass('hidden')
    $('.serv__item__block__blur.second').removeClass('hidden')
    $('.serv__item__block.second').removeClass('hidden')
    $('.serv__item__block__text.second').removeClass('hidden')
  })

  $('.serv__item.third').mouseenter(()=>{
    $('.serv__item__more.wide-second').removeClass('hidden')
    $('.serv__item__block__blur.third').addClass('hidden')
    $('.serv__item__block.third').addClass('hidden')
    $('.serv__item__block__text.third').addClass('hidden')
  })
  $('.serv__item__more.wide-second').mouseleave(()=>{
    $('.serv__item__more.wide-second').addClass('hidden')
    $('.serv__item__block__blur.third').removeClass('hidden')
    $('.serv__item__block.third').removeClass('hidden')
    $('.serv__item__block__text.third').removeClass('hidden')
  })




// doctors slider

  const prevArrow = $('.slider__arrow.prev')
  const nextArrow = $('.slider__arrow.next')

  const doctorItems = document.querySelectorAll('.doctors__slider__item')
  let sliderItemWidth = parseInt($('.doctors__slider__item').css('width'))
  const sliderItemGap = 30;
  const totalSlides = document.querySelectorAll('.doctors__slider__item').length;
  const totalGaps = totalSlides-1;
  let currentX = 0
  $('.doctors__slider__track').css('width', ((sliderItemWidth*totalSlides)+(sliderItemGap*totalGaps))+'px')
  let nextArrowStyle = document.querySelector('.triangle-next').style.borderRight
  let prevArrowStyle = document.querySelector('.triangle-prev').style.borderLeft

  nextArrowStyle = '9px solid black'
  prevArrowStyle = '9px solid #e7ecf4'

  const doctorTypes = document.querySelectorAll('.doctors__type__item')
  let dentArray = []
  let cosmArray = []

  let currentSlider = 'all'


// creating arrays of doctors, so that we can use lengths of the their arrays further
  let tempA = 0
  let tempB = 0

  for (let i=0; i < $("[data-doctor]").length; i++){
    if (doctorItems[i].dataset.doctor == 'dent'){
      dentArray[tempA] = doctorItems[i]
      tempA++
    } else if (doctorItems[i].dataset.doctor == 'cosm'){
      cosmArray[tempB] = doctorItems[i]
      tempB++
    }
  }

// Slides will be shown
  let doctorSlidesShown
  let doctorGapShown

  function slidesWillBeShown(){
    if (windowWidth <= 510 ){
      doctorSlidesShown = 1;
      doctorGapShown = doctorSlidesShown-1;
    } else if (windowWidth <= 750){
      doctorSlidesShown = 2;
      doctorGapShown = doctorSlidesShown-1;
    } else {
      doctorSlidesShown = 3;
      doctorGapShown = doctorSlidesShown-1;
    }
  }

  slidesWillBeShown()

  $(window).resize(slidesWillBeShown())


// choosing type of doctor


  $('.doctors__type__item.all').click(()=>{

    for ( let i = 0; i < $('.doctors__type__item').length; i++){
      document.querySelectorAll('.doctors__type__item')[i].classList.remove('active')
    }
    $('.doctors__type__item.all').addClass('active')
    for (let i=0; i < $("[data-doctor]").length; i++){
      doctorItems[i].classList.remove('hidden')
      doctorItems[i].children[1].classList.remove('hidden')
    }

    $('.triangle-next').css('border-left', '9px solid black')
    $('.triangle-prev').css('border-right', '9px solid #e7ecf4')
    prevArrow.css('border', '1px solid #e7ecf4')
    prevArrow.css('background-color', 'white')

    currentSlider = 'all'
    currentX = 0
    $('.doctors__slider__track').css('transform', `translateX(0px)`)
  })


  $('.doctors__type__item.dent').click(()=>{

    for ( let i = 0; i < $('.doctors__type__item').length; i++){
      document.querySelectorAll('.doctors__type__item')[i].classList.remove('active')
    }
    $('.doctors__type__item.dent').addClass('active')
    for (let i=0; i < $("[data-doctor]").length; i++){
      if (doctorItems[i].dataset.doctor == 'cosm'){
        //doctorItems[i].style.display = 'none';
        doctorItems[i].classList.add('hidden')
        doctorItems[i].children[1].classList.add('hidden')
      } else {
        doctorItems[i].classList.remove('hidden')
        doctorItems[i].children[1].classList.remove('hidden')
      }
    }

    $('.triangle-next').css('border-left', '9px solid black')
    $('.triangle-prev').css('border-right', '9px solid #e7ecf4')
    prevArrow.css('border', '1px solid #e7ecf4')
    prevArrow.css('background-color', 'white')

    currentSlider = 'dent'
    currentX = 0
    $('.doctors__slider__track').css('transform', `translateX(0px)`)
  })

  $('.doctors__type__item.cosm').click(()=>{

    for ( let i = 0; i < $('.doctors__type__item').length; i++){
      document.querySelectorAll('.doctors__type__item')[i].classList.remove('active')
    }
    $('.doctors__type__item.cosm').addClass('active')
    for (let i=0; i < $("[data-doctor]").length; i++){
      if (doctorItems[i].dataset.doctor == 'dent'){
        doctorItems[i].classList.add('hidden')
        doctorItems[i].children[1].classList.add('hidden')
      } else {
        doctorItems[i].classList.remove('hidden')
        doctorItems[i].children[1].classList.remove('hidden')
      }
    }

    $('.triangle-next').css('border-left', '9px solid black')
    $('.triangle-prev').css('border-right', '9px solid #e7ecf4')
    prevArrow.css('border', '1px solid #e7ecf4')
    prevArrow.css('background-color', 'white')

    currentSlider = 'cosm'
    currentX = 0

    if(cosmArray.length == doctorSlidesShown){
      $('.triangle-next').css('border-left', '9px solid #e7ecf4')
      $('.triangle-prev').css('border-right', '9px solid #e7ecf4')
      nextArrow.css('border', '1px solid #e7ecf4')
      nextArrow.css('background-color', 'white')
    }


    $('.doctors__slider__track').css('transform', `translateX(0px)`)
  })



  nextArrow.click( () => {
    if (currentSlider == 'all'){
      currentX = currentX+sliderItemWidth+sliderItemGap
      doubleCurrentX = currentX + sliderItemWidth+sliderItemGap
      if (doubleCurrentX > (sliderItemWidth*totalSlides+sliderItemGap*totalGaps) - (sliderItemWidth*doctorSlidesShown+sliderItemGap*doctorGapShown) ) {  // проверка: можно ли будет еще раз двигать слайд после клика
        nextArrowStyle = '9px solid #e7ecf4'
        prevArrowStyle = '9px solid black'
        $('.triangle-prev').css('border-right', prevArrowStyle)
        $('.triangle-next').css('border-left', nextArrowStyle)
        nextArrow.css('border', '1px solid #e7ecf4')
        nextArrow.css('background-color', 'white')
        doubleCurrentX = currentX
      } else {
        nextArrowStyle = '9px solid black'
        prevArrowStyle = '9px solid black'
        $('.triangle-prev').css('border-right', prevArrowStyle)
        doubleCurrentX = currentX
      }
      if (currentX > (sliderItemWidth*totalSlides+sliderItemGap*totalGaps) - (sliderItemWidth*doctorSlidesShown+sliderItemGap*doctorGapShown) ) {
        currentX = currentX-sliderItemWidth-sliderItemGap;
      }
      $('.doctors__slider__track').css('transform', `translateX(-`+currentX+`px)`)
    }
    if (currentSlider == 'dent'){
      currentX = currentX+sliderItemWidth+sliderItemGap
      doubleCurrentX = currentX + sliderItemWidth+sliderItemGap
      if (doubleCurrentX > (sliderItemWidth*dentArray.length+sliderItemGap*(dentArray.length-1)) - (sliderItemWidth*doctorSlidesShown+sliderItemGap*doctorGapShown) ) {  // проверка: можно ли будет еще раз двигать слайд после клика
        nextArrowStyle = '9px solid #e7ecf4'
        prevArrowStyle = '9px solid black'
        $('.triangle-prev').css('border-right', prevArrowStyle)
        $('.triangle-next').css('border-left', nextArrowStyle)
        nextArrow.css('border', '1px solid #e7ecf4')
        nextArrow.css('background-color', 'white')
        doubleCurrentX = currentX
      } else {
        nextArrowStyle = '9px solid black'
        prevArrowStyle = '9px solid black'
        $('.triangle-prev').css('border-right', prevArrowStyle)
        doubleCurrentX = currentX
      }
      if (currentX > (sliderItemWidth*dentArray.length+sliderItemGap*(dentArray.length-1)) - (sliderItemWidth*doctorSlidesShown+sliderItemGap*doctorGapShown) ) {
        currentX = currentX-sliderItemWidth-sliderItemGap;
      }
      $('.doctors__slider__track').css('transform', `translateX(-`+currentX+`px)`)
    }
    if (currentSlider == 'cosm'){
      currentX = currentX+sliderItemWidth+sliderItemGap
      doubleCurrentX = currentX + sliderItemWidth+sliderItemGap
      if (doubleCurrentX > (sliderItemWidth*cosmArray.length+sliderItemGap*(cosmArray.length-1)) - (sliderItemWidth*doctorSlidesShown+sliderItemGap*doctorGapShown) ) {  // проверка: можно ли будет еще раз двигать слайд после клика
        nextArrowStyle = '9px solid #e7ecf4'
        prevArrowStyle = '9px solid black'
        $('.triangle-prev').css('border-right', prevArrowStyle)
        $('.triangle-next').css('border-left', nextArrowStyle)
        nextArrow.css('border', '1px solid #e7ecf4')
        nextArrow.css('background-color', 'white')
        doubleCurrentX = currentX
      } else {
        nextArrowStyle = '9px solid black'
        prevArrowStyle = '9px solid black'
        $('.triangle-prev').css('border-right', prevArrowStyle)
        doubleCurrentX = currentX
      }

      if(cosmArray.length == doctorSlidesShown){
        $('.triangle-next').css('border-left', '9px solid #e7ecf4')
        $('.triangle-prev').css('border-right', '9px solid #e7ecf4')
        nextArrow.css('border', '1px solid #e7ecf4')
        nextArrow.css('background-color', 'white')
      }

      if (currentX > (sliderItemWidth*cosmArray.length+sliderItemGap*(cosmArray.length-1)) - (sliderItemWidth*doctorSlidesShown+sliderItemGap*doctorGapShown) ) {
        currentX = currentX-sliderItemWidth-sliderItemGap;
      }
      $('.doctors__slider__track').css('transform', `translateX(-`+currentX+`px)`)
    }
  })

  prevArrow.click( () => {

    currentX = currentX-sliderItemWidth-sliderItemGap;
    doubleCurrentX = currentX - sliderItemWidth-sliderItemGap
    if (doubleCurrentX < 0) { // проверка: можно ли будет еще раз двигать слайд после клика
      nextArrowStyle = '9px solid black'
      prevArrowStyle = '9px solid #e7ecf4'
      $('.triangle-next').css('border-left', nextArrowStyle)
      $('.triangle-prev').css('border-right', prevArrowStyle)
      prevArrow.css('border', '1px solid #e7ecf4')
      prevArrow.css('background-color', 'white')
      doubleCurrentX = currentX
    } else {
      nextArrowStyle = '9px solid black'
      prevArrowStyle = '9px solid black'
      $('.triangle-next').css('border-left', nextArrowStyle)
      doubleCurrentX = currentX
    }
    if (currentSlider == 'cosm'){
      if(cosmArray.length == doctorSlidesShown){
        $('.triangle-next').css('border-left', '9px solid #e7ecf4')
        $('.triangle-prev').css('border-right', '9px solid #e7ecf4')
        prevArrow.css('border', '1px solid #e7ecf4')
        prevArrow.css('background-color', 'white')
      }
    }


    if (currentX<0) {
      currentX = 0;
    }
    $('.doctors__slider__track').css('transform', `translateX(-`+currentX+`px)`)

  })

// doctors hover

  const sliderItem = document.querySelectorAll('.doctors__slider__item')

  for(let key of sliderItem){
    key.addEventListener('mouseenter', () => {
      key.children[0].children[1].classList.remove('hidden')
      key.children[0].children[2].classList.remove('hidden')
    })
  }
  for(let key of sliderItem){
    key.addEventListener('mouseleave', () => {
      if (windowWidth > 1160) {
        key.children[0].children[1].classList.add('hidden')
      }
      key.children[0].children[2].classList.add('hidden')
    })
  }
  if (windowWidth <= 1160) {
    for (let i = 0; i < sliderItem.length; i++){
      sliderItem[i].children[0].children[1].classList.remove('hidden') // desc
    }
  }
  $(window).resize(()=>{
    if (windowWidth <= 1160) {
      for (let i = 0; i < sliderItem.length; i++){
        sliderItem[i].children[0].children[1].classList.remove('hidden')
      }
    } else {
      for (let i = 0; i < sliderItem.length; i++){
        sliderItem[i].children[0].children[1].classList.add('hidden')
        sliderItem[i].children[0].children[2].classList.add('hidden') // green link
      }
    }
    if (windowWidth <= 1440){
      sliderItemWidth = 360
    }else if (windowWidth <= 1160){
      sliderItemWidth = 220
    } else {
      sliderItemWidth = 450
    }

    $('.doctors__slider__track').css('width', ((sliderItemWidth*totalSlides)+(sliderItemGap*totalGaps))+'px')

  })



// doctor slider arrow hover

  prevArrow.mouseenter( () => {
    $('.triangle-prev').css('border-right', '9px solid white')
    $('.slider__arrow.prev').css('background-color', '#009fa5')
  })

  prevArrow.mouseleave( () => {
    $('.triangle-prev').css('border-right', prevArrowStyle)
    $('.slider__arrow.prev').css('background-color', 'white')
  })

  nextArrow.mouseenter( () => {
    $('.triangle-next').css('border-left', '9px solid white')
    $('.slider__arrow.next').css('background-color', '#009fa5')
  })

  nextArrow.mouseleave( () => {
    $('.triangle-next').css('border-left', nextArrowStyle)
    $('.slider__arrow.next').css('background-color', 'white')
  })


// Reviews slider

  let reviewsItemLength = $('.reviews__slider__item').length
  let reviewsItemWidth = window.innerWidth
  $('.reviews__slider__track').css('width', reviewsItemLength*reviewsItemWidth)
  let reviewX = 0
  let reviewsDots = document.querySelectorAll('.reviews__slider__dot')

  $(window).resize(()=>{
    reviewsItemWidth = window.innerWidth
    $('.reviews__slider__track').css('width', reviewsItemLength*reviewsItemWidth)
    reviewX = 0
    $('.reviews__slider__track').css('transform', `translateX(-`+reviewX+`px)`)
    for (let i = 0; i < reviewsDots.length; i++){
      reviewsDots[i].classList.remove('active')
    }
    reviewsDots[0].classList.add('active')
  })

  setInterval(()=>{
    reviewX = reviewX+reviewsItemWidth
    if (reviewX >= reviewsItemWidth*reviewsItemLength){
      reviewX = 0;
    }
    $('.reviews__slider__track').css('transform', `translateX(-`+reviewX+`px)`)

    let slideCount = reviewX/reviewsItemWidth

    reviewsDots[slideCount].classList.add('active')
    if (slideCount == 0){
      reviewsDots[6].classList.remove('active')
    } else reviewsDots[slideCount-1].classList.remove('active')


  }, 7000)


// intro slider
  let introItemLength = $('.intro__slider__img').length
  let introItemWidth = document.querySelectorAll('.intro__slider__img')[0].clientWidth

  let introX = 0
  const introDots = document.querySelectorAll('.intro__slider__dot')

  $('.intro__slider__img').css('width', windowWidth+'px')

  let introSliderTrackWidth = windowWidth*introItemLength
  $('.intro__slider__track').css('width', introSliderTrackWidth+'px')

  // if height is more than 1080px than intro img height remains 1080px
  let introSliderHeight =  $('.intro__slider').css('height')
  $('.intro__slider').css('height', $('.section__intro').css('height'))

  setInterval(()=>{
    introX = introX+windowWidth
    if (introX >= windowWidth*introItemLength){
      introX = 0;
    }
    $('.intro__slider__track').css('transform', `translateX(-`+introX+`px)`)

    let introSlideCount = introX/windowWidth

    document.querySelector('.intro__slider__current-frame').innerHTML = introSlideCount+1

    introDots[introSlideCount].classList.add('current')
    if (introSlideCount == 0){
      introDots[6].classList.remove('current')
    } else introDots[introSlideCount-1].classList.remove('current')

  }, 5000)

  $( window ).resize(()=>{
    $('.intro__slider').css('height', $('.section__intro').css('height'))
    windowWidth = window.innerWidth
    $('.intro__slider__img').css('width', windowWidth+'px')
    let introSliderTrackWidth = windowWidth*introItemLength
    $('.intro__slider__track').css('width', introSliderTrackWidth+'px')
    introX = 0;
    $('.intro__slider__track').css('transform', `translateX(0px)`)
    document.querySelector('.intro__slider__current-frame').innerHTML = '1'
    for (let i = 0; i < introItemLength; i++ ){
      introDots[i].classList.remove('current')
    }
    introDots[0].classList.add('current')
  })



  // section__serv blur lining up

  function blurLining(){
    let firstImageWidth = $('.serv__item.first').css('width')
    let calcFirstHeight = (parseInt(firstImageWidth)*870)/825
    let secondImageWidth = $('.serv__item.second').css('width')
    let secondImageHeight = $('.serv__item.second').css('height')

    $('.serv__item__block__blur.first').css('background-size', firstImageWidth+' '+calcFirstHeight+'px')
    $('.serv__item__block__blur.second').css('background-size', secondImageWidth+' '+secondImageHeight)
    $('.serv__item__block__blur.third').css('background-size', secondImageWidth+' '+secondImageHeight)
  }
  blurLining()

  $(window).resize(blurLining)


}

// INTRO VIDEO

  let videoWindow = document.querySelector('.intro__video-window')
  let fullscreenWindow = document.querySelector('.intro__fullscreen-video')

  videoWindow.addEventListener('click', ()=>{
    const fullscreenVideo = document.createElement('div')
    fullscreenVideo.classList.add('iframe-container')
    fullscreenVideo.insertAdjacentHTML('afterbegin',`
            <iframe
                        src="https://www.youtube.com/embed/JQhnW9CkRR0"
                        title="Medissa"
                        allow="accelerometer; autoplay; clipboard; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
            </iframe>

            <div class="iframe-video-close">&times;</div>
    `)

    fullscreenWindow.appendChild(fullscreenVideo)

    fullscreenVideo.style.display = 'block'
    fullscreenWindow.style.display = 'block'
    fullscreenVideo.style.zIndex = '200'

    let closeVideo = document.querySelector('.iframe-video-close')
    closeVideo.addEventListener('click', ()=>{
      fullscreenVideo.remove()
      fullscreenWindow.style.display = 'none'
    })


  })


// GOOGLE MAP API CODE

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.4502686951367, lng: 30.498496574239827},
    zoom: 17,
    mapId: '3575b189bf074a7b'
  });

  const image = "materials_for_site/pictures/contacts/pin.png"

  const marker = new google.maps.Marker({
    position: {lat: 50.4502686951367, lng: 30.498496574239827},
    map,
    icon: image,
  });

}


document.addEventListener('DOMContentLoaded', app)


