import '../pages/index.css'
import './slick';

const menu = document.querySelector('.menu');
const popupCallMe = document.querySelector('.popup_type_normal');
const popupNotification = document.querySelector('.popup_type_notification');

const popupFormTypeNormal = document.querySelector('.popup__form_type_normal');
const servicesForm = document.querySelector('.services__form');
const banerServiceForm = document.querySelector('.services-form__form');
const footerForm = document.querySelector('.footer__search')

const buttonNavMenu = document.querySelector('.nav__button');
const buttonCloseMenu = document.querySelector('.menu__icon-close');
const buttonBaner = document.querySelector('.banner__button');
const buttonIconClosePopup = document.querySelector('.popup__icon-close_type_normal');
const buttonIconClosePopupNotification = document.querySelector('.popup__icon-close_type_notification');
const buttonTypeNormal = document.querySelector('.popup__button_type_normal');
const buttonContacts = document.querySelector('.contacts__button');
const buttonHeaderCallback = document.querySelector('.header__callback');


//-----------------------------------------Навигационное меню для экрана мобильных устройств
//------функция открытия меню
function openMenu(element) {
    element.classList.add('menu_opened');
    // вешаем слушатель на закрытия меню кликом по оверлей
    element.addEventListener('mousedown', toCloseMenuByClickOverlay, {once: true});
    // вешаем слушатель на закрытие меня по клику esc
    document.addEventListener('keydown', toCloseMenuByClickEsc, {once: true});
}

//------функция закрытия меню
function closeMenu(element) {
    element.classList.remove('menu_opened');
}

//---------функция закрытия меню кликом по оверлею
function toCloseMenuByClickOverlay(evt) {
    console.log(evt.target.className)
    if (evt.target.className === 'menu menu_opened') {
        closeMenu(menu);
    }
}

//---------функция закрытия меню кликом по esc
function toCloseMenuByClickEsc(evt) {
    if (evt.key === 'Escape') {
        closeMenu(menu);
    }
}

//-----слушатель на кнопку открыть меню
buttonNavMenu.addEventListener('click', () => {
    openMenu(menu)
})

//------слушатель на кнопку закрыть меню
buttonCloseMenu.addEventListener('click', () => {
    closeMenu(menu)
})

//------------------------------------------Popup форма обратной связи-------------------------------

//открыть попап
function openPopup(element) {console.log(element); 
    element.classList.add('popup_opened');
    element.addEventListener('mousedown', toClosePopupByClickOverlay, {once: true});
    document.addEventListener('keydown', toClosePopupByClickEsc, {once: true});
}

//закрыть попап
function closePopup(element) {
    element.classList.remove('popup_opened');
    reset();
}

//закрыть попап при клике на оверлей
function toClosePopupByClickOverlay(evt) {
    if(evt.target.classList.contains('popup')) {
        closePopup(popupCallMe);
    }
    if(evt.target.classList.contains('popup_type_notification')) {
        closePopup(popupNotification);
    }
}

//закрыть попап при клике на esc
function toClosePopupByClickEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(popupCallMe); 
        closePopup(popupNotification);
    }
}

//очистить инпуты
function reset() {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.value = '';
        input.checked = false;
    })
}

//кнопка/телефон в шапке
buttonHeaderCallback.addEventListener('click', () => {
    openPopup(popupCallMe);
})

//кнопка на банере
buttonBaner.addEventListener('click', () => {
    openPopup(popupCallMe)
})

//кнопка на контактах
buttonContacts.addEventListener('click', () => {
    openPopup(popupCallMe)
})

//кнопка закрытия формы обратного вызова
buttonIconClosePopup.addEventListener('click', () => {
    closePopup(popupCallMe);
})

//кнопка закрытия формы "сообщение отправлено"
buttonIconClosePopupNotification.addEventListener('click', () => {
    closePopup(popupNotification);
})
//--------------------------------------------------------------------

//--------------сбор данных с формы обратного звонка
function formSubmitHandler(evt) {
    evt.preventDefault();

    const dataInputs = {};

    const formElement = evt.target;
            
    const inputs = formElement.querySelectorAll('.input')
    
    const input = inputs.forEach(input => {
        // console.log(input)
        //console.log(`${input.type} : ${input.value}`)
        dataInputs[input.type] = input.value;
        return dataInputs 
    });
    console.log(dataInputs)

    postDataForm(dataInputs);

    closePopup(popupCallMe);
    reset();
};

//отправка данных с формы обратного звонка
function postDataForm(formData) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.text,
            tel: formData.tel,
            search: formData.search
                        
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then((res) => {
        if (res.ok) {
            openPopup(popupNotification)
           return res.json();  
        }   
            return Promise.reject(res.status);
          
    })
    .then((data) => {
        //console.log(data)
    })
    .catch((err) => {
        console.log(err);
        alert(`что-то пошло не так, ошибка ${err}, попробуйте позже`)
    })
    
}

//сабмиты форм
banerServiceForm.addEventListener('submit', formSubmitHandler);
popupFormTypeNormal.addEventListener('submit', formSubmitHandler);
servicesForm.addEventListener('submit', formSubmitHandler);
//--------------------------------------------------------------------------


//----------сбор данных с формы поиска
function searchSubmitHandler(evt) {
    evt.preventDefault();

    const searchInputs = {};
    //console.log(formElement);
    const inputSearch = document.querySelector('.footer__input');
    searchInputs.search = inputSearch.value;

    postDataSearch(searchInputs);
              
    console.log(searchInputs)
      
    reset();
}

//отправка данных с формы поиска
function postDataSearch(formData) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            search: formData.search
                        
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then((res) => {
        if (res.ok) {
            
           return res.json();  
        }   
            return Promise.reject(res.status);
          
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
        alert(`что-то пошло не так, ошибка ${err}, попробуйте позже`)
    })
    
}

//сабмит формы
footerForm.addEventListener('submit', searchSubmitHandler);
  