
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
   ------------------- INICIO ITred Spa menu.js ------------------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- */



// Declara una variable llamada Menu como un array vacío
let Menu = [];

// let Fuentes = [
//     {"id" : 1 , "nombre" : "serif"},
//     {"id" : 2 , "nombre" : "sans-serif"},
//     {"id" : 3 , "nombre" : "monospace"},
//     {"id" : 4 , "nombre" : "cursive"},
//     {"id" : 5 , "nombre" : "fantasy"},
//     {"id" : 6 , "nombre" : "system-ui"}
// ];

// Agrega un evento que se activa cuando se completa la carga inicial del DOM
document.addEventListener("DOMContentLoaded", function () {
    //TESTING

    const draggableElement = document.getElementById('btn-modifcar-boton');

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    
    // Evento cuando el usuario hace clic en el contenedor
    draggableElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Calcula el offset entre el mouse y la esquina superior izquierda del contenedor
        offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
        offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
        document.body.style.cursor = 'move'; // Cambia el cursor cuando arrastra
    });
    
    // Evento cuando el usuario mueve el mouse
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            // Obtén el tamaño de la ventana
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
    
            // Obtén el tamaño del contenedor
            const elementWidth = draggableElement.offsetWidth;
            const elementHeight = draggableElement.offsetHeight;
    
            // Calcula las nuevas posiciones
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;
    
            // Verifica los límites horizontales
            if (newLeft < 0) newLeft = 0;
            if (newLeft + elementWidth > windowWidth) newLeft = windowWidth - elementWidth;
    
            // Verifica los límites verticales
            if (newTop < 0) newTop = 0;
            if (newTop + elementHeight > windowHeight) newTop = windowHeight - elementHeight;
    
            // Actualiza la posición del contenedor
            draggableElement.style.left = `${newLeft}px`;
            draggableElement.style.top = `${newTop}px`;
        }
    });
    
    // Evento cuando el usuario suelta el botón del mouse
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            document.body.style.cursor = 'auto'; // Cambia el cursor de vuelta al predeterminado
        }
    });
    

