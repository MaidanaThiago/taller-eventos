const miDiv = document.getElementById("miDiv");
const miBoton = miDiv.querySelector("button");


miBoton.addEventListener("click", function(event) {
    // Detiene la propagación del evento para que no llegue al div
    event.stopPropagation();
    alert("¡Hola! Soy el botón");
});

miDiv.addEventListener("click", function() {
    alert("¡Hola! Soy el div");
});