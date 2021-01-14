let timerStart = 500;

// this block add class when block is active and user can see this block
let animItems;
if (document.querySelectorAll('._anim-items') != null && document.querySelectorAll('._anim-items') != undefined) {
    animItems = document.querySelectorAll('._anim-items');
}
let animItemsTranslate;
if (document.querySelectorAll('._anim-items-translate') != null && document.querySelectorAll('._anim-items-translate') != undefined) {
    animItemsTranslate = document.querySelectorAll('._anim-items-translate');
}

// let animItemsTranslateLeft;
// if (document.querySelectorAll('._anim-items-translate_left') != null && document.querySelectorAll('._anim-items-translate_left') != undefined) {
//     animItemsTranslateLeft = document.querySelectorAll('._anim-items-translate_left');
// }

document.addEventListener('DOMContentLoaded', function () {

    // ***********  add animation on full site ... START ... ***********
    window.addEventListener('scroll', function () {
        animOnScroll();
        animOnScrollTranslate();
        // animOnScrollTranslateLeft();

        // let hedaerFix;
        // if (document.getElementById('header-fix') != null && document.getElementById('header-fix') != undefined) {
        //     hedaerFix = document.getElementById('header-fix');
        //     hedaerFix.hidden = (pageYOffset < (document.documentElement.clientHeight + 74));
        //     hedaerFix.style.opacity = 1;
        //     hedaerFix.style.zIndex = 99999999;
        //     hedaerFix.style.transition = "all .5s ease-in";
        // }
    });
    // if (pageYOffset > (document.documentElement.clientHeight + 74)) {
    //     let hedaerFix;
    //     if (document.getElementById('header-fix') != null && document.getElementById('header-fix') != undefined) {
    //         hedaerFix = document.getElementById('header-fix');
    //         hedaerFix.hidden = (pageYOffset < (document.documentElement.clientHeight + 74));
    //         hedaerFix.style.opacity = 1;
    //         hedaerFix.style.zIndex = 99999999;
    //         hedaerFix.style.transition = "all .5s ease-in";
    //     }
    // }


    setTimeout(function () {
        animOnScroll();
        animOnScrollTranslate();
        // animOnScrollTranslateLeft();
    }, 300);
    // ***********  add animation on full site ... END ... ***********


    // lang in section 100vh
    let btnHLang;
    if (document.getElementById('btn_s-100vh') != null && document.getElementById('btn_s-100vh') != undefined) {
        btnHLang = document.getElementById('btn_s-100vh');
        btnHLang.onclick = function () {
            this.classList.toggle('active_100vh_lng');
            document.body.classList.toggle('active_100vh_lang');
        }
    }
    // lang in header fixed
    // btn_header-fixed_lang
    let btnLangHFixed;
    if (document.getElementById('btn_header-fixed_lang') != null && document.getElementById('btn_header-fixed_lang') != undefined) {
        btnLangHFixed = document.getElementById('btn_header-fixed_lang');
        btnLangHFixed.onclick = function () {
            this.classList.toggle('active_h-f_lng');
            document.body.classList.toggle('active_h_fixed_lng');
        }
    }

    // all see event that close when click other blocks 
    document.addEventListener('click', function (e) {

        // choose lang in 100vh
        if (document.body.classList.contains('active_100vh_lang') == true) {
            let s100Lang;
            if (document.getElementById('btn_s-100vh') != null && document.getElementById('btn_s-100vh') != undefined) {
                s100Lang = document.getElementById('btn_s-100vh');
                if (!s100Lang.contains(e.target)) {
                    s100Lang.classList.remove('active_100vh_lng');
                    document.body.classList.remove('active_100vh_lang');
                }
            }
        }

        // choose lang in header fixed
        if (document.body.classList.contains('active_h_fixed_lng') == true) {
            let HFLang;
            if (document.getElementById('btn_header-fixed_lang') != null && document.getElementById('btn_header-fixed_lang') != undefined) {
                HFLang = document.getElementById('btn_header-fixed_lang');
                if (!HFLang.contains(e.target)) {
                    HFLang.classList.remove('active_h-f_lng');
                    document.body.classList.remove('active_h_fixed_lng');
                }
            }
        }
    });

    // tab on main page for services
    let btnsMainServices;
    if (document.querySelectorAll(".m_about-item_this-btn") != null && document.querySelectorAll(".m_about-item_this-btn") != undefined) {
        btnsMainServices = document.querySelectorAll(".m_about-item_this-btn");
        // for (let item of btnsMainServices) {
        //     item.onclick = function () {
        //         this.parentElement.parentElement.parentElement.classList.toggle('active-tab-service');
        //         animOnScroll()
        //     }
        // }
        for (let item = 0; item < btnsMainServices.length; item++) {
            btnsMainServices[item].onclick = function () {
                this.parentElement.parentElement.parentElement.classList.toggle('active-tab-service');
                animOnScroll()
            }
        }
    }

    let allModal;
    if (document.querySelectorAll('.modal-bg') != null && document.querySelectorAll('.modal-bg') != undefined) {
        allModal = document.querySelectorAll('.modal-bg');

        for (let i = 0; i < allModal.length; i++) {
            allModal[i].addEventListener('click', function (event) {
                if (!document.querySelector('.modal_cnt').contains(event.target) || document.querySelector('.modal_close').contains(event.target)) {
                    for (let i = 0; i < allModal.length; i++) {
                        setHidden(allModal[i]);
                        document.body.classList.remove('_show-modal');
                    }
                }
            });
        }
    }

    let allBtn;
    if (document.querySelectorAll('.modal-btn-show') != null && document.querySelectorAll('.modal-btn-show') != undefined) {
        allBtn = document.querySelectorAll('.modal-btn-show');

        for (let i = 0; i < allBtn.length; i++) {
            allBtn[i].onclick = function () {
                let thisId = this.getAttribute('id');

                for (let i = 0; i < allModal.length; i++) {
                    if (allModal[i].getAttribute('data-modal') == thisId) {
                        console.log(thisId)
                        setVisible(allModal[i]);
                        document.body.classList.add('_show-modal');
                    }
                }
            }
        }
    }
});