////
    // let selectFuentes = document.getElementById('selectFuentes');

    // Fuentes.forEach(fuente => {
    //     let option = document.createElement('option');
    //     option.value = fuente.nombre;  // Establece el valor de la opción
    //     option.textContent = fuente.nombre;  // Establece el texto que se muestra en la opción
    //     selectFuentes.appendChild(option);  // Añade la opción al select
    // });
    // CambiarFuente();
    // Agrega un evento de tecla presionada al contenedor con la clase 'input_names-container'
    document.querySelector('.input_names-container').addEventListener('keydown', function (event) {
        // Verifica si la tecla presionada es 'Enter'
        if (event.key === 'Enter') {
            // Evita que se ejecute la acción predeterminada del evento (como enviar un formulario)
            event.preventDefault();
        }
    });
    
    select = document.getElementById('select-container');
    // Asigna el elemento con el id 'contenedor-menu' a la variable 'contenedor'
    contenedor = document.getElementById('contenedor-menu');
    // Asigna el elemento con el id 'prevista' a la variable 'navbar'
    navbar = document.getElementById('prevista');
    // Asigna el elemento con el id 'btnAgregarColumna' a la variable 'btnAgregarColumna'
    const btnAgregarColumna = document.getElementById('btnAgregarColumna');
    // Asigna el elemento con el id 'display-none' a la variable 'display_none'
    const display_none = document.getElementById('display-none');
    // Oculta el elemento con id 'display-none' estableciendo su estilo como 'display: none'
    display_none.style.display = 'none';
    
    // const estilos = document.getElementById('estilos');

    // estilos.style.display = 'none';

    let resetNumber = document.getElementById('valor');

    // Agregar un evento de escucha para el evento input
    resetNumber.addEventListener('input', function () {
        // Verificar si el valor es menor que cero
        if (parseFloat(this.value) <= 0) {
            this.value = 1; // Establecer el valor 1
        }

        if(parseFloat(this.value) > 20){
            this.value = 20; // Establecer el valor 20
        }

    });  


    // Asignar el evento click al botón btnAgregarColumna
    btnAgregarColumna.addEventListener('click', function () {
        // Verificar si Menu tiene elementos y si tiene al menos una columna
        if (Menu.length > 0 && Menu[0].columnas) {
            // Pasar la primera entrada de Menu a la función agregarColumna
            agregarColumna(Menu[0]);
            CambiarFuente()
        }
    });
    // Obtiene el valor del elemento "valor" del almacenamiento local del navegador
    var valor = localStorage.getItem('valor');

    var jsonObtenido = {};

    // Agrega un evento de cambio al elemento <select> con el id "opciones"
    document.getElementById("opciones").addEventListener("change", function () {
        // Remueve el elemento "valor" del almacenamiento local
        localStorage.removeItem('valor');
        // Asigna el valor seleccionado al objeto "selectedValue"
        selectedValue = this.value;

        if(!jsonObtenido[selectedValue]){
            // Obtiene el JSON correspondiente al valor seleccionado
            resultado = obtenerJSON(selectedValue);
        }

        // Código para el botón de borrar contenido del array
        var botonBorrar = document.getElementById("Delete");
        botonBorrar.addEventListener("click", function() {
                    // Borra todo el contenido del array Menu
                    Menu = [{
                        ID: resultado.ID,
                        titulo_menu: resultado.titulo_menu,
                        columnas: []
                    }];
                    // console.log(Menu)
                    // Reinicia el registro de JSON obtenidos
                    jsonObtenido = {};

                    // Limpia el contenido del contenedor
                    contenedor.innerHTML = '';// Itera sobre cada menú en el array 'Menu' y crea el menú en el contenedor
                    Menu.forEach(menu => crearMenu(menu));
                    // Limpia el contenido de la barra de navegación (navbar)
                    navbar.innerHTML = '';
                    // Itera sobre cada menú en el array 'Menu' y genera la vista previa del menú en la barra de navegación
                    Menu.forEach(menu => preview(menu));
                    // Verifica si el valor seleccionado es igual a 0
        });

        // Verifica si se obtuvo un resultado
        if (resultado) {
            // Si hay un resultado, muestra el elemento "display_none"
            display_none.style.display = 'block';
            // Si hay un resultado, muestra el elemento "estilos"
            // estilos.style.display = 'block';
            // Inicializa un objeto para almacenar las columnas de datos
            var Datacolumna = {};
            // Obtiene las columnas del resultado
            var columnas = resultado.columnas;
            // Itera sobre las columnas del resultado
            Object.keys(columnas).forEach(function (c) {

                var columna = columnas[c];
                var subcolumna = columna.subcolumnas;
                // Inicializa DataSubcolumna dentro del bucle exterior para cada columna
                var DataSubcolumna = {};
                // Verifica si existen subcolumnas
                if (subcolumna) {
                    // Itera sobre las subcolumnas
                    Object.keys(subcolumna).forEach(function (s) {
                        var sub = subcolumna[s];
                        if (sub) {
                            // Agrega los datos de la subcolumna al objeto DataSubcolumna
                            DataSubcolumna[s] = {
                                ID: sub.ID,
                                idColumna: sub.idColumna,
                                nombre_subcolumna: sub.nombre_subcolumna,
                                url_subcolumna: sub.url_subcolumna
                            };
                        }
                    });
                }
                if(columna.ID != null){
                    // Agrega los datos de la columna al objeto Datacolumna
                    Datacolumna[c] = {
                        ID: columna.ID,
                        nombre_columna: columna.nombre_columna,
                        url_columna: columna.url_columna,
                        subcolumnas: DataSubcolumna
                    };
                }
            });
            // Actualiza el array 'Menu' con los datos obtenidos del resultado
            Menu = [{
                ID: resultado.ID,
                idMenu:resultado.idMenu,
                titulo_menu: resultado.titulo_menu,
                columnas: Datacolumna
            }];
        } else {
            // Si no hay un resultado, oculta el elemento "display_none"
            display_none.style.display = 'none';
            // Si no hay un resultado, oculta el elemento "estilos"
            // estilos.style.display = 'none';
        }

        if(autoselect){
            console.log('autoselect: '+autoselect);
            console.log(Menu[0].titulo_menu);

            var nombre = document.getElementById('nombre-menu');
            nombre.textContent = Menu[0].titulo_menu;
            select.style.display = 'none';
        }

        // console.log('--despues de btn borrar---')
        // console.log(Menu)
        // Limpia el contenido del contenedor
        contenedor.innerHTML = '';// Itera sobre cada menú en el array 'Menu' y crea el menú en el contenedor
        Menu.forEach(menu => crearMenu(menu));
        // Limpia el contenido de la barra de navegación (navbar)
        navbar.innerHTML = '';
        // Itera sobre cada menú en el array 'Menu' y genera la vista previa del menú en la barra de navegación
        Menu.forEach(menu => preview(menu));
        // Verifica si el valor seleccionado es igual a 0

        if (selectedValue == 0) {
            // Si el valor seleccionado es 0, limpia tanto el contenedor como la barra de navegación
            contenedor.innerHTML = '';
            navbar.innerHTML = '';
        }
    });


    // Dispara manualmente el evento 'change' en el elemento <select> con el id "opciones"
    document.getElementById("opciones").dispatchEvent(new Event('change'));
    // Verifica si el valor no es igual a 0 y no es nulo o indefinido
    if (valor !== 0 && valor) {
        // Obtiene el elemento <select> con el id "opciones"
        var x = document.getElementById("opciones");
        // Establece el valor del elemento <select> como el valor proporcionado
        x.value = valor;
        // Dispara manualmente el evento 'change' en el elemento <select>
        document.getElementById("opciones").dispatchEvent(new Event('change'));
    }
});

