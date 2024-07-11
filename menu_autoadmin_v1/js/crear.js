

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



// Data de las columnas y subcolumnas
let menuData = [];

let Fuentes = [
    {"id" : 1 , "nombre" : "serif"},
    {"id" : 2 , "nombre" : "sans-serif"},
    {"id" : 3 , "nombre" : "monospace"},
    {"id" : 4 , "nombre" : "cursive"},
    {"id" : 5 , "nombre" : "fantasy"},
    {"id" : 6 , "nombre" : "system-ui"}
];




//a
// Función para crear un boton
function createButton(label) {
    // Se crea el boton
    const button = document.createElement('button');
    // Se cambia el nombre del boton
    button.innerHTML = label;
    // Se devuelve el boton

    // Si el nombre del botón es 'Eliminar Botón' o 'Eliminar Submenu', se agrega un icono de basurero al botón
    if (button.innerHTML === 'Eliminar Botón' || button.innerHTML === 'Eliminar Submenu') {
        button.innerHTML = '';
        const icono = document.createElement('img');
        // Se asigna la ruta de la imagen del icono de basurero
        icono.src = 'imagenes/Icono-Basurero.jpeg';
        // Se asigna el texto alternativo del icono
        icono.alt = 'Icono-eliminar';
        // Se asigna una clase al icono
        icono.className = 'Icono-clase';

        // Se agrega el icono de basurero como hijo del botón
        button.appendChild(icono);

    }
    // Se devuelve el botón creado
    return button;
}

// Se inicializa la variable isCreated como falsa
let isCreated = false;

document.addEventListener('DOMContentLoaded', function() {

    var MenuSeleccionado = document.getElementById('MenuSeleccionado');
    var seleccionado__cerrar = document.getElementById('seleccionado__cerrar');
    
    seleccionado__cerrar.addEventListener('click', function(){
        MenuSeleccionado.style.display = 'none';
    })
    



    // Hacer que los elementos con los IDs 'btn-modificar-boton' y 'btn-modificar-texto' sean arrastrables
    makeElementDraggable('estilos');
    makeElementDraggable('btn-modificar-boton');

    // Obtener referencias a los elementos del DOM necesarios
    let divModificarBoton = document.getElementById('btn-modificar-boton'); // Elemento del botón modificar
    let cerrarmodificar = document.getElementById('cerrar_menu'); // Botón para cerrar el menú de modificar botón
    let modificarBtn = document.getElementById('modificarBtn'); // Botón que abre el menú de modificar botón

    

    // Agregar un evento al botón 'cerrarmodificar' para ocultar el menú de modificar botón cuando se haga clic
    cerrarmodificar.addEventListener('click', function() {
        divModificarBoton.style.display = 'none';
    });

    // Agregar un evento al botón 'modificarBtn' para mostrar el menú de modificar botón y ocultar el menú de modificar texto cuando se haga clic
    modificarBtn.addEventListener('click', function() {
        divModificarBoton.style.display = 'block';
        
    });

    
});



//hace funcionar el boton de cerrar menu
document.addEventListener('DOMContentLoaded', function() {
    const cerrarMenu = document.getElementById('cerrarMenu');
    cerrarMenu.addEventListener('click', function() {
        document.getElementById('estilos').style.display = 'none';
    });
});



// Se añade un evento que se ejecuta cuando el contenido HTML del documento ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', () => {

    var boton = document.getElementById('btnModificarTextoMenu');

    var menu = document.getElementById('estilos');

    boton.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

    let selectFuentes = document.getElementById('selectFuentes');

    Fuentes.forEach(fuente => {
        let option = document.createElement('option');
        option.value = fuente.nombre;  // Establece el valor de la opción
        option.textContent = fuente.nombre;  // Establece el texto que se muestra en la opción
        selectFuentes.appendChild(option);  // Añade la opción al select
    });
    CambiarFuente();
    // Agrega un evento de tecla presionada al contenedor con la clase 'input_names-container'
    document.querySelector('.input_names-container').addEventListener('keydown', function (event) {
        // Verifica si la tecla presionada es 'Enter'
        if (event.key === 'Enter') {
            // Evita que se ejecute la acción predeterminada del evento (como enviar un formulario)
            event.preventDefault();
        }
    });

    let resetNumber = document.getElementById('input-num_columns');

    // Agregar un evento de escucha para el evento input
    resetNumber.addEventListener('input', function () {
        // Verificar si el valor es menor que cero
        if (parseFloat(this.value) <= 0) {
            this.value = 1; // Establecer el valor como cadena vacía
        }

        if(parseFloat(this.value) > 20){
            this.value = 20; // Establecer el valor como cadena vacía
        }

    });  

    document.querySelector('.input_names-container').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      });

    // Se selecciona el botón con el id 'insert-button'
    let insertButton = document.querySelector('#insert-button');
    // Se añade un evento de escucha al hacer clic en el botón 'insertButton'
    insertButton.addEventListener('click', () => {
        // Si el estado de isCreated es falso
        if (!isCreated) {
            // Se crea un elemento div para agregar una nueva columna al menú
            let contAddColumn = document.createElement('div');
            // Se crea un elemento párrafo para mostrar la posición del nuevo botón en el menú
            let pPosicion = document.createElement('p');
            // Se crea un elemento input para ingresar la posición del nuevo botón
            let inputPosicion = document.createElement('input');
            // Se asigna el tipo 'number' al input
            inputPosicion.type = 'number';
            // Se crea un botón para agregar la nueva columna
            let addColumnButton = document.createElement('button');
            // Se crea una línea horizontal para separar visualmente elementos
            let hr = document.createElement('hr');
            // Se crea un elemento párrafo para mostrar el texto 'Posición'
            let text = document.createElement('p');
            
            // Agregar un evento de escucha para el evento input
            inputPosicion.addEventListener('input', function () {
                // Verificar si el valor es menor que cero
                if (parseFloat(this.value) <= 0) {
                    this.value = 1; // Establecer el valor como cadena vacía
                }

                if(parseFloat(this.value) > 20){
                    this.value = 20; // Establecer el valor como cadena vacía
                }

            });  
            
            // Se asigna el texto 'Posición' al elemento text
            text.innerHTML = 'Posición';
            // Se asigna el id 'text' al elemento text
            text.id = 'text';

            // Se añade la clase 'addColumn-cont' al elemento contAddColumn
            contAddColumn.classList.add('addColumn-cont');
            // Se asigna el texto 'Agregar Botón' al botón addColumnButton
            addColumnButton.innerHTML = 'Agregar Botón';
            addColumnButton.id = 'btnAdd'
            // Se asigna el texto 'Agregar nuevo botón al menú:' al elemento pPosicion
            pPosicion.innerHTML = 'Agregar nuevo botón al menú:';

            // Se añaden los elementos hijos al contAddColumn en el orden deseado
            contAddColumn.appendChild(pPosicion);
            contAddColumn.appendChild(text);
            contAddColumn.appendChild(inputPosicion);
            contAddColumn.appendChild(addColumnButton);
            contAddColumn.appendChild(hr);

            // Se inserta el elemento contAddColumn al final del elemento con la clase 'input_columns-button'
            document.querySelector('.input_columns-button').insertAdjacentElement('beforeend', contAddColumn);
            // Se añade un evento de clic al botón addColumnButton
            addColumnButton.addEventListener('click', () => {
                // Se llama a la función addColumn con el valor ingresado en inputPosicion como argumento
                addColumn(inputPosicion.value);

                // Se reinicia el valor del inputPosicion
                inputPosicion.value = '';
                createId()

            })

            // Se cambia el estado de isCreated a verdadero
            isCreated = true;

            // Se seleccionan todos los elementos 'a' dentro de elementos 'li'
            let anchors = document.querySelectorAll('.nav-template a');
            // Se añade un evento de clic a cada enlace
            anchors.forEach(link => {
                link.addEventListener('click', async function (event) {
                    event.preventDefault();


                    let redireccionamiento = await preguntarRedireccionamiento();

                    if (redireccionamiento == 'si') {
                        window.location.href = this.href;
                    } else {
                        console.log('No funciona' + redireccionamiento);
                    }

                })
            })

        }
    })
})

