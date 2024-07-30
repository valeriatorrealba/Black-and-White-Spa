# Desafío Evaluado - Black and White

## Descripción

La empresa **Black and White Spa** está promocionando una campaña para las redes sociales y necesita una aplicación web que permita a los usuarios convertir imágenes a blanco y negro. El objetivo es crear un sitio web donde los usuarios puedan ingresar la URL de una imagen de internet y recibir una versión en blanco y negro de dicha imagen.

Deberás construir un servidor con Express que permita a los usuarios subir la URL de una imagen y recibir la imagen procesada en blanco y negro. La aplicación debe incluir un formulario en una página HTML y la capacidad de procesar la imagen utilizando la biblioteca JIMP.

## Vista del Diseño

Aquí puedes ver la imagen del diseño que se utilizó como referencia:

![black](assets/screenshot/black.png)

## Requerimientos

1. **Ruta Raíz**:
   - El servidor debe disponibilizar una ruta raíz (`/`) que devuelva un HTML con un formulario para ingresar la URL de la imagen a tratar.

2. **Estilos CSS**:
   - Los estilos del HTML deben ser definidos por un archivo CSS alojado en el servidor.

3. **Procesamiento de Imagen**:
   - El formulario debe redirigir a otra ruta del servidor que procese la imagen usando el paquete JIMP. La imagen debe ser procesada en escala de grises y redimensionada a un ancho de 350px.

4. **Almacenamiento de Imagen**:
   - La imagen procesada debe ser almacenada en el servidor con un nombre que incluya una porción de un UUID y con la extensión “jpg”, por ejemplo: `3dcb6d.jpeg`.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para Node.js que facilita la creación y manejo del servidor y las rutas.
- **JIMP**: Paquete para la manipulación de imágenes, incluyendo el procesamiento en blanco y negro y redimensionamiento.
- **UUID**: Paquete para generar identificadores únicos, utilizado para nombrar las imágenes procesadas.
- **HTML/CSS**: Para el diseño de la interfaz de usuario.

## Autor

Este proyecto fue desarrollado por **Valeria Torrealba**.