// ***********  add animation on full site ... START ... ***********
function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active-scrll-anim');
        }
        // else {
        //     animItem.classList.remove('_active-scrll-anim');
        // }
    }
}

function animOnScrollTranslate() {
    for (let index = 0; index < animItemsTranslate.length; index++) {
        const animItem = animItemsTranslate[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 8;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.style.transform = offsetTranslate(animItem).transform;
        }
    }
}
// function animOnScrollTranslateLeft() {
//     for (let index = 0; index < animItemsTranslateLeft.length; index++) {
//         const animItem = animItemsTranslateLeft[index];
//         const animItemHeight = animItem.offsetHeight;
//         const animItemOffset = offset(animItem).top;
//         const animStart = 8;

//         let animItemPoint = window.innerHeight - animItemHeight / animStart;

//         if (animItemHeight > window.innerHeight) {
//             animItemPoint = window.innerHeight - window.innerHeight / animStart;
//         }

//         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//             animItem.style.transform = offsetTranslateLeft(animItem).transform;
//         }
//     }
// }
// function offsetTranslateLeft(el) {

//     const rect = el.getBoundingClientRect();

//     let k = el.clientLeft - (el.offsetHeight * 1.8 - rect.y);
//     let z = { transform: "translateX(" + k + "px)", };

//     if (k >= el.clientLeft) {
//         z = { transform: "translateX(" + el.clientLeft + "px)", };
//     } else {
//         z = { transform: "translateX(" + k + "px)", }
//     }
//     return z;
// }

function offsetTranslate(el) {

    const rect = el.getBoundingClientRect();

    let k = el.clientLeft - (el.offsetHeight - rect.y) * 2;
    let z = { transform: "translateX(" + k + "px)", };
    if (k <= el.clientLeft) {
        z = { transform: "translateX(" + el.clientLeft + "px)", };
    } else {
        z = { transform: "translateX(" + k + "px)", }
    }

    return z;
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}// ***********  add animation on full site ... END ... ***********

function setHidden(element) {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
    setTimeout(function () {
        element.style.display = `none`
    }, timerStart);
    element.style.transition = `all .5s ease-in`;
}

function setVisible(element) {
    element.style.display = `flex`;
    element.style.visibility = 'visible';
    setTimeout(function () {
        element.style.opacity = '1';
    }, timerStart);
    element.style.transition = `all .5s ease-in`;
}