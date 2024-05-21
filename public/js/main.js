document.addEventListener("DOMContentLoaded", function(){
  // Evitar que se cierre el dropdown al hacer clic dentro
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
          e.stopPropagation();
      });
  });

  // Cargar productos al cargar el DOM
  const productosContainer = document.getElementById('productos-container');
  const url = window.location.pathname;

  fetch('/js/productos.json')
      .then(response => response.json())
      .then(data => {
          let productos = [];
          if (url.includes('templates/productos/herramientas/tijeras.html'))  {
              productos = data.herramientas.Tijeras;} 
          if (url.includes('templates/productos/herramientas/palas.html')) {
              productos = data.herramientas.palas;}
          if (url.includes('templates/productos/herramientas/otras_herramientas.html')) {
              productos = data.herramientas.otras_herramientas;} 
          
          if (url.includes('templates/productos/plantas_semillas/flores.html')) {
              productos = data.plantas_semillas.flores;}
          if (url.includes('templates/productos/plantas_semillas/plantas_arboles.html')) {
              productos = data.plantas_semillas.plantas_arboles;}
          if (url.includes('templates/productos/plantas_semillas/huerto.html')) {
              productos = data.plantas_semillas.huerto;}

  
          if (url.includes('templates/productos/insumos/fertilizante.html')) {
               productos = data.insumos.fertilizante;}
          if (url.includes('templates/productos/insumos/tierra.html')) {
                productos = data.insumos.tierra;}
          if (url.includes('templates/productos/insumos/otros_insumos.html')) { 
                productos = data.insumos.otros_insumos;}

          if (url.includes('/templates/productos/all_products.html') { 
              Object.keys(data).forEach(categoria => {
                  if (data[categoria]) {
                      Object.keys(data[categoria]).forEach(subcategoria => {
                          if (Array.isArray(data[categoria][subcategoria])) {
                              productos = productos.concat(data[categoria][subcategoria]);
                          }
                      });
                  }
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
