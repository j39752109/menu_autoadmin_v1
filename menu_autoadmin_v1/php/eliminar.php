<!--
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Agui Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
-->

<!-- ---------------------------------------------------------------------------------------------------------------------
   ------------------- INICIO ITred Spa eliminar.php --------------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- -->

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
    $css_file = "css/eliminar.css";
    $js_file = "js/eliminar.js";

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar</title>
    <link rel="stylesheet" href="<?php echo $css_file; ?>">
    <script src="<?php echo $js_file; ?>"></script>
</head>
<body>
    <!--Generamos la consulta y la desplegamos en las variables para manejarla en el div-->
    <?php
        //Creamos la consulta SQL y la almacenamos.
        $query = "SELECT * FROM menu_crear";
        //Ejecutamos la consulta y su resultado lo guardamos en la variable &result.  
        $result= $mysqli->query($query);
    ?>
    <!--Estructura de nuestro menu de seleccion-->
    <div id='menuSeleccion'>
        <!--Nombre de nuestro menu-->
        <label for="valor_id">Seleccionar Menú:</label>
        <!--Elemento select importante para un drop down list-->
        <select name="select" id="valor_id">
        <!--Aqui nuestro menu se carga con tantos option como menus guardados tenga nuestra base de datos-->
            <option data-id='1'>Seleccionar menu</option>
            <?php
                //Mientras la consulta contenga registros
                while ($row = $result->fetch_assoc()) {
                    //Inicializamos la variable vacia
                    $selected = '';
                    // Verifica si se ha enviado un valor 'menu_titulo_id' a través de POST 
                    // y si ese valor es igual al ID de la fila actual en la iteración del bucle.
                    if (isset($_POST['menu_titulo_id']) && $_POST['menu_titulo_id'] == $row['ID']) {
                        // Si ambas condiciones se cumplen, establece la variable $selected en 'selected'.
                        $selected = 'selected';
                    }
                    // Imprime un elemento de opción para el menú desplegable.
                    // Si la variable $selected está definida y tiene el valor 'selected', 
                    // se agrega el atributo 'selected' al elemento de opción.
                    echo "<option value='" . $row['ID'] . "' data-id='" . $row['ID'] . "' $selected>" . $row['titulo_menu'] . "</option>";
                }
            ?>
        </select>
    </div>
    <!--Boton para eliminar-->
    <button onclick="deleteNav()">Eliminar Menú Seleccionado</button>
    
    

    <!-- Formulario para enviar el ID del menú seleccionado mediante POST -->
    <form method='POST' style='display:none;' id='form'>
        <input type="hidden" name='menu_titulo_id' id='formInput'>
    </form>

    <!--Mostramos los menu que estan en el <selected> permitiendo que el usuario pueda previsualizar-->
    <div id="menu-preview">
    <!-- <h2 id=></h2> -->
    <?php
        // Si el valor 'menu_titulo_id' no está establecido en la solicitud POST 
        if(!isset($_POST['menu_titulo_id'])){
            //asignamos una cadena vacía a la variable '$menu_titulo_id'
            $menu_titulo_id = '';
        } else {
            //Asignamos el valor
            $menu_titulo_id = $_POST['menu_titulo_id'];
            //Creamos la consulta SQL y la almacenamos.
            $menuQuery = "SELECT * FROM `menu_crear` WHERE ID = $menu_titulo_id";
                //Ejecutamos la consulta y su resultado lo guardamos en la variable &result.  
            $menuResult= $mysqli->query($menuQuery); 

            // Array para almacenar los datos de menús, columnas y subcolumnas
            $data = array();

            // Mientras haya filas disponibles en el resultado de la consulta '$menuResult', asigna cada fila a la variable '$rowMenu'
            while ($rowMenu = $menuResult->fetch_assoc()) {
                // Asigna el valor del campo 'ID' de la fila actual a la variable '$menuId'
                $menuId = $rowMenu['ID'];
                // Asigna el valor del campo 'titulo_menu' de la fila actual a la variable '$menuTitle'
                $menuTitle = $rowMenu['titulo_menu'];

                // Consulta para obtener las columnas de este menú
                $columnQuery = "SELECT * FROM columnas WHERE idMenu = $menuId";
                // Ejecuta la consulta almacenada en la variable '$columnQuery' en la base de datos y guarda el resultado en '$columnResult'
                $columnResult = $mysqli->query($columnQuery);

                // Array para almacenar las columnas de este menú
                $columns = array();

                // Mientras haya filas disponibles en el resultado de la consulta '$columnResult':
                while ($rowColumn = $columnResult->fetch_assoc()) {
                    //Asignamos las variables 
                    $columnId = $rowColumn['ID'];
                    $columnMenuId = $rowColumn['idMenu'];
                    $columnName = $rowColumn['nombre_columna'];
                    $columnUrl = $rowColumn['url_columna'];
                
                    // Consulta para obtener las subcolumnas de esta columna
                    $subcolumnQuery = "SELECT * FROM subcolumnas WHERE idColumna = $columnId";
                    //Ejecutamos la consulta y guardamos su resultado
                    $subcolumnResult = $mysqli->query($subcolumnQuery);

                    // Array para almacenar las subcolumnas de esta columna
                    $subcolumns = array();

                    // Mientras haya filas disponibles en el resultado de la consulta '$subcolumnResult':
                    while ($rowSubcolumn = $subcolumnResult->fetch_assoc()) {
                        //Asignamos valores
                        $subcolumnId = $rowSubcolumn['ID'];
                        $subcolumnColumnId = $rowSubcolumn['idColumna'];
                        $subcolumnName = $rowSubcolumn['nombre_subcolumna'];
                        $subcolumnUrl = $rowSubcolumn['url_subcolumna'];                            

                        // Agrega la subcolumna al array de subcolumnas
                        $subcolumns[] = array(
                        'ID' => $subcolumnId,
                        'ColumnId' => $subcolumnColumnId,
                        'nombre' => $subcolumnName,
                        'url' => $subcolumnUrl,
                        );
                    }

                    // Agrega la columna y sus subcolumnas al array de columnas
                    $columns[] = array(
                    'ID' => $columnId,
                    'MenuId' => $columnMenuId,
                    'nombre' => $columnName,
                    'url' => $columnUrl,
                    'subcolumnas' => $subcolumns
                    );
                }
                // Agrega el menú y sus columnas al array de datos
                $data[$menuTitle] = array(
                    'ID' => $menuId,
                    'titulo' => $menuTitle,
                    'columnas' => $columns
                );
            }
        }
        
        // Luego, imprimes los datos en un script dentro del archivo PHP, utilizando una variable global de JavaScript
        ?>
</div>

<!-- Un div oculto que contiene los datos del menú en formato JSON -->
<div id='output' style="display: none;"><?php echo json_encode($data); ?></div>


    <!--Borramos el elemento en la base de datos-->
    <?php
        //Verificamos si la solicitud entrante es de tipo DELETE.
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            //Decodificamos el contenido de la solicitud para poder acceder a los datos.
            $data = json_decode(file_get_contents("php://input"), true);
            //Obtener el ID del elemento a eliminar
            $idEliminar = $data['idMenu'];

            // Ejecutar la consulta para eliminar el elemento
            $sqlEliminar = "DELETE FROM menu_crear WHERE ID = $idEliminar";
            //Revisamos si la consulta se ejecuto de forma correcta.
            if ($mysqli->query($sqlEliminar)) {
                // Eliminación exitosa
                http_response_code(200);
            } else {
                // Error al eliminar
                http_response_code(500);
            }
       }
    ?>
    	 

    <div>
    </div>

</body>
</html>

<?php
    // Cierra la conexión a la base de datos
    $mysqli->close();
?>
<!-- ---------------------------------------------------------------------------------------------------------------------
   -------------------------------------- FIN ITred Spa eliminar.php -----------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- -->

<!--
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Agui Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
-->