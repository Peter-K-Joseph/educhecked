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
};
const questions = {
    0: {
        'qn': `Spending time in nature is important to me`,
        'cat': 0
    },
    1: {
        'qn': `I like the activity of gardening`,
        'cat': 0
    },
    2: {
        'qn': `I enjoy hiking in natural spaces`,
        'cat': 0
    },
    3: {
        'qn': `I like taking care of animals`,
        'cat': 0
    },
    4: {
        'qn': `Whenever animals are abused, I don't like it`,
        'cat': 0
    },
    5: {
        'qn': `I like reading`,
        'cat': 1
    },
    6: {
        'qn': `I am a social persona and I like interacting with people`,
        'cat': 1
    },
    7: {
        'qn': `I am good at Scribble and other word games`,
        'cat': 1
    },
    8: {
        'qn': `I pride myself in good and extensive vocabulary`,
        'cat': 1
    },
    9: {
        'qn': `I like writing short stories and poetry`,
        'cat': 1
    },
    10: {
        'qn': `I am good at solving dispute between others`,
        'cat': 2
    },
    11: {
        'qn': `I like to chat with different people`,
        'cat': 2
    },
    12: {
        'qn': `I have clarity of relationship with others`,
        'cat': 2
    },
    13: {
        'qn': `I attend social gatherings enthusiatically`,
        'cat': 2
    },
    14: {
        'qn': `I feel safe with certain strangers`,
        'cat': 2
    },
    15: {
        'qn': `I like to make up my own tunes and melodies`,
        'cat': 3
    },
    16: {
        'qn': `Music plays an important role in my life`,
        'cat': 3
    },
    17: {
        'qn': `Sometimes, I catch myself singling television jingles`,
        'cat': 3
    },
    18: {
        'qn': `I can remember differnt tunes and melodies`,
        'cat': 3
    },
    19: {
        'qn': `I like to discover various genre of music`,
        'cat': 3
    },
    20: {
        'qn': `I take part in physical activities (ie: Basketball)`,
        'cat': 4
    },
    21: {
        'qn': `I consider myself an athlete`,
        'cat': 4
    },
    22: {
        'qn': `I find myself physically fit`,
        'cat': 4
    },
    23: {
        'qn': `I love to go for a run/jogging`,
        'cat': 4
    },
    24: {
        'qn': `I like to use gestures while talking anf explaining certain things`,
        'cat': 4
    },
    25: {
        'qn': `I like solving mental arithmetic`,
        'cat': 5
    },
    26: {
        'qn': `It's fun for me to work with numbers and graphs`,
        'cat': 5
    },
    27: {
        'qn': `Using numbers and numerical symbol is easy`,
        'cat': 5
    },
    28: {
        'qn': `You tend to find flaws in logical thing`,
        'cat': 5
    },
    29: {
        'qn': `I try to take calculative step-by-step approach in problem solving`,
        'cat': 5
    },
    30: {
        'qn': `I find ball game easy and enjoying`,
        'cat': 6
    },
    31: {
        'qn': `I can read a map easily`,
        'cat': 6
    },
    32: {
        'qn': `I like solving puzzles`,
        'cat': 6
    },
    33: {
        'qn': `On visiting new places, I don't get lost`,
        'cat': 6
    },
    34: {
        'qn': `I like reading illustrations`,
        'cat': 6
    },
    35: {
        'qn': `I always know how I feel`,
        'cat': 7
    },
    36: {
        'qn': `I like spending some time alone`,
        'cat': 7
    },
    37: {
        'qn': `I try to write or keep a journal`,
        'cat': 7
    },
    38: {
        'qn': `You embrace yourself for yourself`,
        'cat': 7
    },
    39: {
        'qn': `You try to identify flaws in yourself and try to improve it`,
        'cat': 7
    }
};
const updateQn_data = () => {
    let array = [];
    for (let i = 0; i < Object.keys(questions).length; i++)
        array.push(i);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array);
    for (let each = 0; each < array.length; each++) {
        $('#assessment_questionary').append(`
        <div class="assess_elem" data-cat="${questions[array[each]].cat}" data-rel="q${array[each]}">
                <h3 class="question">${questions[array[each]].qn}</h3>
                <span class="rate flex">
                    <div class="options">
                        <div class="option_allow agree">
                            <div class="option agree q${array[each]} max" data-rel="${array[each]}" data-val="5"><span class="far fa-check color-green"></span></div>
                            <span class="color-green">Strongly Agree</span>
                        </div>
                        <div class="option_allow agree">
                            <div class="option agree q${array[each]} min" data-rel="${array[each]}" data-val="4"><span class="far fa-check color-green"></span></div>
                            <span class="color-green">Agree</span>
                        </div>
                        <div class="option_allow neutral">
                            <div class="option neutral q${array[each]}" data-rel="${array[each]}" data-val="3"><span class="far fa-check color-neutral"></span></div>
                            <span class="color-neutral">Neutral</span>
                        </div>
                        <div class="option_allow disagree">
                            <div class="option disagree q${array[each]} min" data-rel="${array[each]}" data-val="2"><span class="far fa-check color-red"></span></div>
                            <span class="color-red">Disagree</span>
                        </div>
                        <div class="option_allow disagree">
                            <div class="option disagree q${array[each]} max" data-rel="${array[each]}" data-val="1"><span class="far fa-check color-red"></span></div>
                            <span class="color-red">Strongly Disagree</span>
                        </div>
                    </div>
                </span>
            </div>`);
    }
    $('#assessment_questionary').append(`<div class="get_result"><button id="get_result">Submit</button></div>`);
    $("#get_result").on('click', () => {
        let __passLv = true;
        for (let i = 0; i < Object.keys(questions).length; i++) {
            if ($(`.assess_elem`).eq(i).attr("data-select") == null) {
                __passLv = false;
                Notiflix.Report.Failure('Incomplete Form', 'Please attempt all the questions above for us to analyse you', 'Okay');
                break;
            }
        }
        if (__passLv == true) {
            Notiflix.Loading.Standard('Processing Report');
            setTimeout(() => {
                let analyserSchema = [['Naturalistic', 0], ['Linguistic', 0], ['Interpersonal', 0], ['Musical', 0], ['Bodily Kinestric', 0], ['Maths', 0], ['Spatial', 0], ['Intrapersonal', 0]];
                console.log("[REQUEST HANDLER] PROCESSING REPORT");
                // 5 > SD | 4 > | 3 > N | 2 > A | 1 > SA
                for (let i = 0; i < Object.keys(questions).length; i++) {
                    analyserSchema[parseInt($(`.assess_elem`).eq(i).attr("data-cat"))][1] = analyserSchema[$(`.assess_elem`).eq(i).attr("data-cat")][1] + parseInt($(`.assess_elem`).eq(i).attr("data-select"));
                }
                $('#assessment_questionary').html(`<div class="report"><h3>Report Generated</h3></div>`);
                for (let i = 0; i < 8; i++) {
                    analyserSchema[i][1] = parseInt(analyserSchema[i][1]) / 5; //5 > no of qn
                    $('.report').append(`<div class="assessmentAnalyser">
                    <div class="spanContent">
                        <span class="title"><h5>${analyserSchema[i][0]}</h5><h5></h5></span>
                        <span class="max-hq"><span class="level" style="width: ${(analyserSchema[i][1] / 5) * 100}%;"></span></span>
                    </div>
                </div>`);
                }
                Notiflix.Loading.Remove();
            }, 200);
        }
    });
    $('.option').on('click', (e) => {
        $(`.q${$(e.currentTarget).attr("data-rel")}`).css({ 'background-color': 'transparent' });
        if ($(e.currentTarget).hasClass('agree')) {
            $(e.currentTarget).css({ 'background-color': '#059669' });
        }
        if ($(e.currentTarget).hasClass('neutral')) {
            $(e.currentTarget).css({ 'background-color': '#9b9faa' });
        }
        if ($(e.currentTarget).hasClass('disagree')) {
            $(e.currentTarget).css({ 'background-color': '#991B1B' });
        }
        $(e.currentTarget.parentElement.parentElement.parentElement.parentElement).attr({ 'data-select': $(e.currentTarget).attr('data-val') });
        $(e.currentTarget).eq(0).addClass('active');
    });
};
updateQn_data();
setTimeout(() => {
    init();
    Notiflix.Loading.Remove();
}, 1000);
