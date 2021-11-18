window.onload = function(){
    juego = false;
    document.getElementById('preferencesOp').addEventListener('click',
        function() {
            $('#index').load ('/vistas/preferences.html');
        }, false
    );

    document.getElementById('jugarOp').addEventListener('click',
        function() {
            $('#index').load ('/vistas/juego.html');
            juego = true; 
            inicializar();
        }, false
    );

    document.getElementById('recordOp').addEventListener('click',
        function() {
            $('#index').load ('/vistas/records.html');
        }, false
    );

    var testData = document.getElementById("divBaraja");
    console.log("div baraja "+testData);

    
}

function pintarTablero (){
    localStorage['numCartas'] = $("#numMax").val();
    numeroCartas = localStorage['numCartas']
    $('#divCar').html(`<p>Hello world! ${numeroCartas}</p>`);
    $('#divCar').html(`<p>juegohtml! ${juego}</p>`);
    
}

function inicializar (){
    let numeroCartas = localStorage['numCartas']
    //alert('ini');
    var baraja = $('#divBaraja');

    var pathImg = "../imagenes/cartas/";
    var imgreverso = {ruta:pathImg+"reverso.jpg"};


    var arrayCartas = [{ruta:pathImg+"bastos1.jpg",show:false},
                    {ruta:pathImg+"copas1.jpg",show:false},
                    {ruta:pathImg+"espadas1.jpg",show:false},
                    {ruta:pathImg+"oros1.jpg",show:false},
                    {ruta:pathImg+"bastos12.jpg",show:false},
                    {ruta:pathImg+"copas12.jpg",show:false}, 
                    {ruta:pathImg+"espadas12.jpg",show:false},
                    {ruta:pathImg+"oros12.jpg",show:false} 
                ];

   // baraja.innerHTML = "";
    for(var i = 0; i < numeroCartas; i++){
        //let indiceArray = Math.random() * arrayCartas.length;
      /*  imagen = document.createElement('img');
        imagen.setAttribute('src', imgreverso);
        imagen.setAttribute('name', i);
        baraja.appendChild(imagen);*/
       $('#divBaraja').append(" <img id ='carta_" + i + "' src = '" + imgreverso.ruta + "'> </src>");
       
    }
}





