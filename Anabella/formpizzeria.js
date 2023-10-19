function validarForm(){
  var nombre = document.getElementById("nombre");
  var apellidos = document.getElementById("apellidos");
  var direccion = document.getElementById("direccion");
  
  // Validar campos de datos obligatorios
  if (nombre.value.trim() === "" || apellidos.value.trim() === "" || direccion.value.trim() === "") {
    alert("Los campos de datos son obligatorios");
    return false;
  }

  var numeroTelefono = telefono.value.trim();

  // Validar que el número de teléfono es obligatorio
  if (numeroTelefono === "") {
    alert("El campo de teléfono es obligatorio");
    return false;
  }

  // Validar que el número de teléfono tiene exactamente 9 dígitos
  if (numeroTelefono.length !== 9 || isNaN(numeroTelefono)) {
    alert("El número de teléfono debe tener nueve dígitos");
    return false;
  }

  // Validar que se haya elegido un tamaño de pizza
  var tamanio = document.getElementsById("tamanio");
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

  // Validar que se haya seleccionado al menos un ingrediente para la pizza
  var ingredientes = document.getElementsById("ingrediente");
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

  // Si todas las validaciones pasan, el formulario se envía
  return true;   
  }


  function mostrarTotal() {
    let precioPizza = 0;

    // Obtener el tamaño de la pizza seleccionado
    var tamanio = document.getElementsByName("tamanio");
    for (let i = 0; i < tamanio.length; i++) {
      if (tamanio[i].checked) {
        if (tamanio[i].value === "pequena") {
          precioPizza = 5;
        } 
        else if (tamanio[i].value === "mediana") {
          precioPizza = 10;
        } 
        else if (tamanio[i].value === "grande") {
          precioPizza = 15;
        }
        break;
      }
    }

    // Obtener los ingredientes seleccionados
    let ingredientes = document.getElementsByName("ingredientes");
    let ingredientesPrecio = 0;
    for (let i = 0; i < ingredientes.length; i++) {
      if (ingredientes[i].checked) {
        ingredientesPrecio += 1;
      }
    }

    let precioTotal = precioPizza + ingredientesPrecio;
    document.getElementById("precioTotal").textContent = precioTotal + "€";
  }

  
   

  