function formatLabels() {
    // Selecciona todos los elementos con la clase 'labelInput' y los guarda en la variable 'labels'
    let labels = document.querySelectorAll('.labelInput');
    // Selecciona todos los elementos con la clase 'columnName' y los guarda en la variable 'inputs'
    let inputs = document.querySelectorAll('.columnName');   
    // Selecciona todos los elementos con la clase 'menu_anchor' y los guarda en la variable 'a'
    let a = document.querySelectorAll('.menu_anchor');
    // Recorre cada elemento en la colección 'labels'
    labels.forEach((label, index) => {
        // Cambia el contenido HTML de cada 'label' al texto 'Botón ' seguido del índice incrementado en 1
        label.innerHTML = 'Botón ' + (index + 1);
    });
    // Recorre cada elemento en la colección 'inputs'
    inputs.forEach((x, index) => {
        // Cambia el valor de cada 'input' al texto 'Botón ' seguido del índice incrementado en 1
        x.value = 'Botón ' + (index + 1);
    });
    // Recorre cada elemento en la colección 'a'
    a.forEach((x, index) => {
        // Cambia el contenido de texto de cada 'a' al texto 'Botón ' seguido del índice incrementado en 1
        x.textContent = 'Botón ' + (index + 1);
    });
}


function formatLabelsRow() {
// Obtener todos los contenedores de columnas de menú
let menuColumns = document.querySelectorAll('.menu_column.menuPosicion');
// Iterar sobre cada contenedor de columnas de menú
menuColumns.forEach((menuColumn, columnIndex) => {
    // Obtener todos los enlaces dentro del submenú de cada contenedor
    let subMenuAnchors = menuColumn.querySelectorAll('.ul-sub a');
    // Iterar sobre cada enlace del submenú
    subMenuAnchors.forEach((anchor, anchorIndex) => {
        // Guardar el texto del enlace en la variable 'anchorValue'
        let anchorValue = anchor.textContent;
        // Asignar un ID único a cada enlace basado en el índice del contenedor y del enlace
        anchor.id = 'Subcolumna ' + (anchorIndex + 1);
        // Comprobar si el texto del enlace está vacío o empieza con 'Submenu' y asignar un nuevo valor
        if(anchor.textContent === '' || anchorValue.startsWith('Submenu')) {
            anchor.textContent = 'Sub-Menú ' + (anchorIndex + 1);
        }
        // Comprobar si el texto del enlace está vacío o empieza con 'Sub-Menú ' y asignar un nuevo valor
        if(anchor.textContent === '' || anchorValue.startsWith('Sub-Menú ')) {
            anchor.textContent = 'Sub-Menú ' + (anchorIndex + 1);
        }
    });
});


// Selecciona todos los elementos con la clase 'input_names-column' y los guarda en la variable 'menuContainers'
let menuContainers = document.querySelectorAll('.input_names-column');
// Itera sobre cada 'menuContainer' en la lista de 'menuContainers'
menuContainers.forEach((menuContainer, menuContainerIndex) => {
    // Dentro de cada 'menuContainer', selecciona todos los elementos con la clase 'labelSub' dentro de la estructura especificada
    let submenuIndex = menuContainer.querySelectorAll('.cont-sub .input_names-row-container .labelSub');
    // Dentro de cada 'menuContainer', selecciona todos los elementos con la clase 'rowName' dentro de la estructura especificada
    let inputSub = menuContainer.querySelectorAll('.cont-sub .input_names-row-container .rowName');
    // Itera sobre cada 'submenu' en la lista de 'submenuIndex'
    submenuIndex.forEach((submenu, submenuIndex) => {
        // Cambia el texto del 'submenu' al formato 'Sub-Menú X', donde X es el índice del submenú + 1
        submenu.textContent = 'Sub-Menú ' + (submenuIndex + 1);
    });
    // Itera sobre cada 'input' en la lista de 'inputSub'
    inputSub.forEach((input, inputIndex) => {
        // Guarda el valor del input en la variable 'inputValue'
        let inputValue = input.value;
        // Si el valor del input está vacío o ya empieza con 'Sub-Menú', establece el valor del input al formato 'Sub-Menú X', donde X es el índice del input + 1
        if (input.value === '' || inputValue.startsWith('Sub-Menú ')) {
            input.value = 'Sub-Menú ' + (inputIndex + 1);
        }
    });
});

}

