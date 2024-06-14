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
   ------------------- INICIO ITred Spa eliminar.js --------------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- */

//Función que nos permite obtener los datos del elemento 'menuEliminar'
function getData() {
    //Obtenemos el dato del elemento #menuEliminar
    let idMenu = document.querySelector('#valor_id').value;
    //Retornamor un objeto con el valor obtenido
    return {
        //La funcion retorna el id menu
        idMenu: idMenu
    }
}
//Función para eliminar
function deleteNav() {
    //Llamamos para obtener los datos para el delete
    let data = getData()

    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')){
    //aqui hacemos la solicitud delete al servidor los enviamos mediante HTTP
    //No se envian e forma directa al servidor si no al archivo eliminar.php
    fetch('php/eliminar.php', {
        //Especificamos el metodo como Delete
        method: 'DELETE',
        //El objeto data se convierte en una cadena JSON es necesario por que fetch requiere
        //que el cuerpo de la solicitud sea una cadena de texto
        body: JSON.stringify(data),
        //Aquí se especifican los encabezados de la solicitud.
        headers: {
            //Esto indica al servidor que los datos en el cuerpo de la solicitud están en formato JSON
            "Content-Type": "application/json"
        }
    })
    //Después de que se recibe una respuesta del servidor, se ejecuta esta función de devolución de llamada.
    .then(response => {
        //Si la respuesta es exitosa imprimimos que la respuesta es correcta
        if (response.ok) {
            //Console log para verificar la respuesta
            console.log('Response correcta');
            // Recargar la página actual
            window.location.reload();
        } else {
            //Console log para verificar la respuesta
            console.log('Response incorrecta');
        }
    });




    }else{
        alert('Eliminación cancelada')
    }
}


//Agregamos el evento escucha al Dom de nuestra página.
document.addEventListener('DOMContentLoaded', function () {

    //Seleccionamos y guardamos el elemento con el id ´valor_id´
    var menuSelect = document.getElementById('valor_id');
    //Guardamos y seleccionamos el elemento con el id formInput
    let input = document.querySelector('#formInput');
    //Agregamos el evento escucha ded cambio al elemento con el 'data-id'
    menuSelect.addEventListener('change', function () {

        //accedemos a la opcion que esta seleccionada en el elemento que activo el evento.
        var selectedMenuId = this.options[this.selectedIndex].getAttribute('data-id');
        //Accedemos y guardamos el formulario con id #form
        var form = document.querySelector('#form');
        //le otorgamos el valor de selectedMenuId al input con el atributo .value
        input.value = selectedMenuId;

        //Agregamos un evento escucha de ti po submit 
        form.addEventListener('submit', function (event) {
            //Evitamos el comportamiento por defecto del formulario esto nos ayuda a que no recargue la pagina
            event.preventDefault()

        })

        //Ahora activamos el comportamiento del submit de enviar el formulario
        form.submit()
    });
    showData()
});

// esta función se encarga de procesar los datos que están dentro del div con el ID output. 
function showData() {
    //Guardamos los datos en la variable data proveniente del elemento con el id output que es el div del final en el html
    var data = document.querySelector('#output').textContent;
    //Llamamos a la funcion crear menu esta nos permite previsualizar el menu en pantalla pasando data como parametro
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
        ulMenu.classList =  'ul-columnas';
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

            aColumna.textContent = columna.nombre;
            aColumna.href = columna.url;

            // Agregar el enlace de la columna al elemento de lista de la columna
            liColumna.appendChild(aColumna);

            // Verificar si la columna tiene subcolumnas
            if (columna.subcolumnas.length > 0) {
                // Crear un elemento de lista (ul) para las subcolumnas
                var ulSubcolumnas = document.createElement('ul');
                ulSubcolumnas.classList = 'ul-sub';
                // Iterar sobre cada subcolumna de la columna
                columna.subcolumnas.forEach(subcolumna => {
                    // Crear un elemento de lista (li) para la subcolumna
                    var liSubcolumna = document.createElement('li');
                    // Crear un elemento de enlace (a) para la subcolumna
                    var aSubcolumna = document.createElement('a');

                    aSubcolumna.classList.add('menu_anchor')

                    aSubcolumna.textContent = subcolumna.nombre;
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

    //Seleccionamos el elemento con el id de menupreview
    menuPreview = document.querySelector('#menu-preview');
    //agregamos la clase css correspondiente
    menuPreview.classList.add('menu_preview');
    // Agregar el elemento contenedor al cuerpo del documento
    menuPreview.appendChild(nav);
}


/* ---------------------------------------------------------------------------------------------------------------------
   -------------------------------------- FIN ITred Spa eliminar.js ----------------------------------------------------
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