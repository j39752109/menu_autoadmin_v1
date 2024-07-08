<!--
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Agui Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
-->

<!-----------------------------------------------------------------------------------------------------------------------
   ------------------- INICIO ITred Spa crear.php -----------------------------------------------------------------------
   ----------------------------------------------------------------------------------------------------------------------->

<!-- ------------------------
	 -- INICIO CONEXION BD --
     ------------------------ -->
	
<!-- INICIO PHP BASE DE DATOS ITred Spa -->
<?php
        //CONEXION A BASE DE DATOS ITred Spa
        $mysqli = new MYSQLI('localhost','root','','itredspa_bd');
    ?>
<!-- ---------------------
-- FIN CONEXION BD --
--------------------- --> 

<?php
    // Cargar los archivos CSS y JS específicos para esta página
    $sweet_alert = "js/sweetAlert.js";
    $css_file = "css/crear.css";
    $js_file = "js/crear.js";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Se define el titulo de la pagina dinamicamente -->
    <title><?php $page_title ?></title>
    <!-- Se agregan dinamicamente las hojas de estilos -->
    <link rel="stylesheet" href="<?php echo $css_file; ?>">
    <!-- Se agregan dinamicamente los scripts de js -->
    <script src="<?php echo $js_file; ?>"></script>
</head>
<body>
    
    <!-- Contenedor para el numero de columnas y titulo -->

    <div class="container">
        <div class="container__div1">
            <div class="input_columns-container">
                <!-- Titulo del menu -->
                <p>Nombre Menu</p>
                <input type="text" id="input-menu_name">
            </div>

            <div class="radio-group">
            <p>Indique la orientación del menú:</p>
                <!-- Opción 1: Horizontal -->
                <div class="radio-item">
                    <input type="radio" id="horizontal" name="orientacion" value="horizontal">
                    <label for="horizontal">HORIZONTAL</label>
                </div>
                <!-- Opción 2: Vertical Izquierda -->
                <div class="radio-item">
                    <input type="radio" id="vertical_izquierda" name="orientacion" value="vertical_izquierda">
                    <label for="vertical_izquierda">VERTICAL IZQUIERDA</label>
                </div>
                <!-- Opción 3: Vertical Centro -->
                <div class="radio-item">
                    <input type="radio" id="vertical_centro" name="orientacion" value="vertical_centro">
                    <label for="vertical_centro">VERTICAL CENTRO</label>
                </div>
                <!-- Opción 4: Vertical Derecha -->
                <div class="radio-item">
                    <input type="radio" id="vertical_derecha" name="orientacion" value="vertical_derecha">
                    <label for="vertical_derecha">VERTICAL DERECHA</label>
                </div>
            </div>

            <div class="input_columns-button">
                <!-- Input que nos permite ingresar la cantidad minimo de 1 y maximo 20 -->
                <div class="flex-center m-t">
                    <p>Agregar botones al menú:</p>
                    <p id="text-1">Posición</p>
                    <input type="number" id="input-num_columns" max="20" min="1">
                    <!-- Boton para insertar las columnas -->
                    <button id="insert-button" onclick="createMenu()">Crear Menú</button>
                    
                </div>
            </div>
            <hr class="primer_hr">
            <form class="input_names-container">  
            </form>

            <form id="contenedor-menu" class="input_names-container"></form>
            
            <div id="container-btn-sytle" class="container-btn-sytle">
                <button id="modificarTexto" class="btn-syle__btn">Modificar Texto Menu</button>
                <button id="modificarBtn" class="btn-syle__btn">Modificar Botón</button>
            </div>

            <div id="btn-modificar-boton" class="btn-modifcar-boton">
                <div class="container-title">
                    <div class="title__menu">Menu Bóton</div>
                    <div id="cerrar_menu" class="cerrar__menu">X</div>                    
                </div>
                <div class="container-btn-modificar">
                    <div class="btn__style">Color Fondo Bóton</div>
                    <div class="btn__style">Color Fondo Bóton Hover</div>
                    <div class="btn__style">Ancho Bóton</div>
                    <div class="btn__style">Borde Bóton</div>
                    <div class="btn__style">Ancho Borde Bóton</div>
                    <div class="btn__style">Borrar Todo el Formado</div>
                    <div class="btn__style">Imagen Fondo Bóton</div>
                    <div class="btn__style">Imagen Fondo Bóton Hover</div>
                    <div class="btn__style">Alto Bóton</div>
                    <div class="btn__style">Estilo Borde Bóton</div>
                    <div class="btn__style">Color Borde Bóton</div>
                    <div class="btn__style"></div>    
                </div>
                <div id="MenuSeleccionado" class="MenuSeleccionado">
                    <div class="seleccionado">
                        <div class="seleccionado__container-title">
                            <div class="seleccionado_titulo">titulo</div>
                            <div id="seleccionado__cerrar" class="seleccionado__cerrar">X</div> 
                        </div>
                        <div id="seleccionado__contenido" class="seleccionado__contenido">
                            <div class="seleccionado__contenedor">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="btn-modificar-texto" class="btn-modifcar-texto">
                <div class="container-title">
                    <div class="title__menu">Menu Texto </div>
                    <div id="cerrar_menu_texto" class="cerrar_menu_texto">X</div>                    
                </div>
                <div>
                    <select class="modificar__tipoletra">
                        <option>Tipo Letra</option>
                    </select>
                    <select class="modificar__tamanoletra">
                        <option>11</option>
                    </select>
                </div>
                <div class="container-btn-modificar_texto">
                    <div class="btn__style_texto">Negrita</div>
                    <div class="btn__style_texto">Cursiva</div>
                    <div class="btn__style_texto">Subrayado</div>
                    <div class="btn__style_texto">Color</div>
                    <div class="btn__style_texto">Posición Fila</div>
                    <div class="btn__style_texto">Posicion columna</div>
                    <div class="btn__style_texto">Viñeta</div>
                    <div class="btn__style_texto">Alineación izquierda</div>
                    <div class="btn__style_texto">Alineación centro</div>
                    <div class="btn__style_texto">Alineación derecha</div>
                    <div class="btn__style_texto">Justificado</div>
                    <div class="btn__style_texto">Animación</div>
                    <div class="btn__style_texto">Tiempo Animación</div>
                    <div class="btn__style_texto">Borrar todo el formato</div>      
                </div>
            </div>


           

            



            <div class="footer">
                <button onClick=saveNav()>Guardar</button>
                <!-- Boton para guardar el menu -->
                <button onClick=saveNav(1)>Crear Nuevo Menú</button>
                <button onClick=borrarTodo()>Borrar Todo</button>
                <button id="fullscreeenButton" onClick=toggleFullscreen()>Ir al Sitio Web</button>
                <button>Aplicar programa</button>
            </div>
        </div>

        <div class="container__div2">
            <div class="contenet-center">
                <p>Ejemplo</p>
            </div>            
            
            <div class="contenet-center">
                <div class="menu_example">             
                    <div>
                        <span class="number-btn">1</span>
                        <div class="btn-example">Boton 1</div>
                    </div>
                    <div>
                        <span class="number-btn">2</span>
                        <div class="btn-example">Boton 2</div>
                        <div>
                            <div class="btn-example">SubMenu 1</div>
                        </div>
                        <div>
                            <div class="btn-example">SubMenu 1</div>
                        </div>
                    </div>
                    <div>
                        <span class="number-btn">3</span>
                        <div class="btn-example">Boton 3</div>
                    </div>
                    <div>
                        <span class="number-btn">4</span>
                        <div class="btn-example">Boton 4</div>
                    </div>
                </div>
            </div>

            <!-- Contenedor de la vista previa del menu -->
            <div class="menu_preview">
                
            </div>
            
        </div>
        
    </div>




    <?php
