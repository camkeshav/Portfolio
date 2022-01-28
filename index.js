var type = document.querySelector('.typewriter');

var typewriter = new Typewriter(type, {
    loop: true,
    delay: 500, // SET TO USE A 1 SECOND DELAY
    cursorClassName: 'cursorSize' // SET TO MY CUSTOM CLASS NAME
});

typewriter.typeString('Web Developer...')
    .pauseFor(1500)
    .deleteAll()
    .typeString('App Developer...')
    .pauseFor(1500)
    // .deleteChars(7)
    .deleteAll()
    .typeString('JAVA SE Developer...')
    .pauseFor(1500)
    // .deleteChars(7)
    .deleteAll()
    .typeString('Competitive Coder...')
    .start();
    // window.onscroll = function scroll () {
    // let data = document.querySelector('.info');
    // // document.querySelector('.photo').style.transition = "all 1s";
    // data.innerHTML = 'Enterprising software engineering professional highly skilled in designing, implementing, and installing software solutions as well as developing high-quality software designs and architecture. Adapt at developing various tools and applications by producing clean ecient code, conducting systems analysis to improve operations, and automating tasks through appropriate tools and scripting.';
    // }

    const detail = document.querySelector('.details');
    detail.classList.remove('details-transition');

const obersver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            detail.classList.add('details-transition');
                return;
        }

        detail.classList.remove('details-transition');
    });
});
obersver.observe(document.querySelector('.about-cont'));



const detail_title = document.querySelector('.about-title');
    detail_title.classList.remove('abt-title-transition');

const obersver0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            detail_title.classList.add('abt-title-transition');
                return;
        }

        detail_title.classList.remove('abt-title-transition');
    });
});

obersver0.observe(document.querySelector('.about-cont'));



const photo = document.querySelector('.photo');
    photo.classList.remove('photo-transition');
const obser2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            photo.classList.add('photo-transition');
            return;
        }

        photo.classList.remove('photo-transition');
    });
});

obser2.observe(document.querySelector('.about'))


const info = document.querySelector('.info');
    info.classList.remove('info-transition');
const obser3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            info.classList.add('info-transition');
            return;
        }

        info.classList.remove('info-transition');
    });
});

obser3.observe(document.querySelector('.about'))


// const navb = document.querySelector('.nav-a');
// navb.addEventListener('focus', () => {


// })



