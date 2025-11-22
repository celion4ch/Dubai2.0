document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const main = document.querySelector('main');
    if (!main) {
        hidePreloader(); // Без <main> — скрываем сразу
        return;
    }

    const children = Array.from(main.children).filter(el => el.offsetParent !== null);
    const targets = children.slice(0, 2); // до 2 первых видимых блоков

    if (targets.length === 0) {
        hidePreloader();
        return;
    }

    let readyCount = 0;

    targets.forEach(block => {
        waitForBlockRender(block).then(() => {
            readyCount++;
            if (readyCount >= targets.length) {
                hidePreloader();
            }
        });
    });

    // Функция, проверяющая отрисовку элемента
    function waitForBlockRender(el) {
        return new Promise(resolve => {
            const checkVisible = () => {
                const rect = el.getBoundingClientRect();
                const rendered = rect.height > 0 && rect.width > 0;
                if (rendered) {
                    resolve();
                } else {
                    requestAnimationFrame(checkVisible);
                }
            };
            checkVisible();
        });
    }

    // Fallback через 2 секунды
    setTimeout(hidePreloader, 2000);

    function hidePreloader() {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.style.display = 'none', 500);
    }
});




const btnHeader = document.querySelector(".header-menu-btn-block");

const headerDesktopContent = document.querySelector(".header-desktop");

const body = document.querySelector("body");

const btnCloseHeaderDesktop = document.querySelector(".header-desktop-close svg");

const btnZakazat = document.querySelector(".btn-zakazat");

const btnConsult = document.querySelector(".btn_consult .btn-footer-1");

const formZayvka = document.querySelector(".form-ostavit-zayavku");

const btnCloseZayvka = document.querySelector(".close-ostavit-zayavku svg");

const formSuccesSait = document.querySelector(".success-form-sait");

const btnCloseFormSait = document.querySelector(".success-form-sait_content_close svg");

const btnCloseCookie = document.querySelector(".btn-close-cookie svg");

const closeCookie = document.querySelector(".cookie_notice");



/* Модальные окна */

btnHeader.addEventListener("click",function () {

    headerDesktopContent.classList.add("active");

    body.classList.add("active-menu-desktop");

});

btnCloseHeaderDesktop.addEventListener("click",function () {

    headerDesktopContent.classList.remove("active");

    body.classList.remove("active-menu-desktop");

});

// Для кнопок "Заказать" и "Консультация"
if (btnConsult) {
    btnConsult.addEventListener("click", function () {
        formZakazatKonsult.style.display = 'block'; // Сначала делаем форму видимой
        setTimeout(() => {
            formZakazatKonsult.classList.add('active'); // Запускаем анимацию
        }, 10); // Маленькая задержка для корректного применения display
        $('body').addClass('no-scroll');
    });
    
}

if (btnZakazat) {
    btnZakazat.addEventListener("click", function () {
        formZayvka.style.display = 'block'; // Сначала делаем форму видимой
        setTimeout(() => {
            formZayvka.classList.add('active'); // Запускаем анимацию
        }, 10); // Маленькая задержка для корректного применения display
        $('body').addClass('no-scroll');
    });
    
}

// Для кнопки закрытия формы
btnCloseZayvka.addEventListener("click", function () {
    formZayvka.classList.remove('active'); // Убираем класс active
    setTimeout(() => {
        formZayvka.style.display = 'none'; // Скрываем форму после завершения анимации
    }, 300); // Время должно соответствовать длительности transition (0.3s)
    $('body').removeClass('no-scroll');
});

btnCloseFormSait.addEventListener("click", function () {
    formSuccesSait.classList.remove('active'); // Убираем класс active
    setTimeout(() => {
        formSuccesSait.style.display = 'none'; // Скрываем форму после завершения анимации
    }, 300); // Время должно соответствовать длительности transition (0.3s)
    $('body').removeClass('no-scroll');
});

btnCloseCookie.addEventListener("click",function () {

    closeCookie.style.display = "none";

});



/* Конец модальные окна */



/*Мобильное меню */

    let mobileItem = document.querySelectorAll(".mobile-item-links span");

    mobileItem.forEach(function(item){

        item.addEventListener("click",function(){

            item.parentNode.classList.toggle("active");

        });

    });

/*Конец мобильное меню */



/*Фиксированная кнопка услуг на мобилке*/



const btnMobileFixedUsluga = document.querySelector('.fixed-block-usluga-mobile');

if (btnMobileFixedUsluga) {
  btnMobileFixedUsluga.addEventListener('click', function () {
    btnMobileFixedUsluga.classList.toggle('active');
  });
}

$(document).ready(function () {
    // Проверяем, есть ли запись в sessionStorage о закрытии блока
    if (sessionStorage.getItem('fixedBlockClosed') === 'true') {
        // Если блок был закрыт в этой сессии, скрываем его
        $('.fixed-block-usluga').hide();
    }

    // Обработчик клика по крестику
    $('.close-fixed-usluga').on('click', function () {
        // Скрываем блок
        $(this).closest('.fixed-block-usluga').hide();

        // Сохраняем информацию о закрытии блока в sessionStorage
        sessionStorage.setItem('fixedBlockClosed', 'true');
    });
});

// Показываем форму и фон
$(document).on('click', '.service_package-item .btn-red, .btn-zakazat-uslugu, .zakazat-promotion, .kartochka-zakazat', function () {
    let nameUsluga = '';
    let priceUsluga = '';

    // Определяем, какая кнопка была нажата
    if ($(this).hasClass('btn-zakazat-uslugu')) {
        // Кнопка "Заказать" в блоке services_hero-wrapper
        const heroWrapper = $('.services_hero-wrapper');
        nameUsluga = heroWrapper.find('.h1-blue').text().trim(); // Заголовок H1
        priceUsluga = ''; // Цена не указана для этой кнопки
    } else if ($(this).hasClass('zakazat-promotion')) {
        // Кнопка "Заказать" в блоке services_promotion-wrapper
        const promotionWrapper = $('.services_promotion-wrapper');
        nameUsluga = $('head title').text().trim(); // Получаем заголовок страницы (pagetitle)
        priceUsluga = promotionWrapper.find('h2').text().trim(); // Текст скидки
    } else if ($(this).hasClass('kartochka-zakazat')) {
        // Кнопка "Заказать" в карточке услуг
        const card = $(this).closest('.services_price-content'); // Находим родительский блок карточки
        nameUsluga = card.find('h3').text().trim(); // Подтягиваем заголовок <h3>
        priceUsluga = card.find('.services_price-item2-child p span').text().trim(); // Берём текст только из <span> внутри <p>
    } else {
        // Обработка кнопки внутри service_package-item
        const card = $(this).closest('.service_package-item');
        const serviceType = card.find('.service_circle').text().trim();
        const serviceName = card.find('.service_package-title').text().trim();
        nameUsluga = `${serviceType} - ${serviceName}`;
        priceUsluga = card.find('.service_package-footer-price').text().trim();
    }

    // Заполняем скрытые поля формы
    $('#zakazat-uslugu input[name="nameusluga"]').val(nameUsluga);
    $('#zakazat-uslugu input[name="priceusluga"]').val(priceUsluga);

    // Показываем форму и фон
    $('#zakazat-uslugu').fadeIn(300);
    $('#zakazat-uslugu').addClass('active');
});

// Закрытие формы
$(document).on('click', '.close-form', function () {
    $('#zakazat-uslugu').fadeOut(300);
    $('#zakazat-uslugu').removeClass('active');
});

// Находим элементы
const buttons = document.querySelectorAll('.btn-fixed-vstrecha'); // Все кнопки с классом btn-fixed-vstrecha
const zakazatAppointment = document.getElementById('zakazat-appointment');
const closeFormButton = document.querySelector('.close-zakazat-appointment');

// Добавляем обработчик для каждой кнопки
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Добавляем класс active через setTimeout для корректной анимации
        zakazatAppointment.style.display = 'block'; // Сначала делаем форму видимой
        $('body').addClass('no-scroll');
        setTimeout(() => {
            zakazatAppointment.classList.add('active'); // Запускаем анимацию
        }, 10); // Маленькая задержка для корректного применения display
    });
});

// Закрываем форму при нажатии на крестик
closeFormButton.addEventListener('click', () => {
    zakazatAppointment.classList.remove('active'); // Убираем класс active
    $('body').removeClass('no-scroll');
    setTimeout(() => {
        zakazatAppointment.style.display = 'none'; // Скрываем форму после завершения анимации
    }, 300); // Время должно соответствовать длительности transition (0.3s)
});

// Находим элементы
const btnFixedConsult = document.querySelectorAll('.btn-fixed-consult');
const formZakazatKonsult = document.querySelector('.form_zakazat_konsult');
const closeZakazatKonsult = document.querySelector('.close-zakazat-konsult');

// Добавляем обработчик для каждой кнопки
btnFixedConsult.forEach((btnFixedConsul) => {
    btnFixedConsul.addEventListener('click', () => {
        formZakazatKonsult.style.display = 'block'; // Сначала делаем форму видимой
        $('body').addClass('no-scroll');
        setTimeout(() => {
            formZakazatKonsult.classList.add('active'); // Запускаем анимацию
        }, 10); // Маленькая задержка для корректного применения display
    });
});

// Закрытие формы по клику на крестик
if (closeZakazatKonsult) {
    closeZakazatKonsult.addEventListener('click', () => {
        formZakazatKonsult.classList.remove('active'); // Убираем класс active
        $('body').removeClass('no-scroll');
        setTimeout(() => {
            formZakazatKonsult.style.display = 'none'; // Скрываем форму после завершения анимации
        }, 300); // Время должно соответствовать длительности transition (0.3s)
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ostavit_zayavku');

    if (form) {
        form.addEventListener('submit', function (e) {
            // Очистка предыдущих сообщений об ошибках
            document.querySelectorAll('.error-message').forEach(function (el) {
                el.textContent = '';
                el.style.display = 'none';
            });
        });

        // Обработка ответа от AjaxForm
        document.addEventListener('af_complete', function (e) {
            const response = e.detail.response;

            if (response.success) {
                // Форма успешно отправлена
                console.log('Форма успешно отправлена');
            } else {
                // Обработка ошибок
                if (response.errors) {
                    Object.keys(response.errors).forEach(function (field) {
                        const errorContainer = document.getElementById(field + '-error');
                        if (errorContainer) {
                            errorContainer.textContent = response.errors[field];
                            errorContainer.style.display = 'block';
                        }
                    });
                }
            }
        });
    }
});