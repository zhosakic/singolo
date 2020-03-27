const PORTFOLIO_TAB = document.getElementById('portfolio__btn-block');
const SLIDER_COUNT = document.getElementsByClassName('slider__item');
const NEXT_BTN = document.getElementById('next-btn');
const PREV_BTN = document.getElementById('prev-btn');
const PORTFOLIO_COUNT = document.getElementsByClassName('portfolio__item');
const FORM_BTN = document.getElementById('form__btn');
const MODAL_BTN = document.getElementById('modal__btn');
const MOBILE_MENU = document.getElementById('header__menu-btn');
const BG_ONCLICK = document.getElementById('header__menu-bg');
const LINK_MENU_BTN = document.querySelector('.header__mobile-nav-menu');
const INPUT = document.querySelectorAll('input[data-type]');


// Закрытие меню по нажатию на фон и пункт в мобильном меню
BG_ONCLICK.addEventListener("click", el => {
    closeMenu();
});

LINK_MENU_BTN.addEventListener("click", el => {
    if (el.target.classList.contains('header__mobile-menu-link')) {
        closeMenu();
    }
});

function closeMenu() {
    MOBILE_MENU.classList.remove('active');
    BG_ONCLICK.classList.remove('active');
    document.querySelector('.header__mobile-menu').classList.remove('active')
}

// Подсвечивание названия активной области в хедере и в мобильном меню
document.addEventListener("scroll", onScroll);

function onScroll(event) {
    const CURRENT_POSITION = window.scrollY + 71;
    const SECTION = document.querySelectorAll('main > section');
    const MENU_LINK = document.querySelectorAll('.link-menu a');

    SECTION.forEach((el) => {
        if (el.offsetTop <= CURRENT_POSITION && (el.offsetTop + el.offsetHeight) > CURRENT_POSITION) {
            MENU_LINK.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
}

// Кнопка меню "Гамбургер"
MOBILE_MENU.addEventListener("click", ev => {
    MOBILE_MENU.classList.toggle('active');
    document.querySelector('.header__menu-bg').classList.toggle('active')
    document.querySelector('.header__mobile-menu').classList.toggle('active')
});


// Переключение слайдера новый вариант
NEXT_BTN.addEventListener("click", (event) => {
    let nextSlider;
    let currentSlider;
    for (let i = 0; i < SLIDER_COUNT.length; i++) {
        if (SLIDER_COUNT[i].classList.contains('active')) {
            currentSlider = i;
            if (i === SLIDER_COUNT.length - 1) {
                nextSlider = 0;
            } else {
                nextSlider = (i + 1);
            }
        }
    }

    SLIDER_COUNT[nextSlider].classList.add('right');
    SLIDER_COUNT[nextSlider].classList.add('future');
    SLIDER_COUNT[currentSlider].classList.add('future');

    setTimeout(() => {
        SLIDER_COUNT[currentSlider].classList.remove('active');
        SLIDER_COUNT[currentSlider].classList.add('left');
        SLIDER_COUNT[nextSlider].classList.add('active');
    }, 10);

    setTimeout(() => {
        SLIDER_COUNT[currentSlider].classList.remove('left');
        SLIDER_COUNT[nextSlider].classList.remove('right');
        SLIDER_COUNT[nextSlider].classList.remove('future');
        SLIDER_COUNT[currentSlider].classList.remove('future');
    }, 1010);

});

PREV_BTN.addEventListener("click", (event) => {
    let nextSlider;
    let currentSlider;
    for (let i = 0; i < SLIDER_COUNT.length; i++) {
        if (SLIDER_COUNT[i].classList.contains('active')) {
            currentSlider = i;
            if (i === 0) {
                nextSlider = SLIDER_COUNT.length - 1;
            } else {
                nextSlider = (i - 1);
            }
        }
    }

    SLIDER_COUNT[nextSlider].classList.add('left');
    SLIDER_COUNT[nextSlider].classList.add('future');
    SLIDER_COUNT[currentSlider].classList.add('future');

    setTimeout(() => {
        SLIDER_COUNT[currentSlider].classList.remove('active');
        SLIDER_COUNT[currentSlider].classList.add('right');
        SLIDER_COUNT[nextSlider].classList.add('active');
    }, 10);

    setTimeout(() => {
        SLIDER_COUNT[currentSlider].classList.remove('right');
        SLIDER_COUNT[nextSlider].classList.remove('left');
        SLIDER_COUNT[nextSlider].classList.remove('future');
        SLIDER_COUNT[currentSlider].classList.remove('future');
    }, 1010);

});


// Переключение слайдера старый вариант
// NEXT_BTN.addEventListener("click", (event) => {
//     for (let i = 0; i < SLIDER_COUNT.length; i++) {
//         if (SLIDER_COUNT[i].classList.contains('active')) {
//             if (i !== SLIDER_COUNT.length - 1) {
//                 SLIDER_COUNT[i].classList.remove('active');
//                 SLIDER_COUNT[i + 1].classList.add('active');
//                 return;
//             } else {
//                 SLIDER_COUNT[i].classList.remove('active');
//                 SLIDER_COUNT[0].classList.add('active');
//                 return;
//             }
//         }
//     }
// });

// PREV_BTN.addEventListener("click", (event) => {
//     for (let i = 0; i < SLIDER_COUNT.length; i++) {
//         if (SLIDER_COUNT[i].classList.contains('active')) {
//             if (i !== 0) {
//                 SLIDER_COUNT[i].classList.remove('active');
//                 SLIDER_COUNT[i - 1].classList.add('active');
//                 return;
//             } else {
//                 SLIDER_COUNT[i].classList.remove('active');
//                 SLIDER_COUNT[SLIDER_COUNT.length - 1].classList.add('active');
//                 return;
//             }
//         }
//     }
// });


// Включение и выключение экранов телефонов в блоке Слайдера
document.querySelector('.slider__image-2').addEventListener('click', (event) => {
    if (event.target.classList.contains('horizontal-bg-btn')) {
        let switchScreen = document.querySelectorAll('.horizontal-bg-btn');
        switchScreen.forEach(switchScreen => {
            switchScreen.classList.toggle('active');
        })
    }
});

document.querySelector('.slider__image-1').addEventListener('click', (event) => {
    if (event.target.classList.contains('vertical-bg-btn')) {
        let switchScreen = document.querySelectorAll('.vertical-bg-btn');
        switchScreen.forEach(switchScreen => {
            switchScreen.classList.toggle('active');
        })
    }
});

let activeCard = -1;
let itemActiveNumber = 0;
let currentActive = 0;

// Переключение табаов в блоке Портфолио
PORTFOLIO_TAB.addEventListener("click", (event) => {

    for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
        if (PORTFOLIO_COUNT[i].classList.contains('active')) {
            activeCard = i;
            for (let j = 0; j < PORTFOLIO_COUNT.length; j++) {
                itemActiveNumber = 'item-' + j;
                if (PORTFOLIO_COUNT[i].classList.contains(itemActiveNumber)) {
                    currentActive = itemActiveNumber;
                }
            }
        }
    }

    if (activeCard !== -1) {
        PORTFOLIO_COUNT[activeCard].classList.remove('active');
    }

    setTimeout(() => {
        for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
            if (PORTFOLIO_COUNT[i].classList.contains(currentActive)) {
                PORTFOLIO_COUNT[i].classList.add('active');
            }
        }
    }, 10);

    if (event.target.classList.contains('portfolio__tab')) {
        PORTFOLIO_TAB.querySelectorAll('.portfolio__tab').forEach(el => el.classList.remove('active'));

        event.target.classList.add('active');

        setDefaultState();

        let activeSortTab = event.target.innerHTML;

        if (activeSortTab === 'All') {
            allTabActive();
        } else {
            if (activeSortTab === 'Web Design') {
                webDesignTabActive();
            } else {
                if (activeSortTab === 'Graphic Design') {
                    graphicDesignTabActive();
                } else {
                    artworkTabActive();
                }
            }
        }
    }
});

const setDefaultState = () => {
    for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
        for (let j = 0; j < PORTFOLIO_COUNT.length; j++) {
            let classCurrent = `item-${j + 1}`;
            PORTFOLIO_COUNT[i].classList.remove(classCurrent);
        }
    }
};

