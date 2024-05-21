
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

document.addEventListener('DOMContentLoaded', function() {
    const productosContainer = document.getElementById('productos-container');
    const url = window.location.pathname;
  
    fetch('C:\Users\giona\OneDrive\Documentos\GitHub\Gardenia_shop_web\js\productos.json')
      .then(response => response.json())
      .then(data => {
        let productos = [];
        if (url.includes('templates/productos/herramientas/tijeras.html')) {f
          productos = data.herramientas.Tijeras;
        } else if (url.includes('templates/productos/all_productos.html')) {
          Object.keys(data).forEach(categoria => {
            Object.keys(data[categoria]).forEach(subcategoria => {
              productos = productos.concat(data[categoria][subcategoria]);
            });
          });
        }
  
        productos.forEach(producto => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const nombre = document.createElement('h2');
          nombre.textContent = producto.nombre;
  
          const imagen = document.createElement('img');
          imagen.src = producto.imagen;
          imagen.alt = producto.nombre;
  
          const precio = document.createElement('p');
          precio.textContent = `Precio: $${producto.precio.toFixed(0)}`;
  
          const detallesBtn = document.createElement('button');
          detallesBtn.textContent = 'Detalles';
          detallesBtn.addEventListener('mouseover', () => toggleDescripcion(descripcion, true));
          detallesBtn.addEventListener('mouseout', () => toggleDescripcion(descripcion, false));
          detallesBtn.addEventListener('click', () => toggleDescripcion(descripcion));
  
          const añadirBtn = document.createElement('button');
          añadirBtn.textContent = 'Añadir';
  
          const descripcion = document.createElement('div');
          descripcion.classList.add('descripcion');
          descripcion.textContent = producto.Descripción;
          descripcion.style.display = 'none';
  
          card.appendChild(nombre);
          card.appendChild(imagen);
          card.appendChild(precio);
          card.appendChild(detallesBtn);
          card.appendChild(añadirBtn);
          card.appendChild(descripcion);
  
          productosContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error al cargar los productos:', error));
  
    function toggleDescripcion(descripcion, show) {
      if (typeof show === 'boolean') {
        descripcion.style.display = show ? 'block' : 'none';
      } else {
        descripcion.style.display = descripcion.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
  