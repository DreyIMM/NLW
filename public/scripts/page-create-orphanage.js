
// Create map
const map = L.map('mapid').setView([-22.9019072,-43.203642], 15);

//Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconsize: [58, 68],
    iconAnchor: [29, 68],
})

// create and addd marker
let marker;

map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

// add the camp of photo

function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da ultima imagem adicionada.
    const newFildContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens

    const input = newFildContainer.children[0]

    if(input.value == ""){
        return 
    } // não entendi essa parte 

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFildContainer)
}

function deleteFilds(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value ="";
        return 
    }
    // deletar o campo
    span.parentNode.remove();
}   

//selecionar  sim ou nao

function toggleSelect(){

    //retirar a class active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active');
    })
    // colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')


    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelectorAll('[name="open_weekends"]');
    input.value = button.dataset.value
    // verificar se sim ou nao

    
}