// Define una función llamada obtenerJSON que toma el valor seleccionado como argumento
function obtenerJSON(selectedValue) {
    // Itera sobre el array de resultados JSON
    for (var i = 0; i < json_resultados.length; i++) {
        // Comprueba si el ID del elemento actual coincide con el valor seleccionado
        if (json_resultados[i].ID == selectedValue) {
            // Si hay coincidencia, asigna el elemento JSON correspondiente a una variable y devuelve el JSON
            var json = json_resultados[i];
            return json;
        }
    }
}

// Define una función llamada agregarColumna que toma un objeto 'menu' como argumento
function agregarColumna(menu) {
    // Crea un objeto para representar una nueva columna
    const nuevaColumna = {
        ID: "", // Debes asignar un ID único a la nueva columna
        idMenu: "",
        nombre_columna: "",
        url_columna: "",
        cantidad_subcolumnas: "0",
        type: "1",
        subcolumnas: {}
    };

    // Obtener la posición deseada del input
    let posicion = parseInt(document.getElementById('valor').value);

    // Convertir el objeto de columnas a un array de entradas
    const columnasArray = Object.entries(menu.columnas);

    // Insertar la nueva columna en la posición especificada
    columnasArray.splice(posicion - 1, 0, [columnasArray, nuevaColumna]);

    // Reconstruir el objeto de columnas con las nuevas posiciones
    const nuevasColumnas = {};
    columnasArray.forEach(([id, columna], index) => {
        nuevasColumnas[index + 1] = columna;
    });

    // Asignar el nuevo objeto de columnas al menú
    menu.columnas = nuevasColumnas;

    // Actualizar los IDs
    actualizarIds(menu);

    // Limpiar el contenedor y volver a crear el menú
    contenedor.innerHTML = '';
    crearMenu(menu);

    // Limpiar el navbar y volver a generar la vista previa del menú
    navbar.innerHTML = '';
    preview(menu);
    //limpiar input
    let input = document.getElementById('valor');
    input.value = '';

}

