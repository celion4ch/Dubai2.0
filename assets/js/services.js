$(document).ready(function(){

    $('.services_case-wrapper').slick({

        dots: false,

        slidesToShow: 2,

        infinite: false,

        adaptiveHeight: true,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            }

        ],

        prevArrow: '<div class="prev-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg></div>',

        nextArrow: '<div class="next-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg>' +

            '</div>'

    });

});

$(document).ready(function(){

    $('.services_review-wrapper').slick({

        dots: false,

        infinite: false,

        adaptiveHeight: true,

        slidesToShow: 1.8, 

         slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            },

        ],

        prevArrow: '<div class="prev-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg></div>',

        nextArrow: '<div class="next-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg>' +

            '</div>'

    });


});

document.addEventListener('DOMContentLoaded', function(){

    const videoWrappers = document.querySelectorAll('.video_wrapper');



    videoWrappers.forEach(wrapper => {

      const video = wrapper.querySelector('.myVideo');

      const playButton = wrapper.querySelector('.video-play');

      const pauseButton = wrapper.querySelector('.video-pause');

      const progressCircle = wrapper.querySelector('.progress-circle');

      const circleRadius = progressCircle.r.baseVal.value;

      const circumference = 2 * Math.PI * circleRadius;

  

      progressCircle.style.strokeDasharray = circumference;

      progressCircle.style.strokeDashoffset = circumference;

  

      // Убираем стандартные элементы управления

      video.removeAttribute('controls');

  

      // Обновляем прогресс полосы

      video.addEventListener('timeupdate', function() {

        const percent = video.currentTime / video.duration;

        const offset = circumference - percent * circumference;

        progressCircle.style.strokeDashoffset = offset;

      });

  

      // При клике на кнопку play

      playButton.addEventListener('click', function() {

        video.play();

        playButton.style.display = 'none'; // Скрыть кнопку play

        pauseButton.style.display = 'block'; // Показать кнопку pause

      });

  

      // При клике на кнопку pause

      pauseButton.addEventListener('click', function() {

        video.pause();

        pauseButton.style.display = 'none'; // Скрыть кнопку pause

        playButton.style.display = 'block'; // Показать кнопку play

      });

  

      // Открытие видео на весь экран при двойном клике

      video.addEventListener('dblclick', function() {

        if (video.requestFullscreen) {

          video.requestFullscreen();

        } else if (video.mozRequestFullScreen) { // Firefox

          video.mozRequestFullScreen();

        } else if (video.webkitRequestFullscreen) { // Chrome, Safari и Opera

          video.webkitRequestFullscreen();

        } else if (video.msRequestFullscreen) { // IE/Edge

          video.msRequestFullscreen();

        }

      });

  

      // Когда видео заканчивается, возвращаем кнопку play

      video.addEventListener('ended', function() {

        pauseButton.style.display = 'none'; // Скрыть кнопку pause

        playButton.style.display = 'block'; // Показать кнопку play

      });

    });

    

});

function getScreenTextWidth() {

    let widthText = window.innerWidth;

    let limitText;

    if (widthText <= 1200) {

      limitText = 8; // Для средних экранов

    } else {

      limitText = 9; // Для больших экранов

    }

    return limitText;

  }

document.cookie = "screen_limit_text=" + getScreenTextWidth();


