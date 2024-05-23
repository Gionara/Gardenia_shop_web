# Gardenia_shop_web

Gardenia Shop
Gardenia Shop es una página web para la venta de productos de jardinería, que incluye una variedad de herramientas, plantas, semillas e insumos. Esta guía te ayudará a instalar y configurar el proyecto en tu máquina local.

## Requisitos

- Node.js (v12 o superior) https://nodejs.org/en

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Gionara/Gardenia_shop_web.git
```

Navegar al directorio del proyecto:

```bash
cd gardenia-shop
```

Instalar las dependencias:

```bash
npm install express
```

## Uso

Iniciar el servidor local:

```bash
node server.js
```

Abrir tu navegador y visitar:

```bash
http://localhost:3000
```
##  Estructura de Directorios
```bash
    C:.
    │   index.html
    │
    ├───js
    │       jquery-3.7.1.min.js
    │       main.js
    │       productos.json
    │
    ├───static
    │   │   stylecss.css
    │   │
    │   └───img
    │       ├───banner
    │       │       banner_1.jpg
    │       │       banner_2.jpg
    │       │       banner_3.jpg
    │       │       banner_4.jpg
    │       │       banner_5.jpg
    │       │       banner_fundacion.png
    │       │       banner_join.png
    │       │       banner_vertical_niños.jpg
    │       │       despacho.jpg
    │       │       grupo_ninos.png
    │       │
    │       ├───categoria
    │       │       fertilizantes.jpg
    │       │       flores.jpg
    │       │       herramientas_Cat.jpg
    │       │       huerto.webp
    │       │       insumos_cat.jpg
    │       │       otras_herramientas.jpg
    │       │       otros_insumos.jpeg
    │       │       palas.png
    │       │       plantas_arboles.jpg
    │       │       semillas_cat.jpg
    │       │       tierra.jpg
    │       │       tijeras.jpg
    │       │
    │       ├───logo
    │       │       logo_color.png
    │       │       logo_line.png
    │       │       logo_line_w.png
    │       │       logo_outline.png
    │       │       logo_outline_w.png
    │       │
    │       └───productos
    │               fertilizante_1.jpg
    │               fertilizante_2.jpg
    │               fertilizante_3.jpg
    │               fertilizante_4.jpg
    │               flores_1.jpg
    │               flores_2.jpg
    │               huerto_1.jpeg
    │               huerto_1.jpg
    │               huerto_2.jpg
    │               huerto_3.jpg
    │               oherramienta_1.jpg
    │               oherramienta_2.jpg
    │               oherramienta_3.jpg
    │               oherramienta_4.jpg
    │               oinsumos_1.png
    │               oinsumos_2.jpg
    │               oinsumos_3.jpg
    │               oinsumos_4.jpg
    │               pala_1.jpg
    │               pala_2.jpg
    │               pala_3.jpg
    │               pala_4.png
    │               planta_1.jpg
    │               planta_1.webp
    │               planta_2.jpg
    │               tierra_1.jpeg
    │               tierra_1.jpg
    │               tierra_2.jpg
    │               tijera_1.png
    │               tijera_2.png
    │               tijera_3.png
    │               tijera_4.png
    │
    └───templates
        │   carro_compras.html
        │   politicas.html
        │   register.html
        │   sobre_nosotros.html
        │
        └───productos
            │   all_products.html
            │
            ├───herramientas
            │       cat_herramientas.html
            │       otras_herramientas.html
            │       palas.html
            │       tijeras.html
            │
            ├───insumos
            │       cat_insumos.html
            │       fertilizante.html
            │       otros_insumos.html
            │       tierra.html
            │
            └───plantas_semillas
                    cat_plantas_semillas.html
                    flores.html
                    huerto.html
                    plantas_arboles.html
```