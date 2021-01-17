<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Registrar Usuario</title>
    <link rel="shortcut icon" type="image/ico" href="./static/img/1486504816-coding-html-development-language-programming_81355.ico">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="./static/css/index.css">
    <link rel="stylesheet" href="./static/css/normalize.css">
    <link rel="stylesheet" href="./static/css/generales.css">
    <link rel="stylesheet" href="./static/css/nosotros.css">
</head>

<body>
    <h1>Registrar Usuario</h1>
    <form action="./static/php/registrar-usuario.php" method="POST" id="registrarUsuario" name="registrarUsuario">
        <p id="curpError" class="text-danger labelError"></p>
        <label for="">CURP</label>
        <input type="text" name="curp" id="curp">
        <p id="nombreError" class="text-danger labelError"></p>
        <label for="">Nombre</label>
        <input type="text" name="nombre" id="nombre">
        <button type="button" class="btn" onclick="validarDatosUsuario()">Enviar</button>
    </form>
    <script src="./static/js/registrar-usuario.js"></script>
</body>

</html>