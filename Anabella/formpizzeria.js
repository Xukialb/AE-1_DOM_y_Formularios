
    function cargarEstilo(){
    
    //Agrego algo de estilo a la página
    document.body.style.textAlign="left";
    document.body.style.width="50%";
    document.body.style.margin="auto";
    document.body.style.backgroundColor="#F6BB69";
    }

    function validarForm() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;

    if (nombre.trim() === "" || apellidos.trim() === "" || direccion.trim() === "" || telefono.trim() === "") {
        alert("[ERROR] Todos los campos de texto deben estar rellenos.");
        return false;
    }
    else
      return true;
}

  //Validando qie se haya elegido una opción para el radio  
  tamanio = document.getElementById("tamanio");
  var seleccion = false;
        for(var i=0; i<tamanio.length; i++) {
            if(tamanio[i].checked) {
                seleccion = true;
                break;
            }
        }
    
       if(!seleccionado) {
          alert("[ERROR] Debe seleccionar pequeña, mediana o grande)");
          return false;
      }


window.onload = function () {
    var formulario = document.getElementById("formulario");
    formulario.onsubmit = validarForm;
    cargarEstilo();

    }

    function mostarPrecio(){

      
    }