document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      if (event.target.closest('.review-read-more') || event.target.closest('.review_content img')) {
  
        let contentModalreview = document.querySelector(".modal-content-review");
        let modalreview = document.querySelector(".background-review-modal");
        let closeModalreview = document.querySelector(".close-modal-review");
        let reviews;
  
        if (event.target.closest('.review-text_wrapper')) {
          const wrapper = event.target.closest('.review-text_wrapper');
          const pdfBlock = wrapper.querySelector('.pdf-otziv');
  
          if (pdfBlock && pdfBlock.querySelector('img')) { // Проверяем наличие картинки
            reviews = pdfBlock.querySelector('img').outerHTML;
            contentModalreview.classList.add("photo-otziv");
          } else {
            reviews = wrapper.querySelector(".review-texts").innerHTML; // Берем текст
          }
        } else if (event.target.closest('.review-video_wrapper')) {
          const wrapper = event.target.closest('.review-video_wrapper');
          const pdfBlock = wrapper.querySelector('.pdf-otziv');
  
          if (pdfBlock && pdfBlock.querySelector('img')) { // Проверяем наличие картинки
            reviews = pdfBlock.querySelector('img').outerHTML;
            contentModalreview.classList.add("photo-otziv");
          } else {
            let author = event.target.closest('.review-video_wrapper').querySelector(".author_wrapper");
            let text = event.target.closest('.review-video_wrapper').querySelector(".review-text");
            reviews = `${author.innerHTML} <p class="review-text">${text.innerHTML}</p>`; // Исправленный HTML
          }
          
        }
  
        openModalOtzivi(reviews);
  
        function openModalOtzivi(reviewContent) {
          document.querySelector('header').style.display = 'none';
          modalreview.classList.add("active");
          document.body.classList.add("not-scroll"); // Исправлено: body -> document.body
          contentModalreview.innerHTML = reviewContent; // Просто вставляем контент
        }
  
        closeModalreview.addEventListener("click", function() {
          document.querySelector('header').style.display = 'block';
          modalreview.classList.remove("active");
          document.body.classList.remove("not-scroll"); // Исправлено: body -> document.body
          contentModalreview.innerHTML = '';
        });
  
        event.preventDefault();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        // Проверяем, был ли клик на элементе .modal_certificate
        const target = event.target.closest('.modal_certificate');
        if (!target) return; // Если клик не на .modal_certificate — выходим

        // Находим родительский блок сотрудника
        const employeeCard = target.closest('.employees_card');
        if (!employeeCard) return; // Если нет родительского блока — выходим

        // Находим все сертификаты внутри этого сотрудника
        const certificates = employeeCard.querySelectorAll('.certificate_wrapper img');
        const linksCertificate = [];

        certificates.forEach(item => {
            linksCertificate.push(item.getAttribute('src'));
        });

        // Открываем модальное окно
        openModalOtzivi(linksCertificate);

        // Предотвращаем стандартное поведение (если элемент — ссылка)
        event.preventDefault();
    });

    // Функция открытия модального окна
    function openModalOtzivi(cert) {
        const modalCertificate = document.querySelector('.background-certificate-modal');
        const contentModalCertificate = document.querySelector('.modal-content-certificate');

        // Скрываем header и показываем модальное окно
        document.querySelector('header').style.display = 'none';
        modalCertificate.classList.add('active');
        document.body.classList.add('not-scroll');

        // Очищаем предыдущий контент и добавляем новые сертификаты
        contentModalCertificate.innerHTML = '';
        cert.forEach(item => {
            contentModalCertificate.innerHTML += `<div class="certificate_item"><img src="${item}" alt="Сертификат"></div>`;
        });

        // Инициализируем слайдер (если используется)
        initializedSlider();
    }

    // Обработчик закрытия модального окна
    const closeModalCertificate = document.querySelector('.close-modal-certificate');
    if (closeModalCertificate) {
        closeModalCertificate.addEventListener('click', function() {
            document.querySelector('header').style.display = 'block';
            document.querySelector('.background-certificate-modal').classList.remove('active');
            document.body.classList.remove('not-scroll');

            // Очищаем слайдер и контент
            $('.modal-content-certificate').slick('unslick');
            document.querySelector('.modal-content-certificate').innerHTML = '';
        });
    }
});

