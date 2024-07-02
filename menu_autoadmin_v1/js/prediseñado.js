/*
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Agui Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
*/

/* ---------------------------------------------------------------------------------------------------------------------
   ------------------- INICIO ITred Spa prediseñado.js  ----------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- */



//Agregamos el evento escucha al Dom de nuestra página.
document.addEventListener('DOMContentLoaded', function () {

    //Seleccionamos y guardamos el elemento con el id ´valor_id´
    var menuSelect = document.getElementById('valor_id');

    let input = document.querySelector('#formInput');
    //Agregamos el evento escucha ded cambio al elemento con el 'data-id'
    menuSelect.addEventListener('change', function () {

        //accedemos a la opcion que esta seleccionada en el elemento que activo el evento.
        var selectedMenuId = this.options[this.selectedIndex].getAttribute('data-id');

        // Se obtiene el formulario
        var form = document.querySelector('#form');
        
        // Se actualiza el valor del input
        input.value = selectedMenuId;

        // Se agrega el evento submit que previene el evento por default del formulario
        form.addEventListener('submit', function(event){
            event.preventDefault()
        })

        // Se sube el formulario
        form.submit()
    
    });
    // Ejecuta la funcion showData para obtener los datos
    showData()
});

// Función que obtiene los datos
function showData(){
    // Obtiene los datos del contenedor
    var data = document.querySelector('#output').textContent;
    // Ejecuta la función para crear el menu según los datos
    crearMenu(JSON.parse(data));
}

// Función para crear la estructura del menú navegacional
function crearMenu(data) {
    // Obtener el elemento contenedor donde se agregará el menú
    var nav = document.createElement('nav');
    nav.classList = 'Menu';

    // Iterar sobre cada menú en el objeto de datos
    Object.values(data).forEach(menu => {
        // Crear un elemento de lista (ul) para el menú
        var ulMenu = document.createElement('ul');
        ulMenu.classList = 'ul-columnas';
        // Iterar sobre cada columna del menú
        menu.columnas.forEach(columna => {
            // Crear un elemento de lista (li) para la columna
            var liColumna = document.createElement('li');
            // Crear un elemento de enlace (a) para la columna
            var aColumna = document.createElement('a');
            // Se agregan las clases css a la columna
            liColumna.classList.add('menu_column');
            // Se agregan las clases css al enlace "a"
            aColumna.classList.add('menu_anchor');
            // Se cambia el nombre del a con el nombre de la columna
            aColumna.textContent = columna.nombre;
            // Se cambia la ruta con la ruta de la base de datos
            aColumna.href = columna.url;
            // Agregar el enlace de la columna al elemento de lista de la columna
            liColumna.appendChild(aColumna);
            // Verificar si la columna tiene subcolumnas
            if (columna.subcolumnas.length > 0) {
                // Crear un elemento de lista (ul) para las subcolumnas
                var ulSubcolumnas = document.createElement('ul');
                ulSubcolumnas.classList =  'ul-sub';
                // Iterar sobre cada subcolumna de la columna
                columna.subcolumnas.forEach(subcolumna => {
                    // Crear un elemento de lista (li) para la subcolumna
                    var liSubcolumna = document.createElement('li');
                    // Crear un elemento de enlace (a) para la subcolumna
                    var aSubcolumna = document.createElement('a');
                    // Se agrega la clase a la subcolumna
                    aSubcolumna.classList.add('menu_anchor')
                    // Se cambia el nombre por el de la subcolumna
                    aSubcolumna.textContent = subcolumna.nombre;
                    // Se cambia la dirección por el de la subcolumna
                    aSubcolumna.href = subcolumna.url;
                    // Agregar el enlace de la subcolumna al elemento de lista de la subcolumna
                    liSubcolumna.appendChild(aSubcolumna);
                    // Agregar la subcolumna al elemento de lista de subcolumnas
                    ulSubcolumnas.appendChild(liSubcolumna);
                });
                // Agregar la lista de subcolumnas al elemento de lista de la columna
                liColumna.appendChild(ulSubcolumnas);
            }
            // Agregar la columna al menú
            ulMenu.appendChild(liColumna);
        });
        // Agregar el menú al elemento contenedor
        nav.appendChild(ulMenu);
    });

    // Se obtiene el contenedor menu-preview
    menuPreview = document.querySelector('#menu-preview');
    // Se agrega la clase
    menuPreview.classList.add('menu_preview');
    // Agregar el elemento contenedor al cuerpo del documento
    menuPreview.appendChild(nav);
}




/* ---------------------------------------------------------------------------------------------------------------------
   ---------------------- FIN ITred Spa prediseñado.js -----------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- */

/*
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Agui Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
*/

