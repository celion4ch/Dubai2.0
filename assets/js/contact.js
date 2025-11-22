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
let wrapMap = document.getElementById('wrapMap');
// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
let mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите на неё';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
    // удаляем элемент с интерактивной подсказкой
    mapTitle.parentElement.removeChild(mapTitle);
}
// по движению мыши в области карты
wrapMap.onmousemove = function(event) {
    // показываем подсказку
    mapTitle.style.display = 'block';
    // двигаем подсказку по области карты вместе с мышкой пользователя
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function() {
    // прячем подсказку
    mapTitle.style.display = 'none';
    if(!this.children[0].hasAttribute('style')){
        this.children[0].setAttribute('style','pointer-events: none;');
        wrapMap.appendChild(mapTitle);
    }
}
document.addEventListener('mouseup', function(e) {
    if (!wrapMap.contains(e.target) && !wrapMap.children[0].hasAttribute('style')) {
        wrapMap.children[0].setAttribute('style','pointer-events: none;');
        wrapMap.appendChild(mapTitle);
    }
});