let cantAddColumn = 0;
// funcion añadir columnas
function addColumn(posicion) {
    cantAddColumn++;
    let cantidadColumnas = document.querySelectorAll('.menuPosicion');
    // Crea etiqueta <li>
    let newColumn = document.createElement('li');
    // Crea etiqueta <a>
    let newAnchor = document.createElement('a');
    // Se añade la clase menu_column
    newColumn.classList.add('menu_column');
    // Se añade la clase menu_anchor
    newAnchor.classList.add('menu_anchor');
    // Se añade la clase menuPosicion
    newColumn.classList.add('menuPosicion');
    // se agrega etiqueta <a> a hijo del newColumn
    newColumn.appendChild(newAnchor);
    // Cambia la variable a entero
    let posicionInput = parseInt(posicion);
    // Verifica si existe la columna para agregarla al lado 
    if (isNaN(posicionInput) || posicionInput < 1 || posicionInput > cantidadColumnas.length + 1) {
        // Muestra un alert si no se puede agregar 
        alert('No puede agregar columna en esa pocisión')
    }



    // ciclo para recorrer el array
    for (let i = 0; i < cantidadColumnas.length; i++) {
        var contadorColumna = cantidadColumnas.length + 1;

        if ((i + 1) == posicionInput) {
            // Agrega texto al etiqueta <a> creada
            newAnchor.textContent = 'Botón';
            // Inserta la etiqueta en el array segun el ciclo
            cantidadColumnas[i].insertAdjacentElement('beforebegin', newColumn);
            // Cambia al id de la nueva columna mas el valor del ciclo
            newAnchor.id = 'Nueva Columna ' + (cantAddColumn);
            // diccionario de columna
            columnData = {
                // Nombre de la columna
                name: 'Columna Nueva ' + (cantAddColumn),
                // Tipo de boton segun la function createInputs()
                type: 3,
                // Guardar etiqueda <a>
                anchor: newAnchor,
                // Array para guardar subColumnas
                subColumns: []
            }
            // Inserta la etiqueta al array
            menuData.splice(posicionInput - 1, 0, columnData)
            // Busca todos los elementos de input_names
            const inputsDiv = document.querySelectorAll('.input_names-column');
            // Crear la etiqueda en la function createInputs()

            div = createInputs(columnData, contadorColumna);

            // Recorre los elementos del documento
            inputsDiv.forEach((input, index) => {
                // Incrementa el index
                let inputDivPosicion = index + 1
                // Busca la posicion de documento con el del array menuData
                if (inputDivPosicion == posicionInput) {
                    // Inserta el elemento al DOM
                    input.insertAdjacentElement('beforebegin', div);
                }
            })
            // Crea los id de input y button
            createId();
            formatButtons();
            buttonEvent(2);
            //formatLabels();
            formatLabelsRow() 
        } else {
            if (posicionInput == cantidadColumnas.length + 1) {
                if (i + 2 == posicionInput) {
                    // Agrega texto al etiqueta <a> creada
                    newAnchor.textContent = 'Botón';
                    // Inserta la etiqueta en el array segun el ciclo
                    cantidadColumnas[i].insertAdjacentElement('afterend', newColumn);
                    // Cambia al id de la nueva columna mas el valor del ciclo
                    newAnchor.id = 'Nueva Columna ' + (cantAddColumn);
                    // diccionario de columna
                    columnData = {
                        // Nombre de la columna
                        name: 'Columna Nueva ' + (cantAddColumn),
                        // Tipo de boton segun la function createInputs()
                        type: 3,
                        // Guardar etiqueda <a>
                        anchor: newAnchor,
                        // Array para guardar subColumnas
                        subColumns: []
                    }
                    // Inserta la etiqueta al array
                    menuData.splice(posicionInput - 1, 0, columnData)
                    // Busca todos los elementos de input_names
                    const inputsDiv = document.querySelectorAll('.input_names-column');
                    // Crear la etiqueda en la function createInputs()
                    div = createInputs(columnData, contadorColumna);
                    // Recorre los elementos del documento
                    inputsDiv.forEach((input, index) => {
                        // Incrementa el index
                        let inputDivPosicion = index + 2
                        // Busca la posicion de documento con el del array menuData
                        if (inputDivPosicion == posicionInput) {
                            // Inserta el elemento al DOM
                            input.insertAdjacentElement('afterend', div);
                        }
                    })
                    // Crea los id de input y button
                    createId();
                    formatButtons()
                    buttonEvent(2);
                    formatLabels();
                }
            }


        }
    }
}

function formatButtons() {
    subcolumnBtn = document.querySelectorAll('.subcolumn-btn');

    subcolumnBtn.forEach((btn, index) => {
        btn.id = index
    })
}

function createMenu() {
    menuData = [];
    // Llama al contenedor de la vista previa del menu
    let menuPreview = document.querySelector('.menu_preview');
    // Formatea en caso de haber contenido previo
    menuPreview.innerHTML = '';
    // Muestra el contenedor del menu despues de creaar las columnas
    menuPreview.style.display = "block";

    // Se crea el elemento nav
    let navElement = document.createElement('nav');
    navElement.classList = 'Menu'
    // Se crea el elemento ul
    let ulElement = document.createElement('ul');
    ulElement.classList = 'ul-columnas';
    // Se coloca el elmento "nav" dentro del contenedor de vista previa
    menuPreview.appendChild(navElement);
    // Se coloca el elemento "ul" dentro del elemento "nav"
    navElement.appendChild(ulElement);

    createColumn(ulElement);
}

let toggle = false;
function toggleFullscreen() {
    let menuPreview = document.querySelector('.menu_preview');

    menuPreview.classList.toggle('fullscreen');

    let volverButton = document.createElement('button');
    volverButton.id = 'Volverbtn';
    volverButton.classList = 'Volverbtn';

    if (toggle) {
        volverButton = document.querySelector('#Volverbtn');
        volverButton.remove()
    } else {
        volverButton.innerHTML = 'Volver al Programa';
        volverButton.addEventListener('click', () => {
            toggleFullscreen()
        })
        menuPreview.insertAdjacentElement('afterbegin', volverButton);
    }

    toggle = !toggle;

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
    });


}

