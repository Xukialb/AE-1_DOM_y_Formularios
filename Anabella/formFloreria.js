
function accederForm() {     

    // Creo el formulario con el objeto createElement y le agrego un borde
    var formulario = document.createElement("form");
    var leyenda = document.createElement("legend");    
    leyenda.textContent="Formulario de pedido";
    leyenda.fontFamily="sans-serif";
    leyenda.style.fontSize="18px";
    leyenda.style.fontWeight="bold";
    formulario.style.border = "solid pink";
    formulario.style.paddingLeft="15px";    
    
    //Agrego la etiqueta de la leyenda al formulario
    formulario.appendChild(leyenda);
    
    
    /*Defino una función que crea un contenedor para cada label y su correspondiente imput, 
    por cada campo de entrada. Uso labelText para ingresar las diferentes etiquetas y los diferentes input 
    para completar luego, al pasar los parámetros*/
    function crearContenedor(labelText, inputId, inputName, inputType, inputTitle) {

        //Creo la variable contenedor, que crea un div en el html
        let contenedor = document.createElement("div");

        //Creo el nodo label que serán las etiquetas para cada input
        let label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.textContent = labelText;
        label.style.fontWeight="bold";

        //Creo el nodo input con sus correspondientes atributos
        let input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.name = inputName;
        input.required = true;
        input.title = inputTitle;

    //Agrego el nodo label y el nodo input al contenedor
        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.style.padding = "5px";
        contenedor.style.marginBottom="7px";

        //Con return, cada vez que llamo a la función y completo con los parámtros, me devuelve el contenedor
        return contenedor;
    }

    // LLamo a la función para añadir los parámetros para cada label y cada input del formulario
    formulario.appendChild(crearContenedor("Nombre:", "nombre", "nombre", "text", "En este espacio debes escribir tu nombre"));
    formulario.appendChild(crearContenedor("Apellidos:", "apellidos", "apellidos", "text", "En este espacio debes escribir tu/s apellido/s"));
    formulario.appendChild(crearContenedor("DNI/NIE:", "dni", "dni", "text", "En este espacio debes escribir tu número de DNI o NIE"));
    formulario.appendChild(crearContenedor("Dirección:", "dir", "dir", "text", "En este espacio debes escribir dirección"));
    formulario.appendChild(crearContenedor("Teléfono:", "tel", "tel", "text", "En este espacio debes escribir tu número de móvil"));

    // Creo un contenedor para los botones de radio
    let contenedorRadio1 = document.createElement("div");

    //Creo el nodo label con el texto que llevará dicho contenedor
    let labelRadio1 = document.createElement("label");    
    labelRadio1.textContent = "Selecciona el tipo de ramo";
    labelRadio1.style.fontWeight="bold";
    
    //Creo el array con las opciones de ramos
    let ramos = ["Bouquet", "Cascada", "Pomander", "Japonés"];

    //Creo el bucle for para recorrer el array su id, type, name y value. Con la etiqueta "required".    
        for (let i = 0; i < ramos.length; i++) {
            let inputRamos = document.createElement("input");
                inputRamos.type = "radio";
                inputRamos.id = "ramos" + (i + 1);
                inputRamos.name = "ramos";
                inputRamos.value = ramos[i];

        /*Creo las etiquetas para para cada tipo de ramo. Con settAttribute asigno uno a uno, las etiquetas
        que corresponden a cada checkbox*/
                let ramosLabel = document.createElement('label');
                ramosLabel.setAttribute("for", "ramos" + (i + 1));
                ramosLabel.textContent = ramos[i];

        //Agrego ramosLabel e inputRamos al contenedor
                contenedorRadio1.appendChild(ramosLabel);
                contenedorRadio1.appendChild(inputRamos);
                contenedorRadio1.style.marginTop = "5px";
                contenedorRadio1.style.marginBottom = "20px";
        }
    //Agrego al formulario el contenedor cn su correpondiente etiqueta
    formulario.appendChild(labelRadio1);
    formulario.appendChild(contenedorRadio1);
     
    //Creo el contenedor para el checkbox
    let contenedorCheck = document.createElement("div");
    //Creo la etiqueta del contenedor
    let labelCheck = document.createElement("label");
    labelCheck.textContent = "Selecciona las flores para el ramo";
    labelCheck.style.fontWeight="bold";

    //Defino el array con las opciones para el tipo de flores
    let flores = ["jazmín", "lirio", "orquídea", "rosa"];

    /*Defino el bucle que asigna a cada elemento del array, su id, type, name y value. Con la etiqueta 
    "required", obligamos a completar el campo*/
        for (let i = 0; i < flores.length; i++) {
            let inputFlores = document.createElement("input");
            inputFlores.type = "checkbox";
            inputFlores.name = "flores";
            inputFlores.id = "flores" + i;
            inputFlores.value = flores[i];
            inputFlores.required = true;
    
            /*Creo las etiquetas para para cada tipo de ramo. Con settAttribute asigno uno a uno, las 
            etiquetas que corresponden a cada checkbox*/
            var labelCheckbox = document.createElement('label');
            labelCheckbox.setAttribute("for", "flores" + i);
            labelCheckbox.textContent = flores[i];
            labelCheckbox.style.padding="5px";
            
            //Agrego inputFlores y labelCheckbox al contenedor
            contenedorCheck.appendChild(inputFlores);
            contenedorCheck.appendChild(labelCheckbox);
            contenedorCheck.style.marginTop = "5px";
            contenedorCheck.style.marginBottom="20px";
        }
        //Añado al formulario el contenedor con su correspondiente etiqueta
        formulario.appendChild(labelCheck);
        formulario.appendChild(contenedorCheck);   

    // Agrego opciones de radio para que el cliente pueda seleccionar la forma de pago.
    //Ceo el contenedor para el radioButton con su correpondiente etiqueta
    let contenedorRadio2 = document.createElement("div");
    let labelRadio2 = document.createElement("label");
    labelRadio2.textContent = "Selecciona la forma de pago";
    labelRadio2.style.fontWeight="bold";

    let pago = ["Transferencia", "Tarjeta", "Efectivo", "Bizum"];

    //Defino un bucle for para asignar cada atributo a los diferentes elementos del array
        for (let i = 0; i < pago.length; i++) {
            let inputPago = document.createElement("input");
                inputPago.type = "radio";
                inputPago.id = "pago" + (i + 1);
                inputPago.name = "pago";
                inputPago.value = pago[i];

        //Creo las etiquetas para cada una de las opciones de radio, utilizando setAttribute
                let pagoLabel = document.createElement("label");
                pagoLabel.setAttribute("for", "pago" + ( i+ 1));
                pagoLabel.textContent = pago[i];

        //Agrego las opciones de radio con sus etiquetas al contenedor
                contenedorRadio2.appendChild(pagoLabel);
                contenedorRadio2.appendChild(inputPago);
                contenedorRadio2.style.marginTop = "5px";
                contenedorRadio2.style.marginBottom = "20px";
        }
    //Añado al formulario el contenedor con su correspondiente etiqueta
    formulario.appendChild(labelRadio2);
    formulario.appendChild(contenedorRadio2);

    //Creo opciones radio con imágenes para seleccionar el tipo de tarjeta
    //Defino el contenedor y su etiqueta correspondiente
    let contImg = document.createElement("div");
    let labelCont = document.createElement("label");
    labelCont.textContent = "Selecciona la tarjeta para la ocasión"; 
    labelCont.style.fontWeight="bold";

    // Creo el array de imágenes
    let imagenes = [{ id: "opIm1", value: "1", imageSrc: "imagenes/i1.jpg" }, { id: "opIm2", value: "2", 
    imageSrc: "imagenes/tnegra.jpg" },{ id: "opIm3", value: "3", imageSrc: "imagenes/cumple.jpg"},
    { id: "opIm3", value: "4", imageSrc: "imagenes/beige.jpg"}];

    //Creo el bucle for para recorrer el array su id, type, name y value.  
        for (let i = 0; i < imagenes.length; i++) {
            let opcion = imagenes[i];

            let inputIm = document.createElement("input");
                inputIm.type = "radio";
                inputIm.id = opcion.id;
                inputIm.name = "opcion"; 
                inputIm.value = opcion.value;

            //Asigno a cada imagen una etiqueta que obtengo del atributo value
            let opImLabel = document.createElement('label');
                opImLabel.setAttribute("for", opcion.id);
                opImLabel.textContent = opcion.value;
                opImLabel.style.paddingLeft="7px";
                
            //Creo el elemento imagen para añadir estilo a las mismas
            let imagen = document.createElement("img");
                imagen.src = opcion.imageSrc;
                imagen.style.width="60px";
                imagen.style.height="40px";

            //Por último, agrego opImlabel, inputIm e imagen al contenedor
            contImg.appendChild(opImLabel);
            contImg.appendChild(inputIm);
            contImg.appendChild(imagen);
            contImg.style.marginTop = "5px";
            contImg.style.marginBottom = "20px";
        }

    //Añado el contenedor con su correspondiente etiqueta al formulario
    formulario.appendChild(labelCont);
    formulario.appendChild(contImg);

    //Agrego la zona del select al formulario, para ello creo un contenedor con su etiqueta
    let contenedorSel = document.createElement("div");
    let labelSel = document.createElement("label");
    labelSel.textContent = "Selecciona el horario de entrega";
    labelSel.style.fontWeight="bold";

    //Defino el array que contendrá como elelemntos, las opciones para el horraio de entrega
    let hora = ["9.30h a 11.30h", "11.30 a 13.30h", "13.30h a 15.30h", "15.30h a 17.30h", "17.30h a 19.30h"];
    
    //Asigno los atributos para el select
    let selectHora = document.createElement("select");
        selectHora.id = "hora";
           
    //Defino un bucle for para recorrer los elementos del array 
        for (let i = 0; i<hora.length; i++){
            let opcion = document.createElement("option");
                opcion.value = hora[i];
                opcion.text = hora[i];
                
                selectHora.appendChild(opcion);
                selectHora.style.marginBottom="10px"; 
                
                contenedorSel.appendChild(selectHora);
    }
        /*Añado al contenedor el elemento selectHora y luego, agrego al formulario el contenedor 
        con su correspondiente etiqueta*/
       
    formulario.appendChild(labelSel);
    formulario.appendChild(contenedorSel);

    //Creo la zona de textarea al formulario, con su correspondiente contenedor y etiqueta
    let contenedorTexto = document.createElement("div");
    let salto =document.createElement("br");
    let labelTexto = document.createElement("label");
    labelTexto.textContent = "Escribe el mensaje que contendrá la tarjeta";
    labelTexto.style.fontWeight="bold";

    let textarea = document.createElement("textarea");    
    textarea.id="textarea";
    textarea.style.width="90%"

    contenedorTexto.appendChild(labelTexto);
    contenedorTexto.appendChild(salto);
    contenedorTexto.appendChild(textarea);
    formulario.appendChild(contenedorTexto);
    
    //Agrego el botón de enviar la solicitud
    let contenedorSend = document.createElement("div");
    let buttonSend = document.createElement("button");
    buttonSend.textContent="Enviar";
    buttonSend.style.backgroundColor="#D09AE3";
    buttonSend.style.padding="5px";
    buttonSend.style.fontWeight="bold";

    //Añado el botón al contenedor y luego este al formulario
    contenedorSend.appendChild(buttonSend);
    formulario.appendChild(contenedorSend);


    // Agrego el formulario al documento
    document.body.appendChild(formulario);
    
}

window.onload=function(){
    //Llamo a la función que muestra el formulario cuando cargue la página 
    accederForm();
    // Agrego algo de estilo a la página
    document.body.style.textAlign = "left";
    document.body.style.fontFamily="sans-serif";
    document.body.style.fontSize="14px";
    document.body.style.width = "35%";
    document.body.style.margin = "auto";
    document.body.style.backgroundColor = "#EEE6EE";
    
}

