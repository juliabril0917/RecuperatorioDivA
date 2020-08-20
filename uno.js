/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let pesoKg; 
	let sexo;
	let edad;
	let contadorSexoFem = 0;
	let contadorSexoMasc = 0;
	let acumuladorEdad = 0;
	let promedioEdad;
	let hombreMasPesado;
	let nombreHombreMasPesado;
	
	


	for (i= 0; i <5; i++ ) {

		nombre = prompt("ingrese su nombre");
		while (nombre == "" || !(isNaN(nombre))){
			nombre = prompt("Nombre incorrecto. Ingrese su nombre");
		}

		edad = parseInt(prompt("Ingrese su edad"));
		while ( edad <= 0 || edad >= 100 || isNaN(edad)) {
			edad = prompt("Ingrese una edad de 0 a 100");
		}
		sexo = prompt("Ingrese su genero f para femenino o m para masculido");
		while (!(sexo == 'm' || sexo == 'f'))
		{
			sexo = prompt("error ingrese f para femenino y m para masculino");
		}

		pesoKg = parseFloat(prompt("Ingrese su peso en kg"));
		while (pesoKg <=0 || isNaN(pesoKg)){
			pesoKg = parseFloat(prompt("Invalido. Ingrese peso"));
		}

		


		acumuladorEdad += edad;

		if(sexo == 'm') {
			
				
				if(contadorSexoMasc == 0 || pesoKg > hombreMasPesado){
					hombreMasPesado = pesoKg;
					nombreHombreMasPesado = nombre;
					
				}
				contadorSexoMasc++
				}
		else {

			contadorSexoFem++
			}		

		acumuladorEdad++
	
	}

	promedioEdad = acumuladorEdad / 5;



	if (!(contadorSexoFem == 0)) {

		console.log("A- La cantidad de mujeres es de " + contadorSexoFem)
		
	
	} else {
		console.log("A. No hay mujeres.");
	 
	}

	
	console.log ("B- El promedio de todas las edades es de " + promedioEdad );

	if (!(contadorSexoMasc == 0)) {
		console.log("C. El hombre mas pesado es " + nombreHombreMasPesado + "y pesa "+ hombreMasPesado + "kg" );
		
	} else {
		console.log  ("C. No hay hombres.");
	 
	}
}
