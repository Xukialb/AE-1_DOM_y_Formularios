
document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("contenedor");

//Creamos el formulario
var formulario = document.createElement("form");
contenedor.appendChild(formulario);

//Declaramos funciones
//Función para añadir elementos al formulario
function addform(i) {
    formulario.appendChild(i);
}

//Función para meter un enter entre campo y campo
function enter() {
    var enter = document.createElement("br");
    formulario.appendChild(enter);

}       
         var radiopizza=false;
         var totalcuenta=0;
        //Extraemos cada botón en una variable para posteriormente asignar un valor
        var bacon = document.getElementById("Bacon");
        var queso = document.getElementById("Queso");
        var tomate = document.getElementById("Tomate");
        var oregano = document.getElementById("Oregano");
        var pequena = document.getElementById("pequena");
        var mediana = document.getElementById("mediana");
        var grande = document.getElementById("grande");

            if (bacon){
                bacon.onclick= function(){
                                if (bacon.checked){
                                    totalcuenta += 1;
                                    console.log(totalcuenta);
                                }
                                else{
                                    totalcuenta -= 1;
                                    console.log(totalcuenta);
                                }
                }
                
            }
            if (queso){
                queso.onclick= function(){
                                if (queso.checked){
                                    totalcuenta += 1;
                                    console.log(totalcuenta);
                                }
                                else{
                                    totalcuenta -= 1;
                                    console.log(totalcuenta);
                                }
                }
                
            }
            if (tomate){
                tomate.onclick= function(){
                                if (tomate.checked){
                                    totalcuenta += 1;
                                    console.log(totalcuenta);
                                }
                                else{
                                    totalcuenta -= 1;
                                    console.log(totalcuenta);
                                }
                }
                
            }
            if (oregano){
                oregano.onclick= function(){
                                if (oregano.checked){
                                    totalcuenta += 1;
                                    console.log(totalcuenta);
                                }
                                else{
                                    totalcuenta -= 1;
                                    console.log(totalcuenta);
                                }
                }
               
            }
            var precioanterior=0;
            if (pequena){
                pequena.onclick= function(){
                                if (pequena.checked){
                                    totalcuenta = totalcuenta - precioanterior + 5;
                                    console.log(totalcuenta);
                                    precioanterior=5;
                                    radiopizza=true;
                                }
                                
                }
                    
                    
            }
            if (mediana){
                mediana.onclick= function(){
                                if (mediana.checked){
                                    totalcuenta = totalcuenta - precioanterior + 10;
                                    console.log(totalcuenta);
                                    precioanterior=10;
                                    radiopizza=true;
                                }
                                
                }
                    
                    
            }
            if (grande){
                grande.onclick= function(){
                                if (grande.checked){
                                    totalcuenta = totalcuenta - precioanterior + 15;
                                    console.log(totalcuenta);
                                    precioanterior=15;
                                    radiopizza=true;
                                }
                                
                }
                    
                    
            }

            
            var naame = document.getElementById("nombre")
            var direccion = document.getElementById("direccion")
            var telefono = document.getElementById("telefono")
            var email = document.getElementById("email")
            // Agregar validación al campo de email
            
            naame.addEventListener("blur", function() {
            if (naame.value.trim() === "") {
            alert("El campo 'Nombre' no puede estar vacío.");
            }})

            direccion.addEventListener("blur", function() {
                if (direccion.value.trim() === "") {
                alert("El campo 'Direccion' no puede estar vacío.");
            }})

            telefono.addEventListener("blur", function() {
                    if (telefono.value.trim() === "") {
                    alert("El campo 'Telefono' no puede estar vacío.");
                    }})

            email.addEventListener("blur", function() {
                        if (email.value.trim() === "") {
                        alert("El campo 'Email' no puede estar vacío.");
                    }})
                

enter();
enter();

enter();
enter();
/*
var totalpedido = document.createElement("button");
var textopedido = document.createTextNode("Total pedido");

totalpedido.appendChild(textopedido);
addform(totalpedido);
*/
totalpedido.onclick = function(){
                        

                        if(!radiopizza){
                            alert("Selecciona un tamaño de pizza"); 
                        }
                        pregunta = document.getElementsByName("ingredientes");
                        var seleccionado = false;
                        for(var i=0; i<pregunta.length; i++) {
                            if(pregunta[i].checked) {
                                seleccionado = true;
                                break;//en cuanto alguna pregunta este seleccionada
                                    //paramos la ejecución
                            }
                        }
            
                        if(!seleccionado) {
                            alert('[ERROR] Debe seleccionar almenos un ingrediente');
                            return false;
                            
                        }
                        alert('TOTAL PEDIDO ES ' + totalcuenta);
                        
                        return false;
                    }





});


