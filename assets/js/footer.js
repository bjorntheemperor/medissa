
function app(){
    let windowWidth = window.innerWidth

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

// reconstructing footer

    let tempCosm = $('.footer__mid__column__themes.cosm .footer__mid__column__themes__column__item')
    let tempDent = $('.footer__mid__column__themes.dent .footer__mid__column__themes__column__item')
    let tempAbout = $('.footer__mid__column__themes.about .footer__mid__column__themes__column__item')

    function reconstructFooter(){
        if (windowWidth <= 1160){
            for (let i = 0; i < tempCosm.length; i++){
                document.querySelector('.footer__mid__column__themes.cosm').appendChild(tempCosm[i])
            }
            for (let i = 0; i < tempDent.length; i++){
                document.querySelector('.footer__mid__column__themes.dent').appendChild(tempDent[i])
            }
            for (let i = 0; i < tempAbout.length; i++){
                document.querySelector('.footer__mid__column__themes.about').appendChild(tempAbout[i])
            }
        } else {
            for (let i = 0; i < tempCosm.length; i++){
                document.querySelector('.footer__mid__column__themes__column.cosm-left').appendChild(tempCosm[i])
                if (i >= 6) {
                    document.querySelector('.footer__mid__column__themes__column.cosm-right').appendChild(tempCosm[i])
                }
            }
            for (let i = 0; i < tempDent.length; i++){
                document.querySelector('.footer__mid__column__themes__column.dent-left').appendChild(tempDent[i])
                if (i >= 7) {
                    document.querySelector('.footer__mid__column__themes__column.dent-right').appendChild(tempDent[i])
                }
            }
            for (let i = 0; i < tempAbout.length; i++){
                document.querySelector('.footer__mid__column__themes__column.single').appendChild(tempAbout[i])
            }

        }

    }

    reconstructFooter()

    $(window).resize(reconstructFooter)
}


document.addEventListener('DOMContentLoaded', app)

$(window).resize(app)