function createColumn(ulElement) {
    // Llama al formulario de los inputs de nombre de columna
    const form = document.querySelector('.input_names-container');
    // Formatea en caso de haber contenido previo
    form.innerHTML = '';


    // Valor del input del número de columnas
    const numColumns = document.getElementById('input-num_columns').value;

    for (let i = 0; i < numColumns; i++) {
        // Se crea elemento "li"
        let column = document.createElement('li');
        // Se crea el elemento "a"
        let anchor = document.createElement('a');

        // Nombre del enlace por defecto
        anchor.innerHTML = 'Botón '+ (i+1);

        // Se agregan las clases css a la columna
        column.classList.add('menu_column');
        // Se agrega la clase para obtener solamente las columnas del menu preview
        column.classList.add('menuPosicion')

        // Se agregan las clases css al enlace "a"
        anchor.classList.add('menu_anchor');

        anchor.id = 'Enlace ' + (i + 1);
        // Se agrega el elemento "a" dentro de la columna "li"
        column.appendChild(anchor);
        // Se agrega la columna dentro del elemento "ul"
        ulElement.appendChild(column);

        var columnData = {
            name: 'Columna ' + (i + 1),
            type: 1,
            anchor: anchor,
            subColumns: []
        }

        menuData.push(columnData);
    }

    menuData.forEach((columna, i) => {
        div = createInputs(columna, i + 1);
        form.appendChild(div);
    })
    buttonEvent();
    createId();
    formatLabels();
}

function createInputs(columna, i) {
    const ptitulo = document.createElement('p');
    // Se crea el div contenedor de los inputs
    const div = document.createElement('div');
    // Se crea el elemento p para el label del nombre 
    const p = document.createElement('p');
    p.className = 'botonNombre';

    // Se crea el input para el nombre
    const input = document.createElement('input');
    // Se crea el elemento p para la url
    const pUrl = document.createElement('p');
    // Se crea el input para la url
    const inputUrl = document.createElement('input');
    // Se crea etiqueta hr
    let hr = document.createElement('hr');

    // Se asignan los elementos creados dentro del contenedor
    div.appendChild(ptitulo);
    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(pUrl);
    div.appendChild(inputUrl);


    // Se crea el botón para agregar filas
    var buttonDelete = createButton('Eliminar Botón');

    if (columna.type == 1) {
        ptitulo.textContent = 'Botón ' + i;
        ptitulo.classList.add('labelInput');
        // Se coloca el nombre del p de nombre 
        p.textContent = 'Nombre Botón ';

        // Se coloca el nombre del p de url
        pUrl.textContent = 'URL o Link Botón ';

        // Se agrega la clase al contenedor
        div.classList.add('input_names-column');

        // Se asigna un id a input
        input.id = 'columnName';
        // Se asigna un id a input
        inputUrl.id = 'columnUrl';
        //
        inputUrl.value = 'https://'
        //
        input.value = "Botón " + i;
        //
        input.classList = 'columnName';
        // Se crea el botón para agregar filas
        const buttonRow = createButton('Agregar Submenu');
        buttonRow.classList.add('buttonDiv');

        buttonRow.addEventListener('click', function (event) {
            let index = (i - 1)

            event.preventDefault();
            buttonRowFunc(event, index)
            buttonRow.style.display = 'none';

            let conSub = document.querySelectorAll('.cont-sub');
            conSub.forEach((cont, pos) => {
                if (pos == index) {
                    let deleteButton = cont.querySelector('.detele-button');
                    deleteButton.click()
                }
            })

        })

        div.appendChild(buttonRow);
    } if (columna.type == 2) {
        if (!i) {
            i = 1;
            ptitulo.textContent = 'Sub-Menú ';
            ptitulo.classList.add('labelSub');
        } else {
            ptitulo.textContent = 'Sub-Menú ';
            ptitulo.classList.add('labelSub');
        }

        // Se coloca el nombre del p de nombre 
        p.textContent = 'Nombre Submenu ';
        // Se coloca el nombre del p de url
        pUrl.textContent = 'URL o Link SubMenu ';
        p.style.color = 'green';
        // Se agrega la clase al div
        div.classList.add('input_names-row-container');

        // Se asigna un id a input
        input.id = 'rowName';
        //
        input.classList = 'rowName';
        // Se asigna un id a input
        inputUrl.id = 'rowUrl';
        //
        inputUrl.value = 'https://';
        // Se crea el botón para eliminar filas
        buttonDelete = createButton('Eliminar Submenu');

    } if (columna.type == 3) {
        ptitulo.textContent = 'Nuevo Botón ';
        ptitulo.classList.add('labelInput');
        // Se coloca el nombre del p de nombre 
        p.textContent = 'Nombre Nuevo Botón ';
        // Se coloca el nombre del p de url
        pUrl.textContent = 'URL o Link Nuevo Botón ';
        p.style.color = 'red';
        // Se agrega la clase al contenedor
        div.classList.add('input_names-column');
        // Se crea el botón para agregar filas
        let buttonRow = createButton('Agregar Submenu');
        buttonRow.classList.add('buttonDiv');

        div.appendChild(buttonRow);

        // Se asigna un id a input
        input.id = 'columnName';
        // Se asigna un id a input
        inputUrl.id = 'columnUrl';
        inputUrl.value = 'https://'
        // se asigna value al boton
        input.value = 'Botón';
        //se asigna una class
        input.classList = 'columnName';
        buttonRow.classList.add('ButtonRowClick');
    }


    buttonDelete.classList.add('detele-button');
    div.appendChild(buttonDelete);

    anchor = columna.anchor.id;
    // Obtener el elemento con el ID "miAnchor"
    var elementoAnchor = document.getElementById(anchor);

    // Agregamos el evento 'input' para cambiar el nombre de los elementos "a"
    input.addEventListener('input', function () {
        elementoAnchor.innerHTML = input.value;
    });

    inputUrl.addEventListener('input', function () {
        let inputValue = inputUrl.value; // Obtener el valor del input y eliminar espacios en blanco
        // Verificar si el input ya comienza con 'https://'
        if (!inputValue.startsWith('https://')) {
            inputValue = 'https://' + inputValue;
        }
        elementoAnchor.href = inputValue;
    })

    buttonDelete.addEventListener('click', (event) => {
        event.preventDefault()

        // Verificar si 'columna' es una columna principal o una subcolumna
        const index = menuData.findIndex(columnaPrincipal => {
            // Verificar si 'columna' es igual a una columna principal
            if (columnaPrincipal === columna) {
                return true;
            }
            // Verificar si 'columna' es una subcolumna de alguna columna principal
            if (Array.isArray(columnaPrincipal.subColumns)) {
                return columnaPrincipal.subColumns.some(subColumna => subColumna === columna);
            }
            return false;
        });

        band = 0
        if (index !== -1) {
            // Si 'columna' es una columna principal
            if (menuData[index] === columna) {
                menuData.splice(index, 1);
                band = 1;
            } else {
                band = 2;
                // Si 'columna' es una subcolumna
                const columnaPrincipal = menuData.find(columnaPrincipal => columnaPrincipal.subColumns && columnaPrincipal.subColumns.includes(columna));
                if (columnaPrincipal) {
                    columnaPrincipal.subColumns.splice(columnaPrincipal.subColumns.indexOf(columna), 1);
                }
            }
        }


        let menuPreview = document.querySelectorAll('.menuPosicion');

        if (band == 1) {
            menuPreview[index].remove();
        } if (band == 2) {
            row = menuPreview[index].querySelectorAll('li');
        }

        const divContenedor = buttonDelete.parentElement;
        divContenedor.remove();

        deleteRowMenu(index, event.currentTarget.id);
    })

    div.appendChild(hr);

    return div;
}

