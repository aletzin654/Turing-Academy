let curp = document.getElementById("curp");
let curpError = document.getElementById("curpError");

let nombre = document.getElementById("nombre");
let nombreError = document.getElementById("nombreError");

function validarCampoLleno(valorInput, labelError) {
    if (!valorInput.length) {
        labelError.innerHTML = "El campo es obligatorio";
        return 0;
    }
    labelError.innerHTML = "";
    return 1;
}

function validarCURP(curp, label) {
    let curpRegex = new RegExp("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$");
    if (!curpRegex.test(curp) && validarCampoLleno(curp, label)) {
        label.innerHTML = "Ingresa un CURP válido";
        return 0;
    }
    return 1;
}

function validarLetra(valorInput, label) {
    let alfaRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (!alfaRegex.test(valorInput) && validarCampoLleno(valorInput, label)) {
        label.innerHTML = "Este campo solo acepta letras";
        return 0;
    }
    return 1;
}

function validarLongitud(valorInput, label, longitud) {
    if (valorInput.length > longitud && validarCampoLleno(valorInput, label)) {
        label.innerHTML = "Solo se admiten " + longitud + " caracteres en este campo";
        return 0;
    }
    return 1;
}

function validarTelefono(telefono, label) {
    let telefonoRegex = new RegExp("^([+][1-9]{2})?[0-9]{8,14}$");
    if (!telefonoRegex.test(telefono) && validarCampoLleno(telefono, label)) {
        label.innerHTML = "Ingresa un teléfono válido";
        return 0;
    }
    return 1;
}

function limpiarLabels(labels) {
    for (let i = 0; i < labels.length; i++) {
        labels[i].innerHTML = "";
    }
}

function validarDatosUsuario() {
    let valido = 1;
    let labels = document.getElementsByClassName("errorLabel");
    limpiarLabels(labels);
    valido *= validarCampoLleno(curp.value, curpError);
    valido *= validarCampoLleno(nombre.value, nombreError);

    valido *= validarCURP(curp.value, curpError);

    valido *= validarLetra(nombre.value, nombreError);

    if(!valido) {
        Swal.fire('Campos no válidos', '', 'error');
    }else {
        document.registrarUsuario.submit();
    }
}