function initializedSlider(){

    $('.modal-content-certificate').slick({

        dots: false,

        infinite: false,

        slidesToShow: 1,

        // adaptiveHeight: true,

        prevArrow: '<div class="prev-case">' +

            '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +

            '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.34586 11.7436C7.51126 11.5717 7.60164 11.3411 7.59714 11.1026C7.59264 10.8641 7.49363 10.6371 7.32186 10.4716L2.59626 6.01959L7.32186 1.56759C7.41108 1.48666 7.48314 1.38866 7.53378 1.27937C7.58442 1.17009 7.61261 1.05175 7.61668 0.931368C7.62074 0.810988 7.60061 0.691017 7.55746 0.578563C7.51431 0.466109 7.44903 0.36346 7.36548 0.276699C7.28193 0.189938 7.18182 0.120829 7.07107 0.073469C6.96032 0.0261087 6.8412 0.00145986 6.72075 0.000983331C6.6003 0.000506801 6.48099 0.0242119 6.36987 0.0706945C6.25875 0.117177 6.15809 0.185491 6.07386 0.271589L0.673861 5.37159C0.586757 5.45554 0.517473 5.5562 0.47015 5.66754C0.422828 5.77887 0.398438 5.89861 0.398438 6.01959C0.398438 6.14057 0.422828 6.2603 0.47015 6.37164C0.517473 6.48298 0.586757 6.58363 0.673861 6.66759L6.07386 11.7676C6.24577 11.933 6.47631 12.0234 6.71483 12.0189C6.95334 12.0144 7.18031 11.9154 7.34586 11.7436Z"/>\n'+

            '</svg>'+

            '</div>',

        nextArrow: '<div class="next-case">' +

            '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+

            '<path fill-rule="evenodd" clip-rule="evenodd" d="M0.654139 11.7436C0.488742 11.5717 0.398364 11.3411 0.402864 11.1026C0.407364 10.8641 0.506375 10.6371 0.678138 10.4716L5.40374 6.01959L0.678138 1.56759C0.588925 1.48666 0.516863 1.38866 0.466222 1.27937C0.415581 1.17009 0.387391 1.05175 0.383324 0.931368C0.379256 0.810988 0.399394 0.691017 0.442543 0.578563C0.485692 0.466109 0.550975 0.36346 0.634523 0.276699C0.71807 0.189938 0.818183 0.120829 0.92893 0.073469C1.03968 0.0261087 1.1588 0.00145986 1.27925 0.000983331C1.3997 0.000506801 1.51901 0.0242119 1.63013 0.0706945C1.74125 0.117177 1.84191 0.185491 1.92614 0.271589L7.32614 5.37159C7.41324 5.45554 7.48253 5.5562 7.52985 5.66754C7.57717 5.77887 7.60156 5.89861 7.60156 6.01959C7.60156 6.14057 7.57717 6.2603 7.52985 6.37164C7.48253 6.48298 7.41324 6.58363 7.32614 6.66759L1.92614 11.7676C1.75423 11.933 1.52369 12.0234 1.28517 12.0189C1.04666 12.0144 0.819687 11.9154 0.654139 11.7436Z" />\n'+

            '</svg>' +

            '</div>'

    });

}

function initSlickSlider() {

    // Проверяем ширину экрана

    if (window.innerWidth < 1200) {

        // Инициализация Slick, если экран меньше 1200px

        if (!$('.services_team-wrapper').hasClass('slick-initialized')) {

            $('.services_team-wrapper').slick({

                dots: false,

                infinite: false,

                slidesToShow: 2,

                slidesToScroll: 1,

                responsive: [

                    {

                        breakpoint: 768,

                        settings: {

                            slidesToShow: 1,

                        }

                    },

                ],

                prevArrow: '<div class="prev-case">' +

                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

                    '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>\n' +

                    '</svg></div>',

                nextArrow: '<div class="next-case">' +

                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

                    '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>\n' +

                    '</svg>' +

                    '</div>'

            });

        }

    } else {

        // Уничтожаем слайдер, если экран больше 1200px

        if ($('.services_team-wrapper').hasClass('slick-initialized')) {

            $('.services_team-wrapper').slick('unslick');

        }

    }

}



// Вызываем функцию при загрузке страницы

$(document).ready(function () {

    initSlickSlider();

});



// Вызываем функцию при изменении размера окна

$(window).resize(function() {

    initSlickSlider();

});

$(document).ready(function(){

    $('.services_packages .services_packages-wrapper .overlay-inner').slick({

        dots: false,

        infinite: false,

        adaptiveHeight: true,

        slidesToShow: 3, 

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            }

        ],

        prevArrow: '<div class="prev-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg></div>',

        nextArrow: '<div class="next-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg>' +

            '</div>'

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".FAQ-question");


    faqItems.forEach((item) => {

        item.addEventListener("click", () => {

            const answer = item.nextElementSibling; 

            const faqItem = item.parentElement; 



            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;

                faqItem.classList.remove("active"); 

            } else {

                // Если ответ закрыт, открываем его

                answer.style.maxHeight = answer.scrollHeight + "px";

                faqItem.classList.add("active"); // Добавляем класс active

            }

        });

    });

});