const allTabActive = () => {
    for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
        let classCurrent = `item-${i + 1}`;
        PORTFOLIO_COUNT[i].classList.add(classCurrent);
    }
};

const webDesignTabActive = () => {
    for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
        let classCurrent = `item-${i + 2}`;
        if (i < PORTFOLIO_COUNT.length - 1) {
            PORTFOLIO_COUNT[i].classList.add(classCurrent);
        } else {
            classCurrent = 'item-1';
            PORTFOLIO_COUNT[i].classList.add(classCurrent);
        }
    }
};

const graphicDesignTabActive = () => {
    for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
        let classCurrent = `item-${i}`;
        if (i === 0) {
            PORTFOLIO_COUNT[i].classList.add('item-12')
        } else {
            PORTFOLIO_COUNT[i].classList.add(classCurrent);
        }
    }
};

const artworkTabActive = () => {
    for (let i = 0; i < PORTFOLIO_COUNT.length; i++) {
        let arrTab = ['item-5', 'item-6', 'item-7', 'item-8',
            'item-9', 'item-10', 'item-11', 'item-12',
            'item-1', 'item-2', 'item-3', 'item-4'];
        PORTFOLIO_COUNT[i].classList.add(arrTab[i]);
    }
};

// Переключение активный картинок в блоке Портфолио
document.querySelector('.portfolio__card-block').addEventListener('click', (event) => {
    if (event.target.classList.contains('portfolio__item')) {
        let activePicture = document.querySelectorAll('.portfolio__item');
        activePicture.forEach(activePicture => {
            activePicture.classList.remove('active');
            event.target.classList.add('active');
        })
    }
});

// Отправка формы
MODAL_BTN.addEventListener("click", event => {

    document.getElementById('modal').classList.remove('active');
    document.getElementById('modal__content').classList.remove('active');

    document.getElementById('form__body').reset();
});

FORM_BTN.addEventListener("click", event => {
    event.preventDefault();
    let validateValue = false;

    for (let i = 0; i < INPUT.length; i++) {

        INPUT[i].classList.remove('invalid');

        let inputType = INPUT[i].dataset.type;
        let inputValue = INPUT[i].value;

        switch (inputType) {
            case 'name':
                if (inputValue !== '') {
                    validateValue = true;
                }
                break;

            case 'email':
                validateValue = /^\w{1,}@\w{1,}\.\w{1,}$/.test(inputValue);
                break;

        }

        if (!validateValue) {
            INPUT[i].classList.add('invalid');
        }
    }

    if (!validateValue) {
        alert('Сорямба, но форма не отправлена, так как выделенные поля надобна заполнить :)');
    } else {

        let formTheme = document.getElementById('form__theme').value.toString();
        let formDescription = document.getElementById('form__description').value.toString();

        document.getElementById('modal').classList.add('active');
        document.getElementById('modal__content').classList.add('active');

        if (formDescription !== '') {
            document.getElementById('modal__description').innerText = formDescription
        } else {
            document.getElementById('modal__description').innerText = 'Без описания'
        }

        if (formTheme !== '') {
            document.getElementById('modal__theme').innerText = formTheme
        } else {
            document.getElementById('modal__theme').innerText = 'Без описания'
        }
    }
});