// Función deleteRowMenu que toma dos argumentos, indexCol e indexRow
function deleteRowMenu(indexCol, indexRow) {
    // Se seleccionan todos los elementos con la clase 'menuPosicion' y se almacenan en la variable columns
    columns = document.querySelectorAll('.menuPosicion');

    // Se itera sobre cada columna en columns
    columns.forEach((column, index) => {
        // Si el índice de la columna coincide con indexCol
        if (index == indexCol) {
            // Se seleccionan todos los elementos 'li' dentro de la columna y se almacenan en la variable rows
            rows = column.querySelectorAll('li');
            // Se itera sobre cada fila en rows
            rows.forEach((row, i) => {
                // Si el índice de la fila coincide con indexRow
                if (i == indexRow) {
                    // Se elimina la fila del DOM
                    row.remove();
                    // Se muestra el índice de la fila eliminada en la consola

                }
            })
        }
    })
    // Se llama a la función createId para actualizar los identificadores
    createId();
}

// Definición de la función createId
function createId() {
    // Se seleccionan todos los elementos con la clase 'input_names-column' y se almacenan en la variable inputNamesColumn
    inputNamesColumn = document.querySelectorAll('.input_names-column');
    console.log(inputNamesColumn);

    // Se itera sobre cada columna en inputNamesColumn
    for (let i = 0; i < inputNamesColumn.length; i++) {
        // Se seleccionan todos los elementos con la clase 'input_names-row-container' dentro de la columna actual y se almacenan en la variable inputRows
        inputRows = inputNamesColumn[i].querySelectorAll('.input_names-row-container');
        // Se itera sobre cada fila en inputRows
        inputRows.forEach((inputRow, index) => {
            // Se selecciona el botón de eliminación dentro de la fila actual
            buttonDelete = inputRow.querySelector('.detele-button');
            // Se asigna el índice actual como el id del botón de eliminación
            buttonDelete.id = index;
            // Se asigna el índice actual como el id de la fila
            inputRow.id = index;
        })

        inputNamesColumn[i].id = i
    }
}

// Definición de la función buttonRow
function buttonRowFunc(event, index) {
    // Previene la acción predeterminada del evento
    event.preventDefault();
    // Llama a la función createSubColumn pasando el índice como argumento
    createSubColumn(index);
}

// Definición de la función buttonEvent
function buttonEvent(type = 1) {
    // Selecciona todos los elementos con la clase 'buttonDiv' y los almacena en la variable buttonsDivs
    let buttonsDivs = document.querySelectorAll('.buttonDiv');
    if (type == 1) {
        // Itera sobre cada elemento en buttonsDivs
        buttonsDivs.forEach((buttonDiv, index) => {
            // Asigna el índice actual como el id del div del botón
            buttonDiv.id = index;

            buttonDiv.click();
            buttonDiv.addEventListener('click', function (event) {
                buttonRowFunc(event, index);
            })
        })
    } else {
        let i = -1;

        buttonsDivs.forEach((button, index) => {
            if (button.classList.contains('ButtonRowClick')) {
                i = index
            }
        })
        try {
            let buttonRowClick = document.querySelector('.ButtonRowClick');
            console.log(buttonRowClick);
            buttonRowClick.addEventListener('click', function (event) {
                event.preventDefault();
                buttonRowFunc(event, i)
                buttonRowClick.remove()
                let conSub = document.querySelectorAll('.cont-sub');
                conSub.forEach((cont, pos) => {
                    if (pos == i) {
                        let deleteButton = cont.querySelector('.detele-button');
                        deleteButton.click()
                    }
                })
            })
            buttonRowClick.click();
        } catch (error) {
            console.log(error);
        }
    }
}


// Definición de la función createSubColumn
function createSubColumn(index, posicion = null) {

    // Selecciona todos los elementos con la clase 'menuPosicion' y los almacena en la variable menuPreview
    let menuPreview = document.querySelectorAll('.menuPosicion');

    // Itera sobre cada elemento en menuPreview
    for (let i = 0; i < menuPreview.length; i++) {
        // Comprueba si el índice actual es igual al índice pasado como argumento
        if ((i) == index) {
            // Busca el elemento 'ul' dentro del elemento de menú actual
            let ulElementSubMenu = menuPreview[i].querySelector('ul');
            // Comprueba si no existe el elemento 'ul'
            if (!ulElementSubMenu) {
                // Si no existe, crea un nuevo elemento 'ul'
                ulElementSubMenu = document.createElement('ul');
                ulElementSubMenu.classList = 'ul-sub'
                // Agrega el nuevo elemento 'ul' al menú actual
                menuPreview[i].appendChild(ulElementSubMenu);
            }

            // Llama a la función createRow pasando el elemento 'ul', el índice y la posición como argumentos
            createRow(ulElementSubMenu, index, posicion);
        }
    }
}


// Define una variable cont con valor inicial de 0
var cont = 0;

