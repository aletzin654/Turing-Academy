let mesAnuncios = document.getElementById("mesAnuncios");
let fecha = new Date();
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
mesAnuncios.innerHTML = meses[fecha.getMonth()];