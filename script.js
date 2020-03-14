const MENU = document.getElementById('header__nav-menu');
const PORTFOLIO_TAB = document.getElementById('portfolio__btn-block');
const SLIDER_COUNT = document.getElementsByClassName('slider__item');
const NEXT_BTN = document.getElementById('next-btn');
const PREV_BTN = document.getElementById('prev-btn');
const PORTFOLIO_COUNT = document.getElementsByClassName('portfolio__item');
const FORM_BTN = document.getElementById('form__btn');
const MODAL_BTN = document.getElementById('modal__btn');

// Переключение меню
MENU.addEventListener("click", (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));

    event.target.classList.add('active');
});

// Переключение слайдера
NEXT_BTN.addEventListener("click", (event) => {
    for (let i = 0; i < SLIDER_COUNT.length; i++) {
        if (SLIDER_COUNT[i].classList.contains('active')) {
            if (i !== SLIDER_COUNT.length - 1) {
                SLIDER_COUNT[i].classList.remove('active');
                SLIDER_COUNT[i + 1].classList.add('active');
                return;
            } else {
                SLIDER_COUNT[i].classList.remove('active');
                SLIDER_COUNT[0].classList.add('active');
                return;
            }
        }
    }
});

PREV_BTN.addEventListener("click", (event) => {
    for (let i = 0; i < SLIDER_COUNT.length; i++) {
        if (SLIDER_COUNT[i].classList.contains('active')) {
            if (i !== 0) {
                SLIDER_COUNT[i].classList.remove('active');
                SLIDER_COUNT[i - 1].classList.add('active');
                return;
            } else {
                SLIDER_COUNT[i].classList.remove('active');
                SLIDER_COUNT[SLIDER_COUNT.length - 1].classList.add('active');
                return;
            }
        }
    }
});

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

// Переключение табаов в блоке Портфолио
PORTFOLIO_TAB.addEventListener("click", (event) => {
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
    console.log('default');
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
        let arrTab = [  'item-5', 'item-6', 'item-7', 'item-8',
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
});