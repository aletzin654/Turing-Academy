<?php
    require './index-view.php';
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $conexion = conectar();
        if($conexion) {
            $correo = strtoupper(filter_var($_POST['email'], FILTER_SANITIZE_STRING));
            $password = hash("sha256",strtoupper(filter_var($_POST['password'], FILTER_SANITIZE_STRING)));
            $query = sprintf('SELECT nombreAdmin FROM admin WHERE correoAdmin="'.$correo.'" AND contraseniaAdmin="'.$password.'";');
            var_dump($query);
            $resultado = mysqli_query($conexio,$query);
            if(mysqli_num_rows($resultado)) {
                session_start();
                $fila = mysqli_fetch_assoc($resultado);
                $_SESSION["usuario"] = $fila['nombreAdmin'];
                desconectar($conexion);
                header('Location: ./admin-index.php');
            }else{
                echo '
                <script>
                    alert("Correo o contraseña incorrectos");
                </script>';
                desconectar($conexion);
            }
        }
    }
    
?> 
