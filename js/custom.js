

$(function () {

    // h2오고 p나오도록 하는 명령어
    let tl = gsap.timeline();

    tl.from({}, {})
    tl.from('#main_reserve img', { y: 140, opacity: 0 });
    tl.from('#main_reserve h2', { y: 140, opacity: 0 });
    tl.from('#main_reserve  p', { y: 140, opacity: 0 });
    tl.from('#main_reserve  a', { y: 140, opacity: 0 });

    const slide = new Swiper('.main_intro_slide', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 1000,
        loop: true,

        pagination: {
            el: '.page',
            clickable: true, /*클릭안되면 쓰면된다.*/
        },/*도트만들때필요함*/

    })

    $('#full_wrap').fullpage({
        fixedElements: '#header , .side_lnk, .to_top',
        paddingTop: '96px',
        anchors: ['intro', 'store', 'customer', 'menu', 'footer'],

        afterLoad: function (o, d, dr) {

            $('.side_lnk li').removeClass('on')
            $('.side_lnk li').eq(d - 1).addClass('on')
        },


        onLeave: function (o, d, dr) {
            if (d == 2) {
                tl.restart();
            }
            if (d == 2 || d == 3 || d == 4) {
                $('#header').addClass('on')
            } else {
                $('#header').removeClass('on')
            }
        },
        // 헤더 아래 내려갔을때 고정시키는 방법 onleave ~떠날 때, 떠났던 자리, 떠날때 가는거? 해당 번호가 찍히는 것?  떠나올자리, 한자리, 방향 순서...????
        // d== 조건문
    });

    const main_menu_slide = new Swiper('.main_menu_slide', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3.5,
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    //  푸터 섹션이 보이면 헤더 숨기기
    const header = document.querySelector('#header');
    const mainMenu = document.querySelector('#main_menu');
    const footer = document.querySelector('#footer');

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            // 푸터 보이면 둘 다 숨김
            header.style.display = 'none';
            mainMenu.classList.add('menu-fade');
        } else {
            header.style.display = 'block';
            mainMenu.classList.remove('menu-fade');
        }
    }, {
        threshold: 0.5
    });

    observer.observe(footer);

});

$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on')
        /*active를 붙여도 된다. 일반적으로는 on 사용한다.*/
        $('#header h1').toggleClass('on')
    })
});