function createRow(ulElement, index, posicion = null, subcolumna = null) {
    cont += 1

    // Se crea el elemento 'li'
    let row = document.createElement('li');
    // Se crea el elemento 'a'
    let anchorSubMenu = document.createElement('a');

    // Se agrega la clase al elemento
    anchorSubMenu.classList.add('menu_anchor');


    anchorSubMenu.id = 'Subcolumna ' + cont;

    // Se agrega el enlace 'a' a la fila 'li'
    row.appendChild(anchorSubMenu);


    if (posicion !== null) {
        posicion -= 1;
        var elementoPosicion = ulElement.children[posicion];
        ulElement.insertBefore(row, elementoPosicion);
    } else {
        // Si no se especifica la posición, añadir al final
        ulElement.appendChild(row);
    }

    if (subcolumna != null) {
        // Nombre del enlace por defecto
        anchorSubMenu.innerHTML = subcolumna.nombre_subcolumna;
        var subColumns = {
            //id: subcolumna.ID,
            //idColumn: subcolumna.idColumna,
            name: subcolumna.nombre_subcolumna,
            url: subcolumna.url_subcolumna,
            type: 2,
            anchor: anchorSubMenu
        }
    } else {
        // Nombre del enlace por defecto
        anchorSubMenu.innerHTML = 'Submenu';
        var subColumns = {
            //id: index + 1,
            //idColumn: null,
            name: 'Submenu',
            url: '',
            type: 2,
            anchor: anchorSubMenu
        }
    }





    columna = menuData[index];



    columna.subColumns.push(subColumns);

    divInputs = document.querySelectorAll('.input_names-column');

    divInputs.forEach((divInput, i) => {
        if (i == index) {
            var contenedorSub = divInput.querySelector('.cont-sub');

            let subColumna = menuData[index].subColumns;

            if (contenedorSub) {


                div = createInputs(subColumns);
                if (i !== null) {
                    posicion += 1
                    if (posicion == subColumna.length) {
                        var elementoPosicion = contenedorSub.children[posicion - 1];


                        elementoPosicion.insertAdjacentElement('afterend', div)
                        
                        console.log('--- if ---')
                        console.log(i)
                    } else {
                        var elementoPosicion = contenedorSub.children[posicion];

                        console.log('--- else 1 ---')
                        elementoPosicion.insertAdjacentElement('beforebegin', div)
                    }

                    inputValue = contenedorSub.querySelector('#inputSubcolumn');


                } else {
                    createId();
                    console.log('--- else 2 ---')
                    contenedorSub.appendChild(div);
                    console.log(i) 

                }
               
                createId();
            } else {
                console.log('-- 1')
                let contSubcolumn = document.createElement('div');
                pInput = document.createElement('p');
                let inputSubcolumn = document.createElement('input');
                inputSubcolumn.type = 'number';
                let btnSubcolumn = document.createElement('button');

                inputSubcolumn.id = 'inputSubcolumn'
                pInput.innerHTML = 'Indique posición: '
                btnSubcolumn.innerHTML = 'Agregar Sub-menu';
                btnSubcolumn.classList.add('subcolumn-btn')

                // Agregar un evento de escucha para el evento input
                inputSubcolumn.addEventListener('input', function () {
                    // Verificar si el valor es menor que cero
                    if (parseFloat(this.value) <= 0) {
                        this.value = 1; // Establecer el valor como cadena vacía
                    }

                    if(parseFloat(this.value) > 20){
                        this.value = 20; // Establecer el valor como cadena vacía
                    }
                });


                contSubcolumn.appendChild(pInput);
                contSubcolumn.appendChild(inputSubcolumn);
                contSubcolumn.appendChild(btnSubcolumn);
                contSubcolumn.classList.add('cont-add-sub');


                contenedorSub = document.createElement('div');
                contenedorSub.classList.add('cont-sub');

                divInput.appendChild(contenedorSub);
                div = createInputs(subColumns);
                contenedorSub.appendChild(div);
                contenedorSub.insertAdjacentElement('afterbegin', contSubcolumn);
                createId();
                formatButtons()
                btnSubcolumn.onclick = function (event) {
                    event.preventDefault();
                    idButton = btnSubcolumn.id
                    addSubcolumn(idButton);
                    formatLabelsRow();
                    let inputs = document.querySelectorAll('.cont-add-sub');
                    // Itera sobre cada elemento encontrado
                    inputs.forEach(inputContainer => {
                        // Dentro de cada contenedor de input, selecciona el input y establece su valor en cadena vacía
                        let input = inputContainer.querySelector('input');
                        if (input) {
                            input.value = '';
                        }
                    });
                };
            }
        }
    })

}

// Definición de la función addSubcolumn con un parámetro index
function addSubcolumn(index) {
    // Selecciona todos los elementos con el id 'inputSubcolumn' y los almacena en inputValue
    inputValue = document.querySelectorAll('#inputSubcolumn');

    // Si hay más de un elemento en inputValue
    if (inputValue.length > 1) {
        // Itera sobre cada elemento en inputValue
        inputValue.forEach((input, i) => {
            // Si el índice actual es igual al índice pasado como argumento
            if (i == index) {
                // Almacena el valor del campo de entrada en la variable value
                value = input.value;
            }
        });
    } else {
        // Si hay solo un elemento en inputValue, almacena su valor en la variable value
        value = inputValue[0].value;
    }

    // Selecciona la subcolumna correspondiente en menuData
    subColumna = menuData[index].subColumns;

    // Verifica si el valor es un número válido dentro del rango permitido
    if (isNaN(value) || value < 1 || value > subColumna.length + 1) {
        // Muestra una alerta si el valor no es válido
        alert('No puede agregar columna en esa posición');
    } else {
        // Llama a la función createSubColumn con el índice y el valor especificados
        createSubColumn(index, value);
    }
}


// Definición de la función ShowMenuData
function ShowMenuData() {
    // Muestra el contenido de la variable menuData en la consola
    console.log(menuData);
}

