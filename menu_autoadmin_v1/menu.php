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
    ------------------- INICIO ITred Spa menu.php --------------------
   --------------------------------------------------------------------------------------------------------------------- -->

   <?php 
    // Verifica si el parámetro 'page' está presente en la URL, si no está, usa 'prediseñado' como valor predeterminado
    $page = isset($_GET['page']) ? $_GET['page'] : 'prediseñado';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Define la codificación de caracteres para el documento -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Configura la vista para dispositivos móviles -->
    <title>Menú</title> <!-- Título de la página -->
    <link rel="stylesheet" href="css/menu.css"> <!-- Enlace al archivo CSS principal -->
    <!-- Enlace al archivo CSS dinámico, definido por la variable $css_file -->
    <link rel="stylesheet" href="<?php echo $css_file; ?>"> 
    <!-- Enlace al archivo JavaScript dinámico, definido por la variable $js_file -->
    <script src="<?php echo $js_file; ?>"></script>
</head>
<body>
    <button></button>
    <nav class="nav-template"> <!-- Sección de navegación -->
        <ul>
            <!-- Enlace al menú prediseñado, marca como activo si $page es 'prediseñado' -->
            <li><a href="menu.php?page=prediseñado"
                class="<?php echo ($page=='prediseñado') ? 'active' : '';?>">Menu Prediseñados</a></li>
            <!-- Enlace para crear un nuevo menú, marca como activo si $page es 'crear' -->
            <li><a href="menu.php?page=crear"
                class="<?php echo ($page=='crear') ? 'active' : '';?>">Crear Nuevo Menu</a></li>
            <!-- Enlace para modificar un menú, marca como activo si $page es 'modificar' -->
            <li><a href="menu.php?page=modificar"
                class="<?php echo ($page=='modificar') ? 'active' : '';?>">Modificar Menu</a></li>
            <!-- Enlace para eliminar un menú, marca como activo si $page es 'eliminar' -->
            <li><a href="menu.php?page=eliminar"
                class="<?php echo ($page=='eliminar') ? 'active' : '';?>">Eliminar Menu</a></li>
        </ul>
    </nav>
    
    <main>
        <?php 
            // Incluye el archivo PHP correspondiente según el valor de $page
            include 'php/'.$page.'.php';
        ?>
    </main>
</body>
</html>

<!-- ---------------------------------------------------------------------------------------------------------------------
   ---------------------- FIN ITred Spa menu.php -------------------------------------------------------------------------
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
