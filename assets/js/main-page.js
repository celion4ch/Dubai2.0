// Анимация для h1

document.addEventListener("DOMContentLoaded", function () {

    let animatedText = document.querySelector(".main-page-banner h1");

    let textContentAnimated = animatedText.innerText;

    animatedText.innerHTML = "";

    for (let i = 0; i < textContentAnimated.length; i++) {

        (function (index) {

            setTimeout(function () {

                animatedText.innerHTML += textContentAnimated.charAt(index);

            }, 80 * index);

        })(i);

    }

});



// Анимация для услуг

const cardsContainer = document.querySelector(".cards");

const cardsContainerInner = document.querySelector(".cards__inner");

const cards = Array.from(document.querySelectorAll(".card"));

const overlay = document.querySelector(".overlay");



const applyOverlayMask = (e) => {

    const overlayEl = e.currentTarget;

    const x = e.pageX - cardsContainer.offsetLeft;

    const y = e.pageY - cardsContainer.offsetTop;



    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;

};



const createOverlayCta = (overlayCard, ctaEl) => {

    const overlayCta = document.createElement("div");

    overlayCta.classList.add("cta");

    overlayCta.textContent = ctaEl.textContent;

    overlayCta.setAttribute("aria-hidden", true);

    overlayCard.append(overlayCta);

};



const observer = new ResizeObserver((entries) => {

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

    const overlayCard = document.createElement("div");

    overlayCard.classList.add("card");

    createOverlayCta(overlayCard, cardEl.lastElementChild);

    overlay.append(overlayCard);

    observer.observe(cardEl);

};



cards.forEach(initOverlayCard);

document.body.addEventListener("pointermove", applyOverlayMask);



// Слайдер результатов

$(document).ready(function(){

    $('.main-page-case-slider').slick({

        dots: true,

        infinite: true,

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



// Слайдер отзывов

$(document).ready(function(){

    $('.main-page-otziv-slider').slick({

        dots: true,

        slidesToShow: 1.8,

        infinite: true,

        initialSlide:1,

        responsive: [

            {

                breakpoint: 1200,

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

});





$(document).ready(function() {
    function initializeSliders() {
        var windowWidth = $(window).width();
        // Слайдер сертификатов
        if (windowWidth < 1200) {
            
            if (!$('.main-page-nagradi-images-content').hasClass('slick-initialized')) {
                $('.main-page-nagradi-images-content').slick({
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
            if ($('.main-page-nagradi-images-content').hasClass('slick-initialized')) {
                $('.main-page-nagradi-images-content').slick('unslick');
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
    initializeVideoScripts();
});
function initializeVideoScripts() {
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
  }


  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      if (event.target.closest('.review-read-more')) {
  
        let contentModalreview = document.querySelector(".modal-content-review");
        let modalreview = document.querySelector(".background-review-modal");
        let closeModalreview = document.querySelector(".close-modal-review");
        let reviews;
  
        if (event.target.closest('.review-video_wrapper')) {
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
  
  document.addEventListener('DOMContentLoaded', function () {
    // Находим элементы
    const openButton = document.querySelector('.also-want-btn');
    const closeButton = document.querySelector('.close-also-want');
    const formWrapper = document.getElementById('form_also_want');

    // Открытие формы
    openButton.addEventListener('click', () => {
        formWrapper.style.display = 'block'; 
        setTimeout(() => {
            formWrapper.classList.add('active'); 
        }, 10); 
    });

    // Закрытие формы при клике на крестик
    closeButton.addEventListener('click', () => {
        formWrapper.classList.remove('active'); 
        setTimeout(() => {
            formWrapper.style.display = 'none';
        }, 300); 
    });

});
document.addEventListener("DOMContentLoaded",function(){
    const videoWrappers = document.querySelector('.main-page-banner-video');

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