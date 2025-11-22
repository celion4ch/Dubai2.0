
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

var form = document.forms['Employee_tabs'];

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





// var form = document.forms['Employee_tabs'];

// function filter(list,val){

//   var newList = [];

//   if(val == "Все отделы"){

//     return list;

//   }

//   else{

//     for(var i = 0;i < list.length;i++){

//         if(list[i].dataset.department == val){

//             newList.push(list[i]);

//         }

//       }

//   }

//   return newList;

  

// };

// var gallery = document.querySelector(".employees_gallery_wrapper");

// function renderList(_list=[],el){

// 	el.innerHTML='';

//     _list.forEach(i=>{

//         el.appendChild(i);

//     })

// }

// form.addEventListener('change',() =>{

//     var tabs = form.elements['tabs'];

//     var selectedRadio = Array.from(tabs).find(t => t.checked)?.value;

//     renderList(filter(certificateItem,selectedRadio),gallery);

// })

function getScreenWidth() {

    var width = window.innerWidth;

    var limit;

    if (width <= 1200) {

        limit = 8; // Для средних экранов

    } else {

        limit = 12; // Для больших экранов

    }

    return limit;

}



// Установим куки для передачи значения лимита на сервер

document.cookie = "screen_limit=" + getScreenWidth();