// Define una función llamada crearMenu que toma un objeto 'menu' como argumento
function crearMenu(menu) {
    // Actualiza los IDs de las columnas y subcolumnas en el menú
    actualizarIds(menu);
    // console.log('---CrearMenu---')
    // console.log(menu)
    // Crea un nuevo elemento <div> para el menú
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    menuDiv.id = 'menu';
    // Crea un elemento <p> para la etiqueta del título del menú
    let labelTitulo = document.createElement('p');
    labelTitulo.innerHTML = 'Titulo Menú';

    // Crea un elemento <input> para el título del menú
    const titulo = document.createElement('input');
    titulo.value = menu.titulo_menu;
    titulo.id = 'input-menu_name';
    titulo.name = menu.ID;
    titulo.classList = 'titulo-menu';
    titulo.style.display = 'none';
    labelTitulo.style.display = 'none';
    // Agrega los elementos de etiqueta y título al menú
    contenedor.appendChild(labelTitulo)
    contenedor.appendChild(titulo);

    // Crea un elemento <div> para contener las columnas del menú
    const columnasDiv = document.createElement('div');
    columnasDiv.classList.add('input_names-container');

    // Itera sobre cada columna en el objeto 'columnas' del menú
    Object.entries(menu.columnas).forEach(([columnaId, columna]) => {
        // Crea un elemento <div> para la columna actual
        const columnaDiv = document.createElement('div');
        columnaDiv.classList.add('input_names-column');

        // Crea un elemento <hr> para separar visualmente las columnas
        let hr = document.createElement('hr');
        columnaDiv.appendChild(hr);

        // Crea un elemento <p> para la etiqueta del botón de la columna
        const labelBtn = document.createElement('p');
        labelBtn.textContent = 'Botón ' + columnaId;
        columnaDiv.appendChild(labelBtn);

        // Crea un elemento <p> para la etiqueta del nombre de la columna
        const labelNombreColumna = document.createElement('p');
        labelNombreColumna.textContent = 'Nombre Botón: ';
        columnaDiv.appendChild(labelNombreColumna);

        // Crea un elemento <input> para el nombre de la columna
        const nombreColumna = document.createElement('input');
        nombreColumna.id = 'columnName';
        nombreColumna.name = 'columnName';
        let botonInput = columna.nombre_columna;
        if(botonInput === '' || botonInput.startsWith('Botón')){
            nombreColumna.value = 'Botón ' + columnaId;
        }else{
            nombreColumna.value = columna.nombre_columna;
        }
        /*cambio Text */
        nombreColumna.addEventListener('input', (event) => {
            columna.nombre_columna = event.target.value;

            var columnas = document.querySelectorAll('.columna');

            columnas.forEach((columna, index) => {
                if ((index + 1) == columnaId) {
                    columna.querySelector('a').innerHTML = event.target.value;
                }
            })
        });

        // Agrega el nombre de la columna al div de la columna
        columnaDiv.appendChild(nombreColumna);

        // Crea un elemento <p> para la etiqueta del enlace de la columna
        const labelLinkColumna = document.createElement('p');
        labelLinkColumna.textContent = 'URL o Link Botón ';
        columnaDiv.appendChild(labelLinkColumna);

        // Crea un elemento <input> para el enlace de la columna
        const linkColumna = document.createElement('input');
        linkColumna.id = 'columnUrl';
        linkColumna.name = 'columnUrl';

        var url1 = columna.url_columna;
        linkColumna.value = url1;

        // Agrega un evento de escucha para actualizar la URL de la columna
        linkColumna.addEventListener('input', (event) => {
            columna.url_columna = event.target.value;
        });

        // Agrega el enlace de la columna al div de la columna
        columnaDiv.appendChild(linkColumna);

        // Crea un botón para eliminar la columna
        const btnEliminarColumna = document.createElement('button');
        btnEliminarColumna.classList.add('detele-button');
        let icono = document.createElement('img');
        // Asigna la ruta de la imagen del icono de basurero
        icono.src = 'imagenes/Icono-Basurero.jpeg';
        // Asigna el texto alternativo del icono
        icono.alt = 'Icono-eliminar';
        btnEliminarColumna.appendChild(icono)
        // Agrega un evento de clic para eliminar la columna
        btnEliminarColumna.addEventListener('click', () => eliminarColumna(menu, columnaId));
        columnaDiv.appendChild(btnEliminarColumna);

        // Crea un div para contener las subcolumnas
        const contSub = document.createElement('div');
        contSub.classList.add('cont-sub');

        const contAddSub = document.createElement('div');
        contAddSub.classList.add('cont-add-sub');

        contSub.appendChild(contAddSub);
        btnEliminarColumna.insertAdjacentElement('afterend', contSub);

        const btnbtnAgregarText = document.createElement('p');
        btnbtnAgregarText.textContent = 'Indique Posición: '
        columnaDiv.appendChild(btnbtnAgregarText);

        contAddSub.appendChild(btnbtnAgregarText)

        const posicionInput = document.createElement('input');
        posicionInput.type = 'number';
        posicionInput.min = '1';
        posicionInput.max = '20';
        posicionInput.value = '';

        // Agregar un evento de escucha para el evento input
        posicionInput.addEventListener('input', function () {
            // Verificar si el valor es menor que cero
            if (parseFloat(this.value) <= 0) {
                this.value = 1; // Establecer el valor como cadena vacía
            }

            if(parseFloat(this.value) > 20){
                this.value = 20; // Establecer el valor como cadena vacía
            }
        });

        columnaDiv.appendChild(posicionInput);
        contAddSub.appendChild(posicionInput);

        // Crea un botón para agregar una subcolumna
        const btnAgregarSubcolumna = document.createElement('button');
        btnAgregarSubcolumna.textContent = 'Agregar Subcolumna';

        // Agrega un evento de clic para agregar una subcolumna
        contAddSub.appendChild(btnAgregarSubcolumna);
        btnAgregarSubcolumna.addEventListener('click', () => {
            event.preventDefault();
            const posicion = parseInt(posicionInput.value);
            // Verifica si el valor de la posición es un número válido
            if (!isNaN(posicion) && posicion !== '') {
                agregarSubcolumna(menu, columnaId, posicion);
            } else {
                // Si el valor no es un número válido, muestra un mensaje de error
                // console.log('La posición debe ser un número válido.');
                // También puedes mostrar un mensaje de error en tu página para notificar al usuario.
            }
        });

        // Agrega el botón de agregar subcolumna al contenedor de subcolumnas
        contAddSub.appendChild(btnAgregarSubcolumna);

        // Itera sobre cada subcolumna en el objeto 'subcolumnas' de la columna actual
        Object.entries(columna.subcolumnas).forEach(([subcolumnaId, subcolumna]) => {
            // Crea un div para la subcolumna
            const subcolumnaDiv = document.createElement('div');
            subcolumnaDiv.classList.add('input_names-row-container');
            let hr = document.createElement('hr');
            subcolumnaDiv.appendChild(hr);
            let text = document.createElement('p');
            text.textContent = 'Sub-Menú ' + subcolumnaId;

            subcolumnaDiv.appendChild(text);

            // Crea un elemento <p> para la etiqueta del nombre de la subcolumna
            const labelNombreSubcolumna = document.createElement('p');
            labelNombreSubcolumna.textContent = 'Nombre Submenu';
            subcolumnaDiv.appendChild(labelNombreSubcolumna);

            // Crea un elemento <input> para el nombre de la subcolumna
            const nombreSubcolumna = document.createElement('input');
            nombreSubcolumna.id = 'rowName';
            nombreSubcolumna.name = 'rowName';
            //nombreSubcolumna.value = subcolumna.nombre_subcolumna || 'Sub-Menú '+subcolumnaId;

            let subInput = subcolumna.nombre_subcolumna;
            if(subInput === '' || subInput.startsWith('Sub-Menú')){
                nombreSubcolumna.value = 'Sub-Menú ' + subcolumnaId;
            }else{
                nombreSubcolumna.value = subcolumna.nombre_subcolumna
            }

            nombreSubcolumna.addEventListener('input', (event) => {
                subcolumna.nombre_subcolumna = event.target.value;

                subcolumna.nombre_subcolumna = event.target.value;

                var ulSub = document.getElementById(columnaId);

                var subColumnas = ulSub.querySelectorAll('li');

                subColumnas.forEach((subcolumna, index) => {

                    if ((index + 1) == subcolumnaId) {
                        subcolumna.querySelector('a').innerHTML = event.target.value;
                    }
                });
            });
            subcolumnaDiv.appendChild(nombreSubcolumna);

            // Crea un elemento <p> para la etiqueta del enlace de la subcolumna
            const labelLinkSubcolumna = document.createElement('p');
            labelLinkSubcolumna.textContent = 'URL o Link SubMenu';
            subcolumnaDiv.appendChild(labelLinkSubcolumna);

            // Crea un elemento <input> para el enlace de la subcolumna
            const linkSubcolumna = document.createElement('input');
            linkSubcolumna.id = 'rowUrl';
            linkSubcolumna.name = 'rowUrl';

            linkSubcolumna.value = subcolumna.url_subcolumna || 'https://';

            // Agrega un evento de escucha para actualizar la URL de la subcolumna
            linkSubcolumna.addEventListener('input', (event) => {
                subcolumna.url_subcolumna = event.target.value;
            });
            subcolumnaDiv.appendChild(linkSubcolumna);

            // Crea un botón para eliminar la subcolumna
            const btnEliminarSubcolumna = document.createElement('button');
            btnEliminarSubcolumna.classList.add('detele-button');
            let icono = document.createElement('img');
            // Asigna la ruta de la imagen del icono de basurero
            icono.src = 'imagenes/Icono-Basurero.jpeg';
            // Asigna el texto alternativo del icono
            icono.alt = 'Icono-eliminar';
            btnEliminarSubcolumna.appendChild(icono);
            // Agrega un evento de clic para eliminar la subcolumna
            btnEliminarSubcolumna.addEventListener('click', () => eliminarSubcolumna(menu, columnaId, subcolumnaId));
            subcolumnaDiv.appendChild(btnEliminarSubcolumna);

            // Agrega el div de la subcolumna al contenedor de subcolumnas
            contSub.appendChild(subcolumnaDiv);
        });

        // Agrega el div de la columna al div de columnas
        columnasDiv.appendChild(columnaDiv);
    });

    // Agrega el div de columnas al div del menú
    menuDiv.appendChild(columnasDiv);

    // Agrega el menú al contenedor en la página
    contenedor.appendChild(menuDiv);
}

