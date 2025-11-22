var form = document.forms['News_tabs'];
var gallery = document.querySelectorAll(".pdo");
function sortEmployee(selectedRadio){
    gallery.forEach(galleryItem => {
        galleryItem.style.display = 'none'; 
    });
    var selectedGallery = document.querySelector(`.pdo[data-tab="${selectedRadio}"]`);
    if (selectedGallery) {
        selectedGallery.style.display = 'block'; 
    }
}
form.addEventListener('change',() =>{
    var tabs = form.elements['tabs'];
    var selectedRadio = Array.from(tabs).find(t => t.checked)?.value;
    sortEmployee(selectedRadio);
});

document.addEventListener('DOMContentLoaded', function () {
    const popularBlock = document.getElementById('popular-block');
    if (!popularBlock) {
        return;
    }

    // Функция для перемещения блока "Популярное" в активный таб
    function movePopularBlockToActiveTab() {
        const isMobile = window.innerWidth < 1200;
        const activeTabValue = document.querySelector('input[name="tabs"]:checked')?.value;

        if (isMobile) {
            // Находим активный таб-контейнер по значению data-tab
            const activeTabContainer = document.querySelector(`.pdo[data-tab="${activeTabValue}"] .news_gallery_wrapper`);

            if (activeTabContainer) {
                // Проверяем, что блок "Популярное" ещё не перемещен в активный таб
                if (!activeTabContainer.contains(popularBlock)) {
                    activeTabContainer.insertAdjacentElement('afterbegin', popularBlock);
                }

                // Добавляем класс mob_popular на мобильной версии
                if (!popularBlock.classList.contains('mob_popular')) {
                    popularBlock.classList.add('mob_popular');
                }
            }
        } else {
            // Убираем класс mob_popular на десктопе, если он был добавлен
            if (popularBlock.classList.contains('mob_popular')) {
                popularBlock.classList.remove('mob_popular');
            }
            // Никаких других действий не требуется на десктопе
        }
    }

    // Наблюдатель для отслеживания изменений в активном табе
    function observeActiveTabChanges() {
        const activeTabValue = document.querySelector('input[name="tabs"]:checked')?.value;
        const activeTabContainer = document.querySelector(`.pdo[data-tab="${activeTabValue}"] .news_gallery_wrapper`);

        if (activeTabContainer) {
            const observer = new MutationObserver(() => {
                movePopularBlockToActiveTab();
            });

            // Настройка наблюдателя для отслеживания изменений в содержимом
            observer.observe(activeTabContainer, { childList: true, subtree: true });
        }
    }

    // Обработчик для переключения табов
    const form = document.forms['News_tabs'];
    form.addEventListener('change', () => {
        movePopularBlockToActiveTab();
        observeActiveTabChanges(); // Устанавливаем наблюдатель на новый активный таб
    });

    // Восстановление "Популярное" после каждой загрузки через Ajax
    document.addEventListener('pdoPageLoad', function () {
        movePopularBlockToActiveTab();  // Перемещаем "Популярные" после пагинации
    });

    // Первоначальная вставка блока при загрузке страницы
    movePopularBlockToActiveTab();
    observeActiveTabChanges(); // Начальный вызов наблюдателя

    // Проверка размера экрана при изменении
    window.addEventListener('resize', () => {
        movePopularBlockToActiveTab();
        observeActiveTabChanges();
    });
});

