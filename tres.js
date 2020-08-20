/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidadDePersonas;
	let lugarMasElegido;
	let contadorBariloche= 0;
	let contadorCataratas =0 ;
	let contadorSalta = 0;
	let sexoTitularMasPasajeros;
	let masPasajeros;
	let contadorInvierno = 0;
	let acumuladorInvierno = 0;
	let PromedioInvierno;
	let flag = 0;
	let seguir = "si"; 

	do {
		sexoTitular = prompt("Ingrese el sexo del titular con f o m");
		while (!(sexoTitular == 'm' || sexoTitular == 'f')) {
			sexoTitular = prompt("Inválido. Ingrese el sexo de el titular con f o m");
		}

		lugar = prompt('Ingrese destino: “bariloche”, “cataratas” o “salta”');
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt('Inválido. Ingrese destino: “bariloche”, “cataratas” o “salta”');
		}

		temporada = prompt('Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”');
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt('Inválido. Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”');
		}

	cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de acompañantes"));
		while (cantidadDePersonas < 0 || isNaN(cantidadDePersonas)) {
			cantidadAcompañantes = parseInt(prompt("Inválido. Ingrese la cantidad de acompañantes"));}


			if (lugar == "bariloche"){
				contadorBariloche++

			}

			else if (lugar == "cataratas"){

				contadorCataratas++
			}
			else {
				contadorSalta++
			}

			if(flag == 0 || cantidadDePersonas > masPasajeros){
				masPasajeros = cantidadDePersonas;
				sexoTitularMasPasajeros = sexoTitular;
				flag = 1; 
			}

			if(temporada == "invierno"){
				contadorInvierno++
				acumuladorInvierno += cantidadDePersonas;
			}


	


        
		seguir = prompt("Quiere ingresar otro viaje");
	}while (seguir == "si")
	

	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarMasElegido = "Bariloche";
	}

	else if (contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
		lugarMasElegido = "Cataratas";
	}
	else {
		lugarMasElegido= "Salta";
	}

	if (!(contadorInvierno == 0)){
		PromedioInvierno = acumuladorInvierno / contadorInvierno;
	}

	console.log("A- El lugar mas elegido es: " + lugarMasElegido);

	console.log("B- El sexo de el titular que lleva mas pasajeros es: "+ sexoTitularMasPasajeros);
	if ( contadorInvierno == 0) {
		console.log("c- Nadie viaja en invierno"); }

		else {
			 
			console.log("C- El promedio de las personas que viajan en invierno es de " + PromedioInvierno)
		}

}
