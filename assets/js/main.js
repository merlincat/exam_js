$(function() {
    $("#slider").lightSlider({
        item: 1,
        mode:'fade',
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        speed: 3000, //ms'
        auto: true,
        loop: true,
        pause: 3500,
        controls: false,
        vertical:true,
        verticalHeight:720,
        verticalSwiping: true,
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ],
    }); 
    $("#cards_list").lightSlider({
        item: 3,
        mode:'slide',
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 30,
        speed: 2000, //ms'
        auto: true,
        loop: true,
        pause: 2500,
        controls: true,

        // verticalHeight:720,
        // verticalSwiping: true,
    });
});


$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>70){
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
    });
});


let map;
function initMap(){
    map = L.map('map').setView([40.64740434388478, -73.9088304023876], 15);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    let myIcon = L.icon({
        iconUrl: 'assets/js/plugins/leaflet/images/pin.png',
    // shadowUrl: 'pin.png',

        iconSize:     [106, 106], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([40.64740434388478, -73.9088304023876],{icon: myIcon}).addTo(map)
        .bindPopup('POP UP');
}
map_link.addEventListener('click', function(){
    let link =document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/js/plugins/leaflet/leaflet.css');
    document.head.append(link);
    let script = document.createElement('script');
    script.setAttribute('src','assets/js/plugins/leaflet/leaflet.js');
    document.body.append(script);
    script.onload = initMap;
    map_link.remove();
    map_jpg.remove();
});

    // Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    //     maxZoom: 20,
    //     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // });
lightGallery(document.getElementById('lightgallery'), {
   plugins: [lgZoom, lgThumbnail],
    speed: 500,
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(){
    const bot_token = '1879069302:AAG83kXDUj8RSCEtmC21DlYDWG260Na4R6w';
    const chat_id = '-1001456310972';
    const userName = visitor_name.value;
    const userEmail = email.value;
    const userEmailBool = validateEmail(email.value);
    if(userEmailBool==false){
        alert('Please, enter correct email');
    }
    if(userName!==''&&userEmailBool==true){
        axios
            .get('https://api.telegram.org/bot'+bot_token+'/sendMessage?chat_id='+chat_id+'&text='+userName+userEmail);
    }
}
send_btn.addEventListener('click', sendEmail);