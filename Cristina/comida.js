//Funccion para ejecutar cuando se ha cargado el documento
function formDOM(){
    // let contenido = document.getElementById("contenido")
    // Formulario
    let formulario =document.createElement("form");
    
    formulario.id = "formulario";
    formulario.name ="formulario";
    formulario.action ="urlServidor";
    formulario.method = "get";
    
    let nombreForm = document.createElement("h2");
    nombreForm.textContent= "Hacer Pedido";
    
    let  nombreLabel = document.createElement("label");
        nombreLabel.textContent = "Nombre: ";
        let nombreInput = document.createElement("input");
        nombreInput.setAttribute("type", "text");
        nombreInput.setAttribute("name", "nombre");
        nombreInput.setAttribute("placeholder", "Escribe tu nombre");
    
      let apellidosLabel = document.createElement("label");
        apellidosLabel.textContent = "Apellidos: ";
        let apellidosInput = document.createElement("input");
        apellidosInput.setAttribute("type", "text");
        apellidosInput.setAttribute("name", "apellidos");
        apellidosInput.setAttribute("placeholder", "Escribe tus apellidos");
    
      let dniLabel = document.createElement("label");
        dniLabel.textContent = "DNI: ";
        let dniInput = document.createElement("input");
        dniInput.setAttribute("type", "text");
        dniInput.setAttribute("name", "dni");
        dniInput.setAttribute("placeholder", "Escribe tu DNI");
    
      let direccionLabel = document.createElement("label");
        direccionLabel.textContent = "Dirección: ";
        let direccionInput = document.createElement("input");
        direccionInput.setAttribute("type", "text");
        direccionInput.setAttribute("name", "direccion");
        direccionInput.setAttribute("placeholder", "Escribe tu dirección");
    
      let telefonoLabel = document.createElement("label");
        telefonoLabel.textContent = "Teléfono: ";
        let telefonoInput = document.createElement("input");
        telefonoInput.setAttribute("type", "text");
        telefonoInput.setAttribute("name", "telefono");
        telefonoInput.setAttribute("placeholder", "Escribe tu teléfono");
    
    
    
    let radionombre = document.createElement("h3");
    radionombre.textContent = "Primer plato";
    let radio1 =document.createElement("input");
    radio1.type = "radio";
    radio1.name = "opciones";
    radio1.value= "opcion1";
    let radio2 =document.createElement("input");
    radio2.type = "radio";
    radio2.name = "opciones";
    radio2.value= "opcion2";
    let radio3 =document.createElement("input");
    radio3.type = "radio";
    radio3.name = "opciones";
    radio3.value= "opcion3";
    let radio4 =document.createElement("input");
    radio4.type = "radio";
    radio4.name = "opciones";
    radio4.value= "opcion4";
    
    let radionombre2 = document.createElement("h3");
    radionombre2.textContent = "Segundo plato";
    let radio5 =document.createElement("input");
    radio5.type = "radio";
    radio5.name = "opciones";
    radio5.value= "opcion5";
    let radio6 =document.createElement("input");
    radio6.type = "radio";
    radio6.name = "opciones";
    radio6.value= "opcion6";
    let radio7 =document.createElement("input");
    radio7.type = "radio";
    radio7.name = "opciones";
    radio7.value= "opcion7";
    let radio8 =document.createElement("input");
    radio8.type = "radio";
    radio8.name = "opciones";
    radio8.value= "opcion8";
    
    let checknombre = document.createElement("h2");
    checknombre.textContent ="Bebidas";
    let checkbox1 =document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.value = "checkbox1";
    let checkbox2 =document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.value = "checkbox2";
    let checkbox3 =document.createElement("input");
    checkbox3.type = "checkbox";
    checkbox3.value = "checkbox3";
    let checkbox4 =document.createElement("input");
    checkbox4.type = "checkbox";
    checkbox4.value = "checkbox4";
    let checkbox5 =document.createElement("input");
    checkbox5.type = "checkbox";
    checkbox5.value = "checkbox5";
    
    let selectnombre = document.createElement ("h3");
    selectnombre.textContent = "Recogida";
    let select = document.createElement ("select");
    let option1 =document.createElement ("option");
    option1.text = "Restaurante";
    let option2 = document.createElement("option");
    option2.text = "Domicilio";
    
    let nombrearea = document.createElement("h4");
    nombrearea.textContent ="Deje su nota aqui"
    let textarea = document.createElement("textarea");
    textarea.rows = 6;
    textarea.cols =50;
    
    
    formulario.appendChild(nombreForm);
    formulario.appendChild(nombreLabel);
    formulario.appendChild(nombreInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(apellidosLabel);
    formulario.appendChild(apellidosInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(dniLabel);
    formulario.appendChild(dniInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(direccionLabel);
    formulario.appendChild(direccionInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(telefonoLabel);
    formulario.appendChild(telefonoInput);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(radionombre)
    formulario.appendChild(radio1);
    formulario.appendChild(document.createTextNode("Kebab"));
    formulario.appendChild(radio2);
    formulario.appendChild(document.createTextNode("Pollo"));
    formulario.appendChild(radio3);
    formulario.appendChild(document.createTextNode("Costillas"));
    formulario.appendChild(radio4);
    formulario.appendChild(document.createTextNode("Hamburguesa"));
    formulario.appendChild(radionombre2)
    formulario.appendChild(radio5);
    formulario.appendChild(document.createTextNode("Patas"));
    formulario.appendChild(radio6);
    formulario.appendChild(document.createTextNode("Ensalada"));
    formulario.appendChild(radio7);
    formulario.appendChild(document.createTextNode("Arroz"));
    formulario.appendChild(radio8);
    formulario.appendChild(document.createTextNode("Pasta"));
    formulario.appendChild(checknombre)
    formulario.appendChild(checkbox1);
    formulario.appendChild(document.createTextNode("Vino"));
    formulario.appendChild(checkbox2);
    formulario.appendChild(document.createTextNode("CocaCola"));
    formulario.appendChild(checkbox3);
    formulario.appendChild(document.createTextNode("Aquarius"));
    formulario.appendChild(checkbox4);
    formulario.appendChild(document.createTextNode("Fanta"));
    formulario.appendChild(checkbox5);
    formulario.appendChild(document.createTextNode("Pepsi"));
    formulario.appendChild(selectnombre);
    select.appendChild(option1);
    select.appendChild(option2)
    formulario.appendChild(select);
    formulario.appendChild(nombrearea);
    formulario.appendChild(textarea);
    
    document.body.appendChild(formulario);
      }
    window.onload = formDOM;
    
    