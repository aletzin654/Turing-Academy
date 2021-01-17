<?php
    require './conexion.php';
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $curp = $_POST['curp'];
        $nombre = $_POST['nombre'];
    }
?>