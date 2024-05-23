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
    │       ├───categoria
    │       ├───logo
    │       └───productos
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