// Definición de la función getData
function getData() {
    // Obtiene el valor del campo de entrada con id 'input-menu_name' y lo almacena en menuTitle
    let menuTitle = document.querySelector('#input-menu_name').value;

    // Selecciona todos los elementos con id 'columnName' y 'columnUrl' y los almacena en columnName y columnUrl
    columnName = document.querySelectorAll('#columnName');
    columnUrl = document.querySelectorAll('#columnUrl');

    // Itera sobre cada elemento en columnName
    columnName.forEach((name, index) => {
        // Asigna el valor del campo de entrada al nombre de la columna correspondiente en menuData
        if(name.value){
            menuData[index].name = name.value;

        }else{
            menuData[index].name = 'Botón ' +(index + 1);

        }
    });

    // Itera sobre cada elemento en columnUrl
    columnUrl.forEach((url, index) => {
        // Si el valor del campo de entrada comienza con "https://"
        if (url.value.startsWith("https://")) {
            // Asigna el valor del campo de entrada a la URL de la columna correspondiente en menuData
            menuData[index].url = url.value;
        } else {
            // De lo contrario, agrega "https://" al inicio del valor y lo asigna a la URL de la columna
            menuData[index].url = 'https://' + url.value;
        }
    });

    // Selecciona todos los elementos con la clase 'input_names-column' y los almacena en contInputs
    contInputs = document.querySelectorAll('.input_names-column');

    // Itera sobre cada elemento en contInputs
    contInputs.forEach((contInput, index) => {
        // Si el contenedor tiene una subcolumna
        if (contInput.querySelector('.cont-sub')) {
            // Selecciona el contenedor de subcolumnas y los campos de nombre y URL de las filas
            contSub = contInput.querySelector('.cont-sub');
            rowName = contSub.querySelectorAll('#rowName');
            rowUrl = contSub.querySelectorAll('#rowUrl');

            // Itera sobre cada elemento en rowName
            rowName.forEach((name, i) => {
                // Asigna el valor del campo de entrada al nombre de la subcolumna correspondiente en menuData
                menuData[index].subColumns[i].name = name.value;
            });
            // Itera sobre cada elemento en rowUrl
            rowUrl.forEach((url, i) => {
                let urlvalue = url.value
                // Si el valor del campo de entrada comienza con "https://"
                if (urlvalue.startsWith("https://")) {
                    // Asigna el valor del campo de entrada a la URL de la subcolumna correspondiente en menuData
                    menuData[index].subColumns[i].url = url.value;
                } else {
                    // De lo contrario, agrega "https://" al inicio del valor y lo asigna a la URL de la subcolumna
                    menuData[index].subColumns[i].url = 'https://' + url.value;
                }
            });
        }
    });
    console.log(menuData);
    // Retorna un objeto con el título del menú y los datos del menú
    return {
        titulo_menu: menuTitle,
        menuData: menuData
    };
}



// Guarda la información en la base de datos
// Guarda la información en la base de datos
async function saveNav(band = 2) {
    var data = getData();
    console.log(data)
    try {
        if (band == 1) {
            var confirmacion = await mostrarConfirmacion('confirmacion');
            if (confirmacion == 'si') {
                var data = getData();
                var response = await fetch('php/crear.php', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                    "Content-Type": "application/json"
                    }
            })
                location.reload();
                

                
            }else{
                location.reload();
                
            }

            return;
        }
        
        if(band==2){
            var data = getData();
            var response = await fetch('php/crear.php', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const result = await response.text(); // Obtener el contenido de la respuesta
            if (result.includes('Actualizado')) {
                alert('¡Actualizado');
            } else {
                alert('Menú guardado con éxito');
                if (band == 1) {
                    location.reload();
                }
            }

        } else {
            if (response.status == 500) {
                alert('No puede usar nombre existente')
            } else {
                let errorMessage = await response.text();
                alert('Problemas con el servidor: ' + errorMessage);
            }

        }
        }
        

        if(band==3){
            var data = getData();
            console.log(data);
            var response = await fetch('php/crear.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const result = await response.text(); // Obtener el contenido de la respuesta
            if (result.includes('Actualizado')) {
                alert('¡Actualizado');
            } else {
                alert('Datos eliminados');
            }

            }
        }

    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al guardar el menú');
    }
}

function borrarTodo() {
    // Selecciona todos los elementos con la clase 'delete-button'
    var botonesBorrar = document.querySelectorAll('.detele-button');

    console.log(botonesBorrar);

    // Itera sobre cada botón y simula un clic
    botonesBorrar.forEach(function(boton) {
        boton.click();
    });

    saveNav(3);
}



function mostrarConfirmacion() {
    return new Promise((resolve, reject) => {
        var modal = document.getElementById('confirmacion');
        modal.style.display = 'block';

        document.getElementById('btnSi').onclick = function () {
            modal.style.display = 'none';
            resolve('si');
        };

        document.getElementById('btnNo').onclick = function () {
            modal.style.display = 'none';
            resolve('no');
        };
    });
}


function mostrarBorrarTodo() {
    return new Promise((resolve, reject) => {
        var modal = document.getElementById('borrar');
        modal.style.display = 'block';

        document.getElementById('btnSiBorrar').onclick = function () {
            modal.style.display = 'none';
            resolve('si');
        };

        document.getElementById('btnNoBorrar').onclick = function () {
            modal.style.display = 'none';
            resolve('no');
        };
    });
}

function preguntarRedireccionamiento() {

    return new Promise((resolve, reject) => {
        var modal = document.getElementById('redireccionar');
        modal.style.display = 'block';

        document.getElementById('btnSiRedireccionar').onclick = function () {
            modal.style.display = 'none';
            resolve('si');
        };

        document.getElementById('btnNoRedireccionar').onclick = function () {
            modal.style.display = 'none';
            resolve('no');
        };
    });
}

function CambiarFuente(){

    // Agregar un event listener al <select> para escuchar cambios
    selectFuentes.addEventListener('change', function() {
        // Obtener el valor de la opción seleccionada en lugar de textContent
        let content = this.value;

        // Obtener todos los elementos con la clase 'menu_anchor'
        let textos = document.getElementsByClassName('menu_anchor');

        // Iterar sobre todos los elementos con la clase 'menu_anchor' y cambiar su font-family
        Array.from(textos).forEach(texto => {
            texto.style.fontFamily = content;
        });
    });

    selectFuentes.dispatchEvent(new Event('change'));


}