// Define una función llamada preview que toma un objeto 'menu' como argumento
function preview(menu) {
    // Actualiza los IDs de las columnas y subcolumnas en el menú
    actualizarIds(menu);
    // Crea un nuevo elemento <nav> para la vista previa del menú
    const PreviewDiv = document.createElement('nav');
    // Añade la clase 'Menu' al elemento <nav>
    PreviewDiv.classList.add('Menu');
    // Establece el atributo 'id' del elemento <nav> como 'preview'
    PreviewDiv.setAttribute('id', 'preview');

    // Crea un nuevo elemento <ul> para contener las columnas del menú
    const ContenedorColumna = document.createElement('ul');
    // Agrega la clase 'ul-columnas' al elemento <ul>
    ContenedorColumna.classList.add('ul-columnas');


    // Itera sobre cada columna en el objeto 'columnas' del menú
    Object.entries(menu.columnas).forEach(([columnaId, columna]) => {
        // Crea un nuevo elemento <li> para representar la columna actual del menú
        const ColumnaLi = document.createElement('li');
        // Agrega las clases 'menu_column' y 'columna' al elemento <li>
        ColumnaLi.classList.add('menu_column');
        ColumnaLi.classList.add('columna');
        // Establece el id del elemento <li> como el id de la columna actual
        ColumnaLi.id = columnaId;
        // Crea un elemento <a> para representar la columna actual del menú
        columnaAnchor = document.createElement('a');
        // Agrega la clase 'menu_anchor' al elemento <a>
        columnaAnchor.classList.add('menu_anchor');
        // Establece el atributo 'href' del elemento <a> como la URL de la columna
        columnaAnchor.href = columna.url_columna;
        // Establece el atributo 'target' del elemento <a> como '_blank' para que se abra en una nueva pestaña
        columnaAnchor.target = "_blank";
        // Establece el texto del enlace como el nombre de la columna o 'Botón' seguido del id de la columna si el nombre está vacío
        //columnaAnchor.textContent = columna.nombre_columna || 'Botón '+columnaId;
        let botonInput = columna.nombre_columna;
        if(botonInput === '' || botonInput.startsWith('Botón')){
            columnaAnchor.textContent = 'Botón ' + columnaId;
        }else{
            columnaAnchor.textContent = columna.nombre_columna;
        }
        // Agrega el enlace de la columna al elemento <li> de la columna
        ColumnaLi.appendChild(columnaAnchor);
        // Crea un elemento <ul> para contener las subcolumnas de la columna actual del menú
        const ContenedorSubColumna = document.createElement('ul');
        // Establece el id del elemento <ul> como el id de la columna actual
        ContenedorSubColumna.id = columnaId;
        // Agrega la clase 'ul-sub' al elemento <ul>
        ContenedorSubColumna.classList.add('ul-sub');
        // Itera sobre cada subcolumna en el objeto 'subcolumnas' de la columna actual
        Object.entries(columna.subcolumnas).forEach(([subcolumnaId, subcolumna]) => {
            // Crea un elemento <li> para la subcolumna actual
            const SubColumna = document.createElement('li');
            // Crea un elemento <a> para representar la subcolumna actual del menú
            let subcolumnAnchor = document.createElement('a');
            // Agrega la clase 'menu_anchor' al elemento <a>
            subcolumnAnchor.classList.add('menu_anchor');
            // Establece el atributo 'href' del elemento <a> como la URL de la subcolumna
            subcolumnAnchor.href = subcolumna.url_subcolumna;
            // Establece el atributo 'target' del elemento <a> como '_blank' para que se abra en una nueva pestaña
            subcolumnAnchor.target = "_blank";
            // Establece el texto del enlace como el nombre de la subcolumna o 'Sub-Botón' seguido del id de la subcolumna si el nombre está vacío            
            //subcolumnAnchor.textContent = subcolumna.nombre_subcolumna || 'Sub-Menú ' + subcolumnaId;
            let botonInput = subcolumna.nombre_subcolumna;

            if(botonInput === '' || botonInput.startsWith('Sub-Menú')){
                subcolumnAnchor.textContent = 'Sub-Menú ' + subcolumnaId;
            }else{
                subcolumnAnchor.textContent = subcolumna.nombre_subcolumna;
            }
            // Agrega el enlace de la subcolumna al elemento <li> de la subcolumna
            SubColumna.appendChild(subcolumnAnchor);
            // Establece el ID del elemento <li> como el ID de la subcolumna actual
            SubColumna.id = subcolumnaId;
            // Agrega el elemento <li> de la subcolumna al contenedor de subcolumnas
            ContenedorSubColumna.appendChild(SubColumna);
        });
        // Verifica si la columna actual del menú tiene subcolumnas
        if (columna.subcolumnas) {
            // Si la columna tiene subcolumnas, agrega el contenedor de subcolumnas como un hijo del elemento <li>
            ColumnaLi.appendChild(ContenedorSubColumna);
        }
        // Agrega el elemento <li> de la columna al contenedor de columnas
        ContenedorColumna.appendChild(ColumnaLi);
    });
    // Agrega el contenedor de columnas al elemento <nav> de la vista previa del menú
    PreviewDiv.appendChild(ContenedorColumna);
    // Agrega el elemento <nav> de la vista previa del menú al navbar
    navbar.appendChild(PreviewDiv);
}

