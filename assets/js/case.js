document.addEventListener("DOMContentLoaded",function(){

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

})

document.addEventListener('click', function(event) {

    // Проверяем, что клик произошел на кнопке внутри '.btn-otizv'

    if (event.target.closest('.review-read-more')) {



       let contentModalreview = document.querySelector(".modal-content-review");

       let modalreview = document.querySelector(".background-review-modal")

       let closeModalreview = document.querySelector(".close-modal-review")

       let reviews;



       if(event.target.closest('.review-video_wrapper')){

         let author = event.target.closest('.review-video_wrapper').querySelector(".author_wrapper");

         let text = event.target.closest('.review-video_wrapper').querySelector(".review-text");

         reviews = `${author.innerHTML} <p class="review-text">${text.innerHTML}<p>`

       }

       openModalOtzivi(reviews);



       function openModalOtzivi(review) {

           document.querySelector('header').style.display = 'none';

           modalreview.classList.add("active");

           body.classList.add("not-scroll");

           if(review.innerHTML){

             contentModalreview.innerHTML = review.innerHTML;

           }

           else{

             contentModalreview.innerHTML = review;

           }

       }

       closeModalreview.addEventListener("click",function () {

           document.querySelector('header').style.display = 'block';

           modalreview.classList.remove("active");

           body.classList.remove("not-scroll");

           contentModalreview.innerHTML='';

       })

       event.preventDefault();

    }

});

$(document).ready(function(){

    $('.case_recommended-wrapper .overlay-inner').slick({

        dots: false,

        arrows:false,

        infinite: false,

        slidesToShow: 3,

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

    $('.case_result-slider').slick({

        dots: false,

        slidesToShow: 1,

        infinite: false,

        adaptiveHeight: true,

        swipe: false,

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

document.addEventListener("DOMContentLoaded",function(){

    const videoWrappers = document.querySelector('.case_video_wrapper');



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
document.addEventListener('DOMContentLoaded', function () {
  // Находим контейнер для карточек
  const cardsContainer = document.querySelector('.case_recommended .overlay-cards-container');
  if (!cardsContainer) return; // Если контейнер не найден, выходим

  const overlay = cardsContainer.querySelector('.overlay-slider');
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
});

document.addEventListener('DOMContentLoaded', function () {
    const caseWorksText = document.querySelector('.case_works-text');
    const showMoreButton = document.querySelector('.show-more-button');

    // Функция для расчета общей высоты блока
    function calculateTotalHeight() {
        caseWorksText.style.maxHeight = ''; // Сбрасываем maxHeight
        const totalHeight = caseWorksText.scrollHeight; // Вычисляем естественную высоту
        return totalHeight;
    }

    // Скрываем лишние элементы
    function hideExtraItems() {
        caseWorksText.style.maxHeight = ''; // Фиксированная высота для скрытого состояния
        showMoreButton.textContent = 'Показать ещё'; // Устанавливаем текст кнопки
    }

    // Показываем все элементы
    function showAllItems() {
        const totalHeight = calculateTotalHeight();
        caseWorksText.style.maxHeight = `${totalHeight}px`; // Устанавливаем maxHeight
        showMoreButton.textContent = 'Скрыть'; // Меняем текст кнопки
    }

    // Переключение между состояниями
    function toggleVisibility() {
        if (caseWorksText.style.maxHeight === '300px' || caseWorksText.style.maxHeight === '') {
            showAllItems(); // Раскрываем блок
        } else {
            hideExtraItems(); // Скрываем блок
        }
    }

    // Инициализация: скрываем лишние элементы при загрузке страницы
    hideExtraItems();

    // Добавляем обработчик события на кнопку
    showMoreButton.addEventListener('click', toggleVisibility);
});