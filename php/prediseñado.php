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
   ------------------- INICIO ITred Spa prediseñado.php ------------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------------------- -->


<!-- ------------------------
	 -- INICIO CONEXION BD --
     ------------------------ -->
	
<!-- INICIO PHP BASE DE DATOS ITred Spa -->
<?php
	//CONEXION A BASE DE DATOS ITred Spa
	$mysqli = new MYSQLI('localhost','root','','itredspa_bd');
?>

<?php
    // Cargar los archivos CSS y JS específicos para esta página
    $css_file = "css/prediseñado.css";
    $js_file = "js/prediseñado.js";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prediseñado</title>
    <!-- Se agregan dinamicamente las hojas de estilos -->
    <link rel="stylesheet" href="<?php echo $css_file; ?>">
    <!-- Se agregan dinamicamente los scripts de js -->
    <script src="<?php echo $js_file; ?>"></script>
</head>
<body>
<!--Contenido principal de la pagina-->

    <?php
        //Creamos la consulta SQL y la almacenamos.
        $query = "SELECT * FROM menu_crear";
        //Ejecutamos la consulta y su resultado lo guardamos en la variable &result.  
        $result= $mysqli->query($query);
    ?>	
    <!--Estructura de nuestro menu de seleccion-->
    <div id='menuSeleccion'>
        <label for="valor_id">Seleccionar Menú:</label>
        <select name="select" id="valor_id">
    <!--Aqui nuestro menu se carga con tantos option como menus guardados tenga nuestra base de datos-->
            <option data-id='1'>Seleccionar menu</option>
            <?php
                //Mientras haya filas disponibles en el resultado de la consulta.
                while ($row = $result->fetch_assoc()) {
                    // Se crea en blanco la variable selected 
                    $selected = '';
                    // Si existe el valor menu_titulo_id y es igual al id del select acutual
                    if (isset($_POST['menu_titulo_id']) && $_POST['menu_titulo_id'] == $row['ID']) {
                        // Queda la opcion seleccionada
                        $selected = 'selected';
                    }
                    // Si no se muestra normal, todas las demas opciones
                    echo "<option value='" . $row['ID'] . "' data-id='" . $row['ID'] . "' $selected>" . $row['titulo_menu'] . "</option>";
                }
            ?>
        </select>
    </div>

    <!-- Formulario para obtener el dato de menu_titulo_id -->
    <form method='POST' style='display:none;' id='form'>
        <input type="hidden" name='menu_titulo_id' id='formInput'>
    </form>

    <!--Mostramos los menu que estan en el <selected> permitiendo que el usuario pueda previsualizar-->
    <div id="menu-preview">
        <?php
            // Si existe menu_titulo_id
            if(!isset($_POST['menu_titulo_id'])){
                // Se inicializa la variable vacia
                $menu_titulo_id = '';
            } else {
                // Si no, se inicializa con el valor entregado
                $menu_titulo_id = $_POST['menu_titulo_id'];
                //Creamos la consulta SQL y la almacenamos.
                $menuQuery = "SELECT * FROM `menu_crear` WHERE ID = $menu_titulo_id";
                    //Ejecutamos la consulta y su resultado lo guardamos en la variable &result.  
                $menuResult= $mysqli->query($menuQuery); 

                // Array para almacenar los datos de menús, columnas y subcolumnas
                $data = array();

                // Mientras hayan datos en la consutla sql
                while ($rowMenu = $menuResult->fetch_assoc()) {
                    // Se almacenan los datos en variables
                    $menuId = $rowMenu['ID'];
                    $menuTitle = $rowMenu['titulo_menu'];

                    // Consulta para obtener las columnas de este menú
                    $columnQuery = "SELECT * FROM columnas WHERE idMenu = $menuId";
                    $columnResult = $mysqli->query($columnQuery);

                    // Array para almacenar las columnas de este menú
                    $columns = array();

                    // Mientras hayan datos en la consulta sql
                    while ($rowColumn = $columnResult->fetch_assoc()) {
                        // Se almacenan todos los datos en variables
                        $columnId = $rowColumn['ID'];
                        $columnMenuId = $rowColumn['idMenu'];
                        $columnName = $rowColumn['nombre_columna'];
                        $columnUrl = $rowColumn['url_columna'];
                    
                        // Consulta para obtener las subcolumnas de esta columna
                        $subcolumnQuery = "SELECT * FROM subcolumnas WHERE idColumna = $columnId";
                        $subcolumnResult = $mysqli->query($subcolumnQuery);

                        // Array para almacenar las subcolumnas de esta columna
                        $subcolumns = array();

                        // Mientras hayan datos en la conulta sql
                        while ($rowSubcolumn = $subcolumnResult->fetch_assoc()) {
                            // Se almacenna los datos entregados en variables
                            $subcolumnId = $rowSubcolumn['ID'];
                            $subcolumnColumnId = $rowSubcolumn['idColumna'];
                            $subcolumnName = $rowSubcolumn['nombre_subcolumna'];
                            $subcolumnUrl = $rowSubcolumn['url_subcolumna'];                            

                            // Agrega la subcolumna al array de subcolumnas
                            $subcolumns[] = array(
                            'ID' => $subcolumnId,
                            'ColumnId' => $subcolumnColumnId,
                            'nombre' => $subcolumnName,
                            'url' => $subcolumnUrl
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
            echo '</div>';
            echo '<div id="boton-enlace">';
            echo '<a href="menu.php?page=modificar&selectedMenuId='.$menu_titulo_id.'"><button>Modificar menú seleccionado</button></a>';
            echo '</div>';
        ?>
    <button>Aplicar al programa</button>
    <!-- Contenedor que muestra la información entregada por la consutla para que lo utilize el js -->
    <div id='output' style="display: none;"><?php echo json_encode($data); ?></div>
    
    <!--Este boton nos lleva a la pagina modificar al seleccionar un menú y presionar este boton nos lleva a está página-->

</body>
</html>

<?php
// Cierra la conexión a la base de datos
$mysqli->close();
?>
<!-- ---------------------------------------------------------------------------------------------------------------------
   ---------------------- FIN ITred Spa prediseñado.php ------------------------------------------------------------------
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