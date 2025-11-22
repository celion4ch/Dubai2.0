// Сертификаты сотрудников и модальное окно
let contentModalCertificate = document.querySelector(".modal-content-certificate");
let modalCertificate = document.querySelector(".background-certificate-modal");
let closeModalCertificate = document.querySelector(".close-modal-certificate");

// Добавляем обработчик клика на документ
document.addEventListener('click', function (event) {
    // Проверяем, что клик произошел именно на элементе .modal_certificate
    const clickedElement = event.target.closest('.modal_certificate');
    if (!clickedElement) return; // Если клик не на .modal_certificate, выходим из функции

    // Находим родительский блок .employees_card
    const employeeCard = clickedElement.closest('.employees_card');
    if (!employeeCard) return; // Если нет родительского блока .employees_card, выходим

    // Находим все сертификаты внутри данного сотрудника
    const certificates = employeeCard.querySelectorAll('.certificate_wrapper img');
    const linksCertificate = [];

    // Собираем ссылки на сертификаты
    certificates.forEach(function (item) {
        linksCertificate.push(item.getAttribute('src'));
    });

    // Открываем модальное окно
    openModalOtzivi(linksCertificate);

    event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если есть)
});

// Функция для открытия модального окна
function openModalOtzivi(cert) {
    // Очищаем предыдущий контент
    contentModalCertificate.innerHTML = '';

    // Добавляем сертификаты в модальное окно
    cert.forEach(function (item) {
        contentModalCertificate.innerHTML += `<div class="certificate_item"><img src="${item}" alt="Сертификат"></div>`;
    });

    // Показываем модальное окно и блокируем прокрутку
    modalCertificate.classList.add("active");
    document.body.classList.add("not-scroll");

    // Инициализируем слайдер (если используется Slick)
    initializedSlider();
}

// Функция для закрытия модального окна
if (closeModalCertificate) {
    closeModalCertificate.addEventListener("click", function () {
        // Скрываем модальное окно и восстанавливаем прокрутку
        modalCertificate.classList.remove("active");
        document.body.classList.remove("not-scroll");

        // Удаляем слайдер и очищаем содержимое
        $('.modal-content-certificate').slick('unslick');
        contentModalCertificate.innerHTML = '';
    });
}
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

$(document).ready(function(){
    $('.team_slider_wrapper').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: true,
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

    // Функция обновления ширины слайдов
    function updateSlideWidths() {
        let containerWidth = document.querySelector('.team_slider_wrapper').offsetWidth;
        let bigSlideWidth = containerWidth * 0.5; // 50% от контейнера
        let smallSlideWidth = containerWidth * 0.25; // 25% от контейнера

        let slides = document.querySelectorAll('.team_slider_item');
        slides.forEach(slide => {
            slide.style.width = smallSlideWidth + 'px';
        });

        let bigSlide = document.querySelector('.team_slider_item.big_slide');
        if (bigSlide) {
            bigSlide.style.width = bigSlideWidth + 'px';
        }
    }

    // Увеличение 3-го слайда при загрузке страницы
    $('.team_slider_item').removeClass('big_slide');
    $('.team_slider_item').eq(2).addClass('big_slide');

    // Обновление ширины при загрузке страницы (только если ширина экрана больше 1200px)
    if ($(window).width() > 1200) {
        updateSlideWidths();
        trackHeight();
    }

    // Обновляем активный большой слайд перед переключением
    $('.team_slider_wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.team_slider_item').removeClass('big_slide');
        $('.team_slider_item').eq(nextSlide + 2).addClass('big_slide'); // Увеличиваем +1 для большого слайда
        if ($(window).width() > 1200) {
            updateSlideWidths();
        }
    });

    // Обновляем ширину при изменении размера окна (только если ширина экрана больше 1200px)
    $(window).on('resize', function () {
        if ($(window).width() > 1200) {
            updateSlideWidths();
        }
    });

    // Функция для корректировки высоты слайдера
    function trackHeight() {
        let sliderWrapp = document.querySelector(".team_slider_wrapper");
        let slider = document.querySelector(".team_slider_wrapper .slick-track");
        let height = sliderWrapp.offsetWidth * 0.5;
        slider.style.height = height + "px";
    };
});

