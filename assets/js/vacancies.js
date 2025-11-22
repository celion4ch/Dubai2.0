
$(document).ready(function() {
    // Наши опции слайдера
    const options = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true, // Оставляем, но он не будет работать как надо, пока не подключим нашу функцию
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }],
        prevArrow: '<div class="prev-case">' +

        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +

        '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>' +

        '</svg></div>',

    nextArrow: '<div class="next-case">' +

        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +

        '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>' +

        '</svg>' +

        '</div>'
    };

    // Инициализация слайдера с обработчиками
    const mySlider = $('.vacancies_review-items')
        .on('init', function() {
            multiSlideAdaptiveHeight(this);
        })
        .on('beforeChange', function() {
            multiSlideAdaptiveHeight(this);
        })
        .on('resize', function() {
            multiSlideAdaptiveHeight(this);
        })
        .slick(options);

    // Наша функция для многослойной адаптивной высоты
    function multiSlideAdaptiveHeight(slider) {
        let activeSlides = [];
        let maxHeight = 0;

        setTimeout(() => {
            $('.slick-track .slick-active', slider).each(function() {
                const slideHeight = $(this).outerHeight();
                activeSlides.push(slideHeight);
            });

            maxHeight = Math.max(...activeSlides);
            $(slider).find('.slick-list').height(maxHeight);
        }, 10); // Маленькая задержка для корректного определения высот
    }

    // Добавляем обработчик ресайза окна
    $(window).resize(() => {
        multiSlideAdaptiveHeight(mySlider);
    });

    // Инициализируем стрелки
    $('.vacancies_review-items').slick('refresh'); // Обновляем слайдер
});



document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function(event) {

        // Проверяем, что клик произошел на кнопке внутри '.vacancy-wrapper-modal'

        let modalWrapper = event.target.closest('.vacancy-wrapper-modal');

        

        if (modalWrapper) {

            // Находим конкретное модальное окно и кнопку закрытия внутри выбранной вакансии

            let modalVacancy = modalWrapper.querySelector(".background-vacancy-modal");

            let closeModalVacancy = modalWrapper.querySelector(".close-modal-vacancy");



            openModalOtzivi();



            function openModalOtzivi() {

                document.querySelector('header').style.display = 'none';

                modalVacancy.classList.add("active");

                document.body.classList.add("not-scroll");



                // Закрытие конкретного модального окна с использованием stopPropagation

                closeModalVacancy.addEventListener("click", function(event) {

                    event.stopPropagation(); // Предотвращаем всплытие события клика на родительские элементы

                    document.querySelector('header').style.display = 'block';

                    modalVacancy.classList.remove("active");

                    document.body.classList.remove("not-scroll");

                }, { once: true }); // Обработчик срабатывает один раз, чтобы избежать дублирования

            }



            event.preventDefault();

        }

    });

});
document.getElementById('file-upload').addEventListener('change', function(event) {
    var fileName = event.target.files[0] ? event.target.files[0].name : 'Прикрепить файл';
    document.getElementById('file-name').textContent = fileName;
});
document.addEventListener('af_complete', function(event) {
    if (event.detail.form && event.detail.form.classList.contains('ajax_form')) {
        let modal = document.getElementById('success-form-ostavit_zayavku');
        modal.style.display = 'block';
        modal.style.opacity = '1';
    }
});

$(document).ready(function() {
    // Функция показа формы
    function openForm() {
        $('.form-vacancy_form').stop().fadeTo(300, 1); // Плавное появление
        $('.form-vacancy_form').addClass('active');
        $('body').addClass('no-scroll'); // Запрет скролла при открытой форме
    }

    // Функция закрытия формы
    function closeForm() {
        $('.form-vacancy_form').stop().fadeTo(300, 0, function() {
            $(this).css('display', 'none'); // Полностью скрыть после анимации
        });
        $('.form-vacancy_form').removeClass('active');
        $('body').removeClass('no-scroll'); // Восстановить скролл
    }

    // Обработчик клика по кнопке открытия
    $('.btn_vacancy, .btn-footer-1').on('click', function(e) {
        e.preventDefault();
        openForm();
    });

    // Обработчик закрытия формы
    $('.close-vacancy_form').on('click', function() {
        closeForm();
    });

});
