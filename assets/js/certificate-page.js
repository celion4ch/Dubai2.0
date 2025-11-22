var form = document.forms['Certificate_tabs'];

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

})



function getScreenWidth() {

    var width = window.innerWidth;

    var limit;

    if (width <= 1200) {

        limit = 8; // Для средних экранов

    } else {

        limit = 16; // Для больших экранов

    }

    return limit;

}



// Установим куки для передачи значения лимита на сервер

document.cookie = "screen_limit=" + getScreenWidth();

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {

        // Открытие модального окна
        const clickedElement = event.target.closest('.certificate-images');
        if (clickedElement) {
            const certificates = clickedElement.querySelector('.main-certificate-photo');
            const imgSrc = certificates.getAttribute('src');

            openModalOtzivi(imgSrc);
            event.preventDefault();
        }

        // Закрытие модального окна через клик на крестике
        if (event.target.closest('.close-modal-certificate')) {
            closeModalCertificate();
        }

    });

    // Функция открытия модального окна
    function openModalOtzivi(cert) {
        const contentModal = document.querySelector('.modal-content-certificate');
        const modal = document.querySelector('.background-certificate-modal');

        // Скрыть хедер и показать модалку
        document.querySelector('header').style.display = 'none';
        modal.classList.add('active');
        document.body.classList.add('not-scroll');

        // Очистить и добавить новое изображение
        contentModal.innerHTML = `
            <div class="certificate_modal">
                <img src="${cert}" alt="Сертификат" class="dynamic-certificate">
            </div>
        `;

        // Обработчик загрузки изображения
        const img = contentModal.querySelector('img');
        img.onload = function() {
            const imgWidth = this.naturalWidth;
            const imgHeight = this.naturalHeight;

            if (imgWidth > imgHeight) {
                img.style.width = '100%';
                img.style.height = 'auto';
            } else {
                img.style.height = '100%';
                img.style.width = 'auto';
            }
        };
    }

    // Функция закрытия модального окна
    function closeModalCertificate() {
        const modal = document.querySelector('.background-certificate-modal');
        const contentModal = document.querySelector('.modal-content-certificate');

        document.querySelector('header').style.display = 'block';
        modal.classList.remove('active');
        document.body.classList.remove('not-scroll');
        contentModal.innerHTML = '';
    }
});

