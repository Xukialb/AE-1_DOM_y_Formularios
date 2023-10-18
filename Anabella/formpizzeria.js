function pedirPizza(){
    //Agrego algo de estilo a la página
    document.body.style.textAlign="center";
    document.body.style.width="50%";
    document.body.style.margin="auto";
    document.body.style.backgroundColor="#F6BB69";

    ////Crear el objeto formulario
		let formulario=document.createElement("form");
 
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
            contenedor.style.marginBottom="10px";
    
            return contenedor;
        }
    
        // Agregar campos de entrada al formulario
        formulario.appendChild(crearContenedor("Nombre:", "nombre", "nombre", "text", "En este espacio debes escribir tu nombre"));
        formulario.appendChild(crearContenedor("Apellidos:", "apellidos", "apellidos", "text", "En este espacio debes escribir tu/s apellido/s"));
        formulario.appendChild(crearContenedor("DNI/NIE:", "dni", "dni", "text", "En este espacio debes escribir tu número de DNI o NIE"));
        formulario.appendChild(crearContenedor("Teléfono:", "tel", "tel", "text", "En este espacio debes escribir tu número de móvil"));
        formulario.appendChild(crearContenedor("email:", "email", "email", "text", "En este espacio debes escribir tu dirección de correo electrónico"));
	}
 
    