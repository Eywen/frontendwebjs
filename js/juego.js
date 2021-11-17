
function inicilizar1 (){
    let numeroCartas = localStorage['numCartas']
        /*$('#divBaraja').append(" <b>Appended text</b>.");
        $('#divBaraja').append(" <b>Appended text   " + numeroCartas + "</b>.");*/

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

    baraja.innerHTML = "";
    for(var i = 0; i < numeroCartas; i++){
        //let indiceArray = Math.random() * arrayCartas.length;
        /*imagen = document.createElement('img');
        imagen.setAttribute('src', ruta);
        imagen.setAttribute('name', i);
        cajon.appendChild(imagen);*/
        $('#divBaraja').append(" <img id ='carta_" + i + "' src = '" + imgreverso.ruta + "'> </img>");
    }
}
	