// Define una función llamada eliminarColumna que toma un objeto 'menu' y un 'columnaId' como argumentos
function eliminarColumna(menu, columnaId) {
    // Elimina la columna especificada por 'columnaId' del objeto 'columnas' del menú
    delete menu.columnas[columnaId];
    // Actualiza los IDs de las columnas y subcolumnas en el menú
    actualizarIds(menu);
    // Limpia el contenido del contenedor HTML
    contenedor.innerHTML = '';
    // Crea el menú en el contenedor HTML utilizando la función 'crearMenu'
    crearMenu(menu);
    // Limpia el contenido del navbar HTML
    navbar.innerHTML = '';
    // Muestra una vista previa del menú utilizando la función 'preview'
    preview(menu);
}

// Define una función llamada eliminarSubcolumna que toma un objeto 'menu', un 'columnaId' y un 'subcolumnaId' como argumentos
function eliminarSubcolumna(menu, columnaId, subcolumnaId) {
    // Elimina la subcolumna especificada por 'subcolumnaId' del objeto de subcolumnas de la columna correspondiente
    delete menu.columnas[columnaId].subcolumnas[subcolumnaId];
    // Actualiza los IDs de las columnas y subcolumnas en el menú
    actualizarIds(menu);
    // Limpia el contenido del contenedor HTML
    contenedor.innerHTML = '';
    // Crea el menú en el contenedor HTML utilizando la función 'crearMenu'
    crearMenu(menu);
    // Limpia el contenido del navbar HTML
    navbar.innerHTML = '';
    // Muestra una vista previa del menú utilizando la función 'preview'
    preview(menu);
}

