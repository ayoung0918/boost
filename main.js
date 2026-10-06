// AOS
    AOS.init();

// 워드
// const wordSlider = new Swiper('.app-intro .swiper', {
//     loop: true,
//     pagination: {
//         el:'.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     },
//     allowTouchMove:false,
//     autoplay: {
//         delay:2000
// }
// });

// 프레임
// const frameSlider = new Swiper('.swiper frame-slider', {
//     loop: true,
//     touchRatio:0,
//     autoplay: {
//         delay:2000
//     }
// });

let header = document.querySelector('header')
// let bar = document.querySelector('.bar')
// let progress =document.querySelector('.scroll-progress').style.background = '#fff'


window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY > document.querySelector('.main-visual').offsetHeight-100){
        (header.classList.add('drop'))
    } else {
        (header.classList.remove('drop'))
    }
    // 스크롤 바
    // console.log(window.scrollY / (document.body.offsetHeight - window.innerHeight))
    // bar.style.width = per + '%'
})

// faq 아코디언
let faq_ul = document.querySelectorAll('.faq-sec ul')

faq_ul.forEach((ul) => {
    ul.addEventListener('click', () => {
        faq_ul.forEach((ul) => {
            ul.classList.toggle('drop-open')
        })
    })
})

// 서비스 드롭다운
let servicelist = document.querySelector('.service-list ul')
let selected = document.querySelector('li.selected')
let serviceCta = document.querySelector('a.go-service')

servicelist.addEventListener('click', (ev) => {
    let target = ev.target
    console.log(target)

    selected.innerText  = target.innerText
    servicelist.classList.toggle('drop')

    serviceCta.href='http://boost-up.online/' + target.dataset.linkname
})


    var swiper = new Swiper('.swiper.vertical-scroll', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

//     let menubtn = document.querySelector('header button.all-menu')
//     let closebtn = document.querySelector('button.close')
//     let openbtn = document.querySelector('.full-menu')

// openbtn.addEventListener('click', () => {
//     fullMenu.classListadd('open')
//     wordSlider.forEach((slider) => {
//         slider.autoplay.stop()
//     })

// closebtn.addEventListener('click', () => {
//     fullMenu.classList.remove('open')
// })
// })

let topbtn = document.querySelector('button.go-top')
topbtn.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    })
})