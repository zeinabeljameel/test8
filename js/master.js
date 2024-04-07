// start nav bullet
let bullets = document.querySelectorAll('.nav-bullets .bullet');
let links = document.querySelectorAll('.links a')
function smoothScroll(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
smoothScroll(bullets);
smoothScroll(links);
// end nav bullet

// start color box
if(localStorage.getItem('data-color')){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('data-color'))
    //remove class active
    let removeActive = document.querySelectorAll(".colors-list li")
    removeActive.forEach(li => {
        li.classList.remove('active')
        //add class active to clicked item
        if(li.dataset.color === localStorage.getItem('data-color')) {
            li.classList.add("active");
        }
    })
}
let colorsli = document.querySelectorAll('.colors-list li');
colorsli.forEach((li) => {
    li.addEventListener('click', (e)=> {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("data-color", e.target.dataset.color);
        //remove active class
        handleActive(e)
    })
    })
localStorage.getItem('data-color');
// end color box

// start sidebar
let sittingBox = document.querySelector('.sitting-box')
let open = document.querySelector('.fa-gear');
open.onclick = function (){
    this.classList.toggle('fa-spin')
    sittingBox.classList.toggle('open')
}
// end sidebar
// start open menu 
let linksMenu = document.querySelector('.links');
let toggleMenuIcon = document.querySelector('.toggle-menu-icon');
toggleMenuIcon.onclick = function (e) {
    this.classList.toggle("menu-active");
    linksMenu.classList.toggle('open');
    e.stopPropagation()
}
document.addEventListener('click', (e)=> {
    if(e.target !== linksMenu && e.target !== toggleMenuIcon) {
        if(linksMenu.classList.contains('open')) {
            toggleMenuIcon.classList.toggle("menu-active");
            linksMenu.classList.toggle('open');
        }
    }
})
linksMenu.onclick = function(e) {
    e.stopPropagation()
}
//end open menu 
// Function to write words dynamically
function writeAndRepeat(words, index, speed, repeat) {
    if (index < words.length) {
        document.getElementById('text').innerText += words[index];
        index++;
        setTimeout(function() {
        writeAndRepeat(words, index, speed, repeat);
        }, speed);
    } else {
        setTimeout(function() {
        document.getElementById('text').innerText = '';
        if (repeat) {
            writeAndRepeat(words, 0, speed, repeat);
        }
        }, speed * 40);
    }
}
    const wordsToWrite = 'creative';
    const speed = 100;
    const repeat = true;
    writeAndRepeat(wordsToWrite, 0, speed, repeat);
// end Function to write words dynamically
//get in touch button go to contact us
    let getInTouch = document.querySelector('.get-in-touch');
    getInTouch.onclick = function (e){
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
    })}
//end in touch button go to contact us
// scrolling animation
window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    // start aboutus section animation
    let aboutUs = document.querySelector('.about-us');
    let aboutUsTop = aboutUs.offsetTop;
    let aboutUsHeight = aboutUs.offsetHeight;
    if (windowScrollTop > (aboutUsTop + aboutUsHeight - windowHeight -200)) {
        document.querySelector('.about-us h2').classList.add('animation')
        document.querySelector('.about-us .image-box').classList.add('animation')
        document.querySelector('.about-us .info-box').classList.add('animation')
        let aboutH2 = document.querySelectorAll('.about .about-h2')
        aboutH2.forEach((e)=> {
            e.classList.add('animation')
        })
    }
    // end aboutus section animation
    // start our skills section animation
    let skillsSection = document.querySelector('.skills');
    let skillsSecTop = skillsSection.offsetTop;
    let skillsSecHeight = skillsSection.offsetHeight;
    if (windowScrollTop > (skillsSecTop + skillsSecHeight - windowHeight -500)) {
        let textSkill = document.querySelectorAll('.skills .skill-box .text-skill');
        textSkill.forEach((e)=> {
            e.classList.add('animation')
        })
    } 
    // end our skills section animation
    // start our gallery section animation
    let gallerySection = document.querySelector('.gallery')
    let gallerySecTop =  gallerySection.offsetTop;
    let gallerySecHeight =  gallerySection.offsetHeight;
    if (windowScrollTop > (gallerySecTop + gallerySecHeight - windowHeight -200)) {
        let project = document.querySelectorAll('.gallery .container .project');
        project.forEach((e)=> {
            e.classList.add('animation')
        })
    }
}
// end scrolling animation
// statrt hanle active function
function handleActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach(ele => {
        ele.classList.remove('active')
    })
    //add active to clicked element
    ev.target.classList.toggle('active')
}
// end hanle active function
// start nav bullets hide option
let navBullets = document.querySelector('.nav-bullets');
let bulletsOptionSpan = document.querySelectorAll('.bullets-option span');
let bulletLocalsorage = localStorage.getItem('bullet_option')
if(bulletLocalsorage !== null) {
    bulletsOptionSpan.forEach(span => {
        span.classList.remove('active')
    })
    if(bulletLocalsorage === 'block') {
        navBullets.style.display = 'block';
        document.querySelector('.bullets-option #show').classList.add('active')
    }
    else {
        navBullets.style.display = 'none';
        document.querySelector('.bullets-option #hide').classList.add('active')
    }
}
bulletsOptionSpan.forEach(span => {
    span.addEventListener('click', (e) => {
        if(e.target.dataset.display === 'show') {
            navBullets.style.display = 'block';
            localStorage.setItem('bullet_option', 'block')
        }else {
            navBullets.style.display = 'none';
            localStorage.setItem('bullet_option', 'none')
        }
        handleActive(e)
    })
})
// start nav bullets hide option
// start reset options
document.querySelector('.reset-options').onclick = function () {
    localStorage.clear();
    window.location.reload()
}
// end reset options

