Notiflix.Loading.Init({ customSvgUrl: './resources/logo/loading.png', svgSize: '150px', backgroundColor: 'rgba(0,0,0,1)', useGoogleFont: true });
Notiflix.Loading.Custom('Loading Webpage...');
let listenerUpdater = [false];
$(window).on('scroll', (e) => {
    ($(window).scrollTop() > 70) ? $('nav').css({ 'transition': '.2s', 'background-color': 'white' }) : $('nav').css({ 'transition': '.2s', 'background-color': 'transparent' });
    if (screen.width > 768)
        ($(window).scrollTop() > 70) ? $('.logo_design').css({ 'transition': '.2s', 'width': '200px' }) : $('.logo_design').css({ 'transition': '.2s', 'width': '250px' });
    else
        ($(window).scrollTop() > 70) ? $('.logo_design').css({ 'transition': '.2s', 'width': '100px' }) : $('.logo_design').css({ 'transition': '.2s', 'width': '120px' });
});
const init = () => {
    $('.nav-icon-hamburger').on('click', (e) => {
        $(e.currentTarget).toggleClass('open');
        $('.nav_linkOrigin').toggleClass('open');
    });
    for (var i = 0; i < Object.keys(index).length; i++) {
    }
};
$('.toggle').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    }
    else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
const index = {
    0: ['AI/ML/DL', 'Web Development', 'App Development', 'Coding less App Development', 'Codeless Web Development', 'Coding/Programming Bootcamps: Python, Java, C++, C, JavaScript,..  ', 'IoT: AIOT: Internet of things', 'Blockchain', 'Cybersecurity & Hacking', 'Cloud Computing', 'Robotics'],
    1: ['Communication', 'Analytical Skills', 'Teamwork', 'Conflict resolution', 'Leadership', 'Problem-solving', 'Research', 'Creativity', 'Work ethic', 'Integrity', 'Presentation skills', 'Punctuality', 'Adaptability', 'Dependability', 'Flexibility'],
    2: ['Drawing/Sketching/Vector Art/Digital Art', 'UI/UX Designing', 'Video making/ Editing/ Animation/ VFX/ Graphics'],
    3: ['Fun Science', 'Commerce Based skill programs', 'History cum Soft Skills', 'Law', 'Economics', 'Political Sciences (Civics)', 'Humanities', 'Psychology', 'Vedic Mathematics (Faster Calculations) / Abacus', 'Book Writing & Publishing / Storytelling / Script Writing (Movies, Web Series, Documentaries, Speech)', 'Entrepreneurship'],
    4: ['Tools: Excel(sheets), PowerPoint(Slides), Word(Doc)', 'Resume Building: Document & Video Resume', 'Creativity and Innovation', 'Learning how to learn', 'How to think Big', 'Personality Development', 'Time Management', 'Personal Organization', 'Public Speaking', 'Debating', 'Power of Thinking, Belief', 'Life education and skills / Peer education'],
    5: ['Communication', 'Speed reading', 'Power of thinking', 'Power of boldness', 'How to think and ignite creativity', 'Analytical skills', 'Problem-solving', 'Team working importance', 'A practical way of teaching']
};
for (let i = 0; i < Object.keys(index).length; i++) {
    for (let j = 0; j < index[i].length; j++) {
        $(`.inner`).eq(i).append(`<li>${index[i][j]}</li>`);
        console.log("Firing");
    }
}
setTimeout(() => {
    init();
    Notiflix.Loading.Remove();
}, 1000);
