// FUNCIONES

function validarForm() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var direccion = document.getElementById("direccion");
    var telefono = document.getElementById("telefono");
    var email = document.getElementById("email");

    // Validacion de campos de texto
    if (nombre.value.trim() === "" || apellidos.value.trim() === "" || direccion.value.trim() === ""
        || telefono.value.trim() === "" || email.value.trim() === "") {
        alert("Los campos nombre, apellidos, direccion, telefono y email son obligatorios");
        return false;
    }


    // Validacion de tamaño de pizza
    var tamanio = document.getElementsByName("tamanio");
    var seleccionTam = false;
    for (var i = 0; i < tamanio.length; i++) {
        if (tamanio[i].checked) {
            seleccionTam = true;
            break;
        }
    }
    if (!seleccionTam) {
        alert("Debe seleccionar un tamaño de pizza");
        return false;
    }

    // Validacion de al menos un ingrediente
    var ingredientes = document.getElementsByName("ingrediente");
    var seleccionIng = false;
    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            seleccionIng = true;
            break;
        }
    }
    if (!seleccionIng) {
        alert("Debe seleccionar al menos un ingrediente");
        return false;
    }

    calcularPrecio();
    // Si todas las validaciones pasan, el formulario se envía
    return true;
}

function calcularPrecio() {
    let precioPizza = 0;

    // Obtener el tamaño de la pizza seleccionado
    var tamanio = document.getElementsByName("tamanio");

    for (let i = 0; i < tamanio.length; i++) {
        if (tamanio[i].checked) {
            if (tamanio[i].value === "pequenia") {
                precioPizza = 5;
            }
            else if (tamanio[i].value === "mediana") {
                precioPizza = 10;
            }
            else if (tamanio[i].value === "grande") {
                precioPizza = 15;
            }
        }
    }

    // Obtener los ingredientes seleccionados
    var ingredientes = document.getElementsByName("ingrediente");

    let ingredientesPrecio = 0;

    for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            ingredientesPrecio += 1;
        }
    }

    let precioTotal = precioPizza + ingredientesPrecio;
    alert("El importe es: " + precioTotal + "€");
}

// MANEJADOR DE EVENTOS

window.onload = function () {

    //LLamo a la función cuando la página esté cargada
    procesar.onclick = validarForm;
}








