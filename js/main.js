
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

