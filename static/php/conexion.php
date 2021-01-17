<?php 
    
    function conectar() {
        $conexion = mysqli_connect("localhost", "turing","Turing123456$","tutoresescom");
        return $conexion;
    }

    function desconectar($conexion) {
        mysqli_close($conexion);
    }

?>