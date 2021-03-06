
// Create map
const map = L.map('mapid').setView([-22.9019072,-43.203642], 15);

//Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconsize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id,name,lat,lng}){
    
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popou',
        minWidth: 240,
        minHeight: 240
}).setContent(` ${name}<a href=/orphanage?id=${id} class="choose-orphanege"> <img src="/images/arrow-white.svg" > </a>`)

    // create and add marker
    L.marker([lat, lng], {icon}).addTo(map).bindPopup(popup);
}

const orphangesSpan = document.querySelectorAll('.orphanages span')

orphangesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})

