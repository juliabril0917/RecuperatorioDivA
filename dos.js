/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let tipo;
  let precio;
  let pesoKg;
  let seguir = "si";
  let acumuladorDePeso = 0;
  let precioMascarosLiquidos;
  let masCarosLiquidosMarca;
  let flagLiquidos = 0;
  let masBaratoSolidosMarca;
  let precioMasBaratoSolidos;
  let flagSolidos = 0;

  do {
    
   tipo = prompt("ingrese el tipo de producto solido o liquido");
   while ( tipo != "liquido" && tipo != "solido"){
     tipo = prompt("Producto incorrecto ingrese liquido o solido");
   }

   precio = parseFloat(prompt("Ingrese el precio del producto"));
   while ( precio <0 ||  isNaN(precio)){

     precio = parseFloat(prompt("incorrecto. Ingrese el precio del producto"))
   }
   pesoKg = parseFloat(prompt("ingrese el peso en kg"));
   while (pesoKg <=0 || isNaN(pesoKg)){
     pesokg = prompt("incorrecto ingrese un peso");
   }
   marca= prompt("ingrese la marca del producto");
  while (marca == "" || !isNaN(marca)){

   marca = prompt("invalido. ingrese marca")
  }

   acumuladorDePeso += pesoKg; 

 if (tipo == "solido") {
     
       if (flagSolidos == 0 || precio < precioMasBaratoSolidos ) {
         precioMasBaratoSolidos = precio;
         flagSolidos = 1;
         masBaratoSolidosMarca = marca;
       }
}        
 else {
       if (flagLiquidos == 0 || precio > precioMascarosLiquidos) {
         precioMascarosLiquidos = precio;
         flagLiquidos = 1;
         masCarosLiquidosMarca = marca;
       }
   }

   
 seguir = prompt("¿Desea ingresar otro producto?").toLowerCase();
} while (seguir == "si");

 console.log("A) El peso total es de " + acumuladorDePeso + "kg");

 if (flagLiquidos == 0){
   console.log("B-  No se ingresaron liquidos")
 }
 else {

 console.log("B) La marca de el producto liquido mas cara es de " + masCarosLiquidosMarca + " y cuesta $" + precioMascarosLiquidos);
}
if (flagSolidos == 0){
console.log("C- No se ingresaron solidos");

}
else {

 console.log("C- La marca de el producto solido mas barato es de " + masBaratoSolidosMarca + " y su precio es de $" + precioMasBaratoSolidos );
}

}