$(document).ready(function(){

    $('.services_useful_information-wrapper').slick({

        dots: false,

        arrows: false,

        infinite: false,

        slidesToShow: 3, 

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 3000,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            }

        ],

    });

});

$(document).ready(function(){

    $('.services_packages-interest .services_packages-wrapper .overlay-inner').slick({

        dots: false,

        infinite: false,

        adaptiveHeight: true,

        slidesToShow: 3, 

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            }

        ],

        prevArrow: '<div class="prev-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg></div>',

        nextArrow: '<div class="next-case">' +

            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +

            '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>\n' +

            '</svg>' +

            '</div>'

    });

});

document.addEventListener('DOMContentLoaded', function () {
    // Функция для инициализации эффекта в конкретном контейнере
    const initOverlayEffect = (containerSelector) => {
        const cardsContainer = document.querySelector(containerSelector);
        if (!cardsContainer) return; // Если контейнер не найден, выходим

        const overlay = cardsContainer.querySelector('.overlay');
        const cards = Array.from(cardsContainer.querySelectorAll('.overlay-card'));

        // Создаем overlay-элементы для каждой карточки
        const observer2 = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const cardIndex = cards.indexOf(entry.target);
                let width = entry.borderBoxSize[0].inlineSize;
                let height = entry.borderBoxSize[0].blockSize;

                if (cardIndex >= 0) {
                    overlay.children[cardIndex].style.width = `${width}px`;
                    overlay.children[cardIndex].style.height = `${height}px`;
                }
            });
        });

        const initOverlayCard = (cardEl) => {
            const overlayCard = document.createElement('div');
            overlayCard.classList.add('overlay-card');
            overlay.append(overlayCard);
            observer2.observe(cardEl);
        };

        cards.forEach(initOverlayCard);

        // Функция для применения маски overlay
        const applyOverlayMask = (e) => {
            const rect = cardsContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            overlay.style.setProperty('--opacity', 1);
            overlay.style.setProperty('--x', `${x}px`);
            overlay.style.setProperty('--y', `${y}px`);
        };

        // Добавляем обработчик pointermove на document.body
        document.body.addEventListener('pointermove', (e) => {
            // Проверяем, находится ли курсор внутри текущего контейнера
            const rect = cardsContainer.getBoundingClientRect();
            if (
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom
            ) {
                applyOverlayMask(e);
            } else {
                // Если курсор вне контейнера, скрываем overlay
                overlay.style.setProperty('--opacity', 0);
            }
        });
    };

    // Инициализация эффекта для первого блока
    initOverlayEffect('.services_packages .overlay-cards-container');

    // Инициализация эффекта для второго блока
    initOverlayEffect('.services_packages-interest .overlay-cards-container');
});


document.addEventListener('DOMContentLoaded', function () {
    // Функция для выравнивания высоты
    function equalizeHeights(containerSelector) {
        // Находим все карточки внутри указанного контейнера
        const cards = document.querySelectorAll(`${containerSelector} .service_package-item`);

        if (cards.length === 0) return; // Если карточек нет, выходим

        // Берём высоту первого блока как начальное значение maxHeight
        let maxHeight = cards[0].offsetHeight;

        // Проходим по всем карточкам и находим максимальную высоту
        for (let i = 1; i < cards.length; i++) {
            const cardHeight = cards[i].offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        }

        // Устанавливаем всем карточкам одинаковую высоту (максимальную)
        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }

    // Применяем для первого блока (.services_packages)
    const firstBlockSelector = '.services_packages .services_packages-wrapper';
    $('.services_packages .overlay-inner').on('init', function () {
        equalizeHeights(firstBlockSelector);
    });

    // Применяем для второго блока (.services_packages-interest)
    const secondBlockSelector = '.services_packages-interest .services_packages-wrapper';
    $('.services_packages-interest .overlay-inner').on('init', function () {
        equalizeHeights(secondBlockSelector);
    });

    // Также вызываем функцию при изменении размера окна
    window.addEventListener('resize', () => {
        equalizeHeights(firstBlockSelector);
        equalizeHeights(secondBlockSelector);
    });
});