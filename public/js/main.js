document.addEventListener("DOMContentLoaded", function(){
    // Evitar que se cierre el dropdown al hacer clic dentro
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    const productosContainer = document.getElementById('productos-container');
    const url = window.location.pathname;
    let productos = [];

    function cargarProductos() {
        fetch('/js/productos.json')
            .then(response => response.json())
            .then(data => {
                if (url.includes('templates/productos/herramientas/tijeras.html'))  {
                    productos = data.herramientas.Tijeras;
                } 
                if (url.includes('templates/productos/herramientas/palas.html')) {
                    productos = data.herramientas.palas;
                }
                if (url.includes('templates/productos/herramientas/otras_herramientas.html')) {
                    productos = data.herramientas.otras_herramientas;
                } 
                if (url.includes('templates/productos/plantas_semillas/flores.html')) {
                    productos = data.plantas_semillas.flores;
                }
                if (url.includes('templates/productos/plantas_semillas/plantas_arboles.html')) {
                    productos = data.plantas_semillas.plantas_arboles;
                }
                if (url.includes('templates/productos/plantas_semillas/huerto.html')) {
                    productos = data.plantas_semillas.huerto;
                }
                if (url.includes('templates/productos/insumos/fertilizante.html')) {
                    productos = data.insumos.fertilizante;
                }
                if (url.includes('templates/productos/insumos/tierra.html')) {
                    productos = data.insumos.tierra;
                }
                if (url.includes('templates/productos/insumos/otros_insumos.html')) { 
                    productos = data.insumos.otros_insumos;
                }
                if (url.includes('templates/productos/all_products.html')) { 
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
                mostrarProductos(productos); // Mostrar los productos cargados
            })
            .catch(error => console.error('Error al cargar los productos:', error));
    }

    function mostrarProductos(productos) {
        productosContainer.innerHTML = '';

        productos.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('card');

            const nombre = document.createElement('h5');
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
    }

    function toggleDescripcion(descripcion, show) {
        if (typeof show === 'boolean') {
            descripcion.style.display = show ? 'block' : 'none';
        } else {
            descripcion.style.display = descripcion.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Función para ordenar los productos por precio de menor a mayor
    function ordenarProductosPorPrecio() {
        productos.sort((a, b) => a.precio - b.precio); // Ordenar los productos por precio
        mostrarProductos(productos); // Mostrar los productos ordenados
    }

    // Evento click para el botón de ordenar
    document.getElementById('ordenar-btn').addEventListener('click', ordenarProductosPorPrecio);

    cargarProductos(); // Cargar los productos al cargar el DOM
});
