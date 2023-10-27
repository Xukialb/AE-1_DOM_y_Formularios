function validarForm(){
      var nombre = document.getElementById("nombre");      
      var direccion = document.getElementById("direccion");
      var telefono = document.getElementById("telefono");
      var email = document.getElementById("email");
  
  // Valido campos de datos obligatorios
      if (nombre.value.trim() === "" || direccion.value.trim() === "") {
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

  //Obtengo el valor del campo y eleimino espacios en blanco . Valido que el email es obligatorio
      if (email.value.trim()==="") {
          alert("El campo de email es obligatorio");
          return false;
}

  //Valido que los campos ingresados en el email son válidos
      var correo = /^[A-Za-z0-9._-]+@[a-z]+\.[a-z]+$/;

  //Agrego una condición que permita mostrar un mensaje de alerta cuando el correo no es válido
      if (!correo.test(email.value.trim())) {
          alert("Ingresa una dirección de correo electrónico válida");
          return false;
      }  

// Valido que se haya elegido un tamaño de pizza
      var tamanio = document.getElementsByName("tamanio");
      var seleccionTam = false;

  //Con el bucle for me aseguro de recorrer el array de tamaños
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

    //Invoco a la función que me permite mostrar el total de la compra
     mostrarTotal();
  
  // Si todas las validaciones pasan, el formulario se envía
  return true;   
  }

  //Defino una función que me permite calcular el precio de la pizza según ingredientes y tamaño
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

//Con window onload llamo a la función validar form cuando se carga la página
window.onload= function(){  
    //LLamo a la función cuando la página esté cargada
    pinchar.onclick=validarForm;

    //Añado algo de CSS al formulario
    document.body.style.textAlign = "left";
    document.body.style.width = "30%";
    document.body.style.margin = "auto";
    document.body.style.backgroundColor = "#FFB748";

  
}

  



   

  