// Define una función llamada agregarSubcolumna que toma un objeto 'menu', un 'columnaId' y una 'posicion' como argumentos
function agregarSubcolumna(menu, columnaId, posicion) {
    // Crea un objeto para representar la nueva subcolumna
    const nuevaSubcolumna = {
        nombre_subcolumna: "",
        url_subcolumna: "",
        type: "2"
    };
    // Obtiene el objeto de subcolumnas de la columna especificada por 'columnaId'
    const subcolumnas = menu.columnas[columnaId].subcolumnas;
    // Convierte el objeto de subcolumnas en un array de pares [id, subcolumna]
    const subcolumnasArray = Object.entries(subcolumnas);
    // Inserta la nueva subcolumna en la posición especificada
    subcolumnasArray.splice(posicion - 1, 0, [subcolumnasArray.length + 1, nuevaSubcolumna]);
    // Crea un nuevo objeto para almacenar las subcolumnas actualizadas
    const nuevasSubcolumnas = {};
    // Itera sobre el array de subcolumnas y asigna nuevos IDs secuenciales
    subcolumnasArray.forEach(([id, subcolumna], index) => {
        nuevasSubcolumnas[index + 1] = subcolumna;
    });
    // Actualiza el objeto de subcolumnas de la columna con las subcolumnas actualizadas
    menu.columnas[columnaId].subcolumnas = nuevasSubcolumnas;
    // Actualiza los IDs de las columnas y subcolumnas en el menú
    actualizarIds(menu);
    // Limpia el contenido del contenedor HTML
    contenedor.innerHTML = '';
    // Crea el menú en el contenedor HTML utilizando la función 'crearMenu'
    crearMenu(menu);
    // Limpia el contenido del navbar HTML
    navbar.innerHTML = '';
    // Muestra una vista previa del menú utilizando la función 'preview'
    preview(menu);
}

// Define una función llamada actualizarIds que toma un objeto 'menu' como argumento
function actualizarIds(menu) {
    // Objeto para almacenar las nuevas columnas con sus IDs actualizados
    const nuevasColumnas = {};
    // Contador para asignar nuevos IDs a las columnas
    let columnaIdCounter = 1;

    // Itera sobre cada columna en el objeto 'columnas' del menú
    Object.entries(menu.columnas).forEach(([columnaId, columna]) => {
        // Objeto para almacenar las nuevas subcolumnas con sus IDs actualizados
        const nuevasSubcolumnas = {};
        // Contador para asignar nuevos IDs a las subcolumnas
        let subcolumnaIdCounter = 1;

        // Itera sobre cada subcolumna en el objeto 'subcolumnas' de la columna actual
        Object.entries(columna.subcolumnas).forEach(([subcolumnaId, subcolumna]) => {
            // Asigna un nuevo ID a la subcolumna y la agrega al objeto 'nuevasSubcolumnas'
            nuevasSubcolumnas[subcolumnaIdCounter++] = subcolumna;
        });

        // Actualiza el objeto 'subcolumnas' de la columna actual con las nuevas subcolumnas
        columna.subcolumnas = nuevasSubcolumnas;
        // Asigna un nuevo ID a la columna y la agrega al objeto 'nuevasColumnas'
        nuevasColumnas[columnaIdCounter++] = columna;
    });

    // Actualiza el objeto 'columnas' del menú con las nuevas columnas
    menu.columnas = nuevasColumnas;
}

// Declara una variable global 'toggle' e inicializa en 'false'.
let toggle = false;
// Define la función 'toggleFullscreen'.
function toggleFullscreen() {
    // Selecciona el primer elemento con la clase 'menu_preview'.
    let menuPreview = document.querySelector('.menu_preview');

    // Alterna la clase 'fullscreen' en 'menuPreview'.
    menuPreview.classList.toggle('fullscreen');

    // Crea un nuevo botón y lo asigna a 'volverButton'.
    let volverButton = document.createElement('button');
    // Asigna el ID 'Volverbtn' al botón 'volverButton'.
    volverButton.id = 'Volverbtn';
    volverButton.classList = 'Volverbtn';

    // Verifica si 'toggle' es true.
    if (toggle) {
        // Busca el botón con el ID 'Volverbtn'.
        volverButton = document.querySelector('#Volverbtn');
        // Elimina el botón del documento.
        volverButton.remove();
    } else {
        // Establece el texto del botón a 'Volver al Programa'.
        volverButton.innerHTML = 'Volver al Programa';
        // Agrega un evento 'click' al botón.
        volverButton.addEventListener('click', () => {
            // Ejecuta 'toggleFullscreen' cuando se hace clic en el botón.
            toggleFullscreen();
        });
        // Inserta el botón al inicio de 'menuPreview'.
        menuPreview.insertAdjacentElement('afterbegin', volverButton);
    }

    // Invierte el valor de 'toggle'.
    toggle = !toggle;

    // Desplaza la ventana a la parte superior izquierda de la página.
    window.scroll({
        // Desplaza hasta la posición superior 0.
        top: 0,
        // Desplaza hasta la posición izquierda 0.
        left: 0,
        // Define el comportamiento de desplazamiento como automático.
        behavior: 'auto'
    });
}

