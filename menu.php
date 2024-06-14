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
    $page = isset($_GET['page']) ? $_GET['page'] : 'prediseñado';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú</title>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="<?php echo $css_file; ?>">
    <script src="<?php echo $js_file; ?>"></script>
    
</head>
<body>
    <button></button>
    <nav class="nav-template">
        <ul>
            <li><a href="menu.php?page=prediseñado"
                class="<?php echo ($page=='prediseñado') ? 'active' : '';?>">Menu Prediseñados</a></li>
            <li><a href="menu.php?page=crear"
                class="<?php echo ($page=='crear') ? 'active' : '';?>">Crear Nuevo Menu</a></li>
            <li><a href="menu.php?page=modificar"
                class="<?php echo ($page=='modificar') ? 'active' : '';?>">Modificar Menu</a></li>
            <li><a href="menu.php?page=eliminar"
                class="<?php echo ($page=='eliminar') ? 'active' : '';?>">Eliminar Menu</a></li>
        </ul>
    </nav>
    
    <main>
        <?php 
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
