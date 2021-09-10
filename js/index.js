Notiflix.Loading.Init({ customSvgUrl: './resources/logo/loading.png', svgSize: '150px', backgroundColor: 'rgba(0,0,0,1)', useGoogleFont: true });
Notiflix.Loading.Custom('Loading Webpage...');
const link = {
    blog: 'https://blogs.educhecked.com?'
};
$(window).on('scroll', (e) => {
    ($(window).scrollTop() > 70) ? $('nav').css({ 'transition': '.2s', 'background-color': 'white' }) : $('nav').css({ 'transition': '.2s', 'background-color': 'transparent' });
    if (screen.width > 768)
        ($(window).scrollTop() > 70) ? $('.logo_design').css({ 'transition': '.2s', 'width': '200px' }) : $('.logo_design').css({ 'transition': '.2s', 'width': '250px' });
    else
        ($(window).scrollTop() > 70) ? $('.logo_design').css({ 'transition': '.2s', 'width': '100px' }) : $('.logo_design').css({ 'transition': '.2s', 'width': '120px' });
    if (window.innerWidth > 800) {
        if ($(window).scrollTop() > 650)
            $('.category').css({ 'opacity': 0, 'animation': 'popout 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' });
        else
            $('.category').css({ 'animation': 'popin 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards', 'opacity': 1 });
    }
    else {
        if ($(window).scrollTop() > 250)
            $('.category').css({ 'opacity': 0, 'animation': 'popout 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' });
        else
            $('.category').css({ 'animation': 'popin 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards', 'opacity': 1 });
    }
    if ($(window).scrollTop() > 1500 && $(window).scrollTop() < 1515) {
        document.getElementsByClassName('prim')[0].click();
    }
});
const init = () => {
    const typed = new Typed('#master-quote', {
        strings: ["Grow your skills to advance your career path", "Grow your skills to advance your academics", "Grow your skills to advance your life", 'Creating a vision that never was a possibility ^1000'],
        contentType: 'html',
        typeSpeed: 18,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity,
        backDelay: 2000,
        showCursor: false,
        smartBackspace: true,
    });
    $('.nav-icon-hamburger').on('click', (e) => {
        $(e.currentTarget).toggleClass('open');
        $('.nav_linkOrigin').toggleClass('open');
    });
};
const assessmentDetail = () => {
    const messages = [`Psychometrics is a field of study concerned with the theory and technique of psychological measurement or assessment. There are four main types of distinction in Psychometric tests:<br>
            The areas assessed by psychometric Tests are 
            <div><ul><li>Numerical Ability</li>
            <li>Spatial Ability</li>
            <li>Verbal Ability</li>
            <li>Abstract Ability</li>
            <li>Error Checking</li></ul></div><br>Read more at <a href="${link.blog}id=12">${link.blog}id=12`,
        ` A psychological test is used to measure an individual’s different abilities, such as their aptitude in a particular field, cognitive functions like memory and spatial recognition, or even traits like introverts. These tests are based on scientifically tested psychological theories.<br>
            Psychological tests assess areas such as:<br>
            <div style="display: inline"><ul><li>Mental Health</li>
            <li>Adaptive behavior</li>
            <li>Cognitive ability</li>
            <li>Educational testing</li>
            <li>Forensic testing</li>
            <li>Neuropsychology testing</li></ul></div><br>Read more at <a href="${link.blog}id=12">${link.blog}`, `
            Career assessment is a large and growing area—more individuals are using assessments to determine what jobs and careers may fit them best, and more organizations are using career assessment tools to help them find the best candidates to fill vacant positions.
A large variety of career assessment tools exist, and they are used depending on what type of information the individual or organization needs to have.<br>
<br>Read more at <a href="${link.blog}id=12">${link.blog}</a>`, `
            Growth in children is usually steady and predictable, and good references are available for assessment and comparison. Growth reflects changes in the mass of body tissues (muscle, fat, and bone), with differences in maturation and body composition between boys and girls. Growth is a key component of nutritional status and indicator of health and well-being for the individual and in populations, with every aspect of a child’s health being affected by his or her nutritional status. 
            Growth assessment is a quick, non invasive procedure that can provide valuable information about the general health and well being of the child
            <br>Read more at <a href="${link.blog}id=12">${link.blog}</a>`];
    $(`#infoWhitebd`).css({ 'opacity': 0 });
    setTimeout(() => {
        const activeelem = parseInt(($('.prim.active').attr('data-rel') == null || $('.prim.active').attr('data-rel') == 3) ? 0 : parseInt($('.prim.active').attr('data-rel')) + 1);
        $('.prim').eq(activeelem).addClass('active');
        $('.prim').eq((activeelem == 0) ? 3 : activeelem - 1).removeClass('active');
        console.log([$('.prim.active').attr('data-rel'), activeelem]);
        $(`#infoWhitebd`).html(messages[$('.prim.active').attr('data-rel')]).css({ 'opacity': 1 });
        setTimeout(() => {
            $(`#infoWhitebd`).css({ 'opacity': 1 });
        }, 300);
    }, 300);
};
setTimeout(() => {
    init();
    Notiflix.Loading.Remove();
    assessmentDetail();
    if (window.innerWidth > 800) {
        setInterval(assessmentDetail, 15000);
        $('.prim').on('click', (e) => {
            $('.prim.active').removeClass('active');
            $('.prim').eq(($(e.currentTarget).attr('data-rel') == 0) ? 3 : parseInt($(e.currentTarget).attr('data-rel')) - 1).addClass('active');
            assessmentDetail();
        });
    }
}, 1000);
