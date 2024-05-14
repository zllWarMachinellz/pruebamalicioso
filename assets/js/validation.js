let nombre, correo


while (!nombre || !correo) {
    nombre = prompt("Escribe tu nombre");
    correo = prompt("Escribe tu correo");
}



window.addEventListener('load', function () {
    const p_correo = document.getElementById("correo")
    const h1_nombre = document.getElementById("nombre")
    h1_nombre.textContent = `¡Hola ${nombre} caiste en la trampa!`;
    p_correo.textContent = `Tenemos tu correo: ${correo}`;
});
//const h1_nombre = document.getElementById("nombre").textContent = `¡Hola ${nombre} caiste en la trampa!`;


