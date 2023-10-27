function validarForm(){
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var direccion = document.getElementById("direccion");
    var email = document.getElementById("email");
  
  // Valido campos de datos obligatorios
    if (nombre.value.trim() === "" || apellidos.value.trim() === "" || direccion.value.trim() === "") {
        alert("Los campos de datos son obligatorios");
        return false;
    }

  var numeroTelefono = telefono.value.trim();
  var numTel = /^[0-9]{9}/;

  // Valido que el número de teléfono es obligatorio
    if (numeroTelefono === "") {
        alert("El campo de teléfono es obligatorio");
        return false;
  }

  // Valido que el número de teléfono tiene exactamente 9 dígitos
    if (!numTel.test(numeroTelefono)){
        alert("El número de teléfono debe tener nueve dígitos");
        return false;
  }

  //Obtengo el valor del campo y eleimino espacios en blanco
  var dirEmail = email.value.trim();

  // Validar que el email es obligatorio
  if (dirEmail === "") {
    alert("El campo de email es obligatorio");
    return false;
  }

  //Valido que los campos ingresados en el email son válidos
  var correo = /^[A-Za-z][0-9]($%&-_.)+@+[a-z].[a-z]/;

  if (dirEmail.length !== correo) {
    alert("Ingresa una dirección de correo electrónico válida");
    return false;
}  
  
// Valido que se haya elegido un tamaño de pizza
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

  // Valido que se haya seleccionado al menos un ingrediente para la pizza
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

  mostrarTotal();
  
  // Si todas las validaciones pasan, el formulario se envía
  return true;   
  }

  function mostrarTotal() {
      let precioPizza = 0;

    // Obtengo el tamaño de la pizza seleccionado
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

    // Obtengo los ingredientes seleccionados
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

window.onload= function(){
  //Añado algo de CSS al formulario
    document.body.style.textAlign = "left";
    document.body.style.width = "30%";
    document.body.style.margin = "auto";
    document.body.style.backgroundColor = "#FFB748";

  //LLamo a la función cuando la página esté cargada
    pinchar.onclick=validarForm;
}

  



   

  