$('.clients_gallery').slick({
    centerMode: false,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 6,
    rows:2,
    responsive:[
        {
            breakpoint:1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint:1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ],
});
 $(document).ready(function() {
    function initializeSliders() {
        var windowWidth = $(window).width();
        // Слайдер сотрудников
        if (windowWidth < 768) {
            if (!$('.employees_gallery_wrapper').hasClass('slick-initialized')) {
                $('.employees_gallery_wrapper').slick({
                    centerMode: false,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                });
            }        
        } 
        else {
            if ($('.employees_gallery_wrapper').hasClass('slick-initialized')) {
                $('.employees_gallery_wrapper').slick('unslick');
            }
           
        }
        // Слайдер сертификатов
        if (windowWidth < 1200) {
            
            if (!$('.certificate-images-content').hasClass('slick-initialized')) {
                $('.certificate-images-content').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive:[
                        {
                            breakpoint:768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true
                            }
                        }
                    ],
                    prevArrow: '<div class="prev-case">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
                        '<path d="M20.1853 11.1631L6.5076 11.1631L12.3695 5.30128L11.6325 4.46387L4.375 11.7214L11.6325 18.979L12.3695 18.1415L6.5076 12.2797L20.1853 12.2797L20.1853 11.1631Z" fill="#F7F7F7"/>' +
                        '</svg></div>',
                    nextArrow: '<div class="next-case">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
                        '<path d="M3.81668 11.1631L17.4944 11.1631L11.6325 5.30128L12.3694 4.46387L19.627 11.7214L12.3694 18.979L11.6325 18.1415L17.4944 12.2797L3.81668 12.2797L3.81668 11.1631Z" fill="#F7F7F7"/>' +
                        '</svg>' +
                        '</div>'
                });
            }
        } else {
            if ($('.certificate-images-content').hasClass('slick-initialized')) {
                $('.certificate-images-content').slick('unslick');
            }
        }
        
    }


    // Инициализация слайдеров при загрузке страницы
    initializeSliders();

    // Функция для дебаунса
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, arguments), wait);
        };
    }

    // Инициализация слайдеров при изменении размера окна с использованием дебаунса
    $(window).on('resize', debounce(initializeSliders, 150));
});
 


  //Увеличение кругов 
  let bg1 = document.getElementById("circle1");
  let bg2 = document.getElementById("circle2");
  let bg3 = document.getElementById("circle3");
  let bg4 = document.getElementById("circle4");
  let bgs = [bg1,bg2,bg3,bg4];
  let scale1 = 1;
  let scale2 = 1;
  let scale3 = 1;
  let scale4 = 1;
  
  // Получаем нужный элемент
  let scroll1 = 0;
  let scroll2 = 0;
  let scroll3 = 0;
  let scroll4 = 0;
  let visible = function (bgs) {
    // Все позиции элемента
    let targetPosition = [
        {
            top: window.pageYOffset + bgs[0].getBoundingClientRect().top,
        },
        {
            top: window.pageYOffset + bgs[1].getBoundingClientRect().top,
        },
        {
            top: window.pageYOffset + bgs[2].getBoundingClientRect().top,
        },
        {
            top: window.pageYOffset + bgs[3].getBoundingClientRect().top,
        }
    ];
      // Получаем позиции окна
    let windowPosition = {
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

        // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу

          function onScroll() {
            if (targetPosition[0].top + 400 < windowPosition.bottom) { 
              let top1 = window.pageYOffset;
              if (scroll1 > top1) {
                  if (scale1 <= 1) {
                      scale1 = 1;
                  } else {
                      scale1 -= 0.08;
                  }
              } else if (scroll1 < top1) {
                if(scale1 >=6){
                    scale1 = 6;
                }
                else{
                    scale1 += 0.1;
                } 
              }
              scroll1 = top1;
              bgs[0].style.transform = `scale(${scale1})`;
            } 
            if (targetPosition[1].top + 400 < windowPosition.bottom) { 
                let top2 = window.pageYOffset;
                if (scroll2 > top2) {
                    if (scale2 <= 1) {
                        scale2 = 1;
                    } else {
                        scale2 -= 0.08;
                    }
                } else if (scroll2 < top2) {
                  if(scale2 >=6){
                      scale2 = 6;
                  }
                  else{
                      scale2 += 0.1;
                  } 
                }
                scroll2 = top2;
                bgs[1].style.transform = `scale(${scale2})`;
              } 
              if (targetPosition[2].top + 400 < windowPosition.bottom) { 
                let top3 = window.pageYOffset;
                if (scroll3 > top3) {
                    if (scale3 <= 1) {
                        scale3 = 1;
                    } else {
                        scale3 -= 0.08;
                    }
                } else if (scroll3 < top3) {
                  if(scale3 >=6){
                      scale3 = 6;
                  }
                  else{
                      scale3 += 0.1;
                  } 
                }
                scroll3 = top3;
                bgs[2].style.transform = `scale(${scale3})`;
              } 
              if (targetPosition[3].top + 400 < windowPosition.bottom) { 
                let top4 = window.pageYOffset;
                if (scroll4 > top4) {
                    if (scale4 <= 1) {
                        scale4 = 1;
                    } else {
                        scale4 -= 0.08;
                    }
                } else if (scroll4 < top4) {
                  if(scale4 >=6){
                      scale4 = 6;
                  }
                  else{
                      scale4 += 0.1;
                  } 
                }
                scroll4 = top4;
                bgs[3].style.transform = `scale(${scale4})`;
              } 
          }
          
          window.onscroll = onScroll;  // Назначаем обработчик прокрутки только один раз
      
  };
  
  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    visible(bgs);
  });
  
  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  visible(bgs);

  document.addEventListener("DOMContentLoaded",function(){
    const videoWrappers = document.querySelector('.video_wrapper');

    const video = videoWrappers.querySelector('.myVideo');
    const playButton = videoWrappers.querySelector('.video-play');
    const pauseButton = videoWrappers.querySelector('.video-pause');

    // Убираем стандартные элементы управления
    video.removeAttribute('controls');

    // При клике на кнопку play
    playButton.addEventListener('click', function() {
      video.play();
      playButton.style.display = 'none'; // Скрыть кнопку play
      pauseButton.style.display = 'block'; // Показать кнопку pause
      video.setAttribute('controls', '');
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
})