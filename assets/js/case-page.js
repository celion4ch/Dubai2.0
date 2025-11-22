
var form = document.forms['Сase_tabs'];
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