// Se ejecuta el código si existe una petición HTTP POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados en la solicitud POST
    $data = json_decode(file_get_contents("php://input"), true);
    // Preparar los datos del título para la inserción en la base de datos
    $titulo_menu = $mysqli->real_escape_string($data['titulo_menu']);

    // Verificar si el título del menú ya existe
    $sqlTitulo = "SELECT ID FROM menu_crear WHERE titulo_menu = '$titulo_menu'";
    $resultTitulo = $mysqli->query($sqlTitulo);

    if ($resultTitulo->num_rows > 0) {
        // Obtener el ID del menú existente
        $fila = $resultTitulo->fetch_assoc();
        $id_menu = $fila['ID'];

        // Actualizar el título del menú si es necesario
        $sqlUpdateMenu = "UPDATE menu_crear SET titulo_menu = '$titulo_menu' WHERE ID = $id_menu";
        $mysqli->query($sqlUpdateMenu);

        // Obtener las columnas existentes para el menú
        $sqlColumns = "SELECT ID FROM columnas WHERE idMenu = $id_menu";
        $resultColumns = $mysqli->query($sqlColumns);
        $existingColumns = [];
        while ($row = $resultColumns->fetch_assoc()) {
            $existingColumns[$row['ID']] = $row['ID'];
        }

        // Iterar por cada columna enviada en los datos
        foreach ($data['menuData'] as $columna) {
            $nombre_columna = $mysqli->real_escape_string($columna['name']);
            $url_columna = $mysqli->real_escape_string($columna['url']);

            // Verificar si la columna ya existe
            if (isset($columna['id']) && in_array($columna['id'], $existingColumns)) {
                // Actualizar la columna existente
                $column_id = $columna['id'];
                $sqlUpdateColumn = "UPDATE columnas SET nombre_columna = '$nombre_columna', url_columna = '$url_columna' WHERE ID = $column_id";
                $mysqli->query($sqlUpdateColumn);
                unset($existingColumns[$column_id]);
            } else {
                // Insertar nueva columna
                $columnSql = "INSERT INTO columnas (idMenu, nombre_columna, url_columna) VALUES ('$id_menu', '$nombre_columna', '$url_columna')";
                $mysqli->query($columnSql);
                $column_id = $mysqli->insert_id;
            }

            // Manejar las subcolumnas
            $existingSubColumns = [];
            if (isset($columna['subColumns'])) {
                $sqlSubColumns = "SELECT ID FROM subcolumnas WHERE idColumna = $column_id";
                $resultSubColumns = $mysqli->query($sqlSubColumns);
                while ($row = $resultSubColumns->fetch_assoc()) {
                    $existingSubColumns[$row['ID']] = $row['ID'];
                }

                foreach ($columna['subColumns'] as $subcolumna) {
                    $nombre_subcolumna = $mysqli->real_escape_string($subcolumna['name']);
                    $url_subcolumna = $mysqli->real_escape_string($subcolumna['url']);

                    if (isset($subcolumna['id']) && in_array($subcolumna['id'], $existingSubColumns)) {
                        // Actualizar la subcolumna existente
                        $subcolumn_id = $subcolumna['id'];
                        $sqlUpdateSubColumn = "UPDATE subcolumnas SET nombre_subcolumna = '$nombre_subcolumna', url_subcolumna = '$url_subcolumna' WHERE ID = $subcolumn_id";
                        $mysqli->query($sqlUpdateSubColumn);
                        unset($existingSubColumns[$subcolumn_id]);
                    } else {
                        // Insertar nueva subcolumna
                        $subcolumnSql = "INSERT INTO subcolumnas (idColumna, nombre_subcolumna, url_subcolumna) VALUES ('$column_id', '$nombre_subcolumna', '$url_subcolumna')";
                        $mysqli->query($subcolumnSql);
                    }
                }

                // Eliminar subcolumnas no presentes en los datos recibidos
                foreach ($existingSubColumns as $subcolumn_id) {
                    $sqlDeleteSubColumn = "DELETE FROM subcolumnas WHERE ID = $subcolumn_id";
                    $mysqli->query($sqlDeleteSubColumn);
                }
            }
        }

        // Eliminar columnas no presentes en los datos recibidos
        foreach ($existingColumns as $column_id) {
            $sqlDeleteColumn = "DELETE FROM columnas WHERE ID = $column_id";
            $mysqli->query($sqlDeleteColumn);
            $sqlDeleteSubColumns = "DELETE FROM subcolumnas WHERE idColumna = $column_id";
            $mysqli->query($sqlDeleteSubColumns);
        }

        http_response_code(200);
        exit('Datos actualizados correctamente.');
    } else {
        // Crear un nuevo menú si no existe
        $sqlInsertMenu = "INSERT INTO menu_crear (titulo_menu) VALUES ('$titulo_menu')";
        if ($mysqli->query($sqlInsertMenu) === TRUE) {
            $menu_id = $mysqli->insert_id;

            foreach ($data['menuData'] as $columna) {
                $nombre_columna = $mysqli->real_escape_string($columna['name']);
                $url_columna = $mysqli->real_escape_string($columna['url']);
                $columnSql = "INSERT INTO columnas (idMenu, nombre_columna, url_columna) VALUES ('$menu_id', '$nombre_columna', '$url_columna')";
                if ($mysqli->query($columnSql) === TRUE) {
                    $column_id = $mysqli->insert_id;

                    if (isset($columna['subColumns'])) {
                        foreach ($columna['subColumns'] as $subcolumna) {
                            $nombre_subcolumna = $mysqli->real_escape_string($subcolumna['name']);
                            $url_subcolumna = $mysqli->real_escape_string($subcolumna['url']);
                            $subcolumnSql = "INSERT INTO subcolumnas (idColumna, nombre_subcolumna, url_subcolumna) VALUES ('$column_id', '$nombre_subcolumna', '$url_subcolumna')";
                            if ($mysqli->query($subcolumnSql) !== TRUE) {
                                http_response_code(500);
                                exit('Error al insertar subcolumna: ' . $mysqli->error);
                            }
                        }
                    }
                } else {
                    http_response_code(500);
                    exit('Error al insertar columna: ' . $mysqli->error);
                }
            }

            http_response_code(200);
            exit('Datos insertados correctamente.');
        } else {
            http_response_code(500);
            exit('Error al insertar título: ' . $mysqli->error);
        }
    }
}
?>
    
    <div id="confirmacion" class="modelo">
        <div class="modelo-contenido">
            <p>¿Antes de crear un nuevo menu, deseas guardar los datos?</p>
            <button id="btnSi" class="btnSi">Sí</button>
            <button id="btnNo" class="btnNo">No</button>
        </div>
    </div>

    <div id="borrar" class="modelo">
        <div class="modelo-contenido">
            <p>¿Estas seguro?,se perderá todo el contenido no guardado.</p>
            <button id="btnSiBorrar" class="btnSi">Sí</button>
            <button id="btnNoBorrar" class="btnNo">No</button>
        </div>
    </div>

    <div id="redireccionar" class="modelo">
        <div class="modelo-contenido">
            <p>¿Estas seguro?,se perderá todo el contenido no guardado.</p>
            <button id="btnSiRedireccionar" class="btnSi">Sí</button>
            <button id="btnNoRedireccionar" class="btnNo">No</button>
        </div>
    </div>

</body>
</html>

<?php
    // Cierra la conexión a la base de datos
    $mysqli->close();
?>
<!-- -------------------------------------------------------------------------------------------------------------
   -------------------------------------- FIN ITred Spa crear.php ------------------------------------------------
   --------------------------------------------------------------------------------------------------------------->

<!--
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Agui Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
-->