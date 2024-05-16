
document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
}); 
// DOMContentLoaded  end



//FUNCIONES : VISUALIZACION DE CARRITO, MODO OSCURO CLARO, OTRAS FUNCIONES VALIDAR ENTRADAS DE DATOS con jquery


// declara una var en js
//resultado de expresiones con diferentes tipos de datos
// metodos para muestra de informacion 
// operadores
// metodos para seleccionar elementos
// odenar arrays
//fi/ltras elementos
// variables
// tipos de datos
// JQuery seleccion de elementos
// funciones de elementos en JQuery (ocultar)
// funcion anonima
//agregar evento en JQuery
// metodos de envio de solicitud con hppts 
//objeto de aijac con js