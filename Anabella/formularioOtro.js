
function accederForm() {     

    // Creo el formulario
    var formulario = document.createElement("form");
    formulario.style.border = "solid pink";

    // Función para crear un campo de entrada con una etiqueta
    function crearContenedor(labelText, inputId, inputName, inputType, inputTitle) {

        let contenedor = document.createElement("div");

        let label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.textContent = labelText;

        let input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.name = inputName;
        input.required = true;
        input.title = inputTitle;

        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.style.padding = "5px";
        contenedor.style.marginBottom="7px";

        return contenedor;
    }

    // Agregar campos de entrada al formulario
    formulario.appendChild(crearContenedor("Nombre:", "nombre", "nombre", "text", "En este espacio debes escribir tu nombre"));
    formulario.appendChild(crearContenedor("Apellidos:", "apellidos", "apellidos", "text", "En este espacio debes escribir tu/s apellido/s"));
    formulario.appendChild(crearContenedor("DNI/NIE:", "dni", "dni", "text", "En este espacio debes escribir tu número de DNI o NIE"));
    formulario.appendChild(crearContenedor("Teléfono:", "tel", "tel", "text", "En este espacio debes escribir tu número de móvil"));
    formulario.appendChild(crearContenedor("email:", "email", "email", "text", "En este espacio debes escribir tu dirección de correo electrónico"));

    // Agregar opciones de radio para "Selecciona una de las ramas"
    let contenedorRadio1 = document.createElement("div");
    let labelRadio1 = document.createElement("label");
    labelRadio1.textContent = "Selecciona el tipo de ramo";

    let opciones1 = ["Bouquet", "Cascada", "Pomander", "Japonés"];

    for (let i = 0; i < opciones1.length; i++) {
        let inputOpciones1 = document.createElement("input");
        inputOpciones1.type = "radio";
        inputOpciones1.id = "opciones1" + (i + 1);
        inputOpciones1.name = "opciones1";
        inputOpciones1.value = opciones1[i];

        let opciones1Label = document.createElement('label');
        opciones1Label.setAttribute("for", "opciones1" + (i + 1));
        opciones1Label.textContent = opciones1[i];

        contenedorRadio1.appendChild(opciones1Label);
        contenedorRadio1.appendChild(inputOpciones1);
        contenedorRadio1.style.marginTop = "5px";
        contenedorRadio1.style.marginBottom = "20px";
    }

    formulario.appendChild(labelRadio1);
    formulario.appendChild(contenedorRadio1);

    
    //Agrego el checkbox y su etiqueta    
    
        let contenedorCheck = document.createElement("div");
        let labelCheck = document.createElement("label");
        labelCheck.textContent = "Selecciona las flores para el ramo";
    
        let flores = ["jazmín", "lirio", "orquídea", "rosa"];
    
        for (let z = 0; z < flores.length; z++) {
            let inputFlores = document.createElement("input");
            inputFlores.type = "checkbox";
            inputFlores.name = "flores";
            inputFlores.id = "flores" + z;
            inputFlores.value = flores[z];
            inputFlores.required = true;
    
            var labelCheckbox = document.createElement('label');
            labelCheckbox.setAttribute("for", "flores" + z);
            labelCheckbox.textContent = flores[z];
            labelCheckbox.style.padding="5px";
    
            contenedorCheck.appendChild(inputFlores);
            contenedorCheck.appendChild(labelCheckbox);
            contenedorCheck.style.marginTop = "5px";
            contenedorCheck.style.marginBottom="20px";
        }
    
        formulario.appendChild(labelCheck);
        formulario.appendChild(contenedorCheck);
    
    document.body.appendChild(formulario);

    // Agregar opciones de radio para "Selecciona la forma de pago"
    let contenedorRadio2 = document.createElement("div");
    let labelRadio2 = document.createElement("label");
    labelRadio2.textContent = "Selecciona forma de pago";

    let opciones2 = ["Transferencia", "Tarjeta", "Efectivo", "Bizum"];

    for (let j = 0; j < opciones2.length; j++) {
        let inputOpciones2 = document.createElement("input");
        inputOpciones2.type = "radio";
        inputOpciones2.id = "opciones2" + (j + 1);
        inputOpciones2.name = "opciones2";
        inputOpciones2.value = opciones2[j];

        let opciones2Label = document.createElement("label");
        opciones2Label.setAttribute("for", "opciones2" + (j + 1));
        opciones2Label.textContent = opciones2[j];

        contenedorRadio2.appendChild(opciones2Label);
        contenedorRadio2.appendChild(inputOpciones2);
        contenedorRadio2.style.marginTop = "5px";
        contenedorRadio2.style.marginBottom = "20px";
    }

    formulario.appendChild(labelRadio2);
    formulario.appendChild(contenedorRadio2);

    // Agregar el formulario al documento
    document.body.appendChild(formulario);

    //Agrego opciones radio con imágenes para seleccionar tipo de tarjeta
    let contImg = document.createElement("div");
    let labelCont = document.createElement("label");
    labelCont.textContent = "Selecciona la tarjeta para la ocasión"; // Corrección

// Creo el array de imágenes
    let imagenes = [{ id: "opIm1", value: "e1", imageSrc: "i1.jpg" }, { id: "opIm2", value: "e2", imageSrc: "imagen2.jpg" }];

// Creo la opción para cada imagen
        for (let i = 0; i < imagenes.length; i++) {
            let opcion = imagenes[i];

            let inputIm = document.createElement("input");
        inputIm.type = "radio";
        inputIm.id = opcion.id;
        inputIm.name = "opcion"; // Cambié el nombre para que los radio buttons sean del mismo grupo
        inputIm.value = opcion.value;

        let opImLabel = document.createElement('label');
        opImLabel.setAttribute("for", opcion.id);
        opImLabel.textContent = opcion.value;

        let imagen = document.createElement("img");
        imagen.src = opcion.imageSrc;
        imagen.style.padding = "5px";
        imagen.style.width="20%";
        imagen.style.height="30%";


        contImg.appendChild(opImLabel);
        contImg.appendChild(inputIm);
        contImg.appendChild(imagen);
        contImg.style.marginTop = "5px";
        contImg.style.marginBottom = "20px";
}

    formulario.appendChild(labelCont);
    formulario.appendChild(contImg);

// Agregar el formulario al documento
document.body.appendChild(formulario);

//Agrego la zona del select al formulario
let contenedorSel = document.createElement("div");
    let labelSel = document.createElement("label");
    labelSel.textContent = "Selecciona el horario de entrega";

    let hora = ["9.30h a 11.30h", "11.30 a 13.30h", "13.30h a 15.30h", "15.30h a 17.30h", "17.30h a 19.30h"];
    
    let selectHora = document.createElement("select");
        selectHora.id = "hora";
        selectHora.name = "hora";
        
    for (let i = 0; i<hora.length; i++){
        let opcion = document.createElement("option");
        opcion.value = hora[i];
        opcion.text = hora[i];
        
        selectHora.appendChild(opcion);
        selectHora.style.marginBottom="10px";     
        
    }
    contenedorSel.appendChild(selectHora);
    formulario.appendChild(labelSel);
    formulario.appendChild(contenedorSel);

// Agregar el formulario al documento
document.body.appendChild(formulario);
    
//Agrego la zona de textarea al formulario
    let contenedorTexto = document.createElement("div");
    let salto =document.createElement("br");
    let labelTexto = document.createElement("label");
    labelTexto.textContent = "Escribe el mensaje para la tarjeta";

    let textarea = document.createElement("textarea");
    textarea.name="textarea";
    textarea.id="textarea";

    contenedorTexto.appendChild(labelTexto);
    contenedorTexto.appendChild(salto);
    contenedorTexto.appendChild(textarea);
    formulario.appendChild(contenedorTexto);
}

window.onload=function(){
    accederForm();
    // Agrego algo de estilo a la página
    document.body.style.textAlign = "left";
    document.body.style.width = "30%";
    document.body.style.margin = "auto";
    document.body.style.backgroundColor = "#EEE6EE";
    
}

