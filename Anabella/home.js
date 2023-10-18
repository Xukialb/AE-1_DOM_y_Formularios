
        function cargar(){

            //Agrego algo de estilo a la página
            document.body.style.textAlign="center";
            document.body.style.width="50%";
            document.body.style.margin="auto";
            document.body.style.backgroundColor="#EEE6EE";


            //Agrego dos botones que simulas menú de navegación
            var tabla = document.createElement("table");
            var fila = tabla.insertRow(0);
            var celda1 = fila.insertCell(0);
            celda1.textContent="Comprar arreglo";

            var celda2 = fila.insertCell(1);
            celda2.textContent="Dónde encontrarnos"; 
            
            //Agrego la tabla al body           
            document.body.appendChild(tabla);

            //Le doy estilo a la tabla
            tabla.style.textAlign="center";
            tabla.style.width="100%";
            celda1.style.backgroundColor="#33C2A4";

            //Agrego el enlace al formulario
            celda1.addEventListener("click", function accederForm(){
                window.location.href= "formulario1.html";
            })

            celda2.style.backgroundColor="#33C2A4";
            celda1.style.fontPalette="white"
            celda1.style.textAlign="center";
            celda2.style.textAlign="center";            
            celda1.style.padding="5px";
            celda2.style.padding="5px";

            //Coloco un aimagen en la página de inicio
            var e1 = document.createElement("a");
            var imagen1 = document.createElement("img");
            imagen1.src = "floreria.png";
            e1.appendChild(imagen1);
            imagen1.style.padding="10px";
            imagen1.style.width="75%";
            document.body.appendChild(e1);

            //Creo un evento para enlazar "Participar en las Olimpíadas con un formulario"
            
            
        }

