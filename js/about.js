Notiflix.Loading.Init({ customSvgUrl: './resources/logo/loading.png', svgSize: '150px', backgroundColor: 'rgba(0,0,0,1)', useGoogleFont: true });
Notiflix.Loading.Custom('Loading Webpage...');
let listenerUpdater = [false];
$(window).on('scroll', (e) => {
    ($(window).scrollTop() > 70) ? $('nav').css({ 'transition': '.2s', 'background-color': 'white' }) : $('nav').css({ 'transition': '.2s', 'background-color': 'transparent' });
    if (screen.width > 768)
        ($(window).scrollTop() > 70) ? $('.logo_design').css({ 'transition': '.2s', 'width': '200px' }) : $('.logo_design').css({ 'transition': '.2s', 'width': '250px' });
    else
        ($(window).scrollTop() > 70) ? $('.logo_design').css({ 'transition': '.2s', 'width': '100px' }) : $('.logo_design').css({ 'transition': '.2s', 'width': '120px' });
    if (listenerUpdater[0] == false && $(window).scrollTop() > $('.main_viewport')[0].clientHeight / 2) {
        $(".elem_letter").css({ 'animation': 'beginerAnimation 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards' });
        startTyping();
        listenerUpdater[0] = true;
    }
});
const startTyping = () => {
    console.log("CODE IS RUNNING");
    const typed = new Typed('#expandCondensor', {
        strings: [
            `E - Education for all`,
            `D - Duration of attention span `,
            `U - Understanding at priority and eradicating unemployment`,
            `C - Care for mental health and Inclusive Environment`,
            `H - Holistic Growth of students and Faculties`,
            `E - Empathetic Approach`,
            `C - Come out loud `,
            `K - Knowledge that sustains`,
            `E - Empowering and shaping young minds`,
            `D - Do what you love with Discretion`,
        ],
        contentType: 'html',
        typeSpeed: 18,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity,
        backDelay: 1000,
        showCursor: false,
        smartBackspace: true,
        preStringTyped: () => {
            $('#expandCondensor').css({ 'padding': '20px 50px' });
            const elem = parseInt($('.elem_letter .active').eq(0).parent().attr('data-let'));
            $('.elem_letter .active').eq(0).removeClass("active");
            if (isNaN(elem) || elem == 9) {
                $($('.elem_letter').eq(0).children()[0]).addClass("active");
            }
            else {
                $($('.elem_letter').eq(elem + 1).children()[0]).addClass("active");
            }
        }
    });
};
const init = () => {
    $('.nav-icon-hamburger').on('click', (e) => {
        $(e.currentTarget).toggleClass('open');
        $('.nav_linkOrigin').toggleClass('open');
    });
};
setTimeout(() => {
    init();
    Notiflix.Loading.Remove();
}, 1000);