//FUNCIONES DE "MENU BOTON"
function bgcolor() {

    // Obtén el título de la sección donde se encuentra el contenedor de opciones.
    const tituloSeleccionado = MenuSeleccionado.querySelector('.seleccionado_titulo');

    // Obtén el contenedor dentro de `MenuSeleccionado` donde agregaremos los elementos para cambiar el color.
    let seleccionado__contenedor = MenuSeleccionado.querySelector('.seleccionado__contenedor');

    // Selecciona el primer elemento con la clase `menu_anchor` para obtener el color de fondo actual.
    let color__Menu = document.querySelector('.menu_anchor');

    // Limpia el contenido del contenedor para evitar duplicados si la función se llama varias veces.
    seleccionado__contenedor.innerHTML = '';

    // Obtén el color de fondo del elemento usando `getComputedStyle` para poder manipular el color.
    let color = window.getComputedStyle(color__Menu).backgroundColor;

    // Convierte el color RGB obtenido a formato hexadecimal para establecer el valor del input tipo color.
    let hexColor = rgbToHex(color);

    // Crea un nuevo elemento div para mostrar el texto "Cambiar Color:".
    let divNombre = document.createElement('div');
    divNombre.textContent = 'Cambiar Color:';

    // Crea un nuevo input de tipo color para permitir al usuario elegir un nuevo color de fondo.
    let inputColor = document.createElement('input');
    inputColor.type = 'color';
    inputColor.value = hexColor;  // Establece el color hexadecimal como el valor inicial del input de color.

    // Añade el div y el inputColor al contenedor `seleccionado__contenedor`.
    seleccionado__contenedor.appendChild(divNombre);
    seleccionado__contenedor.appendChild(inputColor);

    // Añade un evento que se ejecuta cuando cambia el valor del input de color.
    inputColor.addEventListener('input', (event) => {
        let selectedColor = event.target.value;  // Obtiene el color seleccionado en formato hexadecimal desde el input de color.
        
        // Actualiza la variable CSS `--menu-bg-color` con el nuevo color seleccionado por el usuario.
        document.documentElement.style.setProperty('--menu-bg-color', selectedColor);
    });

    // Actualiza el texto del título de la sección para mostrar el mensaje adecuado.
    tituloSeleccionado.textContent = 'Color Fondo Botón';

    // Asegura que el `MenuSeleccionado` se muestre en la página.
    MenuSeleccionado.style.display = "block";
}

function bghover(){
    let seleccionado__contenedor = MenuSeleccionado.querySelector('.seleccionado__contenedor')
    seleccionado__contenedor.innerHTML = ''
    const tituloSeleccionado = MenuSeleccionado.querySelector('.seleccionado_titulo');

    let hover1Color = getComputedStyle(document.documentElement).getPropertyValue('--menu-hover-color1').trim();
    let hover2Color = getComputedStyle(document.documentElement).getPropertyValue('--menu-hover-color2').trim();

    let hexHover1Color = rgbToHex(hover1Color);
    let hexHover2Color = rgbToHex(hover2Color);


    let div1 = document.createElement('div');
    div1.className = 'contenedor__color'

    let divHover1 = document.createElement('div');
    divHover1.textContent = 'Cambiar Color Hover 1:';

    let inputHover1 = document.createElement('input');
    inputHover1.type = 'color'
    inputHover1.value = hexHover1Color;

    let div2 = document.createElement('div');
    div2.className = 'contenedor__color'

    let divHover2 = document.createElement('div');
    divHover2.textContent = 'Cambiar Color Hover 2:';

    let inputHover2 = document.createElement('input');
    inputHover2.type = 'color'
    inputHover2.value = hexHover2Color;


    div1.appendChild(divHover1);
    div1.appendChild(inputHover1);
    seleccionado__contenedor.appendChild(div1);

    div2.appendChild(divHover2);
    div2.appendChild(inputHover2);
    seleccionado__contenedor.appendChild(div2);

    // Añade un evento que se ejecuta cuando cambia el valor del input de color.
    inputHover1.addEventListener('input', (event) => {
        let selectedColor = event.target.value;  // Obtiene el color seleccionado en formato hexadecimal desde el input de color.
        
        // Actualiza la variable CSS `--menu-bg-color` con el nuevo color seleccionado por el usuario.
        document.documentElement.style.setProperty('--menu-hover-color1', selectedColor);
    });

    // Añade un evento que se ejecuta cuando cambia el valor del input de color.
    inputHover2.addEventListener('input', (event) => {
        let selectedColor = event.target.value;  // Obtiene el color seleccionado en formato hexadecimal desde el input de color.
        
        // Actualiza la variable CSS `--menu-bg-color` con el nuevo color seleccionado por el usuario.
        document.documentElement.style.setProperty('--menu-hover-color2', selectedColor);
    });

    tituloSeleccionado.textContent = 'Color Fondo Bóton Hover';
    MenuSeleccionado.style.display = "block";
}

// Función para convertir un color en formato RGB a formato hexadecimal
function rgbToHex(rgb) {
    // Usa una expresión regular para extraer los valores de rojo (r), verde (g) y azul (b) del color RGB.
    // La expresión regular \d+ busca uno o más dígitos en el texto.
    // El método match() devuelve una matriz con los valores de r, g, y b en formato de cadena.
    let [r, g, b] = rgb.match(/\d+/g).map(Number);
    // Convierte los valores de r, g y b de formato numérico a formato hexadecimal.
    // map(x => x.toString(16)) convierte cada número a una cadena hexadecimal en minúsculas.
    // padStart(2, '0') asegura que cada valor hexadecimal tenga al menos dos dígitos, agregando un 0 si es necesario.
    // join('') une los valores hexadecimales en una sola cadena.
    // toUpperCase() convierte la cadena resultante a mayúsculas.
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}


// FIN FUNCIONES DE "MENU BOTON"

function makeElementDraggable(elementId) {
    const draggableElement = document.getElementById(elementId);
    let offsetX = 0;
    let offsetY = 0;
    let initialX = 0;
    let initialY = 0;
    let isDragging = false;

    function onMouseMove(e) {
        if (isDragging) {
            const windowWidth = window.innerWidth;
            const elementWidth = draggableElement.offsetWidth;

            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            // Limitar movimiento a la izquierda y derecha
            if (newLeft < 0) newLeft = 0;
            if (newLeft + elementWidth > windowWidth) newLeft = windowWidth - elementWidth;

            // Limitar movimiento hacia arriba
            if (newTop < 0) newTop = 0;

            // Actualizar la posición del elemento
            draggableElement.style.left = `${newLeft}px`;
            draggableElement.style.top = `${newTop}px`;
        }
    }

    function onMouseUp() {
        if (isDragging) {
            isDragging = false;
            document.body.style.cursor = 'auto';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }

    draggableElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = draggableElement.offsetLeft;
        initialY = draggableElement.offsetTop;
        offsetX = e.clientX - initialX;
        offsetY = e.clientY - initialY;
        document.body.style.cursor = 'move';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}



function showAlert() {
    alert('¡Hola! Esta es una prueba de mensaje de alerta.');
}
// FIN FUNCIONES DE "MENU BOTON"
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