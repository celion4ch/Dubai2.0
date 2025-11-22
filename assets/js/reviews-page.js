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

// Инициализация при первой загрузке страницы
initializeVideoScripts();

// Обрабатываем обновления после подгрузки через pdoPage (событие "page")
$(document).on('pdopage_load', function() {
  initializeVideoScripts(); // Повторная инициализация после подгрузки
});



document.addEventListener('DOMContentLoaded', function() {
  const typeTabs = document.querySelectorAll("#reviewTypeTabs li");
  let currentReviewType = 'video'; // По умолчанию отображаем видео отзывы

  // Функция для показа отзывов в зависимости от типа
  function filterReviews() {
    document.querySelectorAll('.pdo').forEach(block => {
      block.style.display = 'none';
    });
    
    const reviewBlock = document.getElementById(`reviews-${currentReviewType}-all`);
    if (reviewBlock) {
      reviewBlock.style.display = 'block';
    }
  }

  // Обработчик для смены типа отзыва (видео/текст)
  typeTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      typeTabs.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      currentReviewType = this.dataset.tab; // Обновляем текущий тип отзыва
      filterReviews(); // Обновляем отзывы при выборе типа
      textLimit(); // Если нужна обработка текста
    });
  });

  // Инициализация — показываем отзывы по умолчанию
  filterReviews();
  textLimit(); // Если нужно
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

// Установим куки для передачи значения лимита на сервер
document.cookie = "screen_limit_text=" + getScreenTextWidth();
// function textLimit(){
//   let reviews;
//   reviews = document.querySelectorAll('.review-text_wrapper , .review-video_wrapper') ;
//   reviews.forEach(function(review) {
//     const reviewText = review.querySelector('.review-text');
//     const readMoreLink = review.querySelector('.review-read-more');

//     if (reviewText && readMoreLink) {
//         // Получим полную высоту текста
//         const fullTextHeight = reviewText.scrollHeight;
//         // Ограниченная высота
//         const maxTextHeight = reviewText.offsetHeight;

//         // Если текст меньше или равен максимальной высоте, скрываем ссылку
//         if (fullTextHeight <= maxTextHeight) {
//             readMoreLink.style.display = 'none';
            
//         }
//         else{
//           readMoreLink.style.display='block';
//         }
//     }
//   });
// }

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