
// CREAMOS LA FUNCION QUE GENERA EL FORMULARIO
function crearFormularioDOM(){

    // Creamos el formulario
    let formulario = document.createElement("form");

    // Atributos del formulario
    formulario.name = "formulario";
    formulario.id = "formulario";
    formulario.action = "urlServidor";
    formulario.method = "post";

    // Campo de texto de texto de titulo
    let titulo = document.createElement("h1");
    titulo.textContent = "Hotel Wakanda";
    titulo.classList = "titulo";

    // Campo de texto de texto datos reserva
    let titres = document.createElement("h2");
    titres.textContent = "Formulario de datos para la reserva:"

    // Campos de texto del formulario
    let dniInput = document.createElement("input");
    dniInput.type = "text";
    dniInput.placeholder = "DNI";
    dniInput.classList = "block";
    
    let nombreInput = document.createElement("input");
    nombreInput.type = "text";
    nombreInput.placeholder = "Nombre";
    nombreInput.classList = "block";
    
    let apellidosInput = document.createElement("input");
    apellidosInput.type = "text";
    apellidosInput.placeholder = "Apellidos";
    apellidosInput.classList = "block";
    
    let direccionInput = document.createElement("input");
    direccionInput.type = "text";
    direccionInput.placeholder = "Dirección";
    direccionInput.classList = "block";
    
    let telefonoInput = document.createElement("input");
    telefonoInput.type = "text";
    telefonoInput.placeholder = "Teléfono";
    telefonoInput.classList = "block";

    let emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.placeholder = "Email";
    emailInput.classList = "block";
    
    // Campo de texto de radio buttons 1
    let radiotit = document.createElement("h3");
    radiotit.textContent = "Tipo de Habitación:"

    // Radio buttons 1
    let radio1 = document.createElement("input");
    radio1.type = "radio";
    radio1.name = "opciones";
    radio1.value = "Opción 1";
    radio1.classList = "flexbox";
        
    let radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.name = "opciones";
    radio2.value = "Opción 2";
    radio2.classList = "flexbox";

    let radio3 = document.createElement("input");
    radio3.type = "radio";
    radio3.name = "opciones";
    radio3.value = "Opción 3";
    radio3.classList = "flexbox";

    let radio4 = document.createElement("input");
    radio4.type = "radio";
    radio4.name = "opciones";
    radio4.value = "Opción 4";
    radio4.classList = "flexbox";

    // Campo de texto de radio buttons 2
    let radiotit2 = document.createElement("h3");
    radiotit2.textContent = "Metodo de pago:"

    // Radio buttons 2
    let radio5 = document.createElement("input");
    radio5.type = "radio";
    radio5.name = "opciones2";
    radio5.value = "Opción 5";
    radio5.classList = "flexbox";
            
    let radio6 = document.createElement("input");
    radio6.type = "radio";
    radio6.name = "opciones2";
    radio6.value = "Opción 6";
    radio6.classList = "flexbox";
    
    let radio7 = document.createElement("input");
    radio7.type = "radio";
    radio7.name = "opciones2";
    radio7.value = "Opción 7";
    radio7.classList = "flexbox";
    
    let radio8 = document.createElement("input");
    radio8.type = "radio";
    radio8.name = "opciones2";
    radio8.value = "Opción 8";
    radio8.classList = "flexbox";

    // Campo de texto de checkboxes
    let checktit = document.createElement("h3");
    checktit.textContent = "Extras:"
    
    // Checkboxes
    let checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.value = "Checkbox 1";
    checkbox1.classList = "flexbox";
    
    let checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.value = "Checkbox 2";
    checkbox2.classList = "flexbox";
    
    let checkbox3 = document.createElement("input");
    checkbox3.type = "checkbox";
    checkbox3.value = "Checkbox 3";
    checkbox3.classList = "flexbox";
    
    let checkbox4 = document.createElement("input");
    checkbox4.type = "checkbox";
    checkbox4.value = "Checkbox 4";
    checkbox4.classList = "flexbox";
    
    let checkbox5 = document.createElement("input");
    checkbox5.type = "checkbox";
    checkbox5.value = "Checkbox 5";
    checkbox5.classList = "flexbox";  

    // Campo de texto de checkboxes 2
    let checktit2 = document.createElement("h3");
    checktit.textContent = "Extras:"
    
    // Checkboxes
    let checkbox6 = document.createElement("input");
    checkbox6.type = "checkbox";
    checkbox6.value = "Checkbox 6";
    checkbox6.classList = "flexbox";
    
    let checkbox7 = document.createElement("input");
    checkbox7.type = "checkbox";
    checkbox7.value = "Checkbox 7";
    checkbox7.classList = "flexbox";    

    // Campo de texto de selects
    let selectit = document.createElement("h3");
    selectit.textContent = "Tipo de pensión:"
    
    // Campo select
    let select = document.createElement("select");
    
    let option1 = document.createElement("option");
    option1.text = "Sólo Alojamiento";
    
    let option2 = document.createElement("option");
    option2.text = "Alojamiento y desayuno";
    
    let option3 = document.createElement("option");
    option3.text = "Media pensión";

    let option4 = document.createElement("option");
    option4.text = "Pensión completa";

    let option5 = document.createElement("option");
    option5.text = "Todo incluido";

    // Campo de texto de Text Area
    let TAreatit = document.createElement("h3");
    TAreatit.textContent = "Observaciones / Sugerencias:"
    
    // Text area
    let textarea = document.createElement("textarea");
    textarea.rows = 4;
    textarea.cols = 50;
    textarea.classList = "block";

    // Imágenes
    let imagen1 = document.createElement("img");
    imagen1.src = "img/imagen1.jpg";
    imagen1.classList = "img";
        
    let imagen2 = document.createElement("img");
    imagen2.src = "img/imagen2.jpg";
    imagen2.classList = "img";
    
    // Agregar elementos al formulario
    formulario.appendChild(titulo);
    formulario.appendChild(titres);

    formulario.appendChild(dniInput);
    formulario.appendChild(nombreInput);
    formulario.appendChild(apellidosInput);
    formulario.appendChild(direccionInput);
    formulario.appendChild(telefonoInput);
    formulario.appendChild(emailInput);

    formulario.appendChild(radiotit);    
    formulario.appendChild(radio1);
    formulario.appendChild(document.createTextNode("Individual"));
    formulario.appendChild(radio2);
    formulario.appendChild(document.createTextNode("Doble"));
    formulario.appendChild(radio3);
    formulario.appendChild(document.createTextNode("Triple"));
    formulario.appendChild(radio4);
    formulario.appendChild(document.createTextNode("Cuádruple"));

    formulario.appendChild(radiotit2);
    formulario.appendChild(radio5);
    formulario.appendChild(document.createTextNode("Tarjeta bancaria"));
    formulario.appendChild(radio6);
    formulario.appendChild(document.createTextNode("Efectivo"));
    formulario.appendChild(radio7);
    formulario.appendChild(document.createTextNode("Bizum"));
    formulario.appendChild(radio8);
    formulario.appendChild(document.createTextNode("Transferencia"));

    formulario.appendChild(checktit);    
    formulario.appendChild(checkbox1);
    formulario.appendChild(document.createTextNode("Cama adicional"));
    formulario.appendChild(checkbox2);
    formulario.appendChild(document.createTextNode("Cuna"));
    formulario.appendChild(checkbox3);
    formulario.appendChild(document.createTextNode("Terraza"));
    formulario.appendChild(checkbox4);
    formulario.appendChild(document.createTextNode("Mueble bar"));
    formulario.appendChild(checkbox5);
    formulario.appendChild(document.createTextNode("Caja fuerte"));

    formulario.appendChild(selectit);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    formulario.appendChild(select);

    formulario.appendChild(TAreatit);    
    formulario.appendChild(textarea);

    formulario.appendChild(imagen1);
    formulario.appendChild(imagen2);

    // Agregar el formulario al documento
    document.body.appendChild(formulario);
}

// CREAMOS EL MANEJADOR DE EVENTOS PARA QUE SE EJECUTE LA FUNCION "crerFormularioDOM" 
// CUANDO SE CARGUE LA WEB
window.onload = crearFormularioDOM;