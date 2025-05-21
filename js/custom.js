

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
            delay: 3000, // autoplay 설정은 객체로 수정
            disableOnInteraction: false
        },
        speed: 1500,
        loop: true,

        pagination: {
            el: '.page',
            clickable: true, /*클릭안되면 쓰면된다.*/
        },/*도트만들때필요함*/

    })

    $('#full_wrap').fullpage({
        fixedElements: '#header , .side_lnk, .to_top',
        paddingTop: '96px',
        anchors: ['intro', 'store', 'customer', 'menu'],
        css3: false,

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
        slidesPerView: 3,
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

});

