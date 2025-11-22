$(document).ready(function () {
    // Обработчик для первого уровня табов (категорий)
    $('input[type="radio"]').change(function () {
        var categoryId = $(this).data('category-id'); // Получаем ID выбранной категории (из раздела "цены")

        // Очищаем второй уровень табов и карточки
        $('#priceTypeTabs').empty();
        $('#service-cards-container').empty();

        // Меняем активный класс на категории
        $('input[type="radio"]').parent().removeClass('active');
        $(this).parent().addClass('active');

        // Загружаем второй уровень табов или карточки
        $.ajax({
            url: '/ajax-handler.php', // Путь к странице с сниппетом
            data: {
                categoryId: categoryId, // Передаём ID категории (из раздела "цены")
                snippet: 'loadSubTabs' // Используем сниппет для получения подтабов
            },
            success: function (response) {
                if (response.trim() !== '') {
                    // Если есть подтабы, добавляем их во второй уровень
                    $('#priceTypeTabs').html(response);

                    // Автоматически активируем первый таб второго уровня
                    $('#priceTypeTabs li:first').addClass('active');

                    // Загружаем карточки для первой подпапки
                    var subCategoryId = $('#priceTypeTabs li:first').data('service-id');
                    loadServiceCards(subCategoryId); // Функция для подгрузки карточек
                } else {
                    // Если подтабов нет, загружаем все карточки сразу
                    loadServiceCards(categoryId);
                }
            }
        });
    });

    // Обработчик для второго уровня табов (подпапок)
    $(document).on('click', '#priceTypeTabs li', function () {
        var subCategoryId = $(this).data('service-id'); // Получаем ID подпапки (из раздела "цены")

        // Подгружаем карточки для выбранной подпапки
        loadServiceCards(subCategoryId);

        // Меняем активный класс на подпапке
        $('#priceTypeTabs li').removeClass('active');
        $(this).addClass('active');
    });

    // Функция для подгрузки карточек для конкретной категории или подпапки
    function loadServiceCards(parentId) {
        $.ajax({
            url: '/ajax-handler.php',
            data: {
                parentId: parentId, // Передаём ID родителя (категории или подпапки)
                snippet: 'loadServiceCards'
            },
            success: function (response) {
                // Подставляем карточки в контейнер
                $('#service-cards-container').html(response);

                // Инициализируем эффект анимации после загрузки карточек
                initOverlayEffect('.overlay-cards-container');
            }
        });
    }

    // Изначально показываем первый таб
    $('input[type="radio"]:first').prop('checked', true).change();
});

// Функция для инициализации эффекта в конкретном контейнере
const initOverlayEffect = (containerSelector) => {
    const cardsContainer = document.querySelector(containerSelector);
    if (!cardsContainer) return; // Если контейнер не найден, выходим

    const overlay = cardsContainer.querySelector('.overlay');
    if (!overlay) return; // Если overlay не найден, выходим

    // Очищаем все предыдущие overlay-элементы
    overlay.innerHTML = '';

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