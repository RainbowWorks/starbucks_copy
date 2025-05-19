$(function () {

    // h2오고 p나오도록 하는 명령어
    let tl = gsap.timeline();

    // intro에 뭘 할거다. to 1000으로 가라 from 1000에서 와라. x를 1000으로
    tl.from('.intro figure', { x: 1000, opacity: 0 })
    tl.from('.intro h2', { x: 1000, opacity: 0 })
    tl.from('.intro p', { x: 1000, opacity: 0 })
    tl.from('.intro a', { x: 1000, opacity: 0 })


    $('.full_wrap').fullpage({
        // navigation: true, 옵션 적으면 옆에 점이 찍힌다.
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'profile'],
        // 이동할때마다 html뒤에 이름이 붙는다.

        // 지금부터 조금 어렵다!!!
        afterLoad: function (a, b) {
            console.log(a, b);
            $('.gnb ul li').removeClass('on');
            $('.gnb ul li').eq(b - 1).addClass('on');

            $('.section').removeClass('on');
            $('.section').eq(b - 1).addClass('on');

            // b가 1과 같으면
            if (b === 1) {
                tl.restart();
            }
        },
        // 이 페이지에 왔을 때 afterLoad
        // a는 타겟이름 b는 번호
    });



});