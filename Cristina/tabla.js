//FUNCIONES 

function validarForm() {


    let nombre=document.getElementById("nombre"); 
    let telefono=document.getElementById("telefono"); 
    let email =document.getElementById("email"); 
    let direccion =document.getElementById("direccion"); 
 
    if( nombre.value.trim() === ""){
          alert("El nombre es obligatorio");
          return false;
    }
    if(telefono.value.trim() === "" ){
         alert("El telefono es obligatorio");
         return false;
    }
    if(email.value.trim() === "" ){
          alert("El email es obligatorio")
          return false;
     }       
    if( direccion.value.trim() === ""){
          alert("La dirección es obligatoria")
          return false;
     }
     var tamano = document.getElementsByName("tamano");
     var selectTamano  = false;
     for (var i = 0; i < tamano.length; i++) {
         if (tamano[i].checked) {
          selectTamano = true;
             break;
         }
     }
       
      if(!selectTamano){ 
         alert("Selecciona el tamaño"); 
          return false; 
          } 
 
     let ingredientes=document.getElementsByName("ingredientes"); 
     let selectIngred= false; 
        for(let i=0; i < ingredientes.length; i++){ 
         if(ingredientes[i].checked){ 
            selectIngred =true; 
             break; 
          }
        } 
         if(!selectIngred){ 
           alert("Selecciona el ingrediente"); 
             return false;
        }  
     
      totalPago();
      return true;
     }
 
 
     function totalPago(){
      let precioPizza= 0; 
 
      let tamano = document.getElementsByName("tamano");
      for (let i = 0; i < tamano.length; i++) {
       if (tamano[i].checked) {
           if (tamano[i].value === "pequena") {
               precioPizza = 5;
         } 
           else if (tamano[i].value === "mediana") {
               precioPizza = 10;
         } 
           else if (tamano[i].value === "grande") {
               precioPizza = 15;
         }
     }
 }
 
    let ingredientes = document.getElementsByName ("ingredientes");
     let precioIng =0;
     for(let i=0; i<ingredientes.length; i++){
          if(ingredientes[i].checked){
              precioIng += 1;
         }
      }
  let totalCompra =precioPizza +precioIng;
   alert("Pagar : " + totalCompra);
     }
 
 window.onload = function() { 
     //  document.body.style.align ="center";
       pagar.onclick= validarForm; 
 
  } 