// Define una función llamada getData
function getData() {
    // Obtiene el valor del título del menú y su ID
    const tituloMenu = document.getElementById('input-menu_name').value;
    const tituloMenuID = document.getElementById('input-menu_name').name;

    // Inicializa un array para almacenar los datos del menú
    const menuData = [];

    // Obtiene todas las columnas de nombres de menú
    const columnas = document.querySelectorAll('.input_names-column');

    // Itera sobre cada columna
    columnas.forEach((columna,index) => {
        btnindex = '';
        // Obtiene el nombre y la URL del botón de la columna
        const nombreBoton = columna.querySelector('input[name="columnName"]').value;
        const urlBoton = columna.querySelector('input[name="columnUrl"]').value;

        if(!nombreBoton){
            btnindex = 'Boton ' + (index+1);
        }else{
            btnindex = nombreBoton;
        }

        // Verifica y formatea la URL del botón si no empieza con 'https://'
        let urlBoton1 = urlBoton.startsWith('https://') ? urlBoton : 'https://' + urlBoton;

        // Inicializa un array para almacenar los submenús
        const submenus = [];

        // Obtiene todas las subcolumnas de nombres de submenú
        const subcolumnas = columna.querySelectorAll('.input_names-row-container');

        // Itera sobre cada subcolumna
        subcolumnas.forEach(subcolumna => {
            // Obtiene el nombre y la URL del submenú
            const nombreSubmenu = subcolumna.querySelector('input[name="rowName"]').value;
            const urlSubmenu = subcolumna.querySelector('input[name="rowUrl"]').value;

            // Verifica y formatea la URL del submenú si no empieza con 'https://'
            let urlSubmenu1 = urlSubmenu.startsWith('https://') ? urlSubmenu : 'https://' + urlSubmenu;

            // Agrega el submenú al array de submenús
            submenus.push({
                name: nombreSubmenu,
                type: 1,
                anchor: {},
                subColumns: [],
                url: urlSubmenu1
            });
        });

        // Agrega los datos de la columna al array de datos del menú
        menuData.push({
            name: btnindex,
            type: 1,
            anchor: {},
            subColumns: submenus,
            url: urlBoton1
        });
    });

    // Crea un objeto formData con el ID del menú, el título del menú y los datos del menú
    const formData = {
        ID: tituloMenuID,
        titulo_menu: tituloMenu,
        menuData: menuData
    };
    // Retorna el objeto formData
    // console.log(formData)
    return formData;
    
}

function DeleteAll(menu){

    var dato = menu[0];

    // console.log(menu)

    var menuDelete = [{
        ID: dato.ID,
        titulo_menu: dato.titulo_menu,
        columnas: {
        }}];
    return menuDelete
}

// Declara una función asíncrona llamada saveNav
async function saveNav() {
    // Guarda el valor de selectedValue en el almacenamiento local del navegador con la clave "valor"
    localStorage.setItem("valor", selectedValue);
    // Llama a la función getData() y guarda el resultado en la variable data
    var data = getData();
    // Imprime el contenido de la variable data en la consola del navegador
    // console.log(data);
    // Realiza una solicitud HTTP POST al archivo 'php/modificar.php'
    var response = await fetch('php/modificar.php', {
        // Utiliza el método POST
        method: 'POST',
        // Convierte el objeto data a una cadena JSON y lo envía como cuerpo de la solicitud
        body: JSON.stringify(data),
        // Define los encabezados de la solicitud
        headers: {
            "Content-Type": "application/json" // Establece el tipo de contenido como aplicación/json
        }
    })
    // Comprueba si la respuesta es exitosa
    if (response.ok) {
        // Lee la respuesta como texto
        const result = await response.text();
        // Comprueba si la respuesta incluye la cadena 'Actualizado'
        if (result.includes('Actualizado')) {
            // Muestra una alerta indicando que se ha actualizado exitosamente
            alert('¡Actualizado');
        } else {
            // Muestra una alerta indicando que se ha actualizado exitosamente
            alert('¡Actualizado');
            // Recarga la página
            location.reload();
        }
    }
}




// function CambiarFuente(){
    
//     // Agregar un event listener al <select> para escuchar cambios
//     selectFuentes.addEventListener('change', function() {
//         // Obtener el valor de la opción seleccionada en lugar de textContent
//         let content = this.value;

//         // Obtener todos los elementos con la clase 'menu_anchor'
//         let textos = document.getElementsByClassName('menu_anchor');

//         // Iterar sobre todos los elementos con la clase 'menu_anchor' y cambiar su font-family
//         Array.from(textos).forEach(texto => {
//             texto.style.fontFamily = content;
//         });
//     });
//     selectFuentes.dispatchEvent(new Event('change'));
// }


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
