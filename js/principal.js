var app = new Vue({
    el : '#app', //índica el id del elemento
    data: {  //con data interactuamos con el DOM
        lista : [
            {nombre: 'Juan Carlos', promedio: '10', estado: false},
            {nombre: 'Liliana Nataly', promedio: '17', estado: true},
            {nombre: 'Luisito comunica', promedio: '20', estado: true},
        ],
    